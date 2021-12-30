export const SIMPLE_SNIPPETS = [
  {
    name: 'basic-table.component.ts',
    code: `import { Component } from '@angular/core';

@Component({
  selector: 'basic-table',
  template: '<angular-generic-table [data]="data" [config]="config"></angular-generic-table>'
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
`,
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
