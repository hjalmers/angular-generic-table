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
// Helper component to add dynamic components
var core_1 = require('@angular/core');
var GtExpandingRowComponent = (function () {
    function GtExpandingRowComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.redrawEvent = new core_1.EventEmitter();
    }
    GtExpandingRowComponent.prototype.ngAfterContentInit = function () {
        var factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
        this.cmpRef = this.target.createComponent(factory);
        var instance = this.cmpRef.instance;
        instance.row = this.row;
        instance.redrawEvent = this.redrawEvent;
    };
    GtExpandingRowComponent.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    };
    __decorate([
        core_1.ViewChild('expandingRow', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], GtExpandingRowComponent.prototype, "target", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GtExpandingRowComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GtExpandingRowComponent.prototype, "row", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GtExpandingRowComponent.prototype, "redrawEvent", void 0);
    GtExpandingRowComponent = __decorate([
        core_1.Component({
            selector: 'gt-expanding-row',
            template: "<div #expandingRow></div>"
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver])
    ], GtExpandingRowComponent);
    return GtExpandingRowComponent;
}());
exports.GtExpandingRowComponent = GtExpandingRowComponent;
var GtExpandedRow = (function () {
    function GtExpandedRow() {
        this.redrawEvent = new core_1.EventEmitter();
    }
    GtExpandedRow.prototype.$hide = function () {
        this.row.isOpen = false;
    };
    GtExpandedRow.prototype.$redraw = function () {
        this.redrawEvent.emit(this.row);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GtExpandedRow.prototype, "row", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GtExpandedRow.prototype, "column", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GtExpandedRow.prototype, "redrawEvent", void 0);
    GtExpandedRow = __decorate([
        core_1.Component({}), 
        __metadata('design:paramtypes', [])
    ], GtExpandedRow);
    return GtExpandedRow;
}());
exports.GtExpandedRow = GtExpandedRow;
//# sourceMappingURL=gt-expanding-row.component.js.map