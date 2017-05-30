import {GenericTableComponent} from './components/generic-table.component';
import {GtRenderPipe} from './pipes/gt-render.pipe';
import {GtVisiblePipe} from "./pipes/gt-visible.pipe";
import {DashCasePipe} from "./pipes/dash-case.pipe";
import {GtPropertyPipe} from "./pipes/gt-property.pipe";
import {GtChunkPipe} from "./pipes/gt-chunk.pipe";
import {GtFilterPipe} from "./pipes/gt-filter.pipe";
import {GtOrderByPipe} from "./pipes/gt-order-by.pipe";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GtExpandingRowComponent} from './components/gt-expanding-row.component';
import {GtSearchPipe} from "./pipes/gt-search.pipe";
import {ComponentAnchorDirective} from './directives/component-anchor.directive';
import {GtPaginationComponent, PaginationPipe} from './components/gt-pagination.component';
import {GtTableInfoComponent, TableInfoPipe} from './components/gt-table-info.component';
import {GtCustomComponentFactory} from "./components/gt-custom-component-factory";
import {GtMetaPipe} from "./pipes/gt-meta.pipe";
import {FormsModule} from "@angular/forms";
import {GtDropdownComponent} from "./components/gt-dropdown.component";


@NgModule({
  declarations: [
    ComponentAnchorDirective,
    GenericTableComponent,
    GtPaginationComponent,
    GtVisiblePipe,
    GtRenderPipe,
    DashCasePipe,
    GtPropertyPipe,
    GtChunkPipe,
    GtFilterPipe,
    GtOrderByPipe,
    GtExpandingRowComponent,
    GtCustomComponentFactory,
    GtSearchPipe,
    PaginationPipe,
    GtTableInfoComponent,
    TableInfoPipe,
    GtMetaPipe,
    GtDropdownComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    GenericTableComponent,
    GtPaginationComponent,
    GtTableInfoComponent,
    GtPropertyPipe,
    GtExpandingRowComponent,
    GtDropdownComponent
  ],
  entryComponents: [],
  providers: [],
  bootstrap: []
})
export class GenericTableModule { }
