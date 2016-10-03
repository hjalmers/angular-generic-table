"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const generic_table_component_1 = require('./generic-table.component');
const gt_render_pipe_1 = require('./gt-render.pipe');
const gt_visible_pipe_1 = require("./gt-visible.pipe");
const dash_case_pipe_1 = require("./dash-case.pipe");
const get_property_pipe_1 = require("./get-property.pipe");
const gt_chunk_pipe_1 = require("./gt-chunk.pipe");
const gt_filter_pipe_1 = require("./gt-filter.pipe");
const gt_order_by_pipe_1 = require("./gt-order-by.pipe");
const core_1 = require("@angular/core");
const platform_browser_1 = require('@angular/platform-browser');
let GenericTableModule = class GenericTableModule {
};
GenericTableModule = __decorate([
    core_1.NgModule({
        declarations: [
            generic_table_component_1.GenericTableComponent,
            gt_visible_pipe_1.GtVisiblePipe,
            gt_render_pipe_1.GtRenderPipe,
            dash_case_pipe_1.DashCasePipe,
            get_property_pipe_1.GetPropertyPipe,
            gt_chunk_pipe_1.GtChunkPipe,
            gt_filter_pipe_1.GtFilterPipe,
            gt_order_by_pipe_1.GtOrderByPipe
        ],
        imports: [platform_browser_1.BrowserModule],
        exports: [generic_table_component_1.GenericTableComponent],
        providers: [],
        bootstrap: []
    }), 
    __metadata('design:paramtypes', [])
], GenericTableModule);
exports.GenericTableModule = GenericTableModule;
//# sourceMappingURL=generic-table.module.js.map