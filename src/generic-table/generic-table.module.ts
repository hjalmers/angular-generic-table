import { GenericTableComponent } from './generic-table.component';
import {GtRenderPipe} from './gt-render.pipe';
import {GtVisiblePipe} from "./gt-visible.pipe";
import {DashCasePipe} from "./dash-case.pipe";
import {GetPropertyPipe} from "./get-property.pipe";
import {GtChunkPipe} from "./gt-chunk.pipe";
import {GtFilterPipe} from "./gt-filter.pipe";
import {GtOrderByPipe} from "./gt-order-by.pipe";
import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    GenericTableComponent,
    GtVisiblePipe,
    GtRenderPipe,
    DashCasePipe,
    GetPropertyPipe,
    GtChunkPipe,
    GtFilterPipe,
    GtOrderByPipe
  ],
  imports: [BrowserModule],
  exports: [GenericTableComponent],
  providers: [],
  bootstrap: []
})
export class GenericTableModule { }
