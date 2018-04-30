import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableModule } from '@angular-generic-table/core';
import { BasicUsageComponent } from './basic-usage/basic-usage.component';

@NgModule({
	imports: [CommonModule, GenericTableModule],
	declarations: [BasicUsageComponent]
})
export class ExampleUsageModule {}
