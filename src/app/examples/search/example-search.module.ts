import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableModule } from '@angular-generic-table/core';
import { ColumnSearchComponent } from './column-search/column-search.component';
import { CustomColumnSearchComponent } from './custom-column-search/custom-column-search.component';

@NgModule({
	declarations: [ColumnSearchComponent, CustomColumnSearchComponent],
	imports: [CommonModule, GenericTableModule],
	exports: [],
	providers: [],
	entryComponents: [ColumnSearchComponent, CustomColumnSearchComponent]
})
export class ExampleSearchModule {}
