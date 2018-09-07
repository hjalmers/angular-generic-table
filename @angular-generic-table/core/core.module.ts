import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenericTableComponent } from './components/generic-table.component';
import { GtRenderPipe } from './pipes/gt-render.pipe';
import { GtVisiblePipe } from './pipes/gt-visible.pipe';
import { DashCasePipe } from './pipes/dash-case.pipe';
import { GtPropertyPipe } from './pipes/gt-property.pipe';
import { GtChunkPipe } from './pipes/gt-chunk.pipe';
import { GtFilterPipe } from './pipes/gt-filter.pipe';
import { GtOrderByPipe } from './pipes/gt-order-by.pipe';
import { GtExpandingRowComponent } from './components/gt-expanding-row.component';
import { GtSearchPipe } from './pipes/gt-search.pipe';
import { GtColumnSearchPipe } from './pipes/gt-column-search.pipe';
import { ComponentAnchorDirective } from './directives/component-anchor.directive';
import {
	GtPaginationComponent,
	PaginationPipe
} from './components/gt-pagination.component';
import {
	GtTableInfoComponent,
	TableInfoPipe
} from './components/gt-table-info.component';
import { GtCustomComponentFactory } from './components/gt-custom-component-factory';
import { GtMetaPipe } from './pipes/gt-meta.pipe';
import { GtDropdownComponent } from './components/gt-dropdown.component';
import { GtTotalsPipe } from './pipes/gt-totals.pipe';
import { GtTotalsPositionPipe } from './pipes/gt-totals-position.pipe';
import { GtRowClassPipe } from './pipes/gt-row-class.pipe';
import { GtColumnClassPipe } from './pipes/gt-column-class.pipe';
import { GtColumnWidthDirective } from './directives/gt-column-width.directive';
import { GtDrilldownComponent } from './components/gt-drilldown.component';
import { GtCheckboxComponent } from './components/gt-checkbox/gt-checkbox.component';
import { GtHighlightPipe } from './pipes/gt-highlight.pipe';
import { GtIsObservablePipe } from './pipes/gt-is-observable.pipe';
import { GtIsEditablePipe } from './pipes/gt-is-editable.pipe';

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
		GtColumnSearchPipe,
		PaginationPipe,
		GtTableInfoComponent,
		TableInfoPipe,
		GtMetaPipe,
		GtTotalsPipe,
		GtTotalsPositionPipe,
		GtRowClassPipe,
		GtColumnClassPipe,
		GtHighlightPipe,
		GtIsObservablePipe,
		GtIsEditablePipe,
		GtDropdownComponent,
		GtColumnWidthDirective,
		GtDrilldownComponent,
		GtCheckboxComponent
	],
	imports: [CommonModule, FormsModule],
	exports: [
		GenericTableComponent,
		GtPaginationComponent,
		GtTableInfoComponent,
		GtPropertyPipe,
		GtHighlightPipe,
		GtExpandingRowComponent,
		GtDropdownComponent,
		GtDrilldownComponent,
		GtCheckboxComponent
	],
	entryComponents: [GtDrilldownComponent, GtCheckboxComponent],
	providers: [GtMetaPipe, GtHighlightPipe],
	bootstrap: []
})
export class GenericTableModule {}
