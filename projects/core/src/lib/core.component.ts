import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TrackByFunction,
} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  isObservable,
  Observable,
  of,
  ReplaySubject,
} from 'rxjs';
import { TableConfig } from './models/table-config.interface';
import {
  AsyncPipe,
  KeyValue,
  KeyValuePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  SlicePipe,
} from '@angular/common';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { TableColumn } from './models/table-column.interface';
import {
  calculate,
  chunk,
  search,
  sortOnMultipleKeys,
} from './utilities/utilities';
import { TableRow } from './models/table-row.interface';
import { GtOrder, GtSortOrder } from './models/table-sort.interface';
import { TableMeta } from './models/table-meta.interface';
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

@Component({
  selector: 'angular-generic-table',
  templateUrl: './core.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CapitalCasePipe,
    KeyValuePipe,
    SortClassPipe,
    DashCasePipe,
    RowSelectionPipe,
    AsyncPipe,
    NgTemplateOutlet,
    SlicePipe,
    DynamicPipe,
    HighlightPipe,
    NgClass,
    NgIf,
    NgForOf,
  ],
})
export class CoreComponent {
  get sortOrder$(): Observable<GtSortOrder> {
    return this._sortOrder$.asObservable();
  }

  @Input() set loading(isLoading: Observable<boolean> | boolean) {
    this._loading$.next(isLoading);
  }
  @Input()
  set paginationIndex(pageIndex: number) {
    this._currentPaginationIndex$.next(pageIndex);
  }

  @Input() set pagingInfo(value: GtPaginationInfo | null) {
    if (value) {
      this._pagingInfo$.next(value);
      if (
        value.pageCurrent !== this._currentPaginationIndex$.getValue() + 1 &&
        value.pageCurrent !== null
      ) {
        this.paginationIndex = value.pageCurrent - 1;
      }
    }
  }

  /** customClasses
   * @description An object that contains custom classes for various elements in the table.
   * @type {object} - { selectedRow: string, activeRow: string } - default classes are 'gt-selected' and 'gt-active'
   */
  @Input() set customClasses(classes: Partial<typeof this._customClasses>) {
    this._customClasses = { ...this._customClasses, ...classes };
  }

  get customClasses(): typeof this._customClasses {
    return this._customClasses;
  }

  private _customClasses = {
    selectedRow: 'gt-selected',
    activeRow: 'gt-active',
  };

  /** isRowSelectedFn
   * @description Function to determine if row is selected or not.
   * @type {fn} A function that receives a row object and optional state for current selection that can be used to determine if row should be marked as selected or not. */
  @Input() set isRowSelectedFn(
    fn: (row: TableRow | any, selection?: any) => boolean
  ) {
    this._isRowSelectedFn = fn;
  }

  get isRowSelectedFn(): any {
    return this._isRowSelectedFn;
  }

  private _isRowSelectedFn: any;

  /** selection
   * @description An object that contains the currently selected row(s) in the table. It's passed to the selection function to determine which rows should be selected.
   * @type {any}
   */
  @Input() selection: any = {};

  /** rowIdKey
   * @description row key to use as unique id for table row. If passed, table won't generate unique ids for each row but instead use key to retrieve unique id from row.
   * @type {string}
   */
  @Input() rowIdKey: string | undefined;

  /** generateRowId
   * @description Whether or not to generate a unique id for each row in the table. Defaults to `true`.
   * @type {boolean}
   */
  @Input() generateRowId: boolean = true;

  /** trackRowByFn
   * @description A function that returns a unique identifier for each row in the table to optimize rendering when data is added or removed.
   * @type fn - TrackByFunction to retrieve unique id based on index and/or row. Defaults to using `row[this.rowIdKey]`.
   */
  @Input() set trackRowByFn(fn: TrackByFunction<TableRow>) {
    this._trackRowByFn = fn;
  }
  get trackRowByFn(): TrackByFunction<TableRow> {
    return this._trackRowByFn;
  }

  private _trackRowByFn(
    index: number,
    row: TableRow
  ): TrackByFunction<TableRow> {
    return this.rowIdKey ? row[this.rowIdKey] : row?._id;
  }

