"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var examples_component_1 = require('./examples/examples.component');
var lazy_component_1 = require('./lazy/lazy.component');
var rest_component_1 = require('./rest/rest.component');
var static_component_1 = require('./static/static.component');
var routes = [
    { path: '', redirectTo: 'examples', pathMatch: 'full' },
    { path: 'examples', component: examples_component_1.ExamplesComponent },
    { path: 'lazy', component: lazy_component_1.LazyComponent },
    { path: 'rest', component: rest_component_1.RestComponent },
    { path: 'static', component: static_component_1.StaticComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
