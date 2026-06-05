import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CoreComponent, GtRowClickEvent, GtRowActiveEvent, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-row-hover-click',
  template: `
    <div class="overflow-auto">
      <button class="btn btn-outline-primary me-3" (click)="tableRef.activateRow(1)">Mark second row as active</button>
      <button class="btn btn-outline-primary" (click)="tableRef.activateRow(null)">Remove active state</button>
      <angular-generic-table
        [data]="data"
        [config]="config"
        (rowClick)="onRowClick($event)"
        (rowActive)="onRowHover($event)"
        #tableRef
      ></angular-generic-table>
    </div>
    {{ clicked() }}
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  `,
  styles: [
    `
      :host ::ng-deep .gt-active {
        --bs-table-bg-state: var(--bs-highlight-bg);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CoreComponent, TabsComponent],
})
export class RowHoverClickComponent {
  clicked = signal('');
  data = [
    { firstName: 'Peter', lastName: 'Parker', gender: 'male', favoriteFood: 'Pasta' },
    { firstName: 'Mary Jane', lastName: 'Watson', gender: 'female', favoriteFood: 'Pizza' },
  ];
  config: TableConfig = {
    columns: { firstName: {}, lastName: {}, gender: {}, favoriteFood: {} },
    rowClick: true,
    activateRowOnHover: true,
  };

  onRowClick(event: GtRowClickEvent) {
    console.log('row clicked', event);
    this.clicked.set(`clicked row number: ${event.index}`);
  }
  onRowHover(event: GtRowActiveEvent) {
    console.log('row hovered', event);
  }

  SNIPPETS = SOURCE_TABS;
}
