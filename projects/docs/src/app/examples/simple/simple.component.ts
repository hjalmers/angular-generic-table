import { Component } from '@angular/core';
import { Story } from '@storybook/angular/types-6-0';
import { SIMPLE_SNIPPETS } from './simple.snippets';
import { TableConfig } from '@angular-generic-table/core';
interface BasicData {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  favoriteFood: string;
}
@Component({
  template: `
    <div class="overflow-auto">
      <angular-generic-table
        [data]="data"
        [config]="config"
      ></angular-generic-table>
    </div>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  `,
  styles: [],
})
export class SimpleComponent {
  data: Array<BasicData> = [
    {
      firstName: 'Peter',
      lastName: 'Parker',
      gender: 'male',
      favoriteFood: 'Pasta',
    },
    {
      firstName: 'Mary Jane',
      lastName: 'Watson',
      gender: 'female',
      favoriteFood: 'Pizza',
    },
  ];
  config: TableConfig<BasicData> = {
    columns: {
      firstName: {},
      lastName: {},
      gender: {},
      favoriteFood: {},
    },
  };

  SNIPPETS = SIMPLE_SNIPPETS;
}

export const Simple: Story<SimpleComponent> = (args: SimpleComponent) => ({
  props: args,
  component: SimpleComponent,
});
