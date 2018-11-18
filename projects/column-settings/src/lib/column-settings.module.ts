import { NgModule } from '@angular/core';
import {
	GtColumnPipe,
	GtColumnSettingsComponent
} from './components/gt-column-settings/gt-column-settings.component';
import { CommonModule } from '@angular/common';
import { GenericTableModule } from '@angular-generic-table/core';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
	declarations: [GtColumnSettingsComponent, GtColumnPipe],
	imports: [CommonModule, GenericTableModule, DragulaModule.forRoot()],
	exports: [GtColumnSettingsComponent, GtColumnPipe]
})
export class ColumnSettingsModule {}
