import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableModule } from '@angular-generic-table/core/core.module';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

@NgModule({
  imports: [CommonModule, GenericTableModule],
  declarations: [EmployeeTableComponent]
})
export class BasicDemoModule {}
