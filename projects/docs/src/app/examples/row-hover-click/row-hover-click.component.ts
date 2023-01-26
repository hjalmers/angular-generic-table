import { Component } from '@angular/core';
import { Story } from '@storybook/angular/types-6-0';
import { ROW_HOVER_CLICK_SNIPPETS } from './row-hower-click.snippets';
import { GtRowClickEvent, GtRowHoverEvent } from '@angular-generic-table/core';

@Component({
  selector: 'docs-row-hover-click',
  template: `
    <div class="overflow-auto">
      <button class="btn btn-secondary me-3" (click)="tableRef.hoverRow(1)">
        Set hover state to second row
      </button>
      <button class="btn btn-secondary" (click)="tableRef.hoverRow(null)">
        Remove hover state
      </button>
      <angular-generic-table
        [data]="data"
        [config]="config"
        (rowClick)="onRowClick($event)"
        (rowHover)="onRowHover($event)"
        #tableRef
      ></angular-generic-table>
    </div>
    {{ clicked }}
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  `,
  styles: [
    `
      :host ::ng-deep .gt-hover {
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
  config = {
    columns: {
      firstName: {},
      lastName: {},
      gender: {},
      favoriteFood: {},
    },
    rowClick: true,
    rowHover: true,
  };

  onRowClick(event: GtRowClickEvent) {
    console.log('row clicked', event);
    this.clicked = `clicked row number: ${event.index}`;
  }
  onRowHover(event: GtRowHoverEvent) {
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
