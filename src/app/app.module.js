"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var lazy_component_1 = require('./lazy/lazy.component');
var rest_component_1 = require('./rest/rest.component');
var generic_table_module_1 = require('../generic-table/generic-table.module');
//import { FinanceTestComponent } from './finance-test/finance-test.component';
var custom_row_component_1 = require('./custom-row/custom-row.component');
var static_component_1 = require('./static/static.component');
var examples_component_1 = require('./examples/examples.component');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                lazy_component_1.LazyComponent,
                rest_component_1.RestComponent,
                //FinanceTestComponent,
                custom_row_component_1.CustomRowComponent,
                static_component_1.StaticComponent,
                examples_component_1.ExamplesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                generic_table_module_1.GenericTableModule,
                app_routing_module_1.AppRoutingModule
            ],
            entryComponents: [custom_row_component_1.CustomRowComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
