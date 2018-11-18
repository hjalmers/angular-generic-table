import { NgModule } from '@angular/core';
import { GtCheckboxComponent } from './components/gt-checkbox/gt-checkbox.component';
import { GtDrilldownComponent } from './components/gt-drilldown/gt-drilldown.component';
import { GtDropdownComponent } from './components/gt-dropdown/gt-dropdown.component';
import { GtExpandingRowComponent } from './components/gt-expanding-row/gt-expanding-row.component';
import {
	GtPaginationComponent,
	PaginationPipe
} from './components/gt-pagination/gt-pagination.component';
import {
	GtTableInfoComponent,
	TableInfoPipe
} from './components/gt-table-info/gt-table-info.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { GtVisiblePipe } from './pipes/gt-visible.pipe';
import { GtSearchPipe } from './pipes/gt-search.pipe';
import { GtIsEditablePipe } from './pipes/gt-is-editable.pipe';
import { GtIsObservablePipe } from './pipes/gt-is-observable.pipe';
import { GtHighlightPipe } from './pipes/gt-highlight.pipe';
import { GtColumnClassPipe } from './pipes/gt-column-class.pipe';
import { GtRowClassPipe } from './pipes/gt-row-class.pipe';
import { GtTotalsPositionPipe } from './pipes/gt-totals-position.pipe';
import { GtTotalsPipe } from './pipes/gt-totals.pipe';
import { GtMetaPipe } from './pipes/gt-meta.pipe';
import { GtOrderByPipe } from './pipes/gt-order-by.pipe';
import { GtFilterPipe } from './pipes/gt-filter.pipe';
import { GtChunkPipe } from './pipes/gt-chunk.pipe';
import { GtPropertyPipe } from './pipes/gt-property.pipe';
import { DashCasePipe } from './pipes/dash-case.pipe';
import { GtRenderPipe } from './pipes/gt-render.pipe';
import { GtCustomComponentFactory } from './components/gt-custom-component-factory/gt-custom-component-factory.component';
import { ComponentAnchorDirective } from './directives/component-anchor.directive';
import { GtColumnWidthDirective } from './directives/gt-column-width.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
	providers: [GtMetaPipe, GtHighlightPipe]
})
export class GenericTableModule {}
