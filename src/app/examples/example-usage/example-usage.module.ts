import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicUsageComponent } from './basic-usage/basic-usage.component';
import { GenericTableModule } from '../../../../projects/core/src/lib/core.module';

@NgModule({
	imports: [CommonModule, GenericTableModule],
	declarations: [BasicUsageComponent]
})
export class ExampleUsageModule {}
