import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericTableModule } from '../../../core/src/lib/core.module';
import { InMemoryArrayComponent } from './examples/in-memory-array/in-memory-array.component';
import { AppRoutingModule } from './app-routing.module';
import { ColumnSettingsModule } from '../../../column-settings/src/lib/column-settings.module';
import { ColumnSettingsComponent } from './examples/column-settings/column-settings.component';

@NgModule({
	declarations: [AppComponent, InMemoryArrayComponent, ColumnSettingsComponent],
	imports: [
		BrowserModule,
		GenericTableModule,
		ColumnSettingsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
