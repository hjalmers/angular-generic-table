import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';
import { LazyComponent } from './lazy/lazy.component';
import { RestComponent } from './rest/rest.component';
import { StaticComponent } from './basic/basic.component';

const routes: Routes = [
  { path: '', redirectTo: 'examples', pathMatch: 'full' },
  { path: 'examples', component: ExamplesComponent },
  { path: 'lazy', component: LazyComponent },
  { path: 'rest', component: RestComponent },
  { path: 'static', component: StaticComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
