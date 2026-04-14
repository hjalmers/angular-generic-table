import { Component, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CoreComponent, TableConfig, TableRow, TableColumn } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-advanced',
  templateUrl: './advanced.component.html',
  imports: [CoreComponent, ReactiveFormsModule, TabsComponent],
})
export class AdvancedComponent implements OnInit {
  @ViewChild('actions', { static: true }) actions: TemplateRef<any> | undefined;
  @ViewChild('color', { static: true }) color: TemplateRef<any> | undefined;

  paginationForm = this.fb.group({
    length: [10],
    search: [''],
  });

  loading = signal(true);
  currentPage = signal(0);
  searchValue = signal<string | null>(null);
  data = signal<Array<TableRow>>([
    { index: 1, firstName: 'Peter', lastName: 'Parker', gender: 'male', favoriteColor: '#26BFAF', favoriteFood: 'Pasta' },
    { index: 2, firstName: 'Mary Jane', lastName: 'Watson', gender: 'female', favoriteColor: '#0f0', favoriteFood: 'Pizza' },
  ]);
  tableConfig = signal<TableConfig>({});

  clicked = signal('');
  maleFirstNames = ['Peter', 'Clark', 'Ruben', 'John', 'Jack', 'Roscoe'];
  femaleFirstNames = ['Mary Jane', 'Kim', 'Sarah', 'Michelle', 'Ann'];
  lastNames = ['Andersson', 'Smith', 'Parker', 'Kent', 'Rogers', 'Lane', 'Jackson'];
  foods = ['Pizza', 'Pasta', 'Hamburger', 'Pancakes', 'Tacos', 'Lasagna', 'Meatloaf'];
  colors = ['#33d60b', '#dcafff', '#3fc9ff', '#ff1600', '#5238b1', '#fff'];

  SNIPPETS = SOURCE_TABS;

  constructor(private fb: FormBuilder) {}

  addData(): void {
    this.data.set([...this.data(), this.randomRecord()]);
  }

  removeData(): void {
    this.data.set([]);
  }

  simulateLoad(): void {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 2000);
  }

  clickAction(row: TableRow, column: { key: string; value: TableColumn }, index: number): void {
    console.log('clicked row:', row, 'col:', column);
    this.clicked.set(`clicked row number: ${index}`);
  }

  randomRecord(): TableRow {
    const random = Math.floor(Math.random() * 2);
    return {
      index: this.data().length + 1,
      firstName: random
        ? this.maleFirstNames[Math.floor(Math.random() * this.maleFirstNames.length)]
        : this.femaleFirstNames[Math.floor(Math.random() * this.femaleFirstNames.length)],
      lastName: random ? null : this.lastNames[Math.floor(Math.random() * this.lastNames.length)],
      gender: random ? 'male' : 'female',
      favoriteColor: this.colors[Math.floor(Math.random() * this.colors.length)],
      favoriteFood: this.foods[Math.floor(Math.random() * this.foods.length)],
    };
  }

  next = () => { this.currentPage.set(this.currentPage() + 1); };
  prev = () => { this.currentPage.set(this.currentPage() - 1); };

  ngOnInit(): void {
    this.simulateLoad();
    this.paginationForm.get('length')?.valueChanges.subscribe((length) => {
      this.tableConfig.set({
        ...this.tableConfig(),
        pagination: { ...this.tableConfig().pagination, length: +(length || 0) },
      });
    });
    this.paginationForm.get('search')?.valueChanges.subscribe((value) => {
      this.searchValue.set(value);
    });
    this.tableConfig.set({
      class: 'table text-nowrap mb-0',
      mobileLayout: true,
      columns: {
        index: { sortable: true },
        firstName: { header: 'First name', mobileHeader: true, sortable: true, order: 0 },
        lastName: { header: 'Last name', mobileHeader: true, hidden: false, sortable: true },
        gender: { mobileHeader: 'Sex', sortable: true, order: 1 },
        favoriteColor: { header: 'Favorite color', mobileHeader: true, templateRef: this.color, sortable: false, order: 2, search: false, class: 'custom-class' },
        favoriteFood: { mobileHeader: true, header: 'Favorite food', hidden: false, sortable: true, order: 0 },
        action: { mobileHeader: false, header: false, templateRef: this.actions, order: 6, class: 'py-1 text-end' },
      },
      pagination: { length: this.paginationForm.get('length')?.value || 0 },
      footer: {
        columns: {
          gender: {
            count: (data, key) => {
              let men = 0, women = 0;
              for (let i = 0; i < data.length; i++) {
                if (data[i][key] === 'female') women++;
                else if (data[i][key] === 'male') men++;
              }
              return `♂ ${men} ♀ ${women}`;
            },
          },
          favoriteColor: {},
          action: { count: (data, key) => `Total: ${data.length}` },
        },
      },
    });
  }
}