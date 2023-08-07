import { Component } from '@angular/core';
import { Story } from '@storybook/angular/types-6-0';
import { ROW_HOVER_CLICK_SNIPPETS } from './row-hower-click.snippets';
import {
  GtRowClickEvent,
  GtRowActiveEvent,
  TableConfig,
} from '@angular-generic-table/core';

@Component({
  selector: 'docs-row-hover-click',
  template: `
    <div class="overflow-auto">
      <button
        class="btn btn-outline-primary me-3"
        (click)="tableRef.activateRow(1)"
      >
        Mark second row as active
      </button>
      <button
        class="btn btn-outline-primary"
        (click)="tableRef.activateRow(null)"
      >
        Remove active state
      </button>
      <angular-generic-table
        [data]="data"
        [config]="config"
        (rowClick)="onRowClick($event)"
        (rowActive)="onRowHover($event)"
        #tableRef
      ></angular-generic-table>
    </div>
    {{ clicked }}
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  `,
  styles: [
    `
      :host ::ng-deep .gt-active {
        background-color: var(--bs-highlight-bg);
      }
    `,
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
  config: TableConfig = {
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
    this.clicked = `clicked row number: ${event.index}`;
  }
  onRowHover(event: GtRowActiveEvent) {
    console.log('row hovered', event);
  }

  SNIPPETS = ROW_HOVER_CLICK_SNIPPETS;
}

export const RowHoverClick: Story<RowHoverClickComponent> = (
  args: RowHoverClickComponent
) => ({
  props: args,
  component: RowHoverClickComponent,
});
