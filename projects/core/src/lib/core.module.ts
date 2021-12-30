import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CommonModule } from '@angular/common';
import { SortClassPipe } from './pipes/sort-class.pipe';
import { DashCasePipe } from './pipes/dash-case.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { CapitalCasePipe } from './pipes/capital-case.pipe';

@NgModule({
  declarations: [CoreComponent, SortClassPipe, DashCasePipe, HighlightPipe, CapitalCasePipe, CapitalCasePipe],
  imports: [CommonModule],
  exports: [CoreComponent],
})
export class GenericTableCoreModule {}
