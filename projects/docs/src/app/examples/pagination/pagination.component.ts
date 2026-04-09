import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe, formatDate } from '@angular/common';
import { CoreComponent, PaginationComponent as GtPaginationComponent, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { ADVANCED_DOCS } from './pagination.snippets';

@Component({
  selector: 'docs-pagination',
  templateUrl: './pagination.component.html',
  imports: [CoreComponent, GtPaginationComponent, ReactiveFormsModule, TabsComponent],
})
export class PaginationComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  paginationForm = this.fb.group({
    length: [10],
    search: [''],
  });

  loading = true;
  searchValue: string | null = null;
  data: any[] = [];
  tableConfig: TableConfig = {};

  SNIPPETS = ADVANCED_DOCS;

  ngOnInit(): void {
    this.http
      .get<{ data: any[] }>('https://private-730c61-generictable.apiary-mock.com/data')
      .subscribe((res) => {
        this.data = res.data;
        this.loading = false;
      });

    this.paginationForm.get('length')?.valueChanges.subscribe((length) => {
      this.tableConfig = {
        ...this.tableConfig,
        pagination: { ...this.tableConfig.pagination, length: +(length || 0) },
      };
    });
    this.paginationForm.get('search')?.valueChanges.subscribe((value) => {
      this.searchValue = value;
    });

    this.tableConfig = {
      class: 'table text-nowrap',
      columns: {
        first_name: { sortable: true },
        last_name: { sortable: true },
        gender: { sortable: true },
        birthday: {
          sortable: true,
          class: 'text-end justify-content-end',
          search: (row, column) => formatDate(row[column], 'longDate', 'en'),
          transform: { pipe: DatePipe, args: ['longDate'] },
        },
      },
      pagination: { length: this.paginationForm.get('length')?.value || 0 },
    };
  }
}