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
var platform_browser_1 = require('@angular/platform-browser');
var GtRenderPipe = (function () {
    function GtRenderPipe(sanitizer) {
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
        /** Sort by length */
        this.getOrderByLength = function (a, b) {
            return b.length - a.length;
        };
        /** Return property */
        this.getProperty = function (array, key) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].objectKey === key) {
                    return array[i];
                }
            }
        };
        this.sanitizer = sanitizer;
    }
    GtRenderPipe.prototype.highlight = function (haystack, needles) {
        var haystackAlwaysString = haystack + '';
        var highlightedText = haystackAlwaysString; // fallback
        var searchPattern;
        try {
            searchPattern = new RegExp('(' +
                needles.toLowerCase()
                    .match(/".*?"|[^ ]+/g) // extract words
                    .map(function (needle) { return needle.replace(/"(.*?)"/, '$1'); } // strip away '"'
                )
                    .join('|') +
                ')', 'ig');
        }
        catch (error) {
            return this.sanitizer
                .bypassSecurityTrustHtml(highlightedText);
        }
        var containsTagPattern = /(<.*?>)(.*)(<\/.*?>)/ig;
        var containsTagMatches = containsTagPattern.exec(haystackAlwaysString);
        if (containsTagMatches) {
            highlightedText =
                containsTagMatches[1] +
                    containsTagMatches[2]
                        .replace(searchPattern, '<span class="gt-highlight-search">$1</span>') +
                    containsTagMatches[3];
        }
        else {
            highlightedText =
                haystackAlwaysString
                    .replace(searchPattern, '<span class="gt-highlight-search">$1</span>');
        }
        return this.sanitizer
            .bypassSecurityTrustHtml(highlightedText);
    };
    ;
    GtRenderPipe.prototype.transform = function (row, settings, fields, updated, loading, highlight, searchString) {
        //let arr = [{"temp":123,"name":"happy"},{"temp":456,"name":"dfgdfg"},{"temp":789,"name":"asdasd"}];
        //console.log(arr,arr.map(function(item){return item.temp}));
        //console.log(settings.map('objectKey'));
        if (highlight === void 0) { highlight = false; }
        //console.log('render');
        var columns = [];
        for (var i = 0; i < settings.length; i++) {
            if (settings[i].visible !== false && settings[i].enabled !== false) {
                columns.push(settings[i].objectKey);
            }
        }
        for (var i = 0; i < fields.length; i++) {
            //console.log(!row[fields[i].objectKey]);
            if (fields[i].value && typeof fields[i].value === 'function' && !row[fields[i].objectKey]) {
                row[fields[i].objectKey] = fields[i].value(row);
            }
        }
        //console.log(row);
        var keys = [];
        for (var key in row) {
            //console.log(key);
            if (columns.indexOf(key) !== -1) {
                var fieldSetting = void 0;
                for (var i = 0; i < fields.length; i++) {
                    if (fields[i].objectKey === key) {
                        fieldSetting = fields[i];
                    }
                }
                var columnObject = {
                    objectKey: key,
                    exportValue: fieldSetting.export && typeof fieldSetting.export === 'function' ? fieldSetting.export(row) : row[key],
                    sortValue: row[key]
                };
                if (loading && row[key].indexOf('undefined') != -1) {
                    columnObject.renderValue = "";
                }
                else if (highlight && searchString && this.getProperty(settings, key).search !== false) {
                    columnObject.renderValue = fieldSetting.render && typeof fieldSetting.render === 'function' ? this.highlight(fieldSetting.render(row), searchString) : this.highlight(row[key] !== null ? row[key] : "", searchString);
                }
                else {
                    columnObject.renderValue = fieldSetting.render && typeof fieldSetting.render === 'function' ? this.sanitizer.bypassSecurityTrustHtml(fieldSetting.render(row)) : row[key] !== null ? row[key] : "";
                }
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
    };
    GtRenderPipe = __decorate([
        core_1.Pipe({
            name: 'gtRender'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], GtRenderPipe);
    return GtRenderPipe;
}());
exports.GtRenderPipe = GtRenderPipe;
//# sourceMappingURL=gt-render.pipe.js.map