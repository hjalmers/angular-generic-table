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
var directives_1 = require('@angular/core/src/metadata/directives');
var generic_table_component_1 = require('./generic-table.component');
var GtPaginationComponent = (function () {
    function GtPaginationComponent() {
    }
    GtPaginationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        directives_1.Input(), 
        __metadata('design:type', generic_table_component_1.GenericTableComponent)
    ], GtPaginationComponent.prototype, "genericTable", void 0);
    __decorate([
        directives_1.Input(), 
        __metadata('design:type', String)
    ], GtPaginationComponent.prototype, "gtClasses", void 0);
    GtPaginationComponent = __decorate([
        core_1.Component({
            selector: 'gt-pagination',
            template: "<nav aria-label=\"Table navigation\" *ngIf=\"genericTable.gtInfo\">\n  <ul class=\"pagination\" ngClass=\"{{gtClasses}}\">\n    <li class=\"page-item\" ngClass=\"{{genericTable.gtInfo.pageCurrent > 1 ? '':'disabled'}}\"><a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"genericTable.gtInfo.pageCurrent > 1 && genericTable.previousPage()\" tabindex=\"-1\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span><span class=\"sr-only\">Previous</span></a></li>\n    <li class=\"page-item\" *ngIf=\"genericTable.gtInfo.pageCurrent > 4\"><a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"genericTable.goToPage(1)\">1</a><span class=\"page-link\" *ngIf=\"genericTable.gtInfo.pageTotal > 5\">&hellip;</span></li>\n    <li class=\"page-item\" ngClass=\"{{genericTable.gtInfo.pageCurrent === page ? 'active':''}}\" *ngFor=\"let page of genericTable.gtInfo.pageTotal | gtPaginationPipe:genericTable.gtInfo.pageCurrent\"><a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"genericTable.goToPage(page)\">{{page}}</a></li>\n    <li class=\"page-item\" ngClass=\"{{genericTable.gtInfo.pageCurrent === genericTable.gtInfo.pageTotal ? 'active':''}}\" *ngIf=\"genericTable.gtInfo.pageCurrent < genericTable.gtInfo.pageTotal && genericTable.gtInfo.pageTotal > 5\"><span class=\"page-link\" *ngIf=\"genericTable.gtInfo.pageCurrent + 3 < genericTable.gtInfo.pageTotal && genericTable.gtInfo.pageTotal > 6\">&hellip;</span><a href=\"javascript:void(0);\" class=\"page-link\" (click)=\"genericTable.goToPage(genericTable.gtInfo.pageTotal)\">{{genericTable.gtInfo.pageTotal}}</a></li>\n    <li class=\"page-item\" ngClass=\"{{genericTable.gtInfo.pageCurrent !== genericTable.gtInfo.pageTotal ? '':'disabled'}}\"><a class=\"page-link gt-link\" href=\"javascript:void(0);\" (click)=\"genericTable.gtInfo.pageCurrent !== genericTable.gtInfo.pageTotal && genericTable.nextPage()\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span><span class=\"sr-only\">Next</span></a></li>\n  </ul>\n  </nav>\n    ",
            styles: ['.gt-link {cursor: pointer;}']
        }), 
        __metadata('design:paramtypes', [])
    ], GtPaginationComponent);
    return GtPaginationComponent;
}());
exports.GtPaginationComponent = GtPaginationComponent;
var core_2 = require('@angular/core');
var PaginationPipe = (function () {
    function PaginationPipe() {
    }
    PaginationPipe.prototype.transform = function (totalPages, currentPage) {
        var pagination;
        // if less than two pages
        if (totalPages < 2) {
            pagination = [1];
        }
        else if (totalPages < 3) {
            pagination = [1, 2];
        }
        else if (totalPages < 4) {
            pagination = [1, 2, 3];
        }
        else if (totalPages < 5) {
            pagination = [1, 2, 3, 4];
        }
        else if (currentPage <= 4) {
            pagination = [1, 2, 3, 4, 5];
        }
        else if (totalPages - 1 === currentPage) {
            pagination = [currentPage - 2, currentPage - 1, currentPage];
        }
        else if (totalPages - 3 === currentPage && totalPages > 10) {
            pagination = [currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
        }
        else if (totalPages > currentPage) {
            pagination = [currentPage - 1, currentPage, currentPage + 1];
        }
        else if (totalPages === currentPage && totalPages <= 5) {
            pagination = [currentPage - 3, currentPage - 2, currentPage - 1, currentPage];
        }
        else if (totalPages === currentPage) {
            pagination = [currentPage - 2, currentPage - 1, currentPage];
        }
        else if (totalPages - 4 > currentPage) {
            pagination = [currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
        }
        return pagination;
    };
    PaginationPipe = __decorate([
        core_2.Pipe({
            name: 'gtPaginationPipe'
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationPipe);
    return PaginationPipe;
}());
exports.PaginationPipe = PaginationPipe;
//# sourceMappingURL=gt-pagination.component.js.map