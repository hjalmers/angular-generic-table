import { Component, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { CoreComponent, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

interface NestedData {
  name: { first: string; last: string };
  data: { details?: { gender: 'male' | 'female'; favoriteFood: 'Pasta' | 'Pizza' } };
}

interface Data {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  favoriteFood: 'Pasta' | 'Pizza';
  missing: string;
}

@Component({
  selector: 'nested-data',
  template: `
    <div class="row gy-3">
      <div class="col col-sm-auto">
        <button class="btn btn-outline-primary mb-3" (click)="loadData()">Load other data</button>
      </div>
      <div class="col col-sm-auto">
        <button class="btn btn-outline-primary mb-3" (click)="resetData()">Reset</button>
      </div>
    </div>
    <div class="overflow-auto">
      <angular-generic-table [data]="data()" [config]="config()"></angular-generic-table>
    </div>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
    <ng-template #gender let-row="row" let-col="col">
      @switch (row[col.key]) {
        @case ('male') {
          ♂️
        }
        @case ('female') {
          ♀️
        }
      }
    </ng-template>
  `,
  imports: [CoreComponent, TabsComponent],
})
export class NestedDataComponent implements OnInit {
  @ViewChild('gender', { static: true }) gender: TemplateRef<any> | undefined;
  config = signal<TableConfig<Data>>({});
  data = signal<Array<NestedData>>([]);

  ngOnInit(): void {
    this.resetData();
    this.config.set({
      columns: {
        firstName: { sortable: true, mapTo: { path: 'name.first' } },
        lastName: { sortable: true, mapTo: { path: 'name.last' } },
        gender: { mapTo: { path: 'data.details.gender' }, templateRef: this.gender },
        favoriteFood: { sortable: true, mapTo: { path: 'data.details.favoriteFood', missingValue: 'n/a' } },
        missing: { mapTo: { path: 'data.missingKey.noMatch', missingValue: 'n/a' } },
      },
    });
  }

  resetData() {
    this.data.set([
      { name: { first: 'Peter', last: 'Parker' }, data: { details: { gender: 'male', favoriteFood: 'Pasta' } } },
      { name: { first: 'Mary Jane', last: 'Watson' }, data: { details: { gender: 'female', favoriteFood: 'Pizza' } } },
    ]);
  }

  loadData(): void {
    this.data.set([
      { name: { first: 'John', last: 'Doe' }, data: { details: { gender: 'male', favoriteFood: 'Pasta' } } },
      { name: { first: 'Jane', last: 'Doe' }, data: { details: { gender: 'female', favoriteFood: 'Pizza' } } },
      { name: { first: 'Foo', last: 'Bar' }, data: {} },
    ]);
  }

  SNIPPETS = SOURCE_TABS;
}
