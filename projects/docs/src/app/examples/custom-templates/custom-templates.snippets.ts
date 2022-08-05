export const CUSTOM_TEMPLATES_DOCS = [
  {
    name: 'custom-templates.component.ts',
    code: `import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableColumn, TableConfig, TableRow } from '@angular-generic-table/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'custom-templates',
  templateUrl: \`./custom-templates.component.html\`
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
    this.clicked = \`clicked row number: \${index}\`;
  }
}`,
    language: 'typescript',
  },
  {
    name: 'app.module.ts',
    code: `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomTemplatesComponent } from './custom-templates-table.component';
import { GenericTableCoreModule } from '@angular-generic-table/core';

@NgModule({
  declarations: [CustomTemplatesComponent],
  imports: [BrowserModule, GenericTableCoreModule],
  bootstrap: [CustomTemplatesComponent]
})
export class AppModule {}`,
    language: 'typescript',
  },
  {
    name: 'custom-templates.component.html',
    code: `<angular-generic-table [data]="data" [config]="config$"></angular-generic-table>
<ng-template #actions let-row="row" let-col="col" let-index="index">
 <button class="btn btn-outline-primary btn-sm my-sm-n3 text-nowrap" (click)="clickAction(row, col, index)">Click me!</button>
</ng-template>
<ng-template #color let-row="row" let-col="col">
 <div [style.background]="row[col.key]" style="width: 1.5rem; height: 1.5rem; border-radius: 50%"></div>
</ng-template>
{{ clicked }}`,
    language: 'xml',
  },
];
