import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableModule } from '@angular-generic-table/core';
import { EmployeeTableComponent } from './in-memory-array/employee-table.component';
import { RestExampleComponent } from './using-rest-api/rest-example.component';

@NgModule({
	imports: [CommonModule, GenericTableModule],
	declarations: [EmployeeTableComponent, RestExampleComponent],
	entryComponents: [EmployeeTableComponent, RestExampleComponent]
})
export class LoadingDataModule {}
