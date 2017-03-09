import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';
import { LazyComponent } from './lazy/lazy.component';
import { RestComponent } from './rest/rest.component';
import { BasicComponent } from './basic/basic.component';
import { CustomColumnComponent } from "./custom-column/custom-column.component";
import { LocalizationComponent } from './localization/localization.component';

const routes: Routes = [
  { path: '', redirectTo: '/examples', pathMatch: 'full' },
  { path: 'examples', component: ExamplesComponent },
  { path: 'lazy', component: LazyComponent },
  { path: 'rest', component: RestComponent },
  { path: 'static', component: BasicComponent },
  { path: 'custom-column', component: CustomColumnComponent },
  { path: 'localization', component: LocalizationComponent },
  { path: '**', component: ExamplesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
