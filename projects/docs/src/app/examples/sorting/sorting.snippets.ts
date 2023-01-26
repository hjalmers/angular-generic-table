export const SIMPLE_SNIPPETS = [
  {
    name: 'sorting-table.component.ts',
    code: `import { Component } from '@angular/core';
import { TableConfig } from '@angular-generic-table/core';

interface SortingData {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  favoriteFood: string;
  birthdate: number;
}

@Component({
  template: '<div class="overflow-auto">
      <angular-generic-table
        #table
        [data]="data"
        [config]="config"
        [(sortOrder)]="sortOrder"
        (columnSort)="logSortChange($event)"
      ></angular-generic-table>
    </div>
    <div class="row mb-3 gy-3">
      <div class="col-12 col-sm-auto">
        <button
          class="btn btn-primary w-100"
          (click)="table.sortByKey('firstName', $event)"
        >
          Sort on first name
        </button>
      </div>
      <div class="col-12 col-sm-auto">
        <button class="btn btn-primary w-100" (click)="resetSort()">
          Reset sorting
        </button>
      </div>
    </div>
    <strong>Current sort order</strong>
    <p>
      <code>
        {{ sortOrder | json }}
      </code>
    </p>'
})
export class SimpleComponent {
  initialSortOrder: GtSortOrder<SortingData> = [
    { key: 'birthdate', order: 'asc' },
    { key: 'gender', order: 'asc' },
    { key: 'firstName', order: 'desc' },
  ];
  sortOrder: GtSortOrder<SortingData> = this.initialSortOrder;
  data: Array<SortingData> = [
    {
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
      favoriteFood: 'pizza',
      birthdate: 946684800000,
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      gender: 'female',
      favoriteFood: 'sushi',
      birthdate: 803404800000,
    },
    {
      firstName: 'Bob',
      lastName: 'Johnson',
      gender: 'male',
      favoriteFood: 'burgers',
      birthdate: 649345600000,
    },
    {
      firstName: 'Emily',
      lastName: 'Williams',
      gender: 'female',
      favoriteFood: 'chicken',
      birthdate: 946684800000,
    },
    {
      firstName: 'Michael',
      lastName: 'Jones',
      gender: 'male',
      favoriteFood: 'steak',
      birthdate: 803404800000,
    },
    {
      firstName: 'Matthew',
      lastName: 'Brown',
      gender: 'male',
      favoriteFood: 'seafood',
      birthdate: 649345600000,
    },
    {
      firstName: 'Jessica',
      lastName: 'Miller',
      gender: 'female',
      favoriteFood: 'salad',
      birthdate: 946684800000,
    },
    {
      firstName: 'Jacob',
      lastName: 'Moore',
      gender: 'male',
      favoriteFood: 'pasta',
      birthdate: 803404800000,
    },
    {
      firstName: 'Nicholas',
      lastName: 'Taylor',
      gender: 'male',
      favoriteFood: 'soup',
      birthdate: 649345600000,
    },
    {
      firstName: 'Ashley',
      lastName: 'Anderson',
      gender: 'female',
      favoriteFood: 'tacos',
      birthdate: 946684800000,
    },
    {
      firstName: 'Brandon',
      lastName: 'Thomas',
      gender: 'male',
      favoriteFood: 'nachos',
      birthdate: 803404800000,
    },
  ];
  config: TableConfig<SortingData> = {
    columns: {
      firstName: {
        sortable: true,
      },
      lastName: {
        sortable: true,
      },
      gender: {
        sortable: true,
      },
      favoriteFood: {
        sortable: true,
      },
      birthdate: {
        sortable: true,
        transform: {
          pipe: DatePipe,
        },
      },
    },
  };

  logSortChange(sortEvent: GtSortEvent<SortingData>) {
    console.log(sortEvent);
  }

  resetSort() {
    this.sortOrder = this.initialSortOrder;
  }
}
`,
    language: 'typescript',
  },
  {
    name: 'app.module.ts',
    code: `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SortingTableComponent } from './sorting-table.component';
import { GenericTableCoreModule } from '@angular-generic-table/core';

@NgModule({
  declarations: [SortingTableComponent],
  imports: [BrowserModule, GenericTableCoreModule],
  bootstrap: [SortingTableComponent]
})
export class AppModule {}`,
    language: 'typescript',
  },
];
