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
var GtFilterPipe = (function () {
    function GtFilterPipe() {
    }
    //@Output() filterInfo = new EventEmitter();
    GtFilterPipe.prototype.transform = function (allRows, filterBy, gtInfo, refreshFilter, refreshData) {
        //console.log(allRows,filterBy);
        //console.log('filter by');
        gtInfo.recordsAll = allRows.length;
        if (!Array.isArray(allRows) || !filterBy) {
            //gtInfo.filtered = false;
            var length_1 = allRows === null ? 0 : allRows.length;
            gtInfo.recordsAfterFilter = length_1;
            return allRows;
        }
        var output = [];
        for (var i = 0; i < allRows.length; i++) {
            var rowObject = allRows[i];
            var match = true;
            for (var property in filterBy) {
                if (filterBy.hasOwnProperty(property)) {
                    //console.log(property);
                    //console.log(filter[property].indexOf(obj[property]));
                    if (filterBy[property].indexOf(rowObject[property]) === -1) {
                        match = false;
                    }
                }
            }
            if (match) {
                output.push(rowObject);
            }
        }
        gtInfo.recordsAfterFilter = output.length; //.emit(output.length);
        return output;
    };
    GtFilterPipe = __decorate([
        core_1.Pipe({
            name: 'gtFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], GtFilterPipe);
    return GtFilterPipe;
}());
exports.GtFilterPipe = GtFilterPipe;
//# sourceMappingURL=gt-filter.pipe.js.map