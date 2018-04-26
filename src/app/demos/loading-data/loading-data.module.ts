import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableModule } from '@angular-generic-table/core';
import { EmployeeTableComponent } from './in-memory-array/employee-table.component';
import { RestExampleComponent } from './using-rest-api/rest-example.component';
import { LazyLoadExampleComponent } from './lazy-load/lazy-load-example.component';

@NgModule({
	imports: [CommonModule, GenericTableModule],
	declarations: [
		EmployeeTableComponent,
		LazyLoadExampleComponent,
		RestExampleComponent
	],
	entryComponents: [
		EmployeeTableComponent,
		LazyLoadExampleComponent,
		RestExampleComponent
	]
})
export class LoadingDataModule {}
