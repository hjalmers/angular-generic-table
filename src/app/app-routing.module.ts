import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';
import { LazyComponent } from './lazy/lazy.component';
import { RestComponent } from './rest/rest.component';
import { BasicComponent } from './basic/basic.component';
import { CustomColumnComponent } from './custom-column/custom-column.component';
import { LocalizationComponent } from './localization/localization.component';
import {ChangeColumnSettingsComponent} from './change-column-settings/change-column-settings.component';
import {HomeComponent} from './home/home.component';
import {InlineEditingComponent} from './inline-editing/inline-editing.component';
import {ColumnClickComponent} from './column-click/column-click.component';
import {AggregateComponent} from './aggregate/aggregate.component';
import {AddRemoveEditComponent} from './add-remove-edit/add-remove-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: HomeComponent },
  { path: 'lazy', component: LazyComponent },
  { path: 'advanced', component: RestComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'totals', component: AggregateComponent },
  { path: 'custom-column', component: CustomColumnComponent },
  { path: 'column-click', component: ColumnClickComponent },
  { path: 'localization', component: LocalizationComponent },
  { path: 'inline-editing', component: InlineEditingComponent },
  { path: 'add-remove-edit', component: AddRemoveEditComponent },
  { path: 'column-settings-component', component: ChangeColumnSettingsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
