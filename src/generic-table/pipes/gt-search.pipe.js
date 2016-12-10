"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GtSearchPipe = (function () {
    function GtSearchPipe() {
        /** Return property */
        this.getProperty = function (array, key) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].objectKey === key) {
                    return array[i];
                }
            }
        };
    }
    GtSearchPipe.prototype.transform = function (allRows, searchTerms, gtInfo, settings, fields, refreshData) {
        //  if no search terms are defined...
        if (!searchTerms || searchTerms.replace(/"/g, "").length === 0) {
            // ...return all rows
            var length_1 = allRows === null ? 0 : allRows.length;
            gtInfo.recordsAfterSearch = length_1;
            return allRows;
        }
        var searchFunction = {};
        var fieldsTemp = [];
        for (var k = 0; k < fields.length; k++) {
            var field = fields[k];
            // check if field should be included in global search
            var include = this.getProperty(settings, field.objectKey).search === false ? false : true;
            // if include...
            if (include) {
                // ...and if search function is defined...
                if (typeof field.search === 'function') {
                    // ...add it as search function for field
                    searchFunction[field.objectKey] = field.search;
                }
                else if (typeof field.value === 'function') {
                    // ...add it as search function for field
                    searchFunction[field.objectKey] = field.value;
                }
                // ...push it to our fields array
                fieldsTemp.push(field);
            }
        }
        var filteredRows = [];
        searchTerms = typeof searchTerms === 'undefined' ? '' : searchTerms;
        var searchTermsArray = searchTerms.toLowerCase().match(/(".*"|[^\s]+)/g);
        for (var i = 0; i < allRows.length; i++) {
            var row = allRows[i];
            var string = '';
            for (var j = 0; j < fieldsTemp.length; j++) {
                var separator = j === 0 ? '' : ' & ';
                string += searchFunction[fieldsTemp[j].objectKey] ? separator + searchFunction[fieldsTemp[j].objectKey](row, j) : separator + row[fieldsTemp[j].objectKey];
            }
            string = string.toLowerCase();
            var match = true;
            for (var k = 0; k < searchTermsArray.length; k++) {
                var term = searchTermsArray[k].replace(/"/g, '');
                match = string.indexOf(term) !== -1;
                if (!match) {
                    break;
                }
            }
            if (match) {
                filteredRows.push(row);
            }
        }
        gtInfo.recordsAfterSearch = filteredRows.length;
        //gtInfo.refresh(filteredRows.length,gt);
        return filteredRows;
    };
    GtSearchPipe = __decorate([
        core_1.Pipe({
            name: 'gtSearch'
        })
    ], GtSearchPipe);
    return GtSearchPipe;
}());
exports.GtSearchPipe = GtSearchPipe;
