import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedComponent } from './examples/advanced/advanced.component';
import { SimpleComponent } from './examples/simple/simple.component';
import { CustomTemplatesComponent } from './examples/custom-templates/custom-templates.component';

const routes: Routes = [
  {
    path: 'advanced',
    component: AdvancedComponent,
  },
  {
    path: 'simple',
    component: SimpleComponent,
  },
  {
    path: 'custom-templates',
    component: CustomTemplatesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
