import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { KeyValuePipe } from '@angular/common';
import {
  CoreComponent,
  GtRowSelectEvent,
  GtRowClickEvent,
  GtRowActiveEvent,
  PaginationComponent,
  TableConfig,
  TableRow,
} from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

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
  styles: [`
    :host ::ng-deep .gt-active { background-color: var(--bs-highlight-bg); }
    :host ::ng-deep .table > tbody > tr { cursor: pointer; }
  `],
  imports: [CoreComponent, PaginationComponent, ReactiveFormsModule, KeyValuePipe, TabsComponent],
})
export class RowSelectComponent implements OnInit {
  private http = inject(HttpClient);

  activateOnRowHover = true;
  activateOnNavigation = true;
  loading = signal(true);
  activeRow: RowData | null = null;
  customClassNames = { selectedRow: 'table-active' };
  lengthCtrl = new FormControl(15);
  data = signal<TableRow[]>([]);
  config = signal<TableConfig>({});
  selection: { [key: string]: boolean } = {};

  SNIPPETS = SOURCE_TABS;

  ngOnInit(): void {
    this.http
      .get<{ data: TableRow[] }>('https://private-730c61-generictable.apiary-mock.com/data')
      .subscribe((res) => {
        this.data.set(res.data);
        this.loading.set(false);
      });

    this.lengthCtrl.valueChanges.subscribe((length) => {
      const len = length ? (length < 0 ? 0 : length) : 0;
      this.config.set({
        ...this.config(),
        pagination: { length: len },
      });
    });

    this.config.set({
      columns: {
        id: { sortable: true },
        first_name: { sortable: true },
        last_name: { sortable: true },
        gender: { sortable: true },
        email: { sortable: true },
      },
      pagination: { length: this.lengthCtrl.value || 0 },
      rowClick: true,
      activateRowOnHover: this.activateOnRowHover,
      activateRowOnKeyboardNavigation: this.activateOnNavigation,
    });
  }

  toggleRowHover(): void {
    this.activateOnRowHover = !this.activateOnRowHover;
    this.config.set({ ...this.config(), activateRowOnHover: this.activateOnRowHover });
  }

  toggleRowNavigation(): void {
    this.activateOnNavigation = !this.activateOnNavigation;
    this.config.set({ ...this.config(), activateRowOnKeyboardNavigation: this.activateOnNavigation });
  }

  setActiveRow(event: GtRowActiveEvent): void {
    if (event.event && event.event.type === 'keydown') {
      event.event.preventDefault();
    }
    this.activeRow = event.row as RowData | null;
  }

  isSelected(row: RowData, selection: typeof RowSelectComponent.prototype.selection): boolean {
    return !!selection[row.id];
  }

  selectRow(event: GtRowClickEvent | GtRowSelectEvent): void {
    const selection = { ...this.selection };
    const row = event.row;
    if (!row) return;
    if (!selection[row.id]) {
      selection[row.id] = true;
    } else {
      delete selection[row.id];
    }
    this.selection = selection;
  }

  get isAllSelected(): boolean {
    return Object.keys(this.selection).length > 0;
  }

  toggleAll(): void {
    if (this.isAllSelected) {
      this.selection = {};
      return;
    }
    const selection = { ...this.selection };
    this.data().forEach((row, index) => {
      selection[index] = true;
    });
    this.selection = selection;
  }
}