  @Input()
  set search(string: Observable<string | null> | string | null) {
    this._searchBy$.next(string);
  }

  @Input()
  set config(config: Observable<TableConfig<any>> | TableConfig<any>) {
    this._tableConfig$.next(config);
  }

  @Input()
  set data(data: Observable<Array<TableRow>> | Array<TableRow>) {
    this._data$.next(data);
  }

  @Input() set sortOrder(sortConfig: GtSortOrder<TableRow> | any) {
    if (JSON.stringify(sortConfig) !== JSON.stringify(this._sortOrder$.value)) {
      this.sortOrderChange.emit(sortConfig);
      this._sortOrder$.next(sortConfig);
    }
  }

  @Output() rowClick = new EventEmitter<GtRowClickEvent>();
  @Output() rowSelect = new EventEmitter<GtRowSelectEvent>();
  @Output() sortOrderChange = new EventEmitter<GtSortOrder<TableRow>>();

  _rowClick(row: TableRow, index: number, event: MouseEvent): void {
    this.rowClick.emit({ row, index, event });
  }

  _rowActive(row: TableRow, index: number, event: KeyboardEvent): void {
    this.rowSelect.emit({ row, index, event });
  }

  private _rowActive$ = new ReplaySubject<GtRowActiveEvent>(1);
  @Output() rowActive = new EventEmitter<GtRowActiveEvent>();
  @Output() columnSort = new EventEmitter<GtSortEvent>();
  /** page change event - emitted when current page/index changes for pagination */
  @Output() pageChange = new EventEmitter<GtPageChangeEvent>();
  rowActive$ = this._rowActive$.asObservable().pipe(
    debounceTime(50),
    distinctUntilChanged((p, q) => {
      if (this.rowIdKey && p.row && q.row) {
        return p.row[this.rowIdKey] === q.row[this.rowIdKey];
      } else if (this.generateRowId && p.row && q.row) {
        return p.row._id === q.row._id;
      } else {
        return p.index === q.index;
      }
    }),
    tap((event) => (this.activeRowIndex = event.index)),
    tap((event) => this.rowActive.emit(event)),
    shareReplay(1)
  );

