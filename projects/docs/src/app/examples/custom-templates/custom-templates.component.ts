import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Story } from '@storybook/angular/types-6-0';
import { TableConfig, TableRow, TableColumn } from '@angular-generic-table/core';
import { ReplaySubject } from 'rxjs';
import { CUSTOM_TEMPLATES_DOCS } from './custom-templates.snippets';

@Component({
  selector: 'docs-custom-templates',
  template: `
    <angular-generic-table [data]="data" [config]="config$"></angular-generic-table>
    <ng-template #actions let-row="row" let-col="col" let-index="index">
      <button class="btn btn-outline-primary btn-sm my-sm-n3" (click)="clickAction(row, col, index)">Click me!</button>
    </ng-template>
    <ng-template #color let-row="row" let-col="col">
      <div [style.background]="row[col.key]" style="width: 1.5rem; height: 1.5rem; border-radius: 50%"></div>
    </ng-template>
    {{ clicked }}
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  `,
})
export class CustomTemplatesComponent implements OnInit {
  @ViewChild('actions', { static: true }) actions: TemplateRef<any> | undefined;
  @ViewChild('color', { static: true }) color: TemplateRef<any> | undefined;
  clicked = '';

  data = [
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
  ];
  config$: ReplaySubject<TableConfig> = new ReplaySubject(1);

  SNIPPETS = CUSTOM_TEMPLATES_DOCS;
  ngOnInit(): void {
    this.config$.next({
      columns: {
        firstName: {},
        lastName: {},
        gender: {},
        favoriteColor: {
          templateRef: this.color,
        },
        favoriteFood: {},
        action: {
          templateRef: this.actions,
        },
      },
    });
  }
  clickAction(row: TableRow, column: { key: string; value: TableColumn }, index: number): void {
    console.log('clicked row:', row, 'col:', column);
    this.clicked = `clicked row number: ${index}`;
  }
}

export const CustomTemplates: Story<CustomTemplatesComponent> = (args: CustomTemplatesComponent) => ({
  props: args,
  component: CustomTemplatesComponent,
});
