import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
  linkedSignal,
  OnDestroy,
  output,
  signal,
  TrackByFunction,
} from '@angular/core';
import {
  fromEvent,
  Observable,
  Subject,
} from 'rxjs';
import {
  filter,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';
import { toObservable } from '@angular/core/rxjs-interop';
import { TableConfig } from './models/table-config.interface';
import {
  KeyValue,
  NgComponentOutlet,
  NgTemplateOutlet,
  SlicePipe,
} from '@angular/common';
import { TableColumn } from './models/table-column.interface';
import {
  calculate,
  chunk,
  search,
  sortOnMultipleKeys,
} from './utilities/utilities';
import { TableRow } from './models/table-row.interface';
import { GtOrder, GtSortOrder } from './models/table-sort.interface';
import {
  GtPageChangeEvent,
  GtRowSelectEvent,
  GtRowClickEvent,
  GtRowActiveEvent,
  GtSortEvent,
} from './models/table-events.interface';
import { CapitalCasePipe } from './pipes/capital-case.pipe';
import { SortClassPipe } from './pipes/sort-class.pipe';
import { DashCasePipe } from './pipes/dash-case.pipe';
import { DynamicPipe } from './pipes/dynamic.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { RowSelectionPipe } from './pipes/row-selection.pipe';
import { GtPaginationInfo } from './models/gt-pagination';
import { TableInfo } from './models/table-info.interface';
import { TableMeta } from './models/table-meta.interface';

@Component({
  selector: 'angular-generic-table',
  templateUrl: './core.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CapitalCasePipe,
    SortClassPipe,
    DashCasePipe,
    RowSelectionPipe,
    NgComponentOutlet,
    NgTemplateOutlet,
    SlicePipe,
    DynamicPipe,
    HighlightPipe,
  ],
})
export class CoreComponent implements OnDestroy {
  private _destroyRef = inject(DestroyRef);
  private _unsubscribe$ = new Subject<void>();

  // ─── Inputs ───

  readonly navigationKeys = input([
    'ArrowDown',
    'ArrowUp',
    'ArrowLeft',
    'ArrowRight',
    'Home',
    'End',
  ]);
  readonly selectKeys = input(['Enter', ' ']);
  readonly config = input<TableConfig<any>>({});
  readonly data = input<Array<TableRow>>([]);
  readonly searchTerm = input<string | null>(null, { alias: 'search' });
  readonly loading = input(false);
  readonly sortOrderInput = input<GtSortOrder<any>>([], { alias: 'sortOrder' });
  readonly paginationIndexInput = input(0, { alias: 'paginationIndex' });
  readonly pagingInfo = input<GtPaginationInfo | null>(null);
  readonly selection = input<any>({});
  readonly rowIdKey = input<string | undefined>(undefined);
  readonly generateRowId = input(true);
  readonly trackRowByFnInput = input<TrackByFunction<TableRow> | undefined>(
    undefined,
    { alias: 'trackRowByFn' }
  );
  readonly isRowSelectedFn = input<
    ((row: TableRow | any, selection?: any) => boolean) | undefined
  >(undefined);
  readonly customClassesInput = input<
    Partial<{ selectedRow: string; activeRow: string }>
  >({}, { alias: 'customClasses' });

  // ─── Outputs ───

  readonly rowClick = output<GtRowClickEvent>();
  readonly rowSelect = output<GtRowSelectEvent>();
  readonly sortOrderChange = output<GtSortOrder<TableRow>>();
  readonly rowActiveOutput = output<GtRowActiveEvent>({ alias: 'rowActive' });
  readonly columnSort = output<GtSortEvent>();
  readonly pageChange = output<GtPageChangeEvent>();

  // ─── Linked Signals (two-way state) ───

  protected sortOrder = linkedSignal(() => this.sortOrderInput());
  protected currentPaginationIndex = linkedSignal(() =>
    this.paginationIndexInput()
  );

  // ─── Computed Signals ───

  protected customClasses = computed(() => ({
    selectedRow: 'gt-selected',
    activeRow: 'gt-active',
    ...this.customClassesInput(),
  }));

