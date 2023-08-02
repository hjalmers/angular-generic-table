export const LAZY_LOADING_DOCS = [
  {
    name: 'server-side-pagination.component.html',
    code: `<form [formGroup]="paginationForm">
  <div class="row gy-3">
    <div class="form-group col-12 col-sm-auto">
      <label for="search_input">Search</label>
      <input
        id="search_input"
        formControlName="search"
        type="text"
        class="form-control"
      />
    </div>
  </div>
</form>
<div class="mx-n3 mx-sm-0 my-3 overflow-auto">
  <angular-generic-table
    [data]="data$"
    [config]="tableConfig$"
    [search]="search$"
    [loading]="loading$"
    [pagingInfo]="paging$ | async"
    (pageChange)="onPageChange($event)"
    (columnSort)="onSortOrderChange($event)"
    [sortOrder]="sorting$ | async"
    #table
  >
    <div
      class="table-loading gt-skeleton-loader"
      [style.--gt-skeleton-height]="
        ((table.table$ | async)?.info?.pageSize ?? 0) * 41 - 11 + 'px'
      "
    ></div>
    <div class="table-no-data alert alert-info mt-3">Table is empty</div>
  </angular-generic-table>
</div>
<angular-generic-table-pagination [table]="table">
</angular-generic-table-pagination>`,
    language: 'xml',
  },
  {
    name: 'server-side-pagination.component.ts',
    code: `import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import {
  GtPageChangeEvent,
  GtSortEvent,
  GtSortOrder,
  TableConfig,
  GtPaginationInfo,
  sortOrderToParams
} from '@angular-generic-table/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { pluck, shareReplay, switchMap, tap } from 'rxjs/operators';

interface LazyLoadingData {
  birthday: string;
  email: string;
  favorite_color: string;
  first_name: string;
  gender: string;
  id: number;
  last_name: string;
}

interface LazyLoadingResponse {
  data: Array<LazyLoadingData>;
  paging: GtPaginationInfo;
  sorting: GtSortOrder<LazyLoadingData>;
  filters: [
    {
      [Property in keyof LazyLoadingResponse]: { [key: string]: any };
    }
  ];
  request: any;
  error: any;
}

@Component({
  templateUrl: './server-side-pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerSidePaginationComponent implements OnInit {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  @ViewChild('actions', { static: true }) actions: TemplateRef<any> | undefined;
  @ViewChild('color', { static: true }) color: TemplateRef<any> | undefined;

 paginationForm = this.fb.group({
    search: ['']
  });
 requestParams$ = new BehaviorSubject({
    page: 1,
    page_size: 10,
    sort_by: '+id',
 });
 search$ = this.paginationForm.controls.search.valueChanges.pipe(
    shareReplay(1)
 );
 loading$ = new BehaviorSubject(true);

 request$ = this.requestParams$.pipe(
    tap((_) => this.loading$.next(true)), // show loading indicator whenever requests are changed (remove to disable loading indicator)
    switchMap((params) =>
      this.http.get<LazyLoadingResponse>(
        'https://private-a6da3-generictableapi.apiary-mock.com/data',
        {
          params,
        }
      )
    ),
    tap((_) => this.loading$.next(false)), // hide loading indicator
    shareReplay(1)
 );

 data$: Observable<Array<LazyLoadingData>> = this.request$.pipe(
    pluck('data'),
    shareReplay(1)
 );

 paging$: Observable<GtPaginationInfo> = this.request$.pipe(
    pluck('paging'),
    shareReplay(1)
 );

 sorting$ = this.request$.pipe(
    pluck('sorting'),
    shareReplay(1)
 );

 onPageChange(event: GtPageChangeEvent): void {
    const current = { ...this.requestParams$.value };
    if (current.page != event.index + 1) {
      this.requestParams$.next({
        ...current,
        page: event.index + 1,
      });
    }
  }

 onSortOrderChange(event: GtSortEvent): void {
   let sort_by = sortOrderToParams([...event.currentSortOrder]);
   const current = { ...this.requestParams$.value };
   if (current.sort_by !== sort_by) {
     this.requestParams$.next({
       ...current,
       page: 1, // reset page to 1 when sorting changes
       sort_by,
     });
   }
 }

 tableConfig$: ReplaySubject<TableConfig<LazyLoadingData>> = new ReplaySubject(
   1
 );

 ngOnInit(): void {
   this.tableConfig$.next({
      class: 'table text-nowrap',
      columns: {
        id: {
          sortable: true,
        },
        first_name: {},
        last_name: {
          sortable: true,
        },
        gender: {
          sortable: true,
        },
        birthday: {
          class: 'text-end justify-content-end',
          search: (row, column) => formatDate(row[column], 'longDate', 'en'),
          transform: {
            pipe: DatePipe,
            args: ['longDate'],
          },
        },
        favorite_color: {
          hidden: true,
        },
        email: {
          hidden: true,
        },
      },
      pagination: {
        length: 10,
      },
    });
  }
}
`,
    language: 'typescript',
  },
  {
    name: 'app.module.ts',
    code: `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ServerSidePaginationComponent } from './server-side-pagination.component';
import { GenericTableCoreModule, GenericTablePaginationModule } from '@angular-generic-table/core';

@NgModule({
  declarations: [ServerSidePaginationComponent],
  imports: [
    BrowserModule,
    GenericTableCoreModule,
    GenericTablePaginationModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [ServerSidePaginationComponent]
})
export class AppModule {}`,
    language: 'typescript',
  },
];
