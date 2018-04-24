import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableModule } from '@angular-generic-table/core';
import { EnableDisableSortExampleComponent } from './enable-disable/enable-disable-sort-example.component';

@NgModule({
	imports: [CommonModule, GenericTableModule],
	declarations: [EnableDisableSortExampleComponent],
	entryComponents: [EnableDisableSortExampleComponent]
})
export class SortModule {}
