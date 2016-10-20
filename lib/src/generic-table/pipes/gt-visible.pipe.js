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
const core_1 = require('@angular/core');
let GtVisiblePipe = class GtVisiblePipe {
    constructor() {
        // TODO: move to helper functions
        /** Sort by column order */
        this.getColumnOrder = function (a, b) {
            if (a.columnOrder < b.columnOrder)
                return -1;
            if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
                return 1;
            return 0;
        };
    }
    transform(array, settings) {
        let visibleColumns = settings.sort(this.getColumnOrder).map((setting) => {
            if (setting.visible !== false && setting.enabled !== false) {
                return setting.objectKey;
            }
        });
        let columns = array.filter((column) => {
            return visibleColumns.indexOf(column.objectKey) !== -1;
        }).sort(function (a, b) {
            return visibleColumns.indexOf(a.objectKey) < visibleColumns.indexOf(b.objectKey) ? -1 : 1;
        });
        return columns;
    }
};
GtVisiblePipe = __decorate([
    core_1.Pipe({
        name: 'gtVisible'
    }), 
    __metadata('design:paramtypes', [])
], GtVisiblePipe);
exports.GtVisiblePipe = GtVisiblePipe;
//# sourceMappingURL=gt-visible.pipe.js.map