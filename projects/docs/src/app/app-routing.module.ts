import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedComponent } from './examples/advanced/advanced.component';
import { SimpleComponent } from './examples/simple/simple.component';
import { CustomTemplatesComponent } from './examples/custom-templates/custom-templates.component';
import { PaginationComponent } from './examples/pagination/pagination.component';
import { TransposeComponent } from './examples/transpose/transpose.component';
import {MobileLayoutComponent} from "./examples/mobile-layout/mobile-layout.component";

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
    path: 'transpose',
    component: TransposeComponent,
  },
  {
    path: 'custom-templates',
    component: CustomTemplatesComponent,
  },
  {
    path: 'mobile-layout',
    component: MobileLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
