export const MOBILE_LAYOUT_SNIPPETS = [
  {
    name: 'mobile-layout.component.ts',
    code: `import {Component, Pipe, PipeTransform, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {TableColumn, TableConfig, TableRow} from "@angular-generic-table/core";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Pipe({
  name: 'genderPipe',
})
export class GenderPipe implements PipeTransform {
  transform(gender: 'male' | 'female'): string {
  return gender === 'male' ? '👨' : '👩';
  }
}

@Component({
  selector: 'docs-mobile-layout',
  template: \`
    <div class="d-flex justify-content-end mb-1 align-items-center">
      {{clicked}} <button class="btn btn-link d-sm-none " (click)="toggleLayout()">{{(mobileLayout$ | async)? 'Desktop ' : 'Mobile '}} layout</button>
    </div>
    <div [class.overflow-auto]="(mobileLayout$ | async) === false">
      <angular-generic-table [data]="data" [config]="config$"></angular-generic-table>
    </div>
    <ng-template #actions let-row="row" let-col="col" let-index="index">
      <button class="btn btn-outline-primary btn-sm my-sm-n3 text-nowrap" (click)="clickAction(row, col, index)">Click me!</button>
    </ng-template>
  \`,
  styles: [\`
    .table th {
      white-space: nowrap;
    }
  \`],
  encapsulation: ViewEncapsulation.None
})
export class MobileLayoutComponent {
  @ViewChild('actions', { static: true }) actions: TemplateRef<any> | undefined;
  clicked = '';

  mobileLayout$ = new BehaviorSubject(true);
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
  config$: Observable<TableConfig> = this.mobileLayout$.pipe(
    map(mobileLayout => ({
      mobileLayout,
      columns: {
        firstName: {
          mobileHeader: true,
          sortable: true
        },
        lastName: {
          mobileHeader: true,
          sortable: true
        },
        gender: {
          mobileHeader: true,
          transform: {
            pipe: GenderPipe
          }
        },
        favoriteFood: {
          mobileHeader: true
        },
        action: {
          mobileHeader: false,
          header: false,
          templateRef: this.actions,
        },
      },
    }))
  );

  toggleLayout = (): void => {
    this.mobileLayout$.next(!this.mobileLayout$.getValue());
  }
  clickAction(row: TableRow, column: { key: string; value: TableColumn }, index: number): void {
    console.log('clicked row:', row, 'col:', column);
    this.clicked = \`Clicked row number: \${index}\`;
  }
}`,
    language: 'typescript',
  },
  {
    name: 'app.module.ts',
    code: `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MobileLayoutComponent } from './mobile-layout.component';
import { GenericTableCoreModule } from '@angular-generic-table/core';

@NgModule({
  declarations: [MobileLayoutComponent],
  imports: [BrowserModule, GenericTableCoreModule],
  bootstrap: [MobileLayoutComponent]
})
export class AppModule {}`,
    language: 'typescript',
  },
];
