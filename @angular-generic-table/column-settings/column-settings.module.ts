import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GtColumnPipe, GtColumnSettingsComponent} from './components/gt-column-settings.component';
import { GenericTableModule } from '@angular-generic-table/core';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    GenericTableModule,
    DragulaModule
  ],
  declarations: [
    GtColumnSettingsComponent,
    GtColumnPipe
  ],
  exports: [
    GtColumnSettingsComponent,
    GtColumnPipe
  ]
})
export class ColumnSettingsModule { }
