"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var directives_1 = require('@angular/core/src/metadata/directives');
var GtTableInfoComponent = (function () {
    function GtTableInfoComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    GtTableInfoComponent.prototype.ngAfterViewChecked = function () {
        this._changeDetectionRef.detectChanges();
    };
    __decorate([
        directives_1.Input()
    ], GtTableInfoComponent.prototype, "genericTable", void 0);
    __decorate([
        directives_1.Input()
    ], GtTableInfoComponent.prototype, "customText", void 0);
    GtTableInfoComponent = __decorate([
        core_1.Component({
            selector: 'gt-table-info',
            template: "<span>{{(customText? customText:genericTable.gtTexts) | gtTableInfo:genericTable.gtInfo:genericTable.gtInfo.recordsAfterSearch:genericTable.gtInfo.recordFrom:genericTable.gtInfo.recordTo}}</span>"
        })
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
        })
    ], TableInfoPipe);
    return TableInfoPipe;
}());
exports.TableInfoPipe = TableInfoPipe;
