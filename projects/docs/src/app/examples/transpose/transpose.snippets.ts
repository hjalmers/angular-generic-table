export const TRANSPOSE_SNIPPETS = [
  {
    name: 'horizontal-table.component.ts',
    code: `import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PercentPipe } from '@angular/common';
import { TableConfig, TableRows } from '@angular-generic-table/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'docs-horizontal',
  templateUrl: './horizontal-table.component.html',
  styles: [],
})
export class TransposeComponent implements OnInit {
  @ViewChild('feelings', { static: true }) feelings: TemplateRef<any> | undefined;
  loading$ = new BehaviorSubject(false);
  config: TableConfig = {};
  data: TableRows = [];

  ngOnInit(): void {
    this.config = {
      rows: {
        year: {
          class: 'text-right',
          header: false,
        },
        value: {
          class: 'text-right',
        },
        change: {
          header: 'Change %',
          transform: {
            pipe: PercentPipe,
            args: [],
          },
          class: 'text-right',
        },
        feeling: {
          templateRef: this.feelings,
          class: 'text-right',
        },
      },
    };
    this.load();
  }
  simulateLoad(): void {
    this.loading$.next(true);
    // set loading state to false after 2 seconds
    setTimeout(() => this.loading$.next(false), 2000);
  }
  empty(): void {
    this.data = [];
  }
  load(): void {
    this.data = [
      {
        year: '2017',
        value: 50,
        change: 0.5,
        feeling: 'thrilled',
      },
      {
        year: '2018',
        value: 75,
        change: 0.33,
        feeling: 'positive',
      },
      {
        year: '2019',
        value: 100,
        change: 1.5,
        feeling: 'thrilled',
      },
      {
        year: '2020',
        value: 250,
        change: -0.8,
        feeling: 'negative',
      },
      {
        year: '2021',
        value: 50,
        change: null,
        feeling: 'neutral',
      },
    ];
  }
}
`,
    language: 'typescript',
  },
  {
    name: 'horizontal-table.component.html',
    code: `<button class="btn btn-outline-primary" (click)="simulateLoad()">Simulate load</button>
<button class="btn btn-outline-danger mx-3" (click)="empty()">Empty</button>
<button class="btn btn-outline-primary" (click)="load()">Reset</button>
<angular-generic-table [data]="data" [config]="config" [loading]="loading$">
  <div class="table-loading gt-skeleton-loader"></div>
  <div class="table-no-data alert alert-info mt-3">Table is empty</div>
</angular-generic-table>
<ng-template #feelings let-row="row" let-col="col">
  <div [ngSwitch]="row[col.key]">
    <ng-container *ngSwitchCase="'thrilled'">😀</ng-container>
    <ng-container *ngSwitchCase="'positive'">🙂</ng-container>
    <ng-container *ngSwitchCase="'neutral'">😐</ng-container>
    <ng-container *ngSwitchCase="'negative'">😭</ng-container>
  </div>
</ng-template>`,
    language: 'xml',
  },
  {
    name: 'app.module.ts',
    code: `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HorizontalTableComponent } from './horizontal-table.component';
import { GenericTableCoreModule } from '@angular-generic-table/core';

@NgModule({
  declarations: [HorizontalTableComponent],
  imports: [BrowserModule, GenericTableCoreModule],
  bootstrap: [HorizontalTableComponent]
})
export class AppModule {}`,
    language: 'typescript',
  },
];
