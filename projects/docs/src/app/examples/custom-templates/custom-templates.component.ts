import { ChangeDetectionStrategy, Component, OnInit, signal, TemplateRef, ViewChild, input } from '@angular/core';
import { CoreComponent, TableConfig, TableRow, TableColumn } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-color-cell',
  template: `
    <div [style.background]="row()[col().key]" style="width: 1.5rem; height: 1.5rem; border-radius: 50%"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorCellComponent {
  readonly row = input.required<any>();
  readonly col = input.required<{ key: string; value: TableColumn }>();
  readonly index = input.required<number>();
  readonly data = input<any[]>();
  readonly search = input<string | null>(null);
}

@Component({
  selector: 'docs-color-header',
  template: `<span>&#127912; {{ column().value.header || column().key }}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorHeaderComponent {
  readonly column = input.required<{ key: string; value: TableColumn }>();
  readonly sortable = input(false);
  readonly sortOrder = input<any[]>([]);
  readonly search = input<string | null>(null);
}

@Component({
  selector: 'docs-custom-templates',
  template: `
    <div class="overflow-auto">
      <angular-generic-table [data]="data" [config]="config()"></angular-generic-table>
    </div>
    <ng-template #actions let-row="row" let-col="col" let-index="index">
      <button class="btn btn-outline-primary btn-sm my-sm-n3 text-nowrap" (click)="clickAction(row, col, index)">
        Click me!
      </button>
    </ng-template>
    {{ clicked() }}
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  `,
  imports: [CoreComponent, TabsComponent],
})
export class CustomTemplatesComponent implements OnInit {
  @ViewChild('actions', { static: true }) actions: TemplateRef<any> | undefined;
  clicked = signal('');

  data = [
    { firstName: 'Peter', lastName: 'Parker', gender: 'male', favoriteColor: '#26BFAF', favoriteFood: 'Pasta' },
    { firstName: 'Mary Jane', lastName: 'Watson', gender: 'female', favoriteColor: '#0f0', favoriteFood: 'Pizza' },
  ];
  config = signal<TableConfig>({});

  SNIPPETS = SOURCE_TABS;

  ngOnInit(): void {
    this.config.set({
      columns: {
        firstName: {},
        lastName: {},
        gender: {},
        favoriteColor: { component: ColorCellComponent, headerComponent: ColorHeaderComponent, header: 'Color' },
        favoriteFood: {},
        action: { templateRef: this.actions },
      },
    });
  }

  clickAction(row: TableRow, column: { key: string; value: TableColumn }, index: number): void {
    console.log('clicked row:', row, 'col:', column);
    this.clicked.set(`clicked row number: ${index}`);
  }
}
