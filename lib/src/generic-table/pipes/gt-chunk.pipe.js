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
let GtChunkPipe = class GtChunkPipe {
    transform(array, chunkSize, page, refreshPageArray, refreshData) {
        //console.log('chunk array');
        //console.log(array,chunkSize,page);
        if (!Array.isArray(array))
            return array;
        var R = [];
        for (var i = 0, len = array.length; i < len; i += chunkSize)
            R.push(array.slice(i, i + chunkSize));
        //console.log(R)
        return R[page - 1];
    }
};
GtChunkPipe = __decorate([
    core_1.Pipe({
        name: 'gtChunk'
    }), 
    __metadata('design:paramtypes', [])
], GtChunkPipe);
exports.GtChunkPipe = GtChunkPipe;
//# sourceMappingURL=gt-chunk.pipe.js.map