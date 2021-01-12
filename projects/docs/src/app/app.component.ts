import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { TableConfig } from '../../../core/src/lib/models/table-config.interface';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
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
  search$ = this.paginationForm.get('search')!.valueChanges;
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

  addData() {
    this.data$.next([...this.data$.getValue(), this.randomRecord()]);
  }

  clickAction(row: any, column: any, index: number) {
    console.log('clicked row:', row, 'col:', column);
    this.clicked = `clicked row number: ${index}`;
  }

  randomRecord() {
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
    console.log(newRecord);

    return newRecord;
  }

  next = () => {
    this.currentPage = this._currentPage$.value + 1;
  };
  prev = () => {
    this.currentPage = this._currentPage$.value - 1;
  };

  ngOnInit() {
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
      columns: {
        firstName: {
          header: 'First name',
          sortable: true,
          order: 0,
        },
        lastName: {
          header: 'Last name',
          hidden: false,
          sortable: true,
        },
        gender: {
          header: 'Gender',
          sortable: true,
          order: 1,
        },
        favoriteColor: {
          header: 'Favorite color',
          templateRef: this.color,
          sortable: false,
          order: 2,
          search: false,
        },
        favoriteFood: {
          header: 'Favorite food',
          hidden: false,
          sortable: true,
          order: 0,
        },
        action: {
          header: 'Action',
          templateRef: this.actions,
        },
      },
      pagination: {
        length: this.paginationForm.get('length')!.value || 0,
      },
    });
  }
}
