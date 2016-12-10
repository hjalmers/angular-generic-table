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
var GtOrderByPipe = (function () {
    function GtOrderByPipe() {
        /** Return property */
        this.getProperty = function (array, key) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].objectKey === key) {
                    return array[i];
                }
            }
        };
    }
    /** Return sort function */
    GtOrderByPipe.prototype.getSortFunction = function (field) {
        if (typeof field.sort === 'function') {
            return field.sort;
        }
        else if (typeof field.value === 'function') {
            return field.value;
        }
        else {
            return false;
        }
    };
    GtOrderByPipe._orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            if (b === null || typeof b === 'undefined' && (a !== null && typeof a !== 'undefined'))
                return 1;
            if (a === null || typeof a === 'undefined' && (b !== null && typeof b !== 'undefined'))
                return -1;
            //Isn't a number so lowercase the string to properly compare
            try {
                if (a.toLowerCase() < b.toLowerCase())
                    return -1;
                if (a.toLowerCase() > b.toLowerCase())
                    return 1;
            }
            catch (error) {
                return 0;
            }
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    GtOrderByPipe.prototype.transform = function (input, config, fields, refreshSorting, refreshData) {
        var _this = this;
        if (!Array.isArray(input) || input === null)
            return input;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = config[0];
            var desc = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc ? input.sort() : input.sort().reverse();
            }
            else {
                var property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                // check if custom sort function is defined
                var sortFunction_1 = this.getSortFunction(this.getProperty(fields, property));
                return input.sort(function (a, b) {
                    // use custom sort function if one is defined
                    var propertyA = sortFunction_1 === false ? a[property] : sortFunction_1(a);
                    var propertyB = sortFunction_1 === false ? b[property] : sortFunction_1(b);
                    // if both values are undefined...
                    if (typeof propertyA === 'undefined' && typeof propertyB === 'undefined') {
                        // ...skip comparison
                        return;
                    }
                    return !desc ? GtOrderByPipe._orderByComparator(propertyA, propertyB) : -GtOrderByPipe._orderByComparator(propertyA, propertyB);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return input.sort(function (a, b) {
                //console.log('multiple');
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    //console.log(property);
                    // check if custom sort function is defined
                    var sortFunction = _this.getSortFunction(_this.getProperty(fields, property));
                    // use custom sort function if one is defined
                    var propertyA = sortFunction === false ? a[property] : sortFunction(a);
                    var propertyB = sortFunction === false ? b[property] : sortFunction(b);
                    var comparison = !desc ? GtOrderByPipe._orderByComparator(propertyA, propertyB) : -GtOrderByPipe._orderByComparator(propertyA, propertyB);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    GtOrderByPipe = __decorate([
        core_1.Pipe({
            name: 'gtOrderBy'
        }), 
        __metadata('design:paramtypes', [])
    ], GtOrderByPipe);
    return GtOrderByPipe;
}());
exports.GtOrderByPipe = GtOrderByPipe;
//# sourceMappingURL=gt-order-by.pipe.js.map