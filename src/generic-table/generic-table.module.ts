import { GenericTableComponent } from './generic-table.component';
import {GtRenderPipe} from './pipes/gt-render.pipe';
import {GtVisiblePipe} from "./pipes/gt-visible.pipe";
import {DashCasePipe} from "./pipes/dash-case.pipe";
import {GetPropertyPipe} from "./pipes/get-property.pipe";
import {GtChunkPipe} from "./pipes/gt-chunk.pipe";
import {GtFilterPipe} from "./pipes/gt-filter.pipe";
import {GtOrderByPipe} from "./pipes/gt-order-by.pipe";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GtExpandingRowComponent} from './components/gt-expanding-row/gt-expanding-row.component';

@NgModule({
  declarations: [
    GenericTableComponent,
    GtVisiblePipe,
    GtRenderPipe,
    DashCasePipe,
    GetPropertyPipe,
    GtChunkPipe,
    GtFilterPipe,
    GtOrderByPipe,
    GtExpandingRowComponent
  ],
  imports: [CommonModule],
  exports: [GenericTableComponent],

  providers: [],
  bootstrap: []
})
export class GenericTableModule { }
