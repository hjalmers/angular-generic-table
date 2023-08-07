export const ROW_HOVER_CLICK_SNIPPETS = [
  {
    name: 'row-hover-click.component.ts',
    code: `import { Component } from '@angular/core';
import { GtRowClickEvent, GtRowHoverEvent } from '@angular-generic-table/core';


@Component({
  selector: 'row-hover-click-table',
  template: '<div class="overflow-auto">
      <button class="btn btn-outline-primary me-3" (click)="tableRef.hoverRow(1)">
        Mark second row as active
      </button>
      <button class="btn btn-outline-primary" (click)="tableRef.hoverRow(null)">
        Remove active state
      </button>
      <angular-generic-table
        [data]="data"
        [config]="config"
        (rowClick)="onRowClick($event)"
        (rowActive)="onRowHover($event)"
        #tableRef
      ></angular-generic-table>
      {{ clicked }}
    </div>',
  styles: [
    \`
      :host ::ng-deep .gt-active {
        background-color: var(--bs-highlight-bg);
      }
    \`,
  ],
})
export class RowHoverClickComponent {
  clicked = '';
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
    rowClick: true,
    activateRowOnHover: true,
  };

  onRowClick(event: GtRowClickEvent) {
    console.log('row clicked', event);
    this.clicked = \`clicked row number: \${event.index}\`;
  }
  onRowHover(event: GtRowHoverEvent) {
    console.log('row hovered', event);
  }
`,
    language: 'typescript',
  },
  {
    name: 'app.module.ts',
    code: `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RowHoverClickTableComponent } from './events-table.component';
import { GenericTableCoreModule } from '@angular-generic-table/core';

@NgModule({
  declarations: [RowHoverClickTableComponent],
  imports: [BrowserModule, GenericTableCoreModule],
  bootstrap: [RowHoverClickTableComponent]
})
export class AppModule {}`,
    language: 'typescript',
  },
];
