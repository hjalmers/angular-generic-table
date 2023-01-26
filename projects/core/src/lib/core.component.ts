import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
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
  GtRowClickEvent,
  GtRowHoverEvent,
  GtSortEvent,
} from './models/table-events.interface';
import { CapitalCasePipe } from './pipes/capital-case.pipe';
import { SortClassPipe } from './pipes/sort-class.pipe';
import { DashCasePipe } from './pipes/dash-case.pipe';
import { DynamicPipe } from './pipes/dynamic.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';

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
  set page(page: number) {
    this._currentPage$.next(page);
  }

  @Input()
  set search(string: Observable<string> | string | null) {
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

  @Input() set sortOrder(sortConfig: GtSortOrder<any>) {
    if (JSON.stringify(sortConfig) !== JSON.stringify(this._sortOrder$.value)) {
      this.sortOrderChange.emit(sortConfig);
      this._sortOrder$.next(sortConfig);
    }
  }

  @Output() rowClick = new EventEmitter<GtRowClickEvent>();
  @Output('sortOrderChange') sortOrderChange = new EventEmitter<
    GtSortOrder<TableRow>
  >();

  _rowClick(row: TableRow, index: number, event: MouseEvent): void {
    this.rowClick.emit({ row, index, event });
  }

  private _rowHover$ = new ReplaySubject<GtRowHoverEvent>(1);
  @Output() rowHover = new EventEmitter<GtRowHoverEvent>();
  @Output() columnSort = new EventEmitter<GtSortEvent>();
  rowHover$ = this._rowHover$.asObservable().pipe(
    debounceTime(50),
    distinctUntilChanged((p, q) => p.index === q.index),
    tap((event) => this.rowHover.emit(event)),
    shareReplay(1)
  );

  hoverRow(id: string): void;
  hoverRow(index: number): void;
  hoverRow(none: null): void;
  hoverRow(arg: string | number | null): void {
    if (typeof arg === 'number') {
      this.data$
        .pipe(
          map((data) => data[arg]),
          take(1)
        )
        .subscribe((row) => this._hoverRow(row, arg));
    } else if (typeof arg === 'string') {
      // TODO: implement hover by id
    } else {
      this._hoverRow(null, null);
    }
  }
  _hoverRow(
    row: TableRow | null,
    index: number | null,
    event?: MouseEvent
  ): void {
    this._rowHover$.next({ row, index, event });
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
  private _searchBy$: ReplaySubject<Observable<string> | string | null> =
    new ReplaySubject(1);
  searchBy$: Observable<string | null> = this._searchBy$.pipe(
    startWith(''),
    map((value) => (isObservable(value) ? value : of(value))),
    switchMap((obs) => obs),
    shareReplay(1)
  );

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
      return { data, config };
    }),
    switchMap((obs) =>
      combineLatest([of(obs), this.sortOrder$, this.searchBy$])
    ),
    map(([table, sortBy, searchBy]) => {
      // create a new array reference and sort new array (prevent mutating existing state)
      table.data = [...table.data];
      return !sortBy.length || table.config?.disableTableSort
        ? searchBy
          ? search(searchBy, false, table.data, table.config)
          : table.data
        : searchBy
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
  ]).pipe(
    map(([sorted, config]) => {
      // if pagination is disabled...
      if (!config.pagination || config.pagination.length === 0) {
        // ...return unaltered array
        return {
          data: [sorted],
          config,
          info: { records: sorted.length, pageTotal: 1 },
        };
      }
      // return record set
      return {
        data: chunk(sorted, +(config.pagination.length || 0)),
        config,
        info: {
          records: sorted.length,
          pageTotal: Math.ceil(
            sorted.length / +(config.pagination.length || 0)
          ),
        },
      };
    }),
    shareReplay(1)
  );

  private _currentPage$: BehaviorSubject<number> = new BehaviorSubject(0);
  currentPage$ = combineLatest([this._currentPage$, this.table$]).pipe(
    map(([page, table]: any) => {
      // determine last page
      const lastPage =
        Math.ceil(
          table.info.records /
            (table.config?.pagination?.length || table.info.records)
        ) - 1;
      // determine max/min position
      return +page < 0 ? 0 : +page > lastPage ? lastPage : +page;
    }),
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
    const shiftKey = $event?.shiftKey;
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
    };

    // if event is passed to sort function...
    if ($event) {
      // ...emit it as well
      sortEvent.event = $event;
    }
    // emit sort event
    this.columnSort.emit(sortEvent);
    // update sort order
    this.sortOrder = newOrder;
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
