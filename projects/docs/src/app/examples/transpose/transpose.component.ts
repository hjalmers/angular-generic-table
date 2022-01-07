import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Story } from '@storybook/angular/types-6-0';
import { TRANSPOSE_SNIPPETS } from './transpose.snippets';
import { PercentPipe } from '@angular/common';
import { TableConfig, TableRows } from '@angular-generic-table/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'docs-transpose',
  template: `
    <button class="btn btn-outline-primary" (click)="simulateLoad()">Simulate load</button>
    <button class="btn btn-outline-danger mx-3" (click)="empty()">Empty</button>
    <button class="btn btn-outline-primary" (click)="load()">Reset</button>
    <angular-generic-table [data]="data" [config]="config" [loading]="loading$">
      <div class="table-loading skeleton-loader skeleton-loader-table"></div>
      <div class="table-no-data alert alert-info mt-3">Table is empty</div>
    </angular-generic-table>
    <ng-template #feelings let-row="row" let-col="col">
      <div [ngSwitch]="row[col.key]">
        <ng-container *ngSwitchCase="'thrilled'">😀</ng-container>
        <ng-container *ngSwitchCase="'positive'">🙂</ng-container>
        <ng-container *ngSwitchCase="'neutral'">😐</ng-container>
        <ng-container *ngSwitchCase="'negative'">😭</ng-container>
      </div>
    </ng-template>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  `,
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

  SNIPPETS = TRANSPOSE_SNIPPETS;
}

export const Horizontal: Story<TransposeComponent> = (args: TransposeComponent) => ({
  props: args,
  component: TransposeComponent,
});
