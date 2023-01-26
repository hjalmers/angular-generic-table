import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Story } from '@storybook/angular/types-6-0';
import { SIMPLE_SNIPPETS } from './simple.snippets';
import { TableConfig, TableRow } from '@angular-generic-table/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'docs-footer',
  template: `
    <div class="overflow-auto">
      <angular-generic-table [data]="data" [config]="config">
      </angular-generic-table>
    </div>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
    <ng-template #heightTmplRef let-row="row" let-col="col">
      <ng-container *ngIf="row[col.key || col] as height"
        >{{ height }} m
      </ng-container>
    </ng-template>
  `,
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
      mobileLayout: true,
      columns: {
        firstName: {
          mobileHeader: true,
        },
        lastName: {
          mobileHeader: true,
        },
        gender: {
          mobileHeader: true,
        },
        favoriteFood: {
          mobileHeader: true,
          class: 'text-end flex-end',
        },
        age: {
          mobileHeader: true,
          class: 'text-end',
        },
        weight: {
          mobileHeader: true,
          class: 'text-end',
          transform: {
            pipe: DecimalPipe,
            args: ['1.0-2'],
          },
        },
        height: {
          mobileHeader: true,
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

  SNIPPETS = SIMPLE_SNIPPETS;
}

export const Footer: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
  component: FooterComponent,
});
