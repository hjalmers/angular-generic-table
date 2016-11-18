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
import {GtExpandingRowComponent, GtExpandedRow} from './components/gt-expanding-row/gt-expanding-row.component';
import {GtSearchPipe} from "./pipes/gt-search.pipe";
import { ComponentAnchorDirective } from './directives/component-anchor.directive';

@NgModule({
  declarations: [
    ComponentAnchorDirective,
    GenericTableComponent,
    GtVisiblePipe,
    GtRenderPipe,
    DashCasePipe,
    GetPropertyPipe,
    GtChunkPipe,
    GtFilterPipe,
    GtOrderByPipe,
    GtExpandingRowComponent,
    GtSearchPipe
  ],
  imports: [CommonModule],
  exports: [GenericTableComponent],
  entryComponents: [],
  providers: [],
  bootstrap: []
})
export class GenericTableModule { }