  activeRowIndex: number | null = null;
  activateRow(id: string, event?: MouseEvent | KeyboardEvent): void;
  activateRow(index: number, event?: MouseEvent | KeyboardEvent): void;
  activateRow(none: null, event?: MouseEvent | KeyboardEvent): void;
  activateRow(
    arg: string | number | null,
    event?: MouseEvent | KeyboardEvent
  ): void {
    if (typeof arg === 'number') {
      this.table$
        .pipe(
          pluck('data'),
          map((data) => data[this.paginationIndex][arg]),
          take(1),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((row) => this._activateRow(row, arg, event));
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
    this._rowActive$.next({ row, index, event });
  }

  get loading$(): Observable<boolean> {
    return this._loading$.pipe(
      startWith(false),
      map((value) => (isObservable(value) ? value : of(value))),
      switchMap((obs) => obs),
      shareReplay(1)
    );
  }

  private _loading$: ReplaySubject<Observable<boolean> | boolean> =
    new ReplaySubject(1);
  private _sortOrder$: BehaviorSubject<GtSortOrder> =
    new BehaviorSubject<GtSortOrder>([]);
  private _searchBy$: ReplaySubject<Observable<string | null> | string | null> =
    new ReplaySubject(1);
  searchBy$: Observable<string | null> = this._searchBy$.pipe(
    startWith(''),
    map((value) => (isObservable(value) ? value : of(value))),
    switchMap((obs) => obs),
    shareReplay(1)
  );

  private _pagingInfo$ = new BehaviorSubject<GtPaginationInfo>({
    pageCurrent: null,
    pageNext: null,
    pagePrevious: null,
    pageSize: null,
    numberOfRecords: null,
    //recordsAfterFilter: null,
    //recordsAfterSearch: null,
    //recordsAll: null,
  });

  // tslint:disable-next-line:variable-name
  private _tableConfig$: BehaviorSubject<
    TableConfig<any> | Observable<TableConfig<any>>
  > = new BehaviorSubject({});
  tableConfig$ = this._tableConfig$.pipe(
    map((value) => (isObservable(value) ? value : of(value))),
    switchMap((obs) => obs),
    shareReplay(1)
  );

  private _data$: ReplaySubject<Array<TableRow> | Observable<Array<TableRow>>> =
    new ReplaySubject(1);
  data$: Observable<Array<TableRow>> = this._data$.pipe(
    map((value) => (isObservable(value) ? value : of(value))),
    switchMap((obs) => combineLatest([obs])),
    withLatestFrom(this.tableConfig$),
    map(([[data], config]) => {
      // if columns or rows contains config for mapTo...
      if (
        (config.columns &&
          !!Object.values(config.columns).find((column) => !!column.mapTo)) ||
        (config.rows &&
          !!Object.values(config.rows).find((column) => !!column.mapTo))
      ) {
        // ...map data to new keys on row...
        const newData: TableRow[] = [];
        for (let i = 0; i < data.length; i++) {
          const row = data[i];
          const newKeys = Object.entries(config.columns || config.rows || [])
            .filter(([key, value]) => !!value.mapTo) // add keys for columns with mapTo config...
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
      if (this.generateRowId && !this.rowIdKey && data.length > 0) {
        const dataWithId = [];
        for (let i = 0; i < data.length; i++) {
          dataWithId[i] = { ...data[i], _id: i };
        }
        data = dataWithId;
      }
      return { data, config };
    }),
    switchMap((obs) =>
      combineLatest([of(obs), this.sortOrder$, this.searchBy$])
    ),
    map(([table, sortBy, searchBy]) => {
      // create a new array reference and sort new array (prevent mutating existing state)
      table.data = [...table.data];
      return !sortBy?.length || table.config?.disableTableSort
        ? searchBy && !this.tableInfo?.lazyLoaded
          ? search(searchBy, false, table.data, table.config)
          : table.data
        : searchBy && !this.tableInfo?.lazyLoaded
        ? search(searchBy, false, table.data, table.config)?.sort(
            sortOnMultipleKeys(sortBy)
          )
        : table.data?.sort(sortOnMultipleKeys(sortBy));
    }),
    shareReplay(1)
  );

  calculations$ = combineLatest([this.data$, this.tableConfig$]).pipe(
    map(([data, config]) => calculate(data, config)),
    shareReplay(1)
  );

  table$: Observable<TableMeta> = combineLatest([
    this.data$,
    this.tableConfig$,
    this._pagingInfo$,
  ]).pipe(
    map(([sorted, config, pagingInfo]) => {
      if (
        pagingInfo.pageCurrent !== null &&
        pagingInfo.numberOfRecords !== null &&
        pagingInfo.pageSize !== null
      ) {
        return {
          data: [sorted],
          config,
          info: <TableInfo>{
            lazyLoaded: true,
            numberOfRecords: pagingInfo.numberOfRecords,
            pageSize: pagingInfo.pageSize,
            pageTotal:
              pagingInfo.pageTotal ??
              Math.ceil(pagingInfo.numberOfRecords / pagingInfo.pageSize),
          },
        };
      }
      // if pagination is disabled...
      if (!config.pagination || config.pagination.length === 0) {
        // ...return unaltered array
        return {
          data: [sorted],
          config,
          info: <TableInfo>{ numberOfRecords: sorted.length, pageTotal: 1 },
        };
      }
      // return record set
      return {
        data: chunk(sorted, +(config.pagination.length || 0)),
        config,
        info: <TableInfo>{
          numberOfRecords: sorted.length,
          pageTotal: Math.ceil(
            sorted.length / +(config.pagination.length || 0)
          ),
        },
      };
    }),
    tap((meta) => this._tableInfo$.next(meta.info)),
    shareReplay(1)
  );

  /** tableInfo$ - returns observable for table info
   * @return Observable<TableInfo> */
  get tableInfo$(): Observable<TableInfo | undefined> {
    return this._tableInfo$.asObservable().pipe(
      filter((info) => !!info),
      shareReplay(1)
    );
  }

  /** tableInfo - returns the current table info
   * @return TableInfo */
  get tableInfo(): TableInfo | undefined {
    return this._tableInfo$.getValue();
  }

  private _tableInfo$ = new BehaviorSubject<TableInfo | undefined>(undefined);

  private _currentPaginationIndex$: BehaviorSubject<number> =
    new BehaviorSubject(0);
  currentPaginationIndex$ = combineLatest([
    this._currentPaginationIndex$,
    this.table$,
  ]).pipe(
    map(([page, table]: any) => {
      // determine last page
      const lastPage =
        Math.ceil(
          table.info.records /
            (table.info.recordLength ??
              (table.config?.pagination?.length || table.info.records))
        ) - 1;
      // determine min/max position
      return +page < 0 ? 0 : +page > lastPage ? lastPage : +page;
    }),
    distinctUntilChanged(),
    tap((index) => this.pageChange.emit({ index })),
    shareReplay(1)
  );

  colspan$ = this.tableConfig$.pipe(
    switchMap((config) =>
      config.columns
        ? of(
            Object.values(config.columns || config.rows || {}).filter(
              (value) => value.hidden !== true
            ).length
          )
        : this.data$.pipe(map((data) => data.length + 1))
    ),
    shareReplay(1)
  );

  footerColspan$ = this.tableConfig$.pipe(
    map((config) => {
      let colspan = 0;
      Object.values(config?.footer?.columns || {}).forEach((calculations) => {
        if (
          Object.values(calculations).filter((value) => value !== false)
            .length >= 0
        ) {
          colspan += 1;
        }
      }, {});
      return colspan;
    }),
    shareReplay(1)
  );

  /** sortByKey - Sort by key in table row
   * @param key - key to sort by
   * @param { MouseEvent } [$event] - Mouse event triggering sort, if shift key is pressed sort key will be added to already present sort keys
   */
  sortByKey(key: keyof TableRow, $event?: MouseEvent): void {
    const shiftKey = $event?.shiftKey === true;
    const currentOrder = this._sortOrder$.value;
    let sortOrder: GtOrder = 'asc';
    let newOrder: GtSortOrder = [];
    // if shift key is pressed while sorting...
    if (shiftKey) {
      // ...check if key is already sorted
      const existingSortPosition = currentOrder.findIndex(
        (value) => value.key === key
      );
      if (existingSortPosition === -1) {
        // ...if key is not sorted, add it to the end of the sort order
        newOrder = [...currentOrder, { key, order: 'asc' }];
      } else {
        // ...if key is already sorted, toggle sort order
        sortOrder = currentOrder[existingSortPosition].order;
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        newOrder = [...currentOrder];
        newOrder[existingSortPosition] = {
          ...newOrder[existingSortPosition],
          order: newSortOrder,
        };
      }
    } else {
      // ...else if shift key is not pressed...
      if (currentOrder.length > 0) {
        // ...check if key is already sorted
        const existingSortPosition = currentOrder.findIndex(
          (value) => value.key === key
        );
        // ...if key is already sorted, toggle sort order
        if (existingSortPosition === -1) {
          newOrder = [{ key, order: 'asc' }];
        } else {
          sortOrder = currentOrder[existingSortPosition].order;
          const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
          newOrder = [{ key, order: newSortOrder }];
        }
      } else {
        // ...if key is not sorted set sort order for key to ascending
        newOrder = [{ key, order: sortOrder }];
      }
    }
    // create sort event
    const sortEvent: GtSortEvent = {
      key,
      order: sortOrder,
      currentSortOrder: newOrder,
      addSortKey: shiftKey,
    };

    // if event is passed to sort function...
    if ($event) {
      // ...emit it as well
      sortEvent.event = $event;
    }
    // emit sort event
    this.columnSort.emit(sortEvent);

    // if table is not lazy loaded (sorting is then handled server-side)...
    if (!this.tableInfo?.lazyLoaded) {
      // ...update sort order
      this.sortOrder = newOrder;
    }
  }

  columnOrder = (
    a: KeyValue<string, TableColumn>,
    b: KeyValue<string, TableColumn>
  ): number => {
    return (a.value.order || 0) - (b.value.order || 0);
  };

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
}
