import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedComponent } from './examples/advanced/advanced.component';
import { SimpleComponent } from './examples/simple/simple.component';
import { CustomTemplatesComponent } from './examples/custom-templates/custom-templates.component';
import { PaginationComponent } from './examples/pagination/pagination.component';
import { HorizontalTableComponent } from './examples/horizontal-table/horizontal-table.component';
import { MobileLayoutComponent } from './examples/mobile-layout/mobile-layout.component';
import { NestedDataComponent } from './examples/nested-data/nested-data.component';
import { TransposeComponent } from './examples/transpose/transpose.component';
import { RowHoverClickComponent } from './examples/row-hover-click/row-hover-click.component';
import { FooterComponent } from './examples/footer/footer.component';

const routes: Routes = [
  {
    path: 'advanced',
    component: AdvancedComponent,
  },
  {
    path: 'pagination',
    component: PaginationComponent,
  },
  {
    path: 'simple',
    component: SimpleComponent,
  },
  {
    path: 'row-hover-click',
    component: RowHoverClickComponent,
  },
  {
    path: 'horizontal-table',
    component: HorizontalTableComponent,
  },
  {
    path: 'custom-templates',
    component: CustomTemplatesComponent,
  },
  {
    path: 'mobile-layout',
    component: MobileLayoutComponent,
  },
  {
    path: 'nested',
    component: NestedDataComponent,
  },
  {
    path: 'transpose',
    component: TransposeComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
