import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InMemoryArrayComponent } from './examples/in-memory-array/in-memory-array.component';
import { AppRoutingModule } from './app-routing.module';
import { ColumnSettingsComponent } from './examples/column-settings/column-settings.component';
import { GenericTableModule } from '@angular-generic-table/core';
import { ColumnSettingsModule } from '@angular-generic-table/column-settings';

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
