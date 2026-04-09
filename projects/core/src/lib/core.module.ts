import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { GtDeltaComponent } from './gt-delta/gt-delta.component';

@NgModule({
  imports: [CoreComponent, GtDeltaComponent],
  exports: [CoreComponent, GtDeltaComponent],
})
export class GenericTableCoreModule {}
