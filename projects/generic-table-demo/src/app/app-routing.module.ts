import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryArrayComponent } from './examples/in-memory-array/in-memory-array.component';
import { ColumnSettingsComponent } from './examples/column-settings/column-settings.component';

const routes: Routes = [
	{ path: '', redirectTo: '/start', pathMatch: 'full' },
	{ path: 'column-settings', component: ColumnSettingsComponent },
	{ path: 'start', component: InMemoryArrayComponent },
	{ path: '**', component: InMemoryArrayComponent }
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
