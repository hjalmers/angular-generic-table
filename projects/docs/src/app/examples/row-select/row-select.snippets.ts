export const ROW_SELECT_SNIPPETS = [
  {
    name: 'row-select.component.ts',
    code: `import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import {
  GtRowSelectEvent,
  GtRowClickEvent,
  TableRow,
  GtRowActiveEvent,
} from '@angular-generic-table/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import {
  map,
  pluck,
  shareReplay,
  startWith,
  take,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
interface RowData {
  birthday: string;
  email: string;
  favorite_color: string;
  first_name: string;
  gender: 'Female' | 'Male';
  id: number;
  last_name: string;
}
@Component({
  templateUrl: './row-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    \`
      :host ::ng-deep .gt-active {
        background-color: var(--bs-highlight-bg);
      }
      :host ::ng-deep .table > tbody > tr {
        cursor: pointer;
      }
    \`,
  ],
})
export class RowSelectComponent implements OnDestroy {
  constructor(private http: HttpClient) {}

  get activateOnRowHover$(): Observable<boolean> {
    return this._activateOnRowHover$.asObservable();
  }
  get activateOnRowHover(): boolean {
    return this._activateOnRowHover$.getValue();
  }
  toggleRowHover() {
    this._activateOnRowHover$.next(!this.activateOnRowHover);
  }
  private _activateOnRowHover$ = new BehaviorSubject<boolean>(true);

  get activateOnNavigation$(): Observable<boolean> {
    return this._activateOnNavigation$.asObservable();
  }
  get activateOnNavigation(): boolean {
    return this._activateOnNavigation$.getValue();
  }
  toggleRowNavigation() {
    this._activateOnNavigation$.next(!this.activateOnNavigation);
  }
  private _activateOnNavigation$ = new BehaviorSubject<boolean>(true);

  private unsubscribe$ = new Subject();
  loading$ = new BehaviorSubject<boolean>(true);
  customClassNames = {
    selectedRow: 'table-active',
  };
  lengthCtrl = new FormControl(15);
  data$ = this.http
    .get<{ data: TableRow[] }>(
      'https://private-730c61-generictable.apiary-mock.com/data'
    )
    .pipe(
      pluck('data'),
      tap((_) => this.loading$.next(false)),
      takeUntil(this.unsubscribe$),
      shareReplay(1)
    );
  config$ = combineLatest([
    this.lengthCtrl.valueChanges.pipe(
      startWith(this.lengthCtrl.value),
      map((length) =>
        length ? { pagination: { length: length < 0 ? 0 : length } } : {}
      )
    ),
    this.activateOnRowHover$,
    this.activateOnNavigation$,
  ]).pipe(
    map(
      ([pagination, activateRowOnHover, activateRowOnKeyboardNavigation]) => ({
        columns: {
          id: {
            sortable: true,
          },
          first_name: {
            sortable: true,
          },
          last_name: {
            sortable: true,
          },
          gender: {
            sortable: true,
          },
          email: {
            sortable: true,
          },
        },
        ...pagination,
        rowClick: true,
        activateRowOnHover,
        activateRowOnKeyboardNavigation,
        rowSelect: true,
      })
    )
  );

  setActiveRow(event: GtRowActiveEvent) {
    console.log(event);
    if (event.event && event.event.type === 'keydown') {
      // stop the event from propagating, otherwise the page will scroll
      event.event.preventDefault();
    }
    this._activeRow$.next(<RowData | null>event.row);
  }
  get activeRow$() {
    return this._activeRow$.asObservable();
  }
  private _activeRow$ = new BehaviorSubject<RowData | null>(null);
  isSelected(row: RowData, selection: typeof this.selection) {
    return selection[row.id];
  }

  selection: { [key: string]: boolean } = {};

  selectRow(event: GtRowClickEvent | GtRowSelectEvent) {
    const selection = { ...this.selection };
    const row = event.row;
    if (!row) return;
    if (!selection[row.id]) {
      selection[row.id] = true;
    } else {
      delete selection[row.id];
    }
    // update the selection
    this.selection = selection;
  }

  get isAllSelected() {
    return Object.keys(this.selection).length > 0;
  }
  toggleAll() {
    if (this.isAllSelected) {
      this.selection = {};
      return;
    }
    const selection = { ...this.selection };
    this.data$.pipe(take(1), takeUntil(this.unsubscribe$)).subscribe((data) => {
      data.forEach((row, index) => {
        selection[index] = true;
      });
    });
    this.selection = selection;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
};
`,
    language: 'typescript',
  },
  {
    name: 'row-select.component.html',
    code: `<div class="row gy-3 gy-sm-0 gx-2 align-items-center">
  <div class="col-12 col-sm-auto">
    <button
      class="btn w-100"
      (click)="toggleRowHover()"
      [class.btn-outline-primary]="!activateOnRowHover"
      [class.btn-primary]="activateOnRowHover"
    >
      {{ activateOnRowHover ? "Disable on hover" : "Enable on hover" }}
    </button>
  </div>
  <div class="col-12 col-sm-auto">
    <button
      class="btn w-100"
      (click)="toggleRowNavigation()"
      [class.btn-outline-primary]="!activateOnNavigation"
      [class.btn-primary]="activateOnNavigation"
    >
      {{
        activateOnNavigation
          ? "Disable on keyboard navigation"
          : "Enable on keyboard navigation"
      }}
    </button>
  </div>
  <div class="col-12 col-sm-auto">
    <button
      class="btn w-100"
      [class.btn-outline-primary]="!isAllSelected"
      [class.btn-primary]="isAllSelected"
      (click)="toggleAll()"
    >
      {{ isAllSelected ? "Deselect all" : "Select all" }}
    </button>
  </div>
</div>
<div class="row gy-3 gy-sm-0 gx-2 align-items-center mt-3">
  <div class="form-group col-12 col-sm-auto d-flex align-items-center">
    <label for="length_input" class="text-nowrap me-2">Number of rows:</label>
    <input
      id="length_input"
      [formControl]="lengthCtrl"
      type="number"
      class="form-control"
      style="max-width: 60px"
    />
  </div>
  <div class="col-12 col-sm-auto">
    Selected rows: {{ (selection | keyvalue).length }}
  </div>
  <div class="col-12 col-sm-auto">
    Active row id: {{ (activeRow$ | async)?.id ?? "none" }}
  </div>
</div>
<div class="mx-n3 mx-sm-0 my-3 overflow-auto">
  <angular-generic-table
    [data]="data$"
    [config]="config$"
    [loading]="loading$"
    [isRowSelectedFn]="isSelected"
    [customClasses]="customClassNames"
    (rowClick)="selectRow($event)"
    (rowActive)="setActiveRow($event)"
    (rowSelect)="selectRow($event)"
    [selection]="selection"
    #tableRef
  >
    <div class="table-loading gt-skeleton-loader"></div>
    <div class="table-no-data alert alert-info mt-3">Table is empty</div>
  </angular-generic-table>
  <angular-generic-table-pagination [table]="tableRef">
  </angular-generic-table-pagination>
</div>`,
    language: 'xml',
  },
  {
    name: 'app.module.ts',
    code: `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RowSelectComponent } from './row-select.component';
import { GenericTableCoreModule } from '@angular-generic-table/core';

@NgModule({
  declarations: [RowSelectComponent],
  imports: [BrowserModule, GenericTableCoreModule],
  bootstrap: [RowSelectComponent]
})
export class AppModule {}`,
    language: 'typescript',
  },
];
