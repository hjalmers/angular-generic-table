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
let GtOrderByPipe_1 = class GtOrderByPipe {
    constructor() {
        /** Return property */
        this.getProperty = function (array, key) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].objectKey === key) {
                    return array[i];
                }
            }
        };
    }
    static _orderByComparator(a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            if (b === null || typeof b === 'undefined' && (a !== null && typeof a !== 'undefined'))
                return 1;
            if (a === null || typeof a === 'undefined' && (b !== null && typeof b !== 'undefined'))
                return -1;
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    }
    transform(input, config, fields, refreshSorting, refreshData) {
        //console.log('order by');
        //config = ['gender','email'];
        //console.log(config);
        if (!Array.isArray(input) || input === null)
            return input;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            //console.log('sort a'); //this.getProperty(fields,input).sort
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
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
                let sortFunction = typeof this.getProperty(fields, property).sort === 'function' ? this.getProperty(fields, property).sort : false;
                return input.sort(function (a, b) {
                    // use custom sort function if one is defined
                    let propertyA = sortFunction === false ? a[property] : sortFunction(a);
                    let propertyB = sortFunction === false ? b[property] : sortFunction(b);
                    return !desc ? GtOrderByPipe_1._orderByComparator(propertyA, propertyB) : -GtOrderByPipe_1._orderByComparator(propertyA, propertyB);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return input.sort((a, b) => {
                //console.log('multiple');
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    //console.log(property);
                    // check if custom sort function is defined
                    let sortFunction = typeof this.getProperty(fields, property).sort === 'function' ? this.getProperty(fields, property).sort : false;
                    // use custom sort function if one is defined
                    let propertyA = sortFunction === false ? a[property] : sortFunction(a);
                    let propertyB = sortFunction === false ? b[property] : sortFunction(b);
                    var comparison = !desc ? GtOrderByPipe_1._orderByComparator(propertyA, propertyB) : -GtOrderByPipe_1._orderByComparator(propertyA, propertyB);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    }
};
let GtOrderByPipe = GtOrderByPipe_1;
GtOrderByPipe = GtOrderByPipe_1 = __decorate([
    core_1.Pipe({
        name: 'gtOrderBy'
    }), 
    __metadata('design:paramtypes', [])
], GtOrderByPipe);
exports.GtOrderByPipe = GtOrderByPipe;
//# sourceMappingURL=gt-order-by.pipe.js.map