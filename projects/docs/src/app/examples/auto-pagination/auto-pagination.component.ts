import {
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe, formatDate } from '@angular/common';
import { CoreComponent, PaginationComponent as GtPaginationComponent, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-auto-pagination',
  templateUrl: './auto-pagination.component.html',
  imports: [CoreComponent, GtPaginationComponent, ReactiveFormsModule, TabsComponent],
})
export class AutoPaginationComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  // Container height drives how many rows the table shows in `length: 'auto'` mode.
  controls = this.fb.group({
    height: [420],
    search: [''],
  });

  loading = signal(true);
  searchValue = signal<string | null>(null);
  containerHeight = signal(420);
  data = signal<any[]>([]);
  tableConfig = signal<TableConfig>({});

  // Wrapper element so drag-resizes can be synced back to the height control.
  resizeBox = viewChild<ElementRef<HTMLElement>>('resizeBox');

  SNIPPETS = SOURCE_TABS;

  constructor() {
    // Keep the height control in sync when the user drags the resize handle.
    afterNextRender(() => {
      const el = this.resizeBox()?.nativeElement;
      if (!el || typeof ResizeObserver === 'undefined') {
        return;
      }
      const observer = new ResizeObserver(() => {
        const height = Math.round(el.getBoundingClientRect().height);
        if (height > 0 && height !== this.containerHeight()) {
          this.containerHeight.set(height);
          this.controls.get('height')?.setValue(height, { emitEvent: false });
        }
      });
      observer.observe(el);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  ngOnInit(): void {
    this.http.get<{ data: any[] }>('https://private-730c61-generictable.apiary-mock.com/data').subscribe((res) => {
      this.data.set(res.data);
      this.loading.set(false);
    });

    this.controls.get('height')?.valueChanges.subscribe((height) => {
      this.containerHeight.set(+(height || 0));
    });
    this.controls.get('search')?.valueChanges.subscribe((value) => {
      this.searchValue.set(value);
    });

    this.tableConfig.set({
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
      // 'auto' fits as many rows as the container height allows.
      pagination: { length: 'auto' },
    });
  }
}
