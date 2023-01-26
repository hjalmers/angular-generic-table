export const NESTED_SNIPPETS = [
  {
    name: 'nested-data.component.ts',
    code: `import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TableConfig, TableRows} from "@angular-generic-table/core";

interface NestedData {
  name: {
    first: string;
    last: string;
  };
  data: {
    details?: {
      gender: 'male' | 'female';
      favoriteFood: 'Pasta' | 'Pizza';
    };
  };
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
  template: \`
    <div class="row gy-3">
      <div class="col col-sm-auto">
        <button class="btn btn-outline-primary mb-3" (click)="loadData()">
          Load other data
        </button>
      </div>
      <div class="col col-sm-auto">
        <button class="btn btn-outline-primary mb-3" (click)="resetData()">
          Reset
        </button>
      </div>
    </div>
    <angular-generic-table [data]="data" [config]="config"></angular-generic-table>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
    <ng-template #gender let-row="row" let-col="col">
      <div [ngSwitch]="row[col.key]">
        <ng-container *ngSwitchCase="'male'">♂️</ng-container>
        <ng-container *ngSwitchCase="'female'">♀️</ng-container>
      </div>
    </ng-template>
  \`,
  styles: [],
})
export class NestedDataComponent implements OnInit {
  @ViewChild('gender', { static: true }) gender: TemplateRef<any> | undefined;

  config: TableConfig<Data> = {};
  data: Array<NestedData> = [];
  ngOnInit(): void {
    this.resetData();
    this.config = {
      columns: {
        firstName: {
          sortable: true,
          mapTo: { path: 'name.first' },
        },
        lastName: {
          sortable: true,
          mapTo: { path: 'name.last' },
        },
        gender: {
          mapTo: { path: 'data.details.gender' },
          templateRef: this.gender,
        },
        favoriteFood: {
          sortable: true,
          mapTo: { path: 'data.details.favoriteFood', missingValue: 'n/a' },
        },
        missing: {
          mapTo: { path: 'data.missingKey.noMatch', missingValue: 'n/a' },
        },
      },
    };
  }

  resetData() {
    this.data = [
      {
        name: {
          first: 'Peter',
          last: 'Parker',
        },
        data: {
          details: {
            gender: 'male',
            favoriteFood: 'Pasta',
          },
        },
      },
      {
        name: {
          first: 'Mary Jane',
          last: 'Watson',
        },
        data: {
          details: {
            gender: 'female',
            favoriteFood: 'Pizza',
          },
        },
      },
    ];
  }

  loadData(): void {
    this.data = [
      {
        name: {
          first: 'John',
          last: 'Doe',
        },
        data: {
          details: {
            gender: 'male',
            favoriteFood: 'Pasta',
          },
        },
      },
      {
        name: {
          first: 'Jane',
          last: 'Doe',
        },
        data: {
          details: {
            gender: 'female',
            favoriteFood: 'Pizza',
          },
        },
      },
      {
        name: {
          first: 'Foo',
          last: 'Bar',
        },
        data: {},
      },
    ];
  }
}`,
    language: 'typescript',
  },
  {
    name: 'app.module.ts',
    code: `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NestedDataComponent } from './nested-data.component';
import { GenericTableCoreModule } from '@angular-generic-table/core';

@NgModule({
  declarations: [NestedDataComponent],
  imports: [BrowserModule, GenericTableCoreModule],
  bootstrap: [NestedDataComponent]
})
export class AppModule {}`,
    language: 'typescript',
  },
];
