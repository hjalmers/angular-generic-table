import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CoreComponent, GtDeltaComponent, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { HORIZONTAL_TABLE_SNIPPETS } from './horizontal-table.snippets';

@Component({
  selector: 'docs-horizontal-table',
  template: `
    <button class="btn btn-outline-primary" (click)="simulateLoad()">Simulate load</button>
    <button class="btn btn-outline-danger mx-3" (click)="empty()">Empty</button>
    <button class="btn btn-outline-primary" (click)="load()">Reset</button>
    <div class="overflow-auto">
      <angular-generic-table [data]="data" [config]="config" [loading]="loading">
        <div class="table-loading gt-skeleton-loader"></div>
        <div class="table-no-data alert alert-info mt-3">Table is empty</div>
      </angular-generic-table>
    </div>
    <ng-template #feelings let-row="row" let-col="col">
      @switch (row[col.key]) {
        @case ('thrilled') { 😀 }
        @case ('positive') { 🙂 }
        @case ('neutral') { 😐 }
        @case ('negative') { 😭 }
      }
    </ng-template>
    <ng-template #delta let-data="data" let-index="index">
      <gt-delta [index]="index" [data]="data"></gt-delta>
    </ng-template>
    <ng-template #deltaIndex let-data="data" let-index="index">
      <gt-delta [index]="index" [baseIndex]="0" [data]="data"></gt-delta>
    </ng-template>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  `,
  imports: [CoreComponent, GtDeltaComponent, TabsComponent],
})
export class HorizontalTableComponent implements OnInit {
  @ViewChild('feelings', { static: true }) feelings: TemplateRef<any> | undefined;
  @ViewChild('delta', { static: true }) delta: TemplateRef<any> | undefined;
  @ViewChild('deltaIndex', { static: true }) deltaIndex: TemplateRef<any> | undefined;

  loading = false;
  config: TableConfig = {};
  data: any = [];

  ngOnInit(): void {
    this.config = {
      stickyHeaders: { row: true },
      mobileLayout: true,
      rows: {
        year: { class: 'text-end', header: false },
        value: { class: 'text-end' },
        delta: { header: 'Delta %', templateRef: this.delta, class: 'text-end' },
        deltaIndex: { header: 'Since inception %', templateRef: this.deltaIndex, class: 'text-end' },
        feeling: { templateRef: this.feelings, class: 'text-end' },
      },
    };
    this.load();
  }

  simulateLoad(): void {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
  }

  empty(): void { this.data = []; }

  load(): void {
    this.data = [
      { year: '2017', value: 50, feeling: 'neutral' },
      { year: '2018', value: 75, feeling: 'positive' },
      { year: '2019', value: 100, feeling: 'thrilled' },
      { year: '2020', value: 250, feeling: 'thrilled' },
      { year: '2021', value: 50, feeling: 'negative' },
    ];
  }

  SNIPPETS = HORIZONTAL_TABLE_SNIPPETS;
}