  trackRowByFn: TrackByFunction<TableRow> = (
    index: number,
    row: TableRow
  ) => {
    const customFn = this.trackRowByFnInput();
    if (customFn) return customFn(index, row);
    const idKey = this.rowIdKey();
    return idKey ? row[idKey] : row?._id;
  };

  /** Data with mapTo expansions and row IDs applied */
  private expandedData = computed(() => {
    let data = [...this.data()];
    const config = this.config();

    // mapTo expansion
    if (
      (config.columns &&
        !!Object.values(config.columns).find((column) => !!column.mapTo)) ||
      (config.rows &&
        !!Object.values(config.rows).find((column) => !!column.mapTo))
    ) {
      const newData: TableRow[] = [];
      for (let i = 0; i < data.length; i++) {
        const row = data[i];
        const newKeys = Object.entries(config.columns || config.rows || [])
          .filter(([key, value]) => !!value.mapTo)
          .reduce(
            (previousValue, [key, value]) => ({
              ...previousValue,
              [key]: this.nestedValue(
                row,
                value.mapTo!.path,
                value.mapTo?.missingValue
              ),
            }),
            {}
          );
        newData[i] = { ...row, ...newKeys };
      }
      data = newData;
    }

    // Generate row IDs
    if (this.generateRowId() && !this.rowIdKey() && data.length > 0) {
      const dataWithId = [];
      for (let i = 0; i < data.length; i++) {
        dataWithId[i] = { ...data[i], _id: i };
      }
      data = dataWithId;
    }

    return data;
  });

  /** Filtered data (search applied, no sort) */
  private searchedData = computed(() => {
    const data = [...this.expandedData()];
    const searchBy = this.searchTerm();
    const config = this.config();
    const lazyLoaded = this.pagingInfo() !== null;

    return searchBy && !lazyLoaded
      ? search(searchBy, false, data, config)
      : data;
  });

  /** Sorted (and already searched) data */
  private processedData = computed(() => {
    const data = this.searchedData();
    const sortBy = this.sortOrder();
    const config = this.config();

    if (!sortBy?.length || config?.disableTableSort) {
      return data;
    }
    return [...data].sort(sortOnMultipleKeys(sortBy));
  });

  /** Table meta: chunked data + config + pagination info */
  protected table = computed<TableMeta>(() => {
    const sorted = this.processedData();
    const config = this.config();
    const pi = this.pagingInfo();

    if (
      pi !== null &&
      pi.pageCurrent !== null &&
      pi.numberOfRecords !== null &&
      pi.pageSize !== null
    ) {
      return {
        data: [sorted],
        config,
        info: {
          lazyLoaded: true,
          numberOfRecords: pi.numberOfRecords,
          pageSize: pi.pageSize,
          pageTotal:
            pi.pageTotal ?? Math.ceil(pi.numberOfRecords / pi.pageSize),
        },
      };
    }

    if (!config.pagination || config.pagination.length === 0) {
      return {
        data: [sorted],
        config,
        info: { numberOfRecords: sorted.length, pageTotal: 1 },
      };
    }

    return {
      data: chunk(sorted, +(config.pagination.length || 0)),
      config,
      info: {
        numberOfRecords: sorted.length,
        pageSize: +(config.pagination.length || 0),
        pageTotal: Math.ceil(
          sorted.length / +(config.pagination.length || 0)
        ),
      },
    };
  });

  /** Current table info */
  readonly tableInfoSignal = computed<TableInfo>(() => this.table().info);

  /** Get tableInfo synchronously */
  get tableInfo(): TableInfo | undefined {
    return this.tableInfoSignal();
  }

  /** Calculations for footer */
  protected calculations = computed(() =>
    calculate(this.processedData(), this.config())
  );

  /** Bounded pagination index (clamped to valid range) */
  readonly boundedPaginationIndex = computed(() => {
    const page = this.currentPaginationIndex();
    const info = this.tableInfoSignal();
    const pageSize =
      info.pageSize ?? this.config()?.pagination?.length ?? info.numberOfRecords;
    const lastPage = Math.ceil(info.numberOfRecords / pageSize) - 1;
    return +page < 0 ? 0 : +page > lastPage ? lastPage : +page;
  });

