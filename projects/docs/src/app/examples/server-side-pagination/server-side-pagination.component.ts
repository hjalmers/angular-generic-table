import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {
  CoreComponent,
  GtPageChangeEvent,
  GtPaginationInfo,
  GtSortEvent,
  GtSortOrder,
  PaginationComponent,
  TableConfig,
  sortOrderToParams,
} from '@angular-generic-table/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { LAZY_LOADING_DOCS } from './server-side-pagination.snippets';

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
}

@Component({
  selector: 'docs-lazy-loading',
  templateUrl: './server-side-pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CoreComponent, PaginationComponent, ReactiveFormsModule, TabsComponent],
})
export class ServerSidePaginationComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  paginationForm = this.fb.group({ search: [''] });
  searchValue = signal<string | null>(null);

  loading = signal(true);
  data = signal<Array<LazyLoadingData>>([]);
  pagingInfo = signal<GtPaginationInfo | null>(null);
  sorting = signal<GtSortOrder<LazyLoadingData>>([]);
  tableConfig = signal<TableConfig<LazyLoadingData>>({});

  private requestParams$ = new BehaviorSubject({ page: 1, page_size: 10, sort_by: '+id' });

  SNIPPETS = LAZY_LOADING_DOCS;

  ngOnInit(): void {
    this.paginationForm.get('search')?.valueChanges.subscribe((value) => {
      this.searchValue.set(value);
    });

    this.requestParams$
      .pipe(
        tap(() => this.loading.set(true)),
        switchMap((params) =>
          this.http.get<LazyLoadingResponse>(
            'https://private-a6da3-generictableapi.apiary-mock.com/data',
            { params }
          )
        ),
        shareReplay(1)
      )
      .subscribe((res) => {
        this.data.set(res.data);
        this.pagingInfo.set(res.paging);
        this.sorting.set(res.sorting);
        this.loading.set(false);
      });

    this.tableConfig.set({
      class: 'table text-nowrap',
      columns: {
        id: { sortable: true },
        first_name: {},
        last_name: { sortable: true },
        gender: { sortable: true },
        birthday: {
          class: 'text-end justify-content-end',
          search: (row, column) => formatDate(row[column], 'longDate', 'en'),
          transform: { pipe: DatePipe, args: ['longDate'] },
        },
        favorite_color: { hidden: true },
        email: { hidden: true },
      },
      pagination: { length: 10 },
    });
  }

  onPageChange(event: GtPageChangeEvent): void {
    const current = { ...this.requestParams$.value };
    if (current.page !== event.index + 1) {
      this.requestParams$.next({ ...current, page: event.index + 1 });
    }
  }

  onSortOrderChange(event: GtSortEvent): void {
    const sort_by = sortOrderToParams([...event.currentSortOrder]);
    const current = { ...this.requestParams$.value };
    if (current.sort_by !== sort_by) {
      this.requestParams$.next({ ...current, page: 1, sort_by });
    }
  }
}