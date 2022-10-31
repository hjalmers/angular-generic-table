export const ADVANCED_DOCS = [
  {
    name: 'advanced.component.html',
    code: `<div class="row gx-2 gy-3 mb-3">
  <div class="col-12 col-sm-auto">
    <button class="btn btn-primary w-100" (click)="addData()">Add random data</button>
  </div>
  <div class="col-12 col-sm-auto">
    <button class="btn btn-danger w-100" (click)="removeData()">Remove data</button>
  </div>
  <div class="col-12 col-sm-auto">
    <button class="btn btn-secondary w-100" (click)="simulateLoad()">Load</button>
  </div>
</div>
<form [formGroup]="paginationForm">
  <div class="row">
    <div class="form-group col-12 col-sm-auto">
      <label for="length_input">Length</label>
      <input id="length_input" formControlName="length" type="number" class="form-control">
    </div>
    <div class="form-group col-12 col-sm-auto">
      <label for="search_input">Search</label>
      <input id="search_input" formControlName="search" type="text" class="form-control">
    </div>
  </div>
</form>
<div class="mx-n3 mx-sm-0">
  <angular-generic-table [data]="data$" [config]="tableConfig$" [page]="(currentPage$ | async)!" [search]="search$" [loading]="loading$" #table>
    <div class="table-loading gt-skeleton-loader"></div>
    <div class="table-no-data alert alert-info mt-3">
      Table is empty
    </div>
  </angular-generic-table>
</div>
<div class="row justify-content-between justify-content-sm-center align-items-center mt-3" *ngIf="{current: (currentPage$ | async) || 0,total: (table.table$ | async)?.info?.pageTotal || 1
} as pagination">
  <div class="col-auto">
    <button class="btn btn-primary" (click)="prev()" [disabled]="pagination.current === 0">Prev</button>
  </div>
  <div class="col-auto">
    <button class="btn btn-primary" (click)="next()" [disabled]="pagination.total -1 === pagination.current">Next</button>
  </div>
  <div class="col-auto">Current page: {{pagination.current +1}}</div>
  <div class="col-auto">Total pages: {{pagination.total}}</div>
  <div class="col-auto">
    Records: {{(data$ | async).length}}
  </div>
  <div class="col-auto">
    {{clicked}}
  </div>
</div>
<ng-template #actions let-row="row" let-col="col" let-index="index">
  <button class="btn btn-outline-primary btn-sm my-sm-n3" (click)="clickAction(row, col, index)">Click me!</button>
</ng-template>
<ng-template #color let-row="row" let-col="col">
  <div [style.background]="row[col.key]" style="width: 1.5rem; height: 1.5rem; border-radius: 50%"></div>
</ng-template>`,
    language: 'xml',
  },
  {
    name: 'advanced.component.ts',
    code: `import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { TableColumn, TableConfig, TableRow } from '@angular-generic-table/core';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  templateUrl: './advanced.component.html',
})
export class AdvancedComponent implements OnInit {
  get currentPage$(): Observable<number> {
    return this._currentPage$.asObservable();
  }

  set currentPage(value: number) {
    this._currentPage$.next(value);
  }
  constructor(private fb: FormBuilder) {}
  @ViewChild('actions', { static: true }) actions: TemplateRef<any> | undefined;
  @ViewChild('color', { static: true }) color: TemplateRef<any> | undefined;
  paginationForm = this.fb.group({
    length: [10],
    search: [''],
  });
  search$ = this.paginationForm.get('search')?.valueChanges as Observable<string>;
  loading$ = new BehaviorSubject(true);
  data$: BehaviorSubject<any> = new BehaviorSubject([
    {
      firstName: 'Peter',
      lastName: 'Parker',
      gender: 'male',
      favoriteColor: '#26BFAF',
      favoriteFood: 'Pasta',
    },
    {
      firstName: 'Mary Jane',
      lastName: 'Watson',
      gender: 'female',
      favoriteColor: '#0f0',
      favoriteFood: 'Pizza',
    },
  ]);

  private _currentPage$ = new BehaviorSubject(0);

  clicked: string = '';
  maleFirstNames = ['Peter', 'Clark', 'Ruben', 'John', 'Jack', 'Roscoe'];
  femaleFirstNames = ['Mary Jane', 'Kim', 'Sarah', 'Michelle', 'Ann'];
  lastNames = ['Andersson', 'Smith', 'Parker', 'Kent', 'Rogers', 'Lane', 'Jackson'];
  foods = ['Pizza', 'Pasta', 'Hamburger', 'Pancakes', 'Tacos', 'Lasagna', 'Meatloaf'];
  colors = ['#33d60b', '#dcafff', '#3fc9ff', '#ff1600', '#5238b1', '#fff'];

  tableConfig$: ReplaySubject<TableConfig> = new ReplaySubject(1);

  addData(): void {
    this.data$.next([...this.data$.getValue(), this.randomRecord()]);
  }

  removeData(): void {
    this.data$.next([]);
  }

  simulateLoad(): void {
    this.loading$.next(true);
    // set loading state to false after 2 seconds
    setTimeout(() => this.loading$.next(false), 2000);
  }

  clickAction(row: TableRow, column: { key: string; value: TableColumn }, index: number): void {
    console.log('clicked row:', row, 'col:', column);
    this.clicked = \`clicked row number: \${index}\`;
  }

  randomRecord(): TableRow {
    const random = Math.floor(Math.random() * 2);
    const newRecord = {
      firstName: random
        ? this.maleFirstNames[Math.floor(Math.random() * this.maleFirstNames.length)]
        : this.femaleFirstNames[Math.floor(Math.random() * this.femaleFirstNames.length)],
      lastName: this.lastNames[Math.floor(Math.random() * this.lastNames.length)],
      gender: random ? 'male' : 'female',
      favoriteColor: this.colors[Math.floor(Math.random() * this.colors.length)],
      favoriteFood: this.foods[Math.floor(Math.random() * this.foods.length)],
    };
    console.log('added new random record:', newRecord);

    return newRecord;
  }

  next = () => {
    this.currentPage = this._currentPage$.value + 1;
  };
  prev = () => {
    this.currentPage = this._currentPage$.value - 1;
  };

  ngOnInit(): void {
    this.simulateLoad();
    this.paginationForm
      .get('length')
      ?.valueChanges.pipe(withLatestFrom(this.tableConfig$))
      .subscribe(([length, config]) => {
        length = +length;
        this.tableConfig$.next({
          ...config,
          pagination: { ...config.pagination, length },
        });
      });
    this.tableConfig$.next({
      class: 'table table-mobile text-nowrap mb-0',
      columns: {
        firstName: {
          header: 'First name',
          mobileHeader: true,
          sortable: true,
          order: 0,
        },
        lastName: {
          header: 'Last name',
          mobileHeader: true,
          hidden: false,
          sortable: true,
        },
        gender: {
          mobileHeader: 'Sex',
          sortable: true,
          order: 1,
        },
        favoriteColor: {
          header: 'Favorite color',
          mobileHeader: true,
          templateRef: this.color,
          sortable: false,
          order: 2,
          search: false,
          class: 'custom-class',
        },
        favoriteFood: {
          mobileHeader: true,
          header: 'Favorite food',
          hidden: false,
          sortable: true,
          order: 0,
        },
        action: {
          mobileHeader: false,
          header: false,
          templateRef: this.actions,
          order: 6,
        },
      },
      pagination: {
        length: this.paginationForm.get('length')?.value || 0,
      },
      footer: {
        columns: {
          gender: {
            count: (data, key) => {
              let men = 0;
              let women = 0;
              for (let i = 0; i < data.length; i++) {
                if (data[i][key] === 'female') {
                  women++;
                } else if (data[i][key] === 'male') {
                  men++;
                }
              }
              return \`♂ \${men} ♀ \${women}\`;
            },
          },
          favoriteColor: {},
          action: { count: (data, key) => \`Total: \${data.length}\` },
        },
      },
    });
  }
}`,
    language: 'typescript',
  },
  {
    name: 'app.module.ts',
    code: `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdvancedComponent } from './advanced.component';
import { GenericTableCoreModule } from '@angular-generic-table/core';

@NgModule({
  declarations: [AdvancedComponent],
  imports: [BrowserModule, ReactiveFormsModule, GenericTableCoreModule],
  bootstrap: [AdvancedComponent]
})
export class AppModule {}`,
    language: 'typescript',
  },
];
