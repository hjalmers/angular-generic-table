import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CommonModule } from '@angular/common';
import { SortClassPipe } from './pipes/sort-class.pipe';
import { DashCasePipe } from './pipes/dash-case.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { CapitalCasePipe } from './pipes/capital-case.pipe';
import { DynamicPipe } from './pipes/dynamic.pipe';
import { GtDeltaComponent } from './gt-delta/gt-delta.component';

@NgModule({
  declarations: [
    CoreComponent,
    SortClassPipe,
    DashCasePipe,
    HighlightPipe,
    CapitalCasePipe,
    CapitalCasePipe,
    DynamicPipe,
    GtDeltaComponent,
  ],
  imports: [CommonModule],
  exports: [CoreComponent, GtDeltaComponent],
})
export class GenericTableCoreModule {}
