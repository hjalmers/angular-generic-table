import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { UntypedFormBuilder } from '@angular/forms';
import { TableConfig } from '@angular-generic-table/core';
import { pluck, tap, withLatestFrom } from 'rxjs/operators';
import { Story } from '@storybook/angular/types-6-0';
import { ADVANCED_DOCS } from './pagination.snippets';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'docs-pagination',
  templateUrl: './pagination.component.html',
  styles: [],
})
export class PaginationComponent implements OnInit {
  constructor(private fb: UntypedFormBuilder, private http: HttpClient) {}
  @ViewChild('actions', { static: true }) actions: TemplateRef<any> | undefined;
  @ViewChild('color', { static: true }) color: TemplateRef<any> | undefined;
  paginationForm = this.fb.group({
    length: [10],
    search: [''],
  });
  search$ = this.paginationForm.get('search')
    ?.valueChanges as Observable<string>;
  loading$ = new BehaviorSubject(true);
  data$: Observable<any> = this.http
    .get('https://private-730c61-generictable.apiary-mock.com/data')
    .pipe(
      pluck('data'),
      tap((_) => this.loading$.next(false))
    );

  tableConfig$: ReplaySubject<TableConfig> = new ReplaySubject(1);
  SNIPPETS = ADVANCED_DOCS;

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
      class: 'table text-nowrap',
      columns: {
        first_name: {
          sortable: true,
        },
        last_name: {
          sortable: true,
        },
        gender: {
          sortable: true,
        },
        birthday: {
          sortable: true,
          class: 'text-end',
          transform: {
            pipe: DatePipe,
            args: ['longDate'],
          },
        },
      },
      pagination: {
        length: this.paginationForm.get('length')?.value || 0,
      },
    });
  }
}

export const Pagination: Story<PaginationComponent> = (
  args: PaginationComponent
) => ({
  props: args,
  component: PaginationComponent,
});
