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
const platform_browser_1 = require('@angular/platform-browser');
let GtRenderPipe = class GtRenderPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        // TODO: move to helper functions
        /** Sort by column order */
        this.getColumnOrder = function (a, b) {
            if (a.columnOrder < b.columnOrder)
                return -1;
            if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
                return 1;
            return 0;
        };
        this.sanitizer = sanitizer;
    }
    transform(row, settings, fields, updated) {
        //let arr = [{"temp":123,"name":"happy"},{"temp":456,"name":"dfgdfg"},{"temp":789,"name":"asdasd"}];
        //console.log(arr,arr.map(function(item){return item.temp}));
        //console.log(settings.map('objectKey'));
        //console.log('render');
        let columns = [];
        for (let i = 0; i < settings.length; i++) {
            if (settings[i].visible !== false && settings[i].enabled !== false) {
                columns.push(settings[i].objectKey);
            }
        }
        for (let i = 0; i < fields.length; i++) {
            //console.log(!row[fields[i].objectKey]);
            if (fields[i].value && typeof fields[i].value === 'function' && !row[fields[i].objectKey]) {
                row[fields[i].objectKey] = fields[i].value(row);
            }
        }
        //console.log(row);
        let keys = [];
        for (let key in row) {
            //console.log(key);
            if (columns.indexOf(key) !== -1) {
                let fieldSetting;
                for (let i = 0; i < fields.length; i++) {
                    if (fields[i].objectKey === key) {
                        fieldSetting = fields[i];
                    }
                }
                let columnObject = {
                    objectKey: key,
                    renderValue: fieldSetting.render && typeof fieldSetting.render === 'function' ? this.sanitizer.bypassSecurityTrustHtml(fieldSetting.render(row)) : row[key],
                    exportValue: fieldSetting.export && typeof fieldSetting.export === 'function' ? fieldSetting.export(row) : row[key],
                    sortValue: row[key]
                };
                if (fieldSetting.click && typeof fieldSetting.click === 'function') {
                    columnObject.click = fieldSetting.click;
                }
                if (fieldSetting.expand) {
                    columnObject.expand = fieldSetting.expand;
                }
                keys.push(columnObject);
            }
        }
        keys.sort(function (a, b) {
            return columns.indexOf(a.objectKey) < columns.indexOf(b.objectKey) ? -1 : 1;
        });
        return keys;
    }
};
GtRenderPipe = __decorate([
    core_1.Pipe({
        name: 'gtRender'
    }), 
    __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
], GtRenderPipe);
exports.GtRenderPipe = GtRenderPipe;
//# sourceMappingURL=gt-render.pipe.js.map