import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableModule } from '@angular-generic-table/core';
import { ColumnSearchComponent } from './column-search/column-search.component';

@NgModule({
	declarations: [ColumnSearchComponent],
	imports: [CommonModule, GenericTableModule],
	exports: [],
	providers: [],
	entryComponents: [ColumnSearchComponent]
})
export class ExampleSearchModule {}
