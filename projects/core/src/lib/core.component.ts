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
  EMPTY,
  isObservable,
  Observable,
  of,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { TableConfig } from './models/table-config.interface';
import { KeyValue } from '@angular/common';
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
import { Order } from './enums/order.enum';
import { chunk, search } from './utilities/utilities';
import { TableRow } from './models/table-row.interface';
import { TableSort } from './models/table-sort.interface';
import { TableMeta } from './models/table-meta.interface';
import {
  GtRowClickEvent,
  GtRowHoverEvent,
} from './models/table-events.interface';

@Component({
  selector: 'angular-generic-table',
  templateUrl: './core.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent {
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
  set config(config: Observable<TableConfig> | TableConfig) {
    this._tableConfig$.next(config);
  }

  @Input()
  set data(data: Observable<Array<TableRow>> | Array<TableRow>) {
    this._data$.next(data);
  }

  @Output() rowClick = new EventEmitter<GtRowClickEvent>();

  _rowClick(row: TableRow, index: number, event: MouseEvent): void {
    this.rowClick.emit({ row, index, event });
  }

  private _rowHover$ = new ReplaySubject<GtRowHoverEvent>(1);
  @Output() rowHover = new EventEmitter<GtRowHoverEvent>();
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
  sortBy$: Subject<TableSort> = new Subject();
  // tslint:disable-next-line:variable-name
  private _sortBy: TableSort | undefined;

  // tslint:disable-next-line:variable-name
  private _searchBy$: ReplaySubject<Observable<string> | string | null> =
    new ReplaySubject(1);
  searchBy$: Observable<string | null> = this._searchBy$.pipe(
    startWith(''),
    map((value) => (isObservable(value) ? value : of(value))),
    switchMap((obs) => obs),
    shareReplay(1)
  );

  // tslint:disable-next-line:variable-name
  private _tableConfig$: ReplaySubject<TableConfig | Observable<TableConfig>> =
    new ReplaySubject(1);
  tableConfig$: Observable<TableConfig> = this._tableConfig$.pipe(
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
      combineLatest([
        of(obs),
        this.sortBy$.pipe(startWith(EMPTY)),
        this.searchBy$,
      ])
    ),
    map(([table, sortBy, searchBy]) => {
      // create a new array reference and sort new array (prevent mutating existing state)
      table.data = [...table.data];
      return !sortBy
        ? searchBy
          ? search(searchBy, false, table.data, table.config)
          : table.data
        : (searchBy
            ? search(searchBy, false, table.data, table.config)
            : table.data
          )?.sort((a, b) => {
            // TODO: improve logic
            const typed = sortBy as TableSort;
            return a[typed.sortBy] > b[typed.sortBy]
              ? typed.sortByOrder === Order.ASC
                ? 1
                : -1
              : b[typed.sortBy] > a[typed.sortBy]
              ? typed.sortByOrder === Order.ASC
                ? -1
                : 1
              : 0;
          });
    }),
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
    )
  );

  sort(property: string): void {
    const newSortOrder =
      this._sortBy?.sortBy !== property ||
      this._sortBy?.sortByOrder === Order.DESC ||
      !this._sortBy.sortByOrder
        ? Order.ASC
        : Order.DESC;
    const newSortBy = {
      sortBy: property,
      sortByOrder: newSortOrder,
    };
    this.sortBy$.next(newSortBy);
    this._sortBy = newSortBy;
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
