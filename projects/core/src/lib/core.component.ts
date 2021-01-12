import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, combineLatest, EMPTY, isObservable, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { TableConfig } from './models/table-config.interface';
import { KeyValue } from '@angular/common';
import { map, shareReplay, startWith, switchMap, withLatestFrom } from 'rxjs/operators';
import { TableColumn } from './models/table-column.interface';
import { Order } from './enums/order.enum';
import { chunk, search } from './utilities/utilities';
import { TableRow } from './models/table-row.interface';
import { TableSort } from './models/table-sort.interface';
import { TableInfo } from './models/table-info.interface';

@Component({
  selector: 'angular-generic-table',
  templateUrl: './core.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent {
  @Input()
  set page(value: Observable<number> | number) {
    this._currentPage$.next(value);
  }

  @Input()
  set search(value: Observable<string> | string) {
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
  constructor() {}

  loading$ = of(false);
  sortBy$: Subject<TableSort> = new Subject();
  // tslint:disable-next-line:variable-name
  private _sortBy: TableSort | undefined;

  // tslint:disable-next-line:variable-name
  private _searchBy$: ReplaySubject<Observable<string> | string> = new ReplaySubject(1);
  searchBy$: Observable<string> = this._searchBy$.pipe(
    startWith(''),
    map((value) => (isObservable(value) ? value : of(value))),
    switchMap((obs) => obs),
    shareReplay(1)
  );

  // tslint:disable-next-line:variable-name
  private _tableConfig$: ReplaySubject<TableConfig | Observable<TableConfig>> = new ReplaySubject(1);
  tableConfig$: Observable<TableConfig> = this._tableConfig$.pipe(
    map((value) => (isObservable(value) ? value : of(value))),
    switchMap((obs) => obs),
    shareReplay(1)
  );

  // tslint:disable-next-line:variable-name
  private _data$: ReplaySubject<Array<TableRow> | Observable<Array<TableRow>>> = new ReplaySubject(1);
  data$: Observable<Array<TableRow>> = this._data$.pipe(
    map((value) => (isObservable(value) ? value : of(value))),
    switchMap((obs) => combineLatest([obs, this.sortBy$.pipe(startWith(EMPTY)), this.searchBy$])),
    withLatestFrom(this.tableConfig$),
    map(([[data, sortBy, searchBy], config]) => {
      return !sortBy
        ? searchBy
          ? search(searchBy, false, data, config)
          : data
        : (searchBy ? search(searchBy, false, data, config) : data).sort((a, b) => {
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
    })
  );

  table$: Observable<{ data: Array<Array<TableRow>>; config: TableConfig; info: TableInfo }> = combineLatest([
    this.data$,
    this.tableConfig$,
  ]).pipe(
    map(([sorted, config]) => {
      // if pagination is disabled...
      if (!config.pagination || config.pagination.length === 0) {
        // ...return unaltered array
        return { data: [sorted], config, info: { records: sorted.length, pageTotal: 1 } };
      }
      // return record set
      return {
        data: chunk(sorted, +config.pagination.length),
        config,
        info: {
          records: sorted.length,
          pageTotal: Math.ceil(sorted.length / +config.pagination.length),
        },
      };
    })
  );

  // tslint:disable-next-line:variable-name
  private _currentPage$: BehaviorSubject<any> = new BehaviorSubject(0);
  currentPage$ = this._currentPage$.pipe(
    map((value) => (isObservable(value) ? (value as Observable<number>) : (of(value) as Observable<number>))),
    switchMap((obs) => obs),
    withLatestFrom(this.table$),
    map(([page, table]: any) => {
      // determine last page
      const lastPage = Math.ceil(table.info.records / table.config.pagination.length) - 1;
      // determine max/min position
      return +page < 0 ? 0 : +page > lastPage ? lastPage : +page;
    }),
    shareReplay(1)
  );

  sort(property: string): void {
    const newSortOrder =
      this._sortBy?.sortBy !== property || this._sortBy?.sortByOrder === Order.DESC || !this._sortBy.sortByOrder
        ? Order.ASC
        : Order.DESC;
    const newSortBy = {
      sortBy: property,
      sortByOrder: newSortOrder,
    };
    this.sortBy$.next(newSortBy);
    this._sortBy = newSortBy;
  }

  columnOrder = (a: KeyValue<string, TableColumn>, b: KeyValue<string, TableColumn>): number => {
    return (a.value.order || 0) - (b.value.order || 0);
  };
}
