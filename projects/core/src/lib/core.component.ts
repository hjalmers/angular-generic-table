import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  map,
  shareReplay,
  startWith,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { TableColumn } from './models/table-column.interface';
import { Order } from './enums/order.enum';
import { chunk, search } from './utilities/utilities';
import { TableRow } from './models/table-row.interface';
import { TableSort } from './models/table-sort.interface';
import { TableMeta } from './models/table-meta.interface';

@Component({
  selector: 'angular-generic-table',
  templateUrl: './core.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent {
  @Input() set loading(value: Observable<boolean> | boolean) {
    this._loading$.next(value);
  }
  @Input()
  set page(value: number) {
    this._currentPage$.next(value);
  }

  @Input()
  set search(value: Observable<string> | string | null) {
    this._searchBy$.next(value);
  }

  @Input()
  set config(value: Observable<TableConfig> | TableConfig) {
    this._tableConfig$.next(value);
  }

  @Input()
  set data(value: Observable<Array<TableRow>> | Array<TableRow>) {
    this._data$.next(value);
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
        data = data.map((row) => {
          const newKeys = Object.entries(config.columns || config.rows || [])
            .filter(([key, value]) => !!value.mapTo) // add keys for columns with mapTo config...
            .reduce(
              (previousValue, currentValue) => ({
                ...previousValue,
                // tslint:disable-next-line:no-non-null-assertion
                [currentValue[0]]: this.nestedValue(
                  row,
                  currentValue[1].mapTo!.path,
                  currentValue[1].mapTo?.missingValue
                ),
              }),
              {}
            );
          return { ...row, ...newKeys };
        });
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
