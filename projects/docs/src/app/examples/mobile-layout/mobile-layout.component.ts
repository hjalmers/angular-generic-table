import { Component, Pipe, PipeTransform, signal, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CoreComponent, TableColumn, TableConfig, TableRow } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { MOBILE_LAYOUT_SNIPPETS } from './mobileLayout.snippets';

@Pipe({ name: 'genderPipe' })
export class GenderPipe implements PipeTransform {
  transform(gender: 'male' | 'female'): string {
    return gender === 'male' ? '👨' : '👩';
  }
}

@Component({
  selector: 'docs-mobile-layout',
  template: `
    <div class="d-flex justify-content-end mb-1 align-items-center">
      {{ clicked() }}
      <button class="btn btn-link d-sm-none" (click)="toggleLayout()">
        {{ mobileLayout() ? 'Desktop ' : 'Mobile ' }} layout
      </button>
    </div>
    <div [class.overflow-auto]="!mobileLayout()">
      <angular-generic-table [data]="data" [config]="config()"></angular-generic-table>
    </div>
    <ng-template #actions let-row="row" let-col="col" let-index="index">
      <button
        class="btn btn-outline-primary btn-sm my-sm-n3 text-nowrap"
        (click)="clickAction(row, col, index)"
      >
        Click me!
      </button>
    </ng-template>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  `,
  styles: [`
    .table th { white-space: nowrap; }
  `],
  encapsulation: ViewEncapsulation.None,
  imports: [CoreComponent, TabsComponent],
})
export class MobileLayoutComponent {
  @ViewChild('actions', { static: true }) actions: TemplateRef<any> | undefined;
  clicked = signal('');
  mobileLayout = signal(true);

  data = [
    { firstName: 'Peter', lastName: 'Parker', gender: 'male', favoriteFood: 'Pasta' },
    { firstName: 'Mary Jane', lastName: 'Watson', gender: 'female', favoriteFood: 'Pizza' },
  ];

  config = signal<TableConfig>({
    mobileLayout: this.mobileLayout(),
    columns: {
      firstName: { mobileHeader: true, sortable: true },
      lastName: { mobileHeader: true, sortable: true },
      gender: { mobileHeader: true, transform: { pipe: GenderPipe } },
      favoriteFood: { mobileHeader: true },
      action: { mobileHeader: false, header: false, templateRef: undefined },
    },
  });

  SNIPPETS = MOBILE_LAYOUT_SNIPPETS;

  toggleLayout(): void {
    this.mobileLayout.set(!this.mobileLayout());
    this.config.set({
      ...this.config(),
      mobileLayout: this.mobileLayout(),
      columns: {
        ...this.config().columns,
        action: { ...this.config().columns!['action'], templateRef: this.actions },
      },
    });
  }

  clickAction(row: TableRow, column: { key: string; value: TableColumn }, index: number): void {
    console.log('clicked row:', row, 'col:', column);
    this.clicked.set(`Clicked row number: ${index}`);
  }
}