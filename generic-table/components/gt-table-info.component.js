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
var directives_1 = require('@angular/core/src/metadata/directives');
var generic_table_component_1 = require('./generic-table.component');
var GtTableInfoComponent = (function () {
    function GtTableInfoComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    GtTableInfoComponent.prototype.ngAfterViewChecked = function () {
        this._changeDetectionRef.detectChanges();
    };
    __decorate([
        directives_1.Input(), 
        __metadata('design:type', generic_table_component_1.GenericTableComponent)
    ], GtTableInfoComponent.prototype, "genericTable", void 0);
    __decorate([
        directives_1.Input(), 
        __metadata('design:type', String)
    ], GtTableInfoComponent.prototype, "customText", void 0);
    GtTableInfoComponent = __decorate([
        core_1.Component({
            selector: 'gt-table-info',
            template: "<span *ngIf=\"genericTable.gtInfo\" >{{(customText? customText:genericTable.gtTexts) | gtTableInfo:genericTable.gtInfo:genericTable.gtInfo.recordsAfterSearch:genericTable.gtInfo.recordFrom:genericTable.gtInfo.recordTo:genericTable.gtInfo.recordsAll}}</span>"
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
    ], GtTableInfoComponent);
    return GtTableInfoComponent;
}());
exports.GtTableInfoComponent = GtTableInfoComponent;
var core_2 = require('@angular/core');
var TableInfoPipe = (function () {
    function TableInfoPipe() {
    }
    TableInfoPipe.prototype.transform = function (texts, keys, refresh) {
        var text = texts.tableInfo;
        if (keys.recordsAfterSearch !== keys.recordsAll) {
            text = texts.tableInfoAfterSearch;
        }
        for (var key in keys) {
            if (keys.hasOwnProperty(key)) {
                var searchString = new RegExp('#' + key, 'g');
                text = text.replace(searchString, keys[key]);
            }
        }
        return text;
    };
    ;
    TableInfoPipe = __decorate([
        core_2.Pipe({
            name: 'gtTableInfo'
        }), 
        __metadata('design:paramtypes', [])
    ], TableInfoPipe);
    return TableInfoPipe;
}());
exports.TableInfoPipe = TableInfoPipe;
//# sourceMappingURL=gt-table-info.component.js.map