  /** Number of visible columns */
  protected colspan = computed(() => {
    const config = this.config();
    if (config.columns) {
      return Object.values(config.columns || config.rows || {}).filter(
        (value) => value.hidden !== true
      ).length;
    }
    return this.processedData().length + 1;
  });

  /** Number of footer columns */
  protected footerColspan = computed(() => {
    const config = this.config();
    let colspan = 0;
    Object.values(config?.footer?.columns || {}).forEach((calculations) => {
      if (
        Object.values(calculations).filter((value) => value !== false).length >=
        0
      ) {
        colspan += 1;
      }
    });
    return colspan;
  });

  // ─── Row Active State ───

  protected rowActiveState = signal<GtRowActiveEvent>({
    row: null,
    index: null,
  });
  activeRowIndex: number | null = null;

  // Emit rowActive output and track index
  private _rowActiveEffect = effect(() => {
    const event = this.rowActiveState();
    this.activeRowIndex = event.index;
    this.rowActiveOutput.emit(event);
  });


  // ─── Public Observable Getters (backward compat, lazy-cached) ───

  private _sortOrder$?: Observable<GtSortOrder>;
  get sortOrder$(): Observable<GtSortOrder> {
    return (this._sortOrder$ ??= toObservable(this.sortOrder));
  }

  private _loading$?: Observable<boolean>;
  get loading$(): Observable<boolean> {
    return (this._loading$ ??= toObservable(this.loading));
  }

  private _searchBy$?: Observable<string | null>;
  get searchBy$(): Observable<string | null> {
    return (this._searchBy$ ??= toObservable(this.searchTerm));
  }

  private _tableConfig$?: Observable<TableConfig>;
  get tableConfig$(): Observable<TableConfig> {
    return (this._tableConfig$ ??= toObservable(this.config));
  }

  private _data$?: Observable<Array<TableRow>>;
  get data$(): Observable<Array<TableRow>> {
    return (this._data$ ??= toObservable(this.processedData));
  }

  private _table$?: Observable<TableMeta>;
  get table$(): Observable<TableMeta> {
    return (this._table$ ??= toObservable(this.table));
  }

  private _tableInfo$?: Observable<TableInfo>;
  get tableInfo$(): Observable<TableInfo> {
    return (this._tableInfo$ ??= toObservable(this.tableInfoSignal));
  }

  private _currentPaginationIndex$?: Observable<number>;
  get currentPaginationIndex$(): Observable<number> {
    return (this._currentPaginationIndex$ ??= toObservable(this.boundedPaginationIndex));
  }

  private _calculations$?: Observable<ReturnType<typeof calculate>>;
  get calculations$(): Observable<ReturnType<typeof calculate>> {
    return (this._calculations$ ??= toObservable(this.calculations));
  }

  private _rowActive$?: Observable<GtRowActiveEvent>;
  get rowActive$(): Observable<GtRowActiveEvent> {
    return (this._rowActive$ ??= toObservable(this.rowActiveState));
  }

  private _colspan$?: Observable<number>;
  get colspan$(): Observable<number> {
    return (this._colspan$ ??= toObservable(this.colspan));
  }

  // ─── Pagination ───

  get paginationIndex(): number {
    return this.currentPaginationIndex();
  }
  set paginationIndex(value: number) {
    this.currentPaginationIndex.set(value);
    this.pageChange.emit({ index: this.boundedPaginationIndex() });
  }

  // ─── Methods ───

  _rowClick(row: TableRow, index: number, event: MouseEvent): void {
    this.rowClick.emit({ row, index, event });
  }

  _rowSelect(row: TableRow, index: number, event: KeyboardEvent): void {
    this.rowSelect.emit({ row, index, event });
  }

  activateRow(id: string, event?: MouseEvent | KeyboardEvent): void;
  activateRow(index: number, event?: MouseEvent | KeyboardEvent): void;
  activateRow(none: null, event?: MouseEvent | KeyboardEvent): void;
  activateRow(
    arg: string | number | null,
    event?: MouseEvent | KeyboardEvent
  ): void {
    if (typeof arg === 'number') {
      const tableData = this.table();
      const pageData = tableData.data[this.paginationIndex];
      if (pageData && pageData[arg]) {
        this._activateRow(pageData[arg], arg, event);
      }
    } else if (typeof arg === 'string') {
      // TODO: implement hover by id
    } else {
      this._activateRow(null, null);
    }
  }

