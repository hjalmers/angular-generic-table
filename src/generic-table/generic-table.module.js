"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var generic_table_component_1 = require('./components/generic-table.component');
var gt_render_pipe_1 = require('./pipes/gt-render.pipe');
var gt_visible_pipe_1 = require("./pipes/gt-visible.pipe");
var dash_case_pipe_1 = require("./pipes/dash-case.pipe");
var get_property_pipe_1 = require("./pipes/get-property.pipe");
var gt_chunk_pipe_1 = require("./pipes/gt-chunk.pipe");
var gt_filter_pipe_1 = require("./pipes/gt-filter.pipe");
var gt_order_by_pipe_1 = require("./pipes/gt-order-by.pipe");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var gt_expanding_row_component_1 = require('./components/gt-expanding-row.component');
var gt_search_pipe_1 = require("./pipes/gt-search.pipe");
var component_anchor_directive_1 = require('./directives/component-anchor.directive');
var gt_pagination_component_1 = require('./components/gt-pagination.component');
var gt_table_info_component_1 = require('./components/gt-table-info.component');
var GenericTableModule = (function () {
    function GenericTableModule() {
    }
    GenericTableModule = __decorate([
        core_1.NgModule({
            declarations: [
                component_anchor_directive_1.ComponentAnchorDirective,
                generic_table_component_1.GenericTableComponent,
                gt_pagination_component_1.GtPaginationComponent,
                gt_visible_pipe_1.GtVisiblePipe,
                gt_render_pipe_1.GtRenderPipe,
                dash_case_pipe_1.DashCasePipe,
                get_property_pipe_1.GetPropertyPipe,
                gt_chunk_pipe_1.GtChunkPipe,
                gt_filter_pipe_1.GtFilterPipe,
                gt_order_by_pipe_1.GtOrderByPipe,
                gt_expanding_row_component_1.GtExpandingRowComponent,
                gt_search_pipe_1.GtSearchPipe,
                gt_pagination_component_1.PaginationPipe,
                gt_table_info_component_1.GtTableInfoComponent,
                gt_table_info_component_1.TableInfoPipe
            ],
            imports: [common_1.CommonModule],
            exports: [generic_table_component_1.GenericTableComponent, gt_pagination_component_1.GtPaginationComponent, gt_table_info_component_1.GtTableInfoComponent],
            entryComponents: [],
            providers: [],
            bootstrap: []
        })
    ], GenericTableModule);
    return GenericTableModule;
}());
exports.GenericTableModule = GenericTableModule;
