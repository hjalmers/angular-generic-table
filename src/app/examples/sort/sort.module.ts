import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableModule } from '@angular-generic-table/core';
import { EnableDisableSortExampleComponent } from './enable-disable/enable-disable-sort-example.component';
import { AllowUnsortedExampleComponent } from './allow-unsorted/allow-unsorted-example.component';

@NgModule({
	imports: [CommonModule, GenericTableModule],
	declarations: [
		AllowUnsortedExampleComponent,
		EnableDisableSortExampleComponent
	],
	entryComponents: [
		AllowUnsortedExampleComponent,
		EnableDisableSortExampleComponent
	]
})
export class SortModule {}
