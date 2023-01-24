export const SIMPLE_SNIPPETS = [
  {
    name: 'footer-table.component.ts',
    code: `import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableConfig, TableRow } from '@angular-generic-table/core';
import { DecimalPipe } from '@angular/common';

@Component({
  template: \`
    <div class="overflow-auto">
      <angular-generic-table [data]="data" [config]="config">
      </angular-generic-table>
    </div>
    <ng-template #heightTmplRef let-row="row" let-col="col">
      <ng-container *ngIf="row[col.key || col] as height"
        >{{ height }} m
      </ng-container>
    </ng-template>
  \`,
})
export class FooterComponent implements OnInit {
  @ViewChild('heightTmplRef', { static: true }) heightTmplRef:
    | TemplateRef<any>
    | undefined;
  data = [
    {
      firstName: 'Peter',
      lastName: 'Parker',
      gender: 'male',
      favoriteFood: 'Pasta',
      age: 27,
      weight: 85.457,
      height: 1.85,
    },
    {
      firstName: 'Mary Jane',
      lastName: 'Watson',
      gender: 'female',
      favoriteFood: 'Pizza',
      age: 25,
      weight: 60.123,
      height: 1.65,
    },
  ];
  config: TableConfig = {};
  ngOnInit() {
    this.config = {
      columns: {
        firstName: {},
        lastName: {},
        gender: {},
        favoriteFood: {
          class: 'text-end flex-end',
        },
        age: {
          class: 'text-end',
        },
        weight: {
          class: 'text-end',
          transform: {
            pipe: DecimalPipe,
            args: ['1.0-2'],
          },
        },
        height: {
          class: 'text-end',
          templateRef: this.heightTmplRef,
        },
      },
      footer: {
        headers: {
          sum: 'Total',
          numberOfWomen: 'Number of women',
          numberOfMen: 'Number of men',
          min: true,
          max: true,
          avg: true,
          count: true,
          static: true,
          first: true,
        },
        rowOrder: [
          'first',
          'numberOfWomen',
          'numberOfMen',
          'min',
          'max',
          'sum',
          'avg',
          'count',
        ],
        columns: {
          firstName: {},
          lastName: {
            static: 'n/a',
          },
          gender: {
            numberOfWomen: (data: Array<TableRow>, key) => {
              let count = 0;
              for (let i = 0; i < data.length; i++) {
                if (data[i][key] === 'female') {
                  count++;
                }
              }
              return count;
            },
            numberOfMen: (data: Array<TableRow>, key) => {
              let count = 0;
              for (let i = 0; i < data.length; i++) {
                if (data[i][key] === 'male') {
                  count++;
                }
              }
              return count;
            },
          },
          favoriteFood: {
            first: (data: Array<TableRow>, key) => data[0][key],
          },
          age: {
            sum: true,
            avg: true,
            count: true,
            max: true,
            min: true,
          },
          weight: {
            sum: true,
            avg: true,
            min: true,
          },
          height: {
            avg: true,
            min: true,
            max: true,
          },
        },
      },
    };
  }

}`,
    language: 'typescript',
  },
  {
    name: 'app.module.ts',
    code: `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BasicTableComponent } from './basic-table.component';
import { GenericTableCoreModule } from '@angular-generic-table/core';

@NgModule({
  declarations: [BasicTableComponent],
  imports: [BrowserModule, GenericTableCoreModule],
  bootstrap: [BasicTableComponent]
})
export class AppModule {}`,
    language: 'typescript',
  },
];
