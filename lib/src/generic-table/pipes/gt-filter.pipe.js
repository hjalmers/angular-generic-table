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
let GtFilterPipe = class GtFilterPipe {
    //@Output() filterInfo = new EventEmitter();
    transform(array, filterBy, gt, refreshFilter, refreshData) {
        //console.log(array,filterBy);
        //console.log('filter by');
        if (!Array.isArray(array) || !filterBy) {
            //gt.filtered = false;
            let length = array === null ? 0 : array.length;
            gt.refresh(length, gt);
            return array;
        }
        let output = [];
        for (let i = 0; i < array.length; i++) {
            let rowObject = array[i];
            let match = true;
            for (let property in filterBy) {
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
        //gt.filtered = output.length; //.emit(output.length);
        gt.refresh(output.length, gt);
        return output;
    }
};
GtFilterPipe = __decorate([
    core_1.Pipe({
        name: 'gtFilter'
    }), 
    __metadata('design:paramtypes', [])
], GtFilterPipe);
exports.GtFilterPipe = GtFilterPipe;
//# sourceMappingURL=gt-filter.pipe.js.map