import { Component } from '@angular/core';
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
  `,
})
export class FooterComponent {
  data = [
    {
      firstName: 'Peter',
      lastName: 'Parker',
      gender: 'male',
      favoriteFood: 'Pasta',
      age: 27,
      weight: 85.457,
    },
    {
      firstName: 'Mary Jane',
      lastName: 'Watson',
      gender: 'female',
      favoriteFood: 'Pizza',
      age: 25,
      weight: 60.123,
    },
  ];
  config: TableConfig = {
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
      },
    },
  };

  SNIPPETS = SIMPLE_SNIPPETS;
}

export const Footer: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
  component: FooterComponent,
});
