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
var core_1 = require('@angular/core');
var ComponentAnchorDirective = (function () {
    function ComponentAnchorDirective(componentFactoryResolver, viewContainer) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainer = viewContainer;
        this.instance = new core_1.EventEmitter();
    }
    ComponentAnchorDirective.prototype.ngOnInit = function () {
        var factory = this.componentFactoryResolver
            .resolveComponentFactory(this.ctor);
        var component = this.viewContainer
            .createComponent(factory);
        this.instance.emit(component.instance);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.Type)
    ], ComponentAnchorDirective.prototype, "ctor", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ComponentAnchorDirective.prototype, "instance", void 0);
    ComponentAnchorDirective = __decorate([
        core_1.Directive({
            selector: '[appComponentAnchor]'
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], ComponentAnchorDirective);
    return ComponentAnchorDirective;
}());
exports.ComponentAnchorDirective = ComponentAnchorDirective;
//# sourceMappingURL=component-anchor.directive.js.map