"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var gt_expanding_row_component_1 = require('../../generic-table/components/gt-expanding-row.component');
var CustomRowComponent = (function (_super) {
    __extends(CustomRowComponent, _super);
    function CustomRowComponent() {
        _super.call(this);
        this.newRandomColor = function () {
            this.row.favorite_color = '#000'.replace(/0/g, function (f) { return '0369cf'[Math.random() * 6 | 0]; });
        };
    }
    CustomRowComponent.prototype.ngOnInit = function () {
    };
    CustomRowComponent = __decorate([
        core_1.Component({
            selector: 'app-custom-row',
            template: require('./custom-row.component.html')
        })
    ], CustomRowComponent);
    return CustomRowComponent;
}(gt_expanding_row_component_1.GtExpandedRow));
exports.CustomRowComponent = CustomRowComponent;
