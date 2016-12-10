"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GtChunkPipe = (function () {
    function GtChunkPipe() {
    }
    GtChunkPipe.prototype.transform = function (array, gtInfo, chunkSize, page, refreshPageArray, refreshData, gtEvent) {
        //console.log('chunk array');
        //console.log(array,chunkSize,page);
        if (!Array.isArray(array))
            return array;
        var pages = [];
        for (var i = 0, len = array.length; i < len; i += chunkSize)
            pages.push(array.slice(i, i + chunkSize));
        gtInfo.pageTotal = pages.length;
        setTimeout(function () { return gtEvent.emit({
            name: 'gt-info',
            value: gtInfo
        }); }, 0);
        return pages[page - 1];
    };
    GtChunkPipe = __decorate([
        core_1.Pipe({
            name: 'gtChunk'
        })
    ], GtChunkPipe);
    return GtChunkPipe;
}());
exports.GtChunkPipe = GtChunkPipe;
