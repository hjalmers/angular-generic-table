export const ADVANCED_DOCS = [
  {
    name: 'pagination.component.html',
    code: `<form [formGroup]="paginationForm">
  <div class="form-row">
    <div class="form-group col-12 col-sm-auto">
      <label for="length_input">Length</label>
      <input id="length_input" formControlName="length" type="number" class="form-control">
    </div>
    <div class="form-group col-12 col-sm-auto">
      <label for="search_input">Search</label>
      <input id="search_input" formControlName="search" type="text" class="form-control">
    </div>
  </div>
</form>
<div class="mx-n3 mx-sm-0">
  <angular-generic-table [data]="data$" [config]="tableConfig$" [search]="search$" [loading]="loading$" #table>
    <div class="table-loading skeleton-loader skeleton-loader-table"></div>
    <div class="table-no-data alert alert-info mt-3">
      Table is empty
    </div>
  </angular-generic-table>
</div>
<angular-generic-table-pagination [table]="table">
</angular-generic-table-pagination>`,
    language: 'xml',
  },
  {
    name: 'pagination.component.ts',
    code: `import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { TableConfig } from '@angular-generic-table/core';
import { pluck, tap, withLatestFrom } from 'rxjs/operators';
import { Story } from '@storybook/angular/types-6-0';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'docs-pagination',
  templateUrl: './pagination.component.html',
  styles: [],
})
export class PaginationComponent implements OnInit {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  @ViewChild('actions', { static: true }) actions: TemplateRef<any> | undefined;
  @ViewChild('color', { static: true }) color: TemplateRef<any> | undefined;
  paginationForm = this.fb.group({
    length: [10],
    search: [''],
  });
  search$ = this.paginationForm.get('search')?.valueChanges as Observable<string>;
  loading$ = new BehaviorSubject(true);
  data$: Observable<any> = this.http.get('https://private-730c61-generictable.apiary-mock.com/data').pipe(
    pluck('data'),
    tap((_) => this.loading$.next(false))
  );

  tableConfig$: ReplaySubject<TableConfig> = new ReplaySubject(1);

  ngOnInit(): void {
    this.paginationForm
      .get('length')
      ?.valueChanges.pipe(withLatestFrom(this.tableConfig$))
      .subscribe(([length, config]) => {
        length = +length;
        this.tableConfig$.next({
          ...config,
          pagination: { ...config.pagination, length },
        });
      });
    this.tableConfig$.next({
      class: 'table table-mobile text-nowrap mb-0',
      columns: {
        first_name: {
          mobileHeader: true,
          sortable: true,
        },
        last_name: {
          mobileHeader: true,
          sortable: true,
        },
        gender: {
          mobileHeader: 'Sex',
          sortable: true,
        },
        birthday: {
          mobileHeader: true,
          sortable: true,
          transform: {
            pipe: DatePipe,
            args: 'longDate',
          },
        },
      },
      pagination: {
        length: this.paginationForm.get('length')?.value || 0,
      },
    });
  }
}`,
    language: 'typescript',
  },
  {
    name: 'app.module.ts',
    code: `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginationComponent } from './pagination.component';
import { GenericTableCoreModule, GenericTablePaginationModule } from '@angular-generic-table/core';

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    BrowserModule,
    GenericTableCoreModule,
    GenericTablePaginationModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [PaginationComponent]
})
export class AppModule {}`,
    language: 'typescript',
  },
];
