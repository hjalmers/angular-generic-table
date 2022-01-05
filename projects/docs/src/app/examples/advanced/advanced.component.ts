import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { TableConfig, TableRow, TableColumn } from '@angular-generic-table/core';
import { withLatestFrom } from 'rxjs/operators';
import { Story } from '@storybook/angular/types-6-0';
import { ADVANCED_DOCS } from './advanced.snippets';

@Component({
  selector: 'docs-advanced',
  templateUrl: './advanced.component.html',
  styles: [],
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
  SNIPPETS = ADVANCED_DOCS;

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
    this.clicked = `clicked row number: ${index}`;
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
    });
  }
}

export const Advanced: Story<AdvancedComponent> = (args: AdvancedComponent) => ({
  props: args,
  component: AdvancedComponent,
});
