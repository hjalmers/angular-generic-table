import { Component, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { CoreComponent, GtDeltaComponent, PaginationComponent, TableConfig } from '@angular-generic-table/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

interface RawData {
  year: string;
  value: number;
}
interface YearData extends RawData {
  delta: number;
  deltaIndex: number;
  combined: number;
  deltaAbsolute: number;
}

@Component({
  selector: 'docs-transpose',
  template: `
    <form [formGroup]="reactiveForm">
      <div class="row gy-3 gx-3 align-items-end mb-3">
        <div class="form-group col-6 col-sm-auto">
          <label for="length_input">Number of rows</label>
          <input id="length_input" formControlName="length" type="number" class="form-control" />
        </div>
        <div class="form-group col-6 col-sm-auto">
          <label for="search_input">Search</label>
          <input id="search_input" formControlName="search" type="text" class="form-control" />
        </div>
        <div class="col-auto">
          <button class="btn btn-outline-primary w-100" (click)="simulateLoad()">Simulate load</button>
        </div>
        <div class="col col-sm-auto">
          <button class="btn btn-outline-danger w-100" (click)="empty()">Empty</button>
        </div>
        <div class="col col-sm-auto">
          <button class="btn btn-outline-primary w-100" (click)="load()">Reset</button>
        </div>
        <div class="col col-sm-auto">
          <button class="btn btn-outline-primary w-100" (click)="transpose()">Transpose</button>
        </div>
      </div>
      <div class="overflow-auto">
        <angular-generic-table
          #table
          [data]="data()"
          [config]="tableConfig()"
          [loading]="loading()"
          [search]="searchValue()"
        >
          <div class="table-loading gt-skeleton-loader"></div>
          <div class="table-no-data alert alert-info mt-3">Table is empty</div>
        </angular-generic-table>
      </div>
      <angular-generic-table-pagination [table]="table"></angular-generic-table-pagination>
      <ng-template #delta let-index="index" let-data="data">
        <gt-delta [index]="index" [data]="data"></gt-delta>
      </ng-template>
      <ng-template #deltaAbsolute let-index="index" let-data="data">
        <gt-delta [index]="index" [data]="data" [deltaTemplate]="deltaTemplate"></gt-delta>
      </ng-template>
      <ng-template #deltaIndex let-index="index" let-data="data">
        <gt-delta [index]="index" [data]="data" [baseIndex]="0"></gt-delta>
      </ng-template>
      <ng-template #combined let-index="index" let-data="data" let-row="row" let-col="col">
        {{ row.value }}
        @if (index > 0) {
          <gt-delta [index]="index" [data]="data"></gt-delta>
        }
      </ng-template>
      <ng-template #deltaTemplate let-delta="delta">
        <span>{{ delta.absolute }}</span>
      </ng-template>
      <docs-tabs [content]="SNIPPETS"></docs-tabs>
    </form>
  `,
  imports: [CoreComponent, PaginationComponent, GtDeltaComponent, ReactiveFormsModule, TabsComponent],
})
export class TransposeComponent implements OnInit {
  @ViewChild('delta', { static: true }) delta: TemplateRef<any> | undefined;
  @ViewChild('deltaAbsolute', { static: true }) deltaAbsolute: TemplateRef<any> | undefined;
  @ViewChild('deltaIndex', { static: true }) deltaIndex: TemplateRef<any> | undefined;
  @ViewChild('combined', { static: true }) combined: TemplateRef<any> | undefined;

  loading = signal(false);
  searchValue = signal<string | null>(null);
  tableConfig = signal<TableConfig<YearData>>({});
  data = signal<Array<RawData>>([]);

  reactiveForm = this.fb.group({
    length: [10],
    search: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transpose();
    this.load();
    this.reactiveForm.get('length')?.valueChanges.subscribe((length) => {
      this.tableConfig.set({
        ...this.tableConfig(),
        pagination: { ...this.tableConfig().pagination, length: +(length || 0) },
      });
    });
    this.reactiveForm.get('search')?.valueChanges.subscribe((value) => {
      this.searchValue.set(value);
    });
  }

  simulateLoad(): void {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 2000);
  }

  empty(): void {
    this.data.set([]);
  }

  load(): void {
    this.data.set([
      { year: '2010', value: 15 },
      { year: '2011', value: 30 },
      { year: '2012', value: 25 },
      { year: '2013', value: 0 },
      { year: '2014', value: 40 },
      { year: '2015', value: 0 },
      { year: '2016', value: -5 },
      { year: '2018', value: 75 },
      { year: '2019', value: 100 },
      { year: '2020', value: 250 },
      { year: '2021', value: 50 },
      { year: '2022', value: 60 },
    ]);
  }

  transpose(): void {
    if (this.tableConfig().columns) {
      this.tableConfig.set({
        stickyHeaders: { row: true, column: true },
        rows: {
          year: { sortable: true, header: false, class: 'text-end' },
          value: { class: 'text-end' },
          delta: { header: 'Delta %', templateRef: this.delta, class: 'text-end' },
          deltaIndex: { header: 'Since inception %', templateRef: this.deltaIndex, class: 'text-end' },
          deltaAbsolute: { header: 'Delta', templateRef: this.deltaAbsolute, class: 'text-end' },
          combined: { header: 'Value with change', templateRef: this.combined, class: 'text-end text-nowrap' },
        },
      });
    } else {
      this.tableConfig.set({
        stickyHeaders: { row: true, column: true },
        columns: {
          year: { sortable: true },
          value: { class: 'text-end' },
          delta: { header: 'Delta %', templateRef: this.delta, class: 'text-end' },
          deltaIndex: { header: 'Since inception %', templateRef: this.deltaIndex, class: 'text-end' },
          deltaAbsolute: { header: 'Delta', templateRef: this.deltaAbsolute, class: 'text-end' },
          combined: { header: 'Value with change', templateRef: this.combined, class: 'text-end text-nowrap' },
        },
        pagination: { length: this.reactiveForm.get('length')?.value || 0 },
      });
    }
  }

  SNIPPETS = SOURCE_TABS;
}
