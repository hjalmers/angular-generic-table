import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TableConfig } from './models/table-config.interface';
import { KeyValue } from '@angular/common';
import { map } from 'rxjs/operators';
import { TableColumn } from './models/table-column.interface';
import { Order } from './enums/order.enum';

@Component({
  selector: 'angular-generic-table',
  templateUrl: './core.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreComponent implements OnInit {
  get tableConfig$(): Observable<TableConfig> | undefined {
    return this._tableConfig$;
  }

  @Input()
  set config(value: any) {
    this._tableConfig$ = value;
  }
  get data$(): Observable<Array<any>> {
    return this._data$!.pipe(
      map(data =>
        data.sort(
          (a, b) =>
            a[this.sortBy.sortBy] > b[this.sortBy.sortBy]
              ? this.sortBy.sortByOrder === Order.ASC
                ? 1
                : -1
              : b[this.sortBy.sortBy] > a[this.sortBy.sortBy]
                ? this.sortBy.sortByOrder === Order.ASC
                  ? -1
                  : 1
                : 0
        )
      )
    );
  }

  @Input()
  set data(value: any) {
    this._data$ = value;
  }
  constructor() {}

  loading$ = of(false);

  sortBy: { sortBy: string; sortByOrder: Order } = {
    sortBy: 'firstName',
    sortByOrder: Order.ASC
  };

  // tslint:disable-next-line:variable-name
  private _data$: Observable<Array<any>> | undefined;
  // tslint:disable-next-line:variable-name
  private _tableConfig$: Observable<TableConfig> | undefined;

  sort(property: string): void {
    const newSortOrder =
      this.sortBy.sortBy !== property || this.sortBy.sortByOrder === Order.DESC || !this.sortBy.sortByOrder
        ? Order.ASC
        : Order.DESC;
    this.sortBy = {
      sortBy: property,
      sortByOrder: newSortOrder
    };
  }

  ngOnInit() {}

  columnOrder = (a: KeyValue<string, TableColumn>, b: KeyValue<string, TableColumn>): number => {
    return (a.value.order || 0) - (b.value.order || 0);
  };
}
