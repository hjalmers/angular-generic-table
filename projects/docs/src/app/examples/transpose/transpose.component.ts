import { Component } from '@angular/core';
import { Story } from '@storybook/angular/types-6-0';
import { SIMPLE_SNIPPETS } from './simple.snippets';

@Component({
  selector: 'docs-simple',
  template: `
    <angular-generic-table [data]="data" [config]="config"></angular-generic-table>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  `,
  styles: [],
})
export class SimpleComponent {
  data = [
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
  config = {
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
