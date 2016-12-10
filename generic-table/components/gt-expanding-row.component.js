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
    return GtExpandedRow;
}());
exports.GtExpandedRow = GtExpandedRow;
var GtExpandingRowComponent = (function () {
    function GtExpandingRowComponent() {
        this.redrawEvent = new core_1.EventEmitter();
    }
    GtExpandingRowComponent.prototype.newInstance = function (instance) {
        instance.row = this.row;
        instance.redrawEvent.subscribe(this.redrawEvent);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.Type)
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
            template: "\n    <div appComponentAnchor\n         [ctor]=\"type\" (instance)=\"newInstance($event)\"></div>"
        }), 
        __metadata('design:paramtypes', [])
    ], GtExpandingRowComponent);
    return GtExpandingRowComponent;
}());
exports.GtExpandingRowComponent = GtExpandingRowComponent;
//# sourceMappingURL=gt-expanding-row.component.js.map