  protected _activateRow(
    row: TableRow | null,
    index: number | null,
    event?: MouseEvent | KeyboardEvent
  ): void {
    const current = this.rowActiveState();
    const idKey = this.rowIdKey();

    // distinctUntilChanged equivalent
    if (current.row && row) {
      if (idKey && current.row[idKey] === row[idKey]) return;
      if (
        !idKey &&
        this.generateRowId() &&
        current.row._id === row._id
      )
        return;
    }
    if (!current.row && !row && current.index === index) return;

    this.rowActiveState.set({ row, index, event });
  }

  /** sortByKey - Sort by key in table row */
  sortByKey(key: keyof TableRow, $event?: MouseEvent): void {
    const shiftKey = $event?.shiftKey === true;
    const currentOrder = this.sortOrder();
    let sortOrderVal: GtOrder = 'asc';
    let newOrder: GtSortOrder = [];

    if (shiftKey) {
      const existingSortPosition = currentOrder.findIndex(
        (value) => value.key === key
      );
      if (existingSortPosition === -1) {
        newOrder = [...currentOrder, { key, order: 'asc' }];
      } else {
        sortOrderVal = currentOrder[existingSortPosition].order;
        const newSortOrder = sortOrderVal === 'asc' ? 'desc' : 'asc';
        newOrder = [...currentOrder];
        newOrder[existingSortPosition] = {
          ...newOrder[existingSortPosition],
          order: newSortOrder,
        };
      }
    } else {
      if (currentOrder.length > 0) {
        const existingSortPosition = currentOrder.findIndex(
          (value) => value.key === key
        );
        if (existingSortPosition === -1) {
          newOrder = [{ key, order: 'asc' }];
        } else {
          sortOrderVal = currentOrder[existingSortPosition].order;
          const newSortOrder = sortOrderVal === 'asc' ? 'desc' : 'asc';
          newOrder = [{ key, order: newSortOrder }];
        }
      } else {
        newOrder = [{ key, order: sortOrderVal }];
      }
    }

    const sortEvent: GtSortEvent = {
      key,
      order: sortOrderVal,
      currentSortOrder: newOrder,
      addSortKey: shiftKey,
    };

    if ($event) {
      sortEvent.event = $event;
    }
    this.columnSort.emit(sortEvent);

    if (!this.tableInfo?.lazyLoaded) {
      this.sortOrder.set(newOrder);
      this.sortOrderChange.emit(newOrder);
    }
  }

  private _columnOrder = (
    a: KeyValue<string, TableColumn>,
    b: KeyValue<string, TableColumn>
  ): number => {
    return (a.value.order || 0) - (b.value.order || 0);
  };

  protected orderedColumns = computed(() => {
    const config = this.config();
    if (!config.columns) return [];
    return Object.entries(config.columns)
      .map(([key, value]) => ({ key, value }) as KeyValue<string, TableColumn>)
      .sort(this._columnOrder);
  });

  protected orderedRows = computed(() => {
    const config = this.config();
    if (!config.rows) return [];
    return Object.entries(config.rows)
      .map(([key, value]) => ({ key, value }) as KeyValue<string, TableColumn>)
      .sort(this._columnOrder);
  });

  nestedValue(
    object: any,
    mapTo: string,
    missingValue: string | number | null = null
  ): unknown {
    const levels = mapTo.split('.');
    return levels.reduce(
      (previousValue, currentValue, index) =>
        previousValue[currentValue] ||
        (index === levels.length - 1 ? missingValue : {}),
      object
    );
  }

  // ─── Keyboard Navigation ───

  private _unsubscribeFromKeyboardEvents$ = new Subject<void>();
  private _keyboardArrowEvent$ = fromEvent<KeyboardEvent>(
    document,
    'keydown'
  ).pipe(
    filter(
      (event) =>
        [...this.navigationKeys(), ...this.selectKeys()].indexOf(event.key) > -1
    )
  );

  protected listenToKeyboardEvents(): void {
    if (!this.config()?.activateRowOnKeyboardNavigation) {
      return;
    }

    this._unsubscribeFromKeyboardEvents$.next();
    this._keyboardArrowEvent$
      .pipe(
        takeUntil(this._unsubscribeFromKeyboardEvents$),
        takeUntil(this._unsubscribe$)
      )
      .subscribe((event) => {
        const rows = this.processedData();
        const currentPage = this.boundedPaginationIndex();
        const tableInfo = this.tableInfo;

        const selectEvent = this.selectKeys().includes(event.key);
        if (selectEvent && this.activeRowIndex !== null) {
          const rowIndex =
            this.activeRowIndex + currentPage * (tableInfo?.pageSize ?? 0);
          this._rowSelect(rows[rowIndex], rowIndex, event);
          return;
        }

        const navigationEvent = this.navigationKeys().includes(event.key);
        if (navigationEvent) {
          this._handleNavigationEvent(event, rows, currentPage, tableInfo);
        }
      });
  }

  unsubscribeFromKeyboardEvents(tableRef: HTMLTableElement): void {
    if (!this.config()?.activateRowOnKeyboardNavigation) {
      return;
    }
    if (tableRef !== document.activeElement) {
      if (this.config()?.activateRowOnHover) {
        this.activateRow(null);
      }
      this._unsubscribeFromKeyboardEvents$.next();
    }
  }

  private _handleNavigationEvent(
    event: KeyboardEvent,
    rows: any[],
    currentPage: number,
    tableInfo: any
  ): void {
    const hasPagination = (tableInfo?.pageTotal || 0) > 1 && tableInfo;
    const lastRowIndex = rows.length - 1;
    let newIndex = this.activeRowIndex;
    let indexModifier = 0;

    if (event.key === 'Home') {
      this.paginationIndex = 0;
      this.activateRow(0, event);
      return;
    }

    if (event.key === 'End') {
      const indexOfLastRecord = hasPagination
        ? rows.length - (tableInfo.pageTotal - 1) * tableInfo.pageSize - 1
        : lastRowIndex;
      if (tableInfo?.pageTotal) {
        this.paginationIndex = tableInfo.pageTotal - 1;
      }
      this.activateRow(indexOfLastRecord, event);
      return;
    }

    if (event.key === 'ArrowDown') {
      indexModifier = 1;
    } else if (event.key === 'ArrowUp') {
      indexModifier = -1;
    }

    if (newIndex === null) {
      newIndex = 0;
    } else if (
      newIndex + indexModifier >= 0 &&
      newIndex + indexModifier <= lastRowIndex
    ) {
      newIndex = newIndex + indexModifier;
    }

    if (hasPagination && tableInfo?.pageSize) {
      const isNotLastPage = currentPage + 1 < tableInfo.pageTotal;
      const recordsOnLastPage =
        rows.length - (tableInfo.pageTotal - 1) * tableInfo.pageSize - 1;
      const maxIndex = isNotLastPage
        ? tableInfo?.pageSize - 1
        : recordsOnLastPage;

      if (event.key === 'ArrowLeft' && currentPage > 0) {
        this.paginationIndex = currentPage - 1;
        this.activateRow(newIndex, event);
        return;
      } else if (event.key === 'ArrowRight' && isNotLastPage) {
        if (
          currentPage + 1 === tableInfo.pageTotal - 1 &&
          newIndex > recordsOnLastPage
        ) {
          this.activateRow(recordsOnLastPage, event);
        }
        this.paginationIndex = currentPage + 1;
        this.activateRow(newIndex, event);
        return;
      }

      if (
        currentPage > 0 &&
        indexModifier < 0 &&
        newIndex + indexModifier <= lastRowIndex &&
        (this.activeRowIndex || 0) + indexModifier < 0
      ) {
        this.activateRow(tableInfo?.pageSize - 1, event);
        this.paginationIndex = currentPage - 1;
        return;
      }

      const pageIndex = newIndex % tableInfo?.pageSize;

      if (newIndex > maxIndex && currentPage + 1 < tableInfo.pageTotal) {
        this.paginationIndex = currentPage + 1;
      }
      this.activateRow(pageIndex > maxIndex ? maxIndex : pageIndex, event);
      return;
    }

    this.activateRow(newIndex, event);
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
    this._unsubscribeFromKeyboardEvents$.next();
    this._unsubscribeFromKeyboardEvents$.complete();
  }
}
