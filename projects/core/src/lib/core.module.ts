import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CommonModule } from '@angular/common';
import { SortClassPipe } from './pipes/sort-class.pipe';
import { DashCasePipe } from './pipes/dash-case.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { CapitalCasePipe } from './pipes/capital-case.pipe';
import { DynamicPipe } from './pipes/dynamic.pipe';
import { GtDeltaComponent } from './gt-delta/gt-delta.component';
import { RowSelectionPipe } from './pipes/row-selection.pipe';

@NgModule({
  imports: [
    CommonModule,
    CoreComponent,
    SortClassPipe,
    DashCasePipe,
    HighlightPipe,
    RowSelectionPipe,
    CapitalCasePipe,
    CapitalCasePipe,
    DynamicPipe,
    GtDeltaComponent,
  ],
  exports: [CoreComponent, GtDeltaComponent],
  declarations: [],
})
export class GenericTableCoreModule {}
