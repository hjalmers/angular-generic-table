webpackJsonp(["main"],{

/***/ "../../../../../@angular-generic-table/column-settings/column-settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnSettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_gt_column_settings_component__ = __webpack_require__("../../../../../@angular-generic-table/column-settings/components/gt-column-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_generic_table_core__ = __webpack_require__("../../../../../@angular-generic-table/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ColumnSettingsModule = (function () {
    function ColumnSettingsModule() {
    }
    return ColumnSettingsModule;
}());
ColumnSettingsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_generic_table_core__["b" /* GenericTableModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_gt_column_settings_component__["b" /* GtColumnSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_2__components_gt_column_settings_component__["a" /* GtColumnPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__components_gt_column_settings_component__["b" /* GtColumnSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_2__components_gt_column_settings_component__["a" /* GtColumnPipe */]
        ]
    })
], ColumnSettingsModule);

//# sourceMappingURL=column-settings.module.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/column-settings/components/gt-column-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtColumnPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GtColumnSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__ = __webpack_require__("../../../../../@angular-generic-table/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_gt_column_settings_texts__ = __webpack_require__("../../../../../@angular-generic-table/column-settings/interfaces/gt-column-settings-texts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_gt_column_settings_texts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interfaces_gt_column_settings_texts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GtColumnPipe = (function () {
    function GtColumnPipe() {
    }
    // TODO: move to helper functions
    /** Sort by column order */
    GtColumnPipe.prototype.getColumnOrder = function (a, b) {
        if (a.columnOrder < b.columnOrder)
            return -1;
        if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
            return 1;
        return 0;
    };
    ;
    /** return enabled columns */
    GtColumnPipe.prototype.getEnabled = function (column) {
        return column.enabled !== false ? column : null;
    };
    GtColumnPipe.prototype.transform = function (settings) {
        return settings.filter(this.getEnabled).sort(this.getColumnOrder);
    };
    return GtColumnPipe;
}());
GtColumnPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtColumn'
    })
], GtColumnPipe);

var GtColumnSettingsComponent = (function () {
    function GtColumnSettingsComponent(dragulaService, changeDetectorRef) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.changeDetectorRef = changeDetectorRef;
        this.gtHeaderClasses = 'px-3 pt-3 pb-2 table-bordered border-left-0 border-right-0 border-bottom-0 alert-info';
        this.gtWrapperClasses = 'px-3 pb-3 table-bordered border-left-0 border-right-0 border-top-0 alert-info';
        this.overlay = true;
        this.gtDefaultTexts = {
            title: 'Columns',
            help: 'Double click to toggle visibility, drag and drop to reorder.'
        };
        this.gtTexts = this.gtDefaultTexts;
        this.active = false;
        this.reordered = false;
        /**
         *  Extend object function.
         */
        this.extend = function (a, b) {
            for (var key in b) {
                if (b.hasOwnProperty(key)) {
                    a[key] = b[key];
                }
            }
            return a;
        };
        dragulaService.drop.subscribe(function (value) {
            if (value[0] === _this.bagId) {
                _this._onDrop(value.slice(1));
            }
        });
    }
    Object.defineProperty(GtColumnSettingsComponent.prototype, "genericTable", {
        get: function () {
            return this._genericTable;
        },
        set: function (value) {
            this._genericTable = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check offset height on window resize.
     */
    GtColumnSettingsComponent.prototype.onResize = function () {
        this.offset = this._getTableHeadHeight();
        this.heightAdjust = this._getColumnSettingsHeaderHeight();
    };
    GtColumnSettingsComponent.prototype.ngOnInit = function () {
        this.bagId = this.generateId();
        // setup texts
        this.gtTexts = this.extend(this.gtDefaultTexts, this.gtTexts);
    };
    /**
     * Toggle column settings visibility.
     */
    GtColumnSettingsComponent.prototype.toggleColumnSettings = function () {
        var _this = this;
        this.active = !this.active;
        if (this.active) {
            this.offset = this._getTableHeadHeight();
            // check and adjust height offset
            setTimeout(function () {
                _this.heightAdjust = _this._getColumnSettingsHeaderHeight();
            }, 0);
        }
    };
    /**
     * Toggle column visibility.
     * @param {object} column - column object.
     */
    GtColumnSettingsComponent.prototype.toggleColumnVisibility = function (column) {
        var _this = this;
        // toggle column visibility
        column.visible = typeof column.visible === 'undefined' ? false : !column.visible;
        // redraw table
        this._genericTable.redraw();
        // check and reset offset
        setTimeout(function () {
            _this.offset = _this._getTableHeadHeight();
        }, 0);
    };
    /**
     * Order table by object key.
     * @param {string} args - name of key to sort on.
     */
    GtColumnSettingsComponent.prototype._onDrop = function (args) {
        this.reordered = true;
        var e = args[0], target = args[1];
        var order = {};
        for (var i = 0; i < target.children.length; i++) {
            order[target.children[i].getAttribute('data-object-key')] = i;
        }
        for (var i = 0; i < this._genericTable.gtSettings.length; i++) {
            this._genericTable.gtSettings[i].columnOrder = order[this._genericTable.gtSettings[i].objectKey];
        }
        // reset array to trigger change detection
        this._genericTable.gtSettings = this._genericTable.gtSettings.slice();
        this.changeDetectorRef.markForCheck();
        this._genericTable.redraw();
    };
    /**
     * Get height of table head element ie. first row containing table headers.
     * @returns {string} offset height for table header in px.
     */
    GtColumnSettingsComponent.prototype._getTableHeadHeight = function () {
        try {
            if (this.elementView.elementRef.nativeElement.nextElementSibling.firstElementChild.firstElementChild.tagName === 'THEAD') {
                return this.elementView.elementRef.nativeElement.nextElementSibling.firstElementChild.firstElementChild.offsetHeight + 'px';
            }
            if (this.elementView.elementRef.nativeElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.tagName === 'THEAD') {
                return this.elementView.elementRef.nativeElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.offsetHeight + 'px';
            }
            return '0px';
        }
        catch (error) {
            return '0px';
        }
    };
    /**
     * Get height of table head element ie. first row containing table headers.
     * @returns {string} offset height for table header in px.
     */
    GtColumnSettingsComponent.prototype._getColumnSettingsHeaderHeight = function () {
        try {
            return this.gtColumnSettingsHeader.nativeElement.offsetHeight + 'px';
        }
        catch (error) {
            return '0px';
        }
    };
    /** generate a unique id for dragula instance i.e. a unique bag name*/
    GtColumnSettingsComponent.prototype.generateId = function () {
        var d = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    return GtColumnSettingsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */]) === "function" && _b || Object])
], GtColumnSettingsComponent.prototype, "genericTable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('genericTableElement'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _c || Object)
], GtColumnSettingsComponent.prototype, "elementView", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gtColumnSettingsHeader'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], GtColumnSettingsComponent.prototype, "gtColumnSettingsHeader", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GtColumnSettingsComponent.prototype, "gtHeaderClasses", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GtColumnSettingsComponent.prototype, "gtWrapperClasses", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GtColumnSettingsComponent.prototype, "overlay", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _e || Object)
], GtColumnSettingsComponent.prototype, "gtColumnItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__interfaces_gt_column_settings_texts__["GtColumnSettingsTexts"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interfaces_gt_column_settings_texts__["GtColumnSettingsTexts"]) === "function" && _f || Object)
], GtColumnSettingsComponent.prototype, "gtTexts", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GtColumnSettingsComponent.prototype, "onResize", null);
GtColumnSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gt-column-settings',
        template: "\n        <ng-template #columnItem let-column let-index=\"index\">\n            <span class=\"badge badge-secondary\">{{index}}</span>\n            <span (dblclick)=\"toggleColumnVisibility(column)\" class=\"badge\" [ngClass]=\"{'badge-success':column.visible !== false, 'badge-danger':column.visible === false}\">{{genericTable.gtFields | gtProperty:column.objectKey:'name'}}</span>\n        </ng-template>\n        <div class=\"gt-column-settings\">\n            <div class=\"gt-column-settings-panel\"  *ngIf=\"active\" [style.padding-top]=\"offset\" [style.height]=\"'calc(100% - '+offset+')'\">\n                <div #gtColumnSettingsHeader class=\"gt-column-settings-header border-bottom-0\" [ngClass]=\"gtHeaderClasses\">\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"toggleColumnSettings()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <h6 class=\"gt-column-settings-title\" *ngIf=\"gtTexts.title\">{{gtTexts.title}}</h6>\n                    <small class=\"gt-column-settings-help form-text text-muted\" *ngIf=\"gtTexts.help\">{{gtTexts.help}}</small>\n                </div>\n                <div class=\"gt-column-settings-item-wrapper\" [ngClass]=\"gtWrapperClasses\" [dragula]='bagId'  data-visible=\"true\" [style.max-height]=\"'calc(100% - '+heightAdjust+')'\">\n                    <div class=\"gt-column-settings-item pr-0 pr-sm-4\" *ngFor=\"let i = index;let column of genericTable.gtSettings | gtColumn\" [attr.data-object-key]=\"column.objectKey\">\n                        <ng-template [ngTemplateOutlet]=\"gtColumnItem ? gtColumnItem:columnItem\" [ngOutletContext]=\"{$implicit: column,index: this.reordered ? column.columnOrder+1:i+1, name: (genericTable.gtFields | gtProperty:column.objectKey:'name')}\"></ng-template>\n                    </div>\n                </div>\n                <div class=\"gt-overlay\" *ngIf=\"active && overlay\" (click)=\"toggleColumnSettings()\" [style.height]=\"'calc(100% - -'+offset+')'\"></div>\n            </div>\n            <ng-template #genericTableElement [ngIf]=\"genericTable\">\n                <ng-content></ng-content>\n            </ng-template>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _h || Object])
], GtColumnSettingsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=gt-column-settings.component.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/column-settings/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_settings_module__ = __webpack_require__("../../../../../@angular-generic-table/column-settings/column-settings.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__column_settings_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/column-settings/interfaces/gt-column-settings-texts.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=gt-column-settings-texts.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/components/generic-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_gt_texts__ = __webpack_require__("../../../../../@angular-generic-table/core/interfaces/gt-texts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_gt_texts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__interfaces_gt_texts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_gt_information__ = __webpack_require__("../../../../../@angular-generic-table/core/interfaces/gt-information.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_gt_information___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interfaces_gt_information__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_gt_options__ = __webpack_require__("../../../../../@angular-generic-table/core/interfaces/gt-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_gt_options___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__interfaces_gt_options__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GenericTableComponent = (function () {
    function GenericTableComponent(renderer) {
        var _this = this;
        this.renderer = renderer;
        this.sortOrder = [];
        this.metaInfo = {};
        this.selectedRows = [];
        this.openRows = [];
        this._gtSettings = [];
        this._gtFields = [];
        this.gtDefaultTexts = {
            loading: 'Loading...',
            noData: 'No data',
            noMatchingData: 'No data matching results found',
            noVisibleColumnsHeading: 'No visible columns',
            noVisibleColumns: 'Please select at least one column to be visible.',
            tableInfo: 'Showing #recordFrom to #recordTo of #recordsAfterSearch entries.',
            tableInfoAfterSearch: 'Showing  #recordFrom to #recordTo of #recordsAfterSearch entries (filtered from a total of #recordsAll entries).',
            csvDownload: 'download',
            sortLabel: 'Sort:',
            paginateNext: 'Next page',
            paginatePrevious: 'Previous page',
            inlineEditEdited: 'Press enter to save'
        };
        this.gtTexts = this.gtDefaultTexts;
        this.gtEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.gtDefaultOptions = {
            csvDelimiter: ';',
            stack: false,
            lazyLoad: false,
            cache: false,
            debounceTime: 200,
            highlightSearch: false,
            rowSelection: false,
            rowSelectionAllowMultiple: true,
            rowExpandAllowMultiple: true,
            numberOfRows: 10
        };
        this._gtOptions = this.gtDefaultOptions;
        this.store = [];
        this.loading = true;
        this.debounceTimer = null;
        this.gtInfo = {
            pageCurrent: 1,
            pageTotal: 0,
            recordFrom: 0,
            recordTo: 0,
            recordLength: this._gtOptions.numberOfRows,
            recordsAll: 0,
            recordsAfterFilter: 0,
            recordsAfterSearch: 0
        };
        this.refreshPipe = false;
        this.refreshTotals = false;
        this.refreshSorting = false;
        this.editedRows = {};
        this.data = { exportData: [] }; // Store filtered data for export
        /**
         * Sort table by object key.
         * @param {string} objectKey - name of key to sort on.
         * @param {any} event - such as key press during sorting.
         */
        this.gtSort = function (objectKey, event) {
            this.inlineEditCancel(); // cancel inline editing
            // loop through current settings
            for (var i = 0; i < this._gtSettings.length; i++) {
                if (this._gtSettings[i].objectKey === objectKey) {
                    // check if sorting is disabled...
                    if (this._gtSettings[i].sort && this._gtSettings[i].sort.indexOf('disable') !== -1) {
                        // ...if so, exit function without applying any sorting
                        return;
                    }
                    else if (typeof this._gtSettings[i].sort === 'undefined') {
                        // ...is so, set sorting property to enable
                        this._gtSettings[i].sort = 'enable';
                    }
                }
            }
            // check length
            var ctrlKey = event.metaKey || event.ctrlKey;
            var sort = this.sortOrder.slice(0);
            var match = -1;
            var matchDesc = -1;
            var pos = -1;
            // check if property already exits
            for (var i = 0; i < sort.length; i++) {
                var hit = sort[i].indexOf(objectKey);
                if (hit !== -1) {
                    match = this.sortOrder.indexOf(objectKey);
                    matchDesc = match === -1 ? this.sortOrder.indexOf('-' + objectKey) : match;
                    pos = Math.max(match, matchDesc);
                }
            }
            // if ctrl key or meta key is press together with sort...
            if (ctrlKey) {
                switch (pos) {
                    // ...and property is not sorted before...
                    case -1:
                        // ...add property to sorting
                        this.sortOrder.push(objectKey);
                        break;
                    default:
                        // ...and property is sorted before...
                        if (match !== -1) {
                            // ...change from asc to desc if sorted asc
                            this.sortOrder[pos] = '-' + objectKey;
                        }
                        else if (this.sortOrder.length > 1) {
                            // ...remove sorting if sorted desc
                            this.sortOrder.splice(pos, 1);
                        }
                        else if (this.sortOrder.length === 1) {
                            // ...set sorting to asc if only sorted property
                            this.sortOrder[pos] = objectKey;
                        }
                        break;
                }
            } /* if ctrl key or meta key is not press together with sort... */
            else {
                switch (pos) {
                    // ...and property is not sorted before...
                    case -1:
                        // ...sort by property
                        this.sortOrder = [objectKey];
                        break;
                    default:
                        // ...change from desc to asc and vise versa
                        this.sortOrder = match !== -1 ? ['-' + objectKey] : [objectKey];
                        break;
                }
            }
            // update settings object with new sorting information
            for (var i = 0; i < this._gtSettings.length; i++) {
                if (this._gtSettings[i].objectKey === objectKey) {
                    switch (this._gtSettings[i].sort) {
                        // if sorted asc...
                        case 'asc':
                            // ...change to desc
                            this._gtSettings[i].sort = 'desc';
                            break;
                        // if sorted desc...
                        case 'desc':
                            // ...change to asc if it's the only sorted property otherwise remove sorting
                            this._gtSettings[i].sort = this.sortOrder.length === 1 && sort.length < 2 ? 'asc' : 'enable';
                            break;
                        // if sorting enabled...
                        case 'enable':
                            // ...change to asc
                            this._gtSettings[i].sort = 'asc';
                            break;
                    }
                    this._gtSettings[i].sortOrder = this._gtSettings[i].sort === 'enable' ? (this._gtSettings.length - 1) : this.sortOrder.indexOf(objectKey) === -1 ? this.sortOrder.indexOf('-' + objectKey) : this.sortOrder.indexOf(objectKey);
                }
                else if (this._gtSettings[i].sort && this._gtSettings[i].sort.indexOf('disable') === -1 && this.sortOrder.indexOf(this._gtSettings[i].objectKey) === -1 && this.sortOrder.indexOf('-' + this._gtSettings[i].objectKey) === -1) {
                    this._gtSettings[i].sort = 'enable';
                    this._gtSettings[i].sortOrder = (this._gtSettings.length - 1);
                }
            }
            // refresh sorting pipe
            this.refreshSorting = !this.refreshSorting;
            this.refreshPageArray = !this.refreshPageArray;
            // emit sort event
            this.gtEvent.emit({
                name: 'gt-sorting-applied',
                value: this.sortOrder
            });
        };
        /**
         * Change number of rows to be displayed.
         * @param {string} rowLength - total number of rows.
         * @param {boolean} reset - should page be reset to first page.
         * @returns {number} number of pages to display.
         */
        this.changeRowLength = function (rowLength, reset) {
            var newPosition = 1;
            // if reset is not true and we're not lazy loading data...
            if (reset !== true && this._gtOptions.lazyLoad !== true) {
                // ...get current position in record set
                var currentRecord = this.gtInfo.recordLength * (this.gtInfo.pageCurrent - 1);
                var currentPosition = this._gtData.indexOf(this._gtData[currentRecord]) + 1;
                // ...get new position
                newPosition = Math.ceil(currentPosition / rowLength);
            }
            // change row length
            this.gtInfo.recordLength = parseInt(rowLength, 10);
            // go to new position
            this.gtInfo.pageCurrent = newPosition;
            // if lazy loading data...
            if (this._gtOptions.lazyLoad) {
                // ...replace data with place holders for new data
                this._gtData[0] = this.loadingContent(rowLength);
                // ...empty current store
                this.store = [];
            }
            // this.updateRecordRange();
            this.gtEvent.emit({
                name: 'gt-row-length-changed',
                value: rowLength
            });
        };
        /**
         * Force a redraw of table rows.
         * As the table uses pure pipes, we need to force a redraw if an object in the array is changed to see the changes.
         */
        this.redraw = function () {
            this.refreshSorting = !this.refreshSorting;
            this.refreshPageArray = !this.refreshPageArray;
            this.refreshPipe = !this.refreshPipe;
        };
        /** Go to next page. */
        this.nextPage = function () {
            var page = this.gtInfo.pageCurrent === this.gtInfo.pageTotal ? this.gtInfo.pageTotal : this.gtInfo.pageCurrent += 1;
            this.goToPage(page);
        };
        /** Go to previous page. */
        this.previousPage = function () {
            var page = this.gtInfo.pageCurrent === 1 ? 1 : this.gtInfo.pageCurrent -= 1;
            this.goToPage(page);
        };
        /** Request more data (used when lazy loading) */
        this.getData = function () {
            // ...emit event requesting for more data
            this.gtEvent.emit({
                name: 'gt-page-changed-lazy',
                value: { pageCurrent: this.gtInfo.pageCurrent, recordLength: this.gtInfo.recordLength }
            });
        };
        /**
         * Go to specific page.
         * @param {number} page - page number.
         */
        this.goToPage = function (page) {
            var _this = this;
            this.gtInfo.pageCurrent = page;
            this.inlineEditCancel(); // cancel inline edit
            // if lazy loading and if page contains no records...
            if (this._gtOptions.lazyLoad) {
                // ...if data for current page contains no entries...
                if (this._gtOptions.cache === false || this._gtData[this.gtInfo.pageCurrent - 1].length === 0) {
                    // ...create temporary content while waiting for data
                    this._gtData[this.gtInfo.pageCurrent - 1] = this.loadingContent(this.gtInfo.recordLength);
                    this.loading = true; // loading true
                }
                // ...if first entry in current page equals our loading placeholder...
                if (this._gtData[this.gtInfo.pageCurrent - 1][0][this.loadingProperty] === this.gtTexts.loading) {
                    // ...get data
                    clearTimeout(this.debounceTimer);
                    this.debounceTimer = setTimeout(function () {
                        _this.getData();
                    }, this._gtOptions.debounceTime);
                }
            }
            // this.updateRecordRange();
            // ...emit page change event
            this.gtEvent.emit({
                name: 'gt-page-changed',
                value: { pageCurrent: this.gtInfo.pageCurrent, recordLength: this.gtInfo.recordLength }
            });
        };
        // TODO: move to helper functions
        /** Sort by sort order */
        this.getSortOrder = function (a, b) {
            if (a.sortOrder < b.sortOrder) {
                return -1;
            }
            if (a.sortOrder > b.sortOrder || typeof a.sortOrder === 'undefined') {
                return 1;
            }
            return 0;
        };
        // TODO: move to helper functions
        /** Sort by column order */
        this.getColumnOrder = function (a, b) {
            if (a.columnOrder === undefined) {
                return -1;
            }
            if (a.columnOrder < b.columnOrder) {
                return -1;
            }
            if (a.columnOrder > b.columnOrder) {
                return 1;
            }
            return 0;
        };
        /** Return property */
        this.getProperty = function (array, key) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].objectKey === key) {
                    return array[i];
                }
            }
        };
        this.restructureSorting = function () {
            /** Check and store sort order upon initialization.
             *  This is done by checking sort properties in the settings array of the table, if no sorting is defined
             *  we'll sort the data by the first visible and enabled column in the table(ascending). Please note that actually
             *  sorting have to be done server side when lazy loading data for obvious reasons.  */
            // create sorting array
            var sorting = [];
            if (this._gtSettings) {
                // ...sort settings by sort order
                this._gtSettings.sort(this.getSortOrder);
                // ...loop through settings
                for (var i = 0; i < this._gtSettings.length; i++) {
                    var setting = this._gtSettings[i];
                    // ...if sorted ascending...
                    if (setting.sort === 'asc') {
                        // ... add to sorting
                        sorting.push(setting.objectKey);
                    } /* ...else if sorted descending... */
                    else if (setting.sort === 'desc') {
                        // ... add to sorting
                        sorting.push('-' + setting.objectKey);
                    }
                }
                // ...if no sorting applied...
                if (sorting.length === 0) {
                    // ...sort settings by column order
                    this._gtSettings.sort(this.getColumnOrder);
                    // ...loop through settings
                    for (var i = 0; i < this._gtSettings.length; i++) {
                        var setting = this._gtSettings[i];
                        // ...if column is enabled and visible...
                        if (setting.enabled !== false && setting.visible !== false) {
                            // ...add first match and exit function
                            this.sortOrder = [this._gtSettings[i].objectKey];
                            return;
                        }
                    }
                }
            }
            if (this.sortOrder.length === 0) {
                this.sortOrder = sorting;
            }
        };
        /**
         *  Extend object function.
         */
        this.extend = function (a, b) {
            for (var key in b) {
                if (b.hasOwnProperty(key)) {
                    a[key] = b[key];
                }
            }
            return a;
        };
        this.gtEvent.subscribe(function ($event) {
            if ($event.name === 'gt-info') {
                _this.updateRecordRange();
            }
            if ($event.name === 'gt-row-updated') {
                _this.updateTotals();
            }
        });
    }
    Object.defineProperty(GenericTableComponent.prototype, "hasEdits", {
        get: function () {
            return Object.keys(this.editedRows).length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericTableComponent.prototype, "gtOptions", {
        get: function () {
            return this._gtOptions;
        },
        set: function (value) {
            this._gtOptions = value;
            // if number of rows is passed and if number of rows differs from current record length...
            if (this._gtOptions.numberOfRows && this.gtInfo.recordLength !== this._gtOptions.numberOfRows) {
                // ...update record length and redraw table
                this.gtInfo.recordLength = this._gtOptions.numberOfRows;
                this.redraw();
            }
            // ...extend gtOptions default values with values passed into component
            this._gtOptions = this.extend(this.gtDefaultOptions, this._gtOptions);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericTableComponent.prototype, "gtTotals", {
        get: function () {
            return this._gtTotals;
        },
        set: function (value) {
            this._gtTotals = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericTableComponent.prototype, "gtFields", {
        get: function () {
            return this._gtFields;
        },
        set: function (value) {
            this._gtFields = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericTableComponent.prototype, "gtSettings", {
        get: function () {
            return this._gtSettings;
        },
        set: function (value) {
            this._gtSettings = value;
            // loop through current settings
            for (var i = 0; i < this._gtSettings.length; i++) {
                // set sort enabled/disabled setting
                this._gtSettings[i].sortEnabled = !(this._gtSettings[i].sort && this._gtSettings[i].sort.indexOf('disable') !== -1);
                // check if sorting is undefined...
                if (typeof this._gtSettings[i].sort === 'undefined') {
                    // ...is so, set sorting property to enable
                    this._gtSettings[i].sort = 'enable';
                }
                // check if column order is undefined...
                if (typeof this._gtSettings[i].columnOrder === 'undefined' && this._gtSettings[i].enabled !== false) {
                    // ...is so, set sorting property to enable
                    this._gtSettings[i].columnOrder = this._gtSettings[i - 1] ? this._gtSettings[i - 1].columnOrder + 1 : 0;
                }
            }
            this.restructureSorting();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericTableComponent.prototype, "gtData", {
        get: function () {
            return this._gtData;
        },
        set: function (value) {
            this._gtData = value;
        },
        enumerable: true,
        configurable: true
    });
    /** Update record range. */
    GenericTableComponent.prototype.updateRecordRange = function () {
        this.gtInfo.recordFrom = this.gtInfo.recordsAfterSearch === 0 ? 0 : (this.gtInfo.pageCurrent - 1) * this.gtInfo.recordLength + 1;
        this.gtInfo.recordTo = this.gtInfo.recordsAfterSearch < this.gtInfo.pageCurrent * this.gtInfo.recordLength ? this.gtInfo.recordsAfterSearch : this.gtInfo.pageCurrent * this.gtInfo.recordLength;
    };
    ;
    /** Update totals. */
    GenericTableComponent.prototype.updateTotals = function () {
        this.refreshTotals = !this.refreshTotals;
    };
    /**
     * Get meta data for row.
     */
    GenericTableComponent.prototype.getRowState = function (row) {
        return typeof this.metaInfo[row.$$gtRowId] === 'undefined' ? null : this.metaInfo[row.$$gtRowId];
    };
    /**
     * Expand all rows.
     */
    GenericTableComponent.prototype.expandAllRows = function () {
        this._toggleAllRowProperty('isOpen', true);
    };
    /**
     * Collapse all rows.
     */
    GenericTableComponent.prototype.collapseAllRows = function () {
        this._toggleAllRowProperty('isOpen', false);
    };
    /**
     * Select all rows.
     */
    GenericTableComponent.prototype.selectAllRows = function () {
        this._toggleAllRowProperty('isSelected', true);
    };
    /**
     * Deselect all rows.
     */
    GenericTableComponent.prototype.deselectAllRows = function () {
        this._toggleAllRowProperty('isSelected', false);
    };
    /**
     * Toggle row collapsed state ie. expanded/open or collapsed/closed.
     * @param {GtRow} row - row object that should be expanded/collapsed.
     */
    GenericTableComponent.prototype.toggleCollapse = function (row) {
        this._toggleRowProperty(row, 'isOpen');
    };
    /**
     * Toggle row selected state ie. selected or not.
     * @param {GtRow} row - row object that should be selected/deselected.
     */
    GenericTableComponent.prototype.toggleSelect = function (row) {
        this._toggleRowProperty(row, 'isSelected');
    };
    /**
     * Update row data.
     * @param {GtRow} row - row object that has been edited.
     * @param {GtRow} oldValue - row object before edit.
     */
    GenericTableComponent.prototype.updateRow = function (row, oldValue) {
        this._toggleRowProperty(row, 'isUpdated', oldValue);
    };
    /**
     * removes a row from the table
     * @param {any} row - the row object to remove
     */
    GenericTableComponent.prototype.removeRow = function (row) {
        if (this.isRowSelected(row)) {
            this.toggleSelect(row);
        }
        var index = this._gtData.indexOf(row);
        this._gtData.splice(index, 1);
    };
    /**
     * check if a row is selected
     * @param {any} row - row object
     */
    GenericTableComponent.prototype.isRowSelected = function (row) {
        return this.metaInfo[row.$$gtRowId] && this.metaInfo[row.$$gtRowId].isSelected;
    };
    /**
     * Update meta info for all rows, ie. isSelected, isOpen.
     * @param {Array} array - array that holds rows that need to be updated.
     * @param {string} property - name of property that should be changed/toggled.
     * @param {boolean} active - should rows be expanded/open, selected.
     * @param {GtRow} exception - update all rows except this one.
     */
    GenericTableComponent.prototype._updateMetaInfo = function (array, property, active, exception) {
        for (var i = 0; i < array.length; i++) {
            if (!this.metaInfo[array[i].$$gtRowId]) {
                this.metaInfo[array[i].$$gtRowId] = {};
            }
            if (exception && array[i].$$gtRowId === exception.$$gtRowId) {
            }
            else {
                this.metaInfo[array[i].$$gtRowId][property] = active;
            }
        }
    };
    /**
     * Push selected/expanded lazy loaded rows to array with meta data.
     * @param {Array} target - array to which rows should be added.
     * @param {Array} source - array that holds rows that should be added.
     * @returns {Array} array with added rows.
     */
    GenericTableComponent.prototype._pushLazyRows = function (target, source) {
        for (var i = 0; i < source.length; i++) {
            target.push(source[i]);
        }
        return target;
    };
    /**
     * Toggle meta info for all rows, ie. isSelected, isOpen.
     * @param {string} property - name of property that should be changed/toggled.
     * @param {boolean} active - should rows be expanded/open, selected.
     */
    GenericTableComponent.prototype._toggleAllRowProperty = function (property, active) {
        var eventName;
        var eventValue;
        switch (property) {
            case 'isOpen':
                // check if multiple expanded rows are allowed...
                if (this._gtOptions.rowExpandAllowMultiple === false) {
                    // ...if not, exit function
                    console.log('feature disabled: enable by setting "rowExpandAllowMultiple = true"');
                    return;
                }
                if (active) {
                    eventName = 'expand-all';
                    this.openRows = this._gtOptions.lazyLoad ? this._pushLazyRows(this.openRows, this._gtData[this.gtInfo.pageCurrent - 1].slice()) : this._gtData.slice();
                    this._updateMetaInfo(this.openRows, property, active);
                }
                else {
                    eventName = 'collapse-all';
                    this._updateMetaInfo(this.openRows, property, active);
                    this.openRows = [];
                }
                eventValue = {
                    expandedRows: this.openRows,
                    changedRow: 'all'
                };
                break;
            case 'isSelected':
                // check if multi row selection is allowed...
                if (this._gtOptions.rowSelectionAllowMultiple === false) {
                    // ...if not, exit function
                    console.log('feature disabled: enable by setting "rowSelectionAllowMultiple = true"');
                    return;
                }
                if (active) {
                    eventName = 'select-all';
                    this.selectedRows = this._gtOptions.lazyLoad ? this._pushLazyRows(this.selectedRows, this._gtData[this.gtInfo.pageCurrent - 1].slice()) : this._gtData.slice();
                    this._updateMetaInfo(this.selectedRows, property, active);
                }
                else {
                    eventName = 'deselect-all';
                    this._updateMetaInfo(this.selectedRows, property, active);
                    this.selectedRows = [];
                }
                eventValue = {
                    selectedRows: this.selectedRows,
                    changedRow: 'all'
                };
                break;
        }
        this.gtEvent.emit({
            name: 'gt-row-' + eventName,
            value: eventValue
        });
    };
    /**
     * Toggle meta info for row, ie. isSelected, isOpen.
     * @param {Object} row - row object.
     * @param {string} property - name of property that should be changed/toggled.
     * @param {any} propertyValues - optional property values that can be passed.
     */
    GenericTableComponent.prototype._toggleRowProperty = function (row, property, propertyValues) {
        var eventName;
        var eventValue;
        // make sure gtRowId exists on row object
        if (typeof row.$$gtRowId !== 'undefined') {
            // check if meta info exists for row
            if (!this.metaInfo[row.$$gtRowId]) {
                // if not, add object to store meta info
                this.metaInfo[row.$$gtRowId] = {};
            }
            switch (property) {
                case 'isOpen':
                    var opened = this.metaInfo[row.$$gtRowId][property];
                    // check if multiple expanded rows are allowed...
                    if (this._gtOptions.rowExpandAllowMultiple === false) {
                        // ...if not, collapse all rows except current row
                        this._updateMetaInfo(this.openRows, property, false, row);
                        this.openRows = [];
                    }
                    // check if row is expanded
                    if (!opened) {
                        eventName = 'expand';
                        // add row to expanded rows
                        this.openRows.push(row);
                    }
                    else {
                        eventName = 'collapse';
                        // loop through expanded rows...
                        for (var i = 0; i < this.openRows.length; i++) {
                            // if expanded row equals passed row...
                            if (this.openRows[i].$$gtRowId === row.$$gtRowId) {
                                // ...remove row from expanded rows...
                                this.openRows.splice(i, 1);
                                // ...and exit loop
                                break;
                            }
                        }
                    }
                    eventValue = {
                        expandedRows: this.openRows,
                        changedRow: row
                    };
                    break;
                case 'isSelected':
                    var selected = this.metaInfo[row.$$gtRowId][property];
                    // check if multi row selection is allowed...
                    if (this._gtOptions.rowSelectionAllowMultiple === false) {
                        // ...if not, deselect all rows except current row
                        this._updateMetaInfo(this.selectedRows, property, false, row);
                        this.selectedRows = [];
                    }
                    // check if row is selected
                    if (!selected) {
                        eventName = 'select';
                        // add row to selected rows
                        this.selectedRows.push(row);
                    }
                    else {
                        eventName = 'deselect';
                        // loop through selected rows...
                        for (var i = 0; i < this.selectedRows.length; i++) {
                            // if selected row equals passed row...
                            if (this.selectedRows[i].$$gtRowId === row.$$gtRowId) {
                                // ...remove row from selected rows...
                                this.selectedRows.splice(i, 1);
                                // ...and exit loop
                                break;
                            }
                        }
                    }
                    eventValue = {
                        selectedRows: this.selectedRows,
                        changedRow: row
                    };
                    break;
                case 'isUpdated':
                    eventName = 'updated';
                    var oldValue = propertyValues;
                    // check if edit object exists for row
                    if (typeof this.metaInfo[row.$$gtRowId][property] === 'undefined') {
                        this.metaInfo[row.$$gtRowId][property] = {
                            originalValue: oldValue,
                            oldValue: oldValue,
                            newValue: row
                        };
                    }
                    else {
                        this.metaInfo[row.$$gtRowId][property].oldValue = oldValue;
                        this.metaInfo[row.$$gtRowId][property].newValue = row;
                    }
                    eventValue = this.metaInfo[row.$$gtRowId][property];
                    break;
            }
            this.gtEvent.emit({
                name: 'gt-row-' + eventName,
                value: eventValue
            });
            if (property !== 'isUpdated') {
                this.metaInfo[row.$$gtRowId][property] = !this.metaInfo[row.$$gtRowId][property];
            }
        }
    };
    /**
     * Update column.
     * @param {Object} $event - key up event.
     * @param {GtRow} row - row object.
     * @param {GtRenderField} column - column object.
     */
    GenericTableComponent.prototype.gtUpdateColumn = function ($event, row, column) {
        this._editRow(row, column);
    };
    /**
     * Dropdown select.
     * @param {GtRow} row - row object.
     * @param {GtRenderField} column - column object.
     */
    GenericTableComponent.prototype.gtDropdownSelect = function (row, column) {
        var oldValue = __assign({}, row);
        row[column.objectKey] = column.renderValue;
        this.updateRow(row, oldValue);
    };
    GenericTableComponent.prototype._editRow = function (row, column) {
        var OBJECT_KEY = column.objectKey; // declare object key which contains changes
        // check if cell has changed value
        column.edited = row[column.objectKey] !== column.renderValue;
        // check if row contains changes...
        if (!this.editedRows[row.$$gtRowId]) {
            // if not, create an object for the changed row
            this.editedRows[row.$$gtRowId] = {
                changes: {},
                row: row // store reference to the row that should be updated
            };
        }
        // store changed column under changes if it has been edited
        if (column.edited) {
            this.editedRows[row.$$gtRowId].changes[OBJECT_KEY] = column;
        }
        else {
            // delete change object if column is unchanged
            delete this.editedRows[row.$$gtRowId].changes[OBJECT_KEY];
            // check how many columns have been changed
            var CHANGED_COLUMNS = Object.keys(this.editedRows[row.$$gtRowId].changes).length;
            if (CHANGED_COLUMNS === 0) {
                // delete row from edited rows if no columns have been edited
                delete this.editedRows[row.$$gtRowId];
            }
        }
        // if no listener is present...
        if (!this.globalInlineEditListener) {
            // ...listen for update event
            this._listenForKeydownEvent();
        }
    };
    /**
     * Listen for key down event - listen for key down event during inline edit.
     */
    GenericTableComponent.prototype._listenForKeydownEvent = function () {
        var _this = this;
        // add global listener for key down events
        this.globalInlineEditListener = this.renderer.listen('document', 'keydown', function ($event) {
            switch ($event.key) {
                case 'Enter':
                    _this.inlineEditUpdate();
                    break;
                case 'Escape':
                    _this.inlineEditCancel();
                    break;
            }
        });
    };
    /**
     * Inline edit update - accept changes and update row values.
     */
    GenericTableComponent.prototype.inlineEditUpdate = function () {
        var _this = this;
        // loop through rows that have been edited
        Object.keys(this.editedRows).map(function (key) {
            var ROW = _this.editedRows[key].row; // row to update
            var CHANGES = _this.editedRows[key].changes; // changes to the row
            // loop through changes in row
            Object.keys(CHANGES).map(function (objectKey) {
                var oldValue = __assign({}, ROW);
                ROW[objectKey] = CHANGES[objectKey].renderValue; // update data value
                _this.updateRow(ROW, oldValue); // update meta info for row and send event
                CHANGES[objectKey].edited = false; // disable edit mode
            });
        });
        // clear rows marked as edited as the rows have been updated
        this.editedRows = {};
        // remove listener
        this._stopListeningForKeydownEvent();
    };
    /**
     * Inline edit cancel - cancel and reset inline edits.
     */
    GenericTableComponent.prototype.inlineEditCancel = function () {
        var _this = this;
        // loop through rows that have been edited
        Object.keys(this.editedRows).map(function (key) {
            var ROW = _this.editedRows[key].row; // row to update
            var CHANGES = _this.editedRows[key].changes; // changes to the row
            // loop through changes in row
            Object.keys(CHANGES).map(function (objectKey) {
                CHANGES[objectKey].renderValue = ROW[objectKey]; // reset rendered value
                CHANGES[objectKey].edited = false; // disable edit mode
            });
        });
        // clear rows marked as edited as the rows have been updated
        this.editedRows = {};
        // remove listener
        this._stopListeningForKeydownEvent();
    };
    /**
     * Stop listening for key down event - stop listening for key down events passed during inline edit.
     */
    GenericTableComponent.prototype._stopListeningForKeydownEvent = function () {
        if (this.globalInlineEditListener) {
            this.globalInlineEditListener();
            this.globalInlineEditListener = null;
        }
    };
    /**
     * Apply filter(s).
     * @param {Object} filter - object containing key value pairs, where value should be array of values.
     */
    GenericTableComponent.prototype.gtApplyFilter = function (filter) {
        this.gtInfo.filter = filter;
        // go to first page
        this.goToPage(1);
        this.updateTotals();
    };
    ;
    /** Clear/remove applied filter(s). */
    GenericTableComponent.prototype.gtClearFilter = function () {
        this.gtInfo.filter = false;
        this.updateTotals();
        // this.updateRecordRange();
    };
    ;
    /**
     * Search
     * @param {string} value - string containing one or more words
     */
    GenericTableComponent.prototype.gtSearch = function (value) {
        this.gtInfo.searchTerms = value;
        // always go to first page when searching
        this.goToPage(1);
        this.updateTotals();
    };
    ;
    /**
     * Create store to hold previously loaded records.
     * @param {number} records - total number of records in store.
     * @param {number} perPage - how many records to show per page.
     * @returns {Array} a nested array to hold records per page.
     */
    GenericTableComponent.prototype.createStore = function (records, perPage) {
        var stores = Math.ceil(records / perPage);
        var store = [];
        for (var i = 0; i < stores; i++) {
            store[i] = [];
        }
        return store;
    };
    ;
    /**
     * Create placeholders for rows while loading data from back-end.
     * @param {number} perPage - how many records to show per page.
     * @returns {Array} an array containing empty records to be presented while fetching real data.
     */
    GenericTableComponent.prototype.loadingContent = function (perPage) {
        // create row object
        var rowObject = {
            $$loading: true
        };
        var order = 0;
        // sort settings by column order
        this._gtSettings.sort(this.getColumnOrder);
        // loop through all settings objects...
        for (var i = 0; i < this._gtSettings.length; i++) {
            var setting = this._gtSettings[i];
            // ...if column is visible and enabled...
            if (setting.visible !== false && setting.enabled !== false) {
                // ...if first column, set value to loading text otherwise leave it empty
                if (order === 0) {
                    rowObject[setting.objectKey] = this.gtTexts.loading;
                    this.loadingProperty = setting.objectKey;
                }
                else {
                    rowObject[setting.objectKey] = '';
                }
                order++;
            }
            else {
                rowObject[setting.objectKey] = '';
            }
        }
        // create content placeholder
        var contentPlaceholder = [];
        // create equal number of rows as rows per page
        for (var i = 0; i < perPage; i++) {
            // ...add temporary row object
            contentPlaceholder.push(rowObject);
        }
        return contentPlaceholder;
    };
    ;
    /** Export data as CSV
     * @param {string} fileName - optional file name (overrides default file name).
     */
    GenericTableComponent.prototype.exportCSV = function (fileName) {
        var _this = this;
        var data = this.data.exportData;
        var csv = '';
        // csv export headers
        for (var i = 0; i < this._gtSettings.length; i++) {
            if (this._gtSettings[i].export !== false) {
                csv += this.getProperty(this._gtFields, this._gtSettings[i].objectKey).name;
                if (i < (this._gtSettings.length - 1)) {
                    csv += this._gtOptions.csvDelimiter;
                }
            }
        }
        // csv export body
        data.forEach(function (row) {
            csv += '\n';
            for (var i = 0; i < _this._gtSettings.length; i++) {
                if (_this._gtSettings[i].export !== false) {
                    // get field settings
                    var fieldSetting = _this.getProperty(_this._gtFields, _this._gtSettings[i].objectKey);
                    // get export value, if export function is defined use it otherwise check for value function and as a last resort export raw data
                    var exportValue = fieldSetting.export && typeof fieldSetting.export === 'function' ?
                        fieldSetting.export(row) : fieldSetting.value && typeof fieldSetting.value === 'function' ?
                        fieldSetting.value(row) : row[_this._gtSettings[i].objectKey];
                    // escape export value using double quotes (") if export value contains delimiter
                    exportValue = typeof exportValue === 'string' && exportValue.indexOf(_this._gtOptions.csvDelimiter) !== -1 ? '"' + exportValue + '"' : exportValue;
                    csv += exportValue;
                    if (i < (_this._gtSettings.length - 1)) {
                        csv += _this._gtOptions.csvDelimiter;
                    }
                }
            }
        });
        var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        });
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, fileName ? fileName : this.gtTexts.csvDownload + '.csv');
        }
        else {
            var link = document.createElement('a');
            link.style.display = 'none';
            document.body.appendChild(link);
            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', fileName ? fileName : this.gtTexts.csvDownload + '.csv');
                document.body.appendChild(link);
                link.click();
            }
            else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
            document.body.removeChild(link);
        }
        // emit export event
        this.gtEvent.emit({
            name: 'gt-exported-csv',
            value: fileName ? fileName : this.gtTexts.csvDownload + '.csv'
        });
    };
    GenericTableComponent.prototype.ngOnInit = function () {
        this.restructureSorting();
    };
    GenericTableComponent.prototype.ngOnChanges = function (changes) {
        // if gt texts have changed...
        if (changes['gtTexts']) {
            // ...extend gtOptions default values with values passed into component
            this.gtTexts = this.extend(this.gtDefaultTexts, this.gtTexts);
        }
        // if lazy loading data and paging information is available...
        if (this._gtOptions.lazyLoad && this.gtInfo) {
            // ...calculate total number of pages
            this.gtInfo.pageTotal = Math.ceil(this.gtInfo.recordsAfterSearch / this.gtInfo.recordLength);
            // ...declare store position
            var storePosition = this.gtInfo.pageCurrent - 1;
            // ...and if store is empty or page length has changed...
            if (this.store.length === 0 || this.store[0].length !== this.gtInfo.recordLength) {
                // ...create store
                this.store = this.createStore(this.gtInfo.recordsAfterSearch, this.gtInfo.recordLength);
            }
            // ...store retrieved data in store at store position
            this.store[storePosition] = this._gtData;
            // replace data with store
            this._gtData = this.store;
            this.loading = false;
            this.updateRecordRange();
            this.gtEvent.emit({
                name: 'gt-info',
                value: this.gtInfo
            });
        }
        else if (this._gtData && this._gtData.length >= 0 && changes['gtData'] && changes['gtData'].previousValue) {
            this.loading = false;
        }
        else if (changes['gtData'] && changes['gtData'].firstChange && this._gtData && this._gtData.length > 0) {
            this.loading = false;
        }
    };
    GenericTableComponent.prototype.ngOnDestroy = function () {
        // remove listener
        this._stopListeningForKeydownEvent();
    };
    return GenericTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__interfaces_gt_options__["GtOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__interfaces_gt_options__["GtOptions"]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__interfaces_gt_options__["GtOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__interfaces_gt_options__["GtOptions"]) === "function" && _b || Object])
], GenericTableComponent.prototype, "gtOptions", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], GenericTableComponent.prototype, "gtTotals", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GenericTableComponent.prototype, "gtFields", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GenericTableComponent.prototype, "gtSettings", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], GenericTableComponent.prototype, "gtData", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"]) === "function" && _c || Object)
], GenericTableComponent.prototype, "gtRowComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__interfaces_gt_texts__["GtTexts"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__interfaces_gt_texts__["GtTexts"]) === "function" && _d || Object)
], GenericTableComponent.prototype, "gtTexts", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], GenericTableComponent.prototype, "gtClasses", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], GenericTableComponent.prototype, "gtEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__interfaces_gt_information__["GtInformation"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interfaces_gt_information__["GtInformation"]) === "function" && _f || Object)
], GenericTableComponent.prototype, "gtInfo", void 0);
GenericTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'generic-table',
        template: "\n        <table class=\"table\" ngClass=\"{{gtClasses}} {{gtOptions.stack ? 'table-stacked':''}}\"\n               *ngIf=\"gtFields && gtSettings && (gtFields | gtVisible:gtSettings:refreshPipe).length > 0\">\n            <thead>\n            <tr>\n                <th class=\"gt-sort-label\" *ngIf=\"gtOptions.stack\">{{gtTexts.sortLabel}}</th>\n                <th *ngFor=\"let column of gtSettings | gtVisible:gtSettings:refreshPipe\"\n                    ngClass=\"{{column.objectKey +'-column' | dashCase}} {{gtFields | gtProperty:column.objectKey:'classNames'}} {{column.sortEnabled ? 'sort-'+column.sort:''}} {{column.sortEnabled && column.sortOrder >= 0  ? 'sort-order-'+column.sortOrder:''}}\"\n                    (click)=\"column.sortEnabled ? gtSort(column.objectKey,$event):'';\">\n                    {{gtFields | gtProperty:column.objectKey:'name'}}\n                </th>\n            </tr>\n            </thead>\n            <ng-template\n                    [ngIf]=\"gtTotals && (gtData | gtFilter:gtInfo.filter:gtInfo:refreshFilter:gtData.length | gtSearch:gtInfo.searchTerms:gtInfo:gtSettings:gtFields:gtData.length).length > 0\">\n                <thead class=\"gt-totals\">\n                <tr *ngFor=\"let total of gtTotals | gtTotalsPosition\">\n                    <td *ngFor=\"let column of gtSettings | gtVisible:gtSettings:refreshPipe;let i = index;\"\n                        ngClass=\"{{column.objectKey +'-totals-column' | dashCase}} {{gtFields | gtProperty:column.objectKey:'classNames'}}\">\n                        {{test}}<span *ngIf=\"i === 0\" class=\"float-left\">{{total.name}}</span><span\n                            [innerHTML]=\"total.fields[column.objectKey] | gtTotals:total.update === false ? gtData:(gtData | gtFilter:gtInfo.filter:gtInfo:refreshFilter:gtData.length | gtSearch:gtInfo.searchTerms:gtInfo:gtSettings:gtFields:gtData.length):column.objectKey:refreshTotals\"></span>\n                    </td>\n                </tr>\n                </thead>\n                <tfoot class=\"gt-totals\">\n                <tr *ngFor=\"let total of gtTotals | gtTotalsPosition:'footer'\">\n                    <td *ngFor=\"let column of gtSettings | gtVisible:gtSettings:refreshPipe;let i = index;\"\n                        ngClass=\"{{column.objectKey +'-totals-column' | dashCase}} {{gtFields | gtProperty:column.objectKey:'classNames'}}\">\n                        <span *ngIf=\"i === 0\" class=\"float-left\">{{total.name}}</span><span\n                            [innerHTML]=\"total.fields[column.objectKey] | gtTotals:total.update === false ? gtData:(gtData | gtFilter:gtInfo.filter:gtInfo:refreshFilter:gtData.length | gtSearch:gtInfo.searchTerms:gtInfo:gtSettings:gtFields:gtData.length):column.objectKey:refreshTotals\"></span>\n                    </td>\n                </tr>\n                </tfoot>\n            </ng-template>\n            <tbody *ngIf=\"gtData && gtInfo\">\n            <ng-template class=\"table-rows\" ngFor let-row\n                         [ngForOf]=\"gtOptions.lazyLoad && gtInfo ? (gtData[gtInfo.pageCurrent-1] | gtMeta:(gtInfo.pageCurrent-1):gtInfo.recordLength) : (gtData | gtMeta:null:null:gtData.length | gtFilter:gtInfo.filter:gtInfo:refreshFilter:gtData.length | gtSearch:gtInfo.searchTerms:gtInfo:gtSettings:gtFields:gtData.length | gtOrderBy:sortOrder:gtFields:refreshSorting:gtData.length | gtChunk:gtInfo:gtInfo.recordLength:gtInfo.pageCurrent:refreshPageArray:gtData.length:gtEvent:data)\">\n                <tr [ngClass]=\"{'row-selected':metaInfo[row.$$gtRowId]?.isSelected, 'row-open':metaInfo[row.$$gtRowId]?.isOpen, 'row-loading':loading, 'row-expandable':gtRowComponent}\"\n                    (click)=\"gtOptions.rowSelection ? toggleSelect(row):null\">\n                    <td *ngFor=\"let column of row | gtRender:gtSettings:gtFields:refreshPipe:loading:gtOptions.highlightSearch:gtInfo.searchTerms;\"\n                        ngClass=\"{{column.objectKey +'-column' | dashCase}} {{gtFields | gtProperty:column.objectKey:'classNames'}} {{(gtFields | gtProperty:column.objectKey:'inlineEdit') ? 'gt-inline-edit':''}} {{column.edited ? 'gt-edited':''}}\">\n                        <span class=\"gt-row-label\"\n                              *ngIf=\"gtOptions.stack\">{{(gtFields | gtProperty:column.objectKey:'stackedHeading') ? (gtFields | gtProperty:column.objectKey:'stackedHeading') : (gtFields | gtProperty:column.objectKey:'name')}}</span>\n                        <gt-custom-component-factory *ngIf=\"column.columnComponent\" class=\"gt-row-content\"\n                                                     [type]=\"column.columnComponent.type\"\n                                                     [injector]=\"column.columnComponent.injector\" [row]=\"row\"\n                                                     [column]=\"column\" (redrawEvent)=\"redraw($event)\"\n                                                     (click)=\"column.click ? column.click(row,column,$event):'';column.expand ? toggleCollapse(row):''\"></gt-custom-component-factory>\n                        <span *ngIf=\"!column.columnComponent && !(gtFields | gtProperty:column.objectKey:'inlineEdit')\"\n                              class=\"gt-row-content\" [innerHTML]=\"column.renderValue\"\n                              (click)=\"column.click ? column.click(row,column,$event):'';column.expand ? toggleCollapse(row):''\"></span>\n                        <ng-template\n                                [ngIf]=\"!column.columnComponent && (gtFields | gtProperty:column.objectKey:'inlineEdit') === true\">\n                            <input class=\"inline-edit\" type=\"text\" [(ngModel)]=\"column.renderValue\"\n                                   (keyup)=\"gtUpdateColumn($event,row, column)\">\n                            <span class=\"gt-inline-edit-notice\">{{gtTexts.inlineEditEdited}}</span>\n                        </ng-template>\n                        <gt-dropdown\n                                *ngIf=\"!column.columnComponent && (gtFields | gtProperty:column.objectKey:'inlineEdit') && (gtFields | gtProperty:column.objectKey:'inlineEdit').length > 0\"\n                                [options]=\"gtFields | gtProperty:column.objectKey:'inlineEdit'\"\n                                [(selected)]=\"column.renderValue\" (selectedChange)=\"gtDropdownSelect(row, column)\">Add\n                            inline editing module\n                        </gt-dropdown>\n                    </td>\n                </tr>\n                <tr class=\"row-expanded\" *ngIf=\"metaInfo[row.$$gtRowId]?.isOpen\">\n                    <td [attr.colspan]=\"(gtFields | gtVisible:gtSettings:refreshPipe).length\">\n                        <gt-expanding-row [row]=\"row\" [type]=\"gtRowComponent\" (redrawEvent)=\"redraw($event)\"\n                                          (toggleRowEvent)=\"toggleCollapse($event)\"></gt-expanding-row>\n                    </td>\n                </tr>\n            </ng-template>\n            <tr *ngIf=\"gtInfo.pageTotal === 0 && (gtInfo.searchTerms || gtInfo.filter) && !loading\">\n                <td class=\"gt-no-matching-results\" [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">\n                    {{gtTexts.noMatchingData}}\n                </td>\n            </tr>\n            <tr *ngIf=\"gtInfo.pageTotal === 0 && !(gtInfo.searchTerms || gtInfo.filter) && !loading\">\n                <td class=\"gt-no-results\" [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">{{gtTexts.noData}}\n                </td>\n            </tr>\n            <tr *ngIf=\"gtInfo.pageTotal === 0 && loading\">\n                <td class=\"gt-loading-data\" [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">{{gtTexts.loading}}</td>\n            </tr>\n            </tbody>\n        </table>\n        <table class=\"table\" ngClass=\"{{gtClasses}} {{gtOptions.stack ? 'table-stacked':''}}\"\n               *ngIf=\"gtFields && gtSettings && (gtFields | gtVisible:gtSettings:refreshPipe).length === 0\">\n            <thead>\n            <tr>\n                <th class=\"gt-no-visible-columns\">{{gtTexts.noVisibleColumnsHeading}}</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n                <td class=\"gt-no-visible-columns\">{{gtTexts.noVisibleColumns}}</td>\n            </tr>\n            </tbody>\n        </table>\n        <table class=\"table\" ngClass=\"{{gtClasses}} {{gtOptions.stack ? 'table-stacked':''}}\"\n               *ngIf=\"!gtFields || !gtSettings\">\n            <thead>\n            <tr>\n                <th class=\"gt-loading-config\">&nbsp;</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n                <td class=\"gt-loading-config\">&nbsp;</td>\n            </tr>\n            </tbody>\n        </table>\n    ",
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _g || Object])
], GenericTableComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=generic-table.component.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/components/gt-custom-component-factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtCustomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GtCustomComponentFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GtCustomComponent = (function () {
    function GtCustomComponent() {
        this.redrawEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GtCustomComponent.prototype.$redraw = function () {
        this.redrawEvent.emit({ row: this.row, column: this.column });
    };
    return GtCustomComponent;
}());

var GtCustomComponentFactory = (function () {
    function GtCustomComponentFactory() {
        this.redrawEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GtCustomComponentFactory.prototype.instance = function (instance) {
        instance.row = this.row;
        instance.column = this.column;
        instance.redrawEvent.subscribe(this.redrawEvent);
    };
    return GtCustomComponentFactory;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"]) === "function" && _a || Object)
], GtCustomComponentFactory.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object)
], GtCustomComponentFactory.prototype, "injector", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GtCustomComponentFactory.prototype, "row", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GtCustomComponentFactory.prototype, "column", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], GtCustomComponentFactory.prototype, "redrawEvent", void 0);
GtCustomComponentFactory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gt-custom-component-factory',
        template: "<div appComponentAnchor [ctor]=\"type\" \n                                     [injector]=\"injector\" \n                                     (instance)=\"instance($event)\"></div>"
    })
], GtCustomComponentFactory);

var _a, _b;
//# sourceMappingURL=gt-custom-component-factory.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/components/gt-dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtDropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tether__ = __webpack_require__("../../../../../@angular-generic-table/core/node_modules/tether/dist/js/tether.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tether___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_tether__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GtDropdownComponent = (function () {
    function GtDropdownComponent(renderer) {
        this.renderer = renderer;
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.active = false; // is dropdown active or not
        this.state = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"](); // current state of dropdown
    }
    Object.defineProperty(GtDropdownComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selection) {
            this._selected = selection;
        },
        enumerable: true,
        configurable: true
    });
    GtDropdownComponent.prototype.select = function (option) {
        this.active = false;
        this.state.next(this.active);
        if (this._selected !== option) {
            this.selectedChange.emit(option);
        }
    };
    GtDropdownComponent.prototype.toggleDropdown = function () {
        var _this = this;
        this.active = !this.active;
        setTimeout(function () { _this.state.next(_this.active); }, 0);
    };
    GtDropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.state.subscribe(function (state) {
            if (state) {
                _this.tether = new __WEBPACK_IMPORTED_MODULE_2_tether__({
                    element: '.dropdown-menu',
                    target: '.dropdown.gt-dropdown.show',
                    attachment: 'top left',
                    targetAttachment: 'bottom left',
                    constraints: [{
                            to: 'window',
                            attachment: 'together'
                        }]
                });
                _this.tether.position();
                // set up click listener and listen for click outside dropdown
                _this.clickListener = _this.renderer.listen('document', 'click', function (event) {
                    _this.active = false;
                    _this.state.next(_this.active);
                });
                // set up keyboard listener and listen for escape key up
                _this.keyupListener = _this.renderer.listen('document', 'keyup', function (event) {
                    switch (event.key) {
                        case 'Escape':
                            _this.active = false;
                            _this.state.next(_this.active);
                            break;
                    }
                });
            }
            else {
                _this.tether.destroy();
                _this.removeListeners();
            }
        });
    };
    GtDropdownComponent.prototype.ngOnDestroy = function () {
        this.removeListeners();
    };
    GtDropdownComponent.prototype.removeListeners = function () {
        if (this.clickListener) {
            this.clickListener();
        }
        if (this.keyupListener) {
            this.keyupListener();
        }
    };
    return GtDropdownComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], GtDropdownComponent.prototype, "selected", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GtDropdownComponent.prototype, "options", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], GtDropdownComponent.prototype, "selectedChange", void 0);
GtDropdownComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gt-dropdown',
        template: "\n    <div class=\"dropdown gt-dropdown\" [ngClass]=\"{'show':active}\">\n      <div class=\"dropdown-toggle\" (click)=\"toggleDropdown()\" [attr.aria-expanded]=\"active\">{{selected}}</div>\n      <div class=\"gt-dropdown-menu dropdown-menu\" *ngIf=\"active\" [ngClass]=\"{'show':active}\">\n        <button *ngFor=\"let option of options;\" class=\"dropdown-item\" (click)=\"select(option)\" [ngClass]=\"{'active':option === selected}\">{{option}}</button>\n      </div>\n    </div>\n  ",
        styles: ["\n    .gt-dropdown .dropdown-toggle {\n      cursor: pointer;\n    }\n    .gt-dropdown .dropdown-toggle::after {\n      transition: opacity 0.4s ease-in-out;\n      opacity: 0;\n    }\n    .gt-dropdown .dropdown-toggle:hover::after {\n      opacity: 1;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
], GtDropdownComponent);

var _a, _b;
//# sourceMappingURL=gt-dropdown.component.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/components/gt-expanding-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtExpandedRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GtExpandingRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GtExpandedRow = (function () {
    function GtExpandedRow() {
        this.redrawEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleRowEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GtExpandedRow.prototype.$hide = function () {
        this.toggleRowEvent.emit(this.row);
    };
    GtExpandedRow.prototype.$redraw = function () {
        this.redrawEvent.emit(this.row);
    };
    return GtExpandedRow;
}());

var GtExpandingRowComponent = (function () {
    function GtExpandingRowComponent() {
        this.redrawEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleRowEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GtExpandingRowComponent.prototype.newInstance = function (instance) {
        instance.row = this.row;
        instance.redrawEvent.subscribe(this.redrawEvent);
        instance.toggleRowEvent.subscribe(this.toggleRowEvent);
    };
    return GtExpandingRowComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"]) === "function" && _a || Object)
], GtExpandingRowComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GtExpandingRowComponent.prototype, "row", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], GtExpandingRowComponent.prototype, "redrawEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], GtExpandingRowComponent.prototype, "toggleRowEvent", void 0);
GtExpandingRowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gt-expanding-row',
        template: "\n    <div appComponentAnchor\n         [ctor]=\"type\" (instance)=\"newInstance($event)\"></div>"
    })
], GtExpandingRowComponent);

var _a;
//# sourceMappingURL=gt-expanding-row.component.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/components/gt-pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtPaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PaginationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generic_table_component__ = __webpack_require__("../../../../../@angular-generic-table/core/components/generic-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GtPaginationComponent = (function () {
    function GtPaginationComponent() {
        this.ready = false;
    }
    Object.defineProperty(GtPaginationComponent.prototype, "genericTable", {
        get: function () {
            return this._genericTable;
        },
        set: function (value) {
            var _this = this;
            if (value) {
                value.gtEvent.subscribe(function (res) {
                    if (res.name === 'gt-info' && res.value.pageTotal > 0) {
                        _this.ready = true;
                    }
                });
            }
            this._genericTable = value;
        },
        enumerable: true,
        configurable: true
    });
    return GtPaginationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__generic_table_component__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__generic_table_component__["a" /* GenericTableComponent */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__generic_table_component__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__generic_table_component__["a" /* GenericTableComponent */]) === "function" && _b || Object])
], GtPaginationComponent.prototype, "genericTable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], GtPaginationComponent.prototype, "gtClasses", void 0);
GtPaginationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gt-pagination',
        template: "<nav class=\"gt-pagination\" aria-label=\"Table navigation\" *ngIf=\"genericTable && genericTable.gtInfo && ready && genericTable.gtData?.length > 0\" [ngClass]=\"{'no-data':genericTable.gtInfo.pageTotal === 0}\">\n  <ul class=\"pagination\" [ngClass]=\"gtClasses\">\n    <li class=\"page-item\" [ngClass]=\"{'disabled' : genericTable.gtInfo.pageCurrent === 1 || genericTable.loading }\"><a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"genericTable.gtInfo.pageCurrent > 1 && genericTable.previousPage()\" [attr.aria-label]=\"genericTable.gtTexts.paginatePrevious\"><span aria-hidden=\"true\">&laquo;</span><span class=\"sr-only\">{{genericTable.gtTexts.paginatePrevious}}</span></a></li>\n    <li class=\"page-item\" [ngClass]=\"{'disabled' : genericTable.loading && genericTable.gtInfo.pageCurrent !== page, 'active' : genericTable.gtInfo.pageCurrent === page }\" *ngFor=\"let page of genericTable.gtInfo.pageTotal | gtPaginationPipe:genericTable.gtInfo.pageCurrent\"><a class=\"page-link\" [tabindex]=\"page === true ? -1:0\" href=\"javascript:void(0);\" (click)=\"page === true ? '':genericTable.goToPage(page)\">{{page === true ? '&hellip;':page}}</a></li>\n    <li class=\"page-item\" [ngClass]=\"{'disabled' : genericTable.gtInfo.pageCurrent === genericTable.gtInfo.pageTotal || genericTable.loading }\"><a class=\"page-link gt-link\" href=\"javascript:void(0);\" (click)=\"genericTable.gtInfo.pageCurrent !== genericTable.gtInfo.pageTotal && genericTable.nextPage()\" [attr.aria-label]=\"genericTable.gtTexts.paginateNext\"><span aria-hidden=\"true\">&raquo;</span><span class=\"sr-only\">{{genericTable.gtTexts.paginateNext}}</span></a></li>\n  </ul>\n  </nav>\n    ",
        styles: ['.gt-link {cursor: pointer;}']
    })
], GtPaginationComponent);


var PaginationPipe = (function () {
    function PaginationPipe() {
    }
    PaginationPipe.prototype.transform = function (totalPages, currentPage) {
        if (totalPages === 0) {
            return [1];
        }
        var pagination = []; // create new empty array for pagination
        var siblings = 2; // sibling elements ie. number of elements on each side of current page
        var paginationLength = totalPages < (siblings * 2) + 1 ? totalPages : (siblings * 2) + 1; // number of elements in pagination array
        var start = currentPage <= siblings ? 1 : currentPage - siblings; // starting position for array
        var modifier = totalPages - (currentPage + siblings) <= 0 ? totalPages - (currentPage + siblings) : 0; // modifier for pagination values
        var modifiedPosition = start + modifier <= 0 ? 1 : start + modifier;
        // push pages to pagination array
        for (var i = 0; i < paginationLength; i++) {
            pagination.push(modifiedPosition + i);
        }
        // if first page is not included in pagination...
        if (pagination.indexOf(1) === -1) {
            // ...check if second page is in pagination...
            if (pagination.indexOf(2) === -1) {
                // ...if not check if total number of pages equals seven and number of siblings are two...
                if (totalPages === 7 && siblings === 2) {
                    // ...add second page and don't convert page number to ellipsis
                    pagination.unshift(2);
                }
                else {
                    // ...if not, use this placeholder for ellipsis instead of actual page number
                    pagination[0] = true;
                }
            }
            // ...add first page as first array item
            pagination.unshift(1);
        }
        else if (totalPages > paginationLength) {
            // if first page is included add extra page to keep number of items consistent
            pagination.splice(paginationLength, 0, paginationLength + 1);
        }
        // check if last page is included in pagination...
        if (pagination.indexOf(totalPages) === -1) {
            //...if not, page next to last should either show ellipsis or actual page number for the page
            pagination[pagination.length - 1] = pagination[pagination.length - 1] === totalPages - 1 ? totalPages - 1 : true;
            //...add last page to pagination
            pagination.push(totalPages);
        }
        return pagination;
    };
    return PaginationPipe;
}());
PaginationPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtPaginationPipe'
    })
], PaginationPipe);

var _a, _b;
//# sourceMappingURL=gt-pagination.component.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/components/gt-table-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtTableInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TableInfoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generic_table_component__ = __webpack_require__("../../../../../@angular-generic-table/core/components/generic-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GtTableInfoComponent = (function () {
    function GtTableInfoComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    GtTableInfoComponent.prototype.ngAfterViewChecked = function () {
        this._changeDetectionRef.detectChanges();
    };
    return GtTableInfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__generic_table_component__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__generic_table_component__["a" /* GenericTableComponent */]) === "function" && _a || Object)
], GtTableInfoComponent.prototype, "genericTable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], GtTableInfoComponent.prototype, "customText", void 0);
GtTableInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gt-table-info',
        template: "<span *ngIf=\"genericTable.gtInfo\">{{(customText? customText:genericTable.gtTexts) | gtTableInfo:genericTable.gtInfo:genericTable.gtInfo.recordsAfterSearch:genericTable.gtInfo.recordFrom:genericTable.gtInfo.recordTo:genericTable.gtInfo.recordsAll:genericTable.gtTexts.loading:genericTable.gtTexts.tableInfoAfterSearch}}</span>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], GtTableInfoComponent);


var TableInfoPipe = (function () {
    function TableInfoPipe() {
    }
    TableInfoPipe.prototype.transform = function (texts, keys, refresh) {
        var text = texts.tableInfo;
        if (keys.recordsAfterSearch !== keys.recordsAll) {
            text = texts.tableInfoAfterSearch;
        }
        for (var key in keys) {
            if (keys.hasOwnProperty(key)) {
                var searchString = new RegExp('#' + key, 'g');
                text = text.replace(searchString, keys[key]);
            }
        }
        return text;
    };
    ;
    return TableInfoPipe;
}());
TableInfoPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtTableInfo'
    })
], TableInfoPipe);

var _a, _b;
//# sourceMappingURL=gt-table-info.component.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericTableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_generic_table_component__ = __webpack_require__("../../../../../@angular-generic-table/core/components/generic-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_gt_render_pipe__ = __webpack_require__("../../../../../@angular-generic-table/core/pipes/gt-render.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_gt_visible_pipe__ = __webpack_require__("../../../../../@angular-generic-table/core/pipes/gt-visible.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_dash_case_pipe__ = __webpack_require__("../../../../../@angular-generic-table/core/pipes/dash-case.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_gt_property_pipe__ = __webpack_require__("../../../../../@angular-generic-table/core/pipes/gt-property.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_gt_chunk_pipe__ = __webpack_require__("../../../../../@angular-generic-table/core/pipes/gt-chunk.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_gt_filter_pipe__ = __webpack_require__("../../../../../@angular-generic-table/core/pipes/gt-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_gt_order_by_pipe__ = __webpack_require__("../../../../../@angular-generic-table/core/pipes/gt-order-by.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_gt_expanding_row_component__ = __webpack_require__("../../../../../@angular-generic-table/core/components/gt-expanding-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_gt_search_pipe__ = __webpack_require__("../../../../../@angular-generic-table/core/pipes/gt-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_component_anchor_directive__ = __webpack_require__("../../../../../@angular-generic-table/core/directives/component-anchor.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_gt_pagination_component__ = __webpack_require__("../../../../../@angular-generic-table/core/components/gt-pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_gt_table_info_component__ = __webpack_require__("../../../../../@angular-generic-table/core/components/gt-table-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_gt_custom_component_factory__ = __webpack_require__("../../../../../@angular-generic-table/core/components/gt-custom-component-factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_gt_meta_pipe__ = __webpack_require__("../../../../../@angular-generic-table/core/pipes/gt-meta.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_gt_dropdown_component__ = __webpack_require__("../../../../../@angular-generic-table/core/components/gt-dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_gt_totals_pipe__ = __webpack_require__("../../../../../@angular-generic-table/core/pipes/gt-totals.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_gt_totals_position_pipe__ = __webpack_require__("../../../../../@angular-generic-table/core/pipes/gt-totals-position.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var GenericTableModule = (function () {
    function GenericTableModule() {
    }
    return GenericTableModule;
}());
GenericTableModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__directives_component_anchor_directive__["a" /* ComponentAnchorDirective */],
            __WEBPACK_IMPORTED_MODULE_3__components_generic_table_component__["a" /* GenericTableComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_gt_pagination_component__["a" /* GtPaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_gt_visible_pipe__["a" /* GtVisiblePipe */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_gt_render_pipe__["a" /* GtRenderPipe */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_dash_case_pipe__["a" /* DashCasePipe */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_gt_property_pipe__["a" /* GtPropertyPipe */],
            __WEBPACK_IMPORTED_MODULE_8__pipes_gt_chunk_pipe__["a" /* GtChunkPipe */],
            __WEBPACK_IMPORTED_MODULE_9__pipes_gt_filter_pipe__["a" /* GtFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_10__pipes_gt_order_by_pipe__["a" /* GtOrderByPipe */],
            __WEBPACK_IMPORTED_MODULE_11__components_gt_expanding_row_component__["b" /* GtExpandingRowComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_gt_custom_component_factory__["b" /* GtCustomComponentFactory */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_gt_search_pipe__["a" /* GtSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_14__components_gt_pagination_component__["b" /* PaginationPipe */],
            __WEBPACK_IMPORTED_MODULE_15__components_gt_table_info_component__["a" /* GtTableInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_gt_table_info_component__["b" /* TableInfoPipe */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_gt_meta_pipe__["a" /* GtMetaPipe */],
            __WEBPACK_IMPORTED_MODULE_19__pipes_gt_totals_pipe__["a" /* GtTotalsPipe */],
            __WEBPACK_IMPORTED_MODULE_20__pipes_gt_totals_position_pipe__["a" /* GtTotalsPositionPipe */],
            __WEBPACK_IMPORTED_MODULE_18__components_gt_dropdown_component__["a" /* GtDropdownComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__components_generic_table_component__["a" /* GenericTableComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_gt_pagination_component__["a" /* GtPaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_gt_table_info_component__["a" /* GtTableInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_gt_property_pipe__["a" /* GtPropertyPipe */],
            __WEBPACK_IMPORTED_MODULE_11__components_gt_expanding_row_component__["b" /* GtExpandingRowComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_gt_dropdown_component__["a" /* GtDropdownComponent */]
        ],
        entryComponents: [],
        providers: [],
        bootstrap: []
    })
], GenericTableModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/directives/component-anchor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentAnchorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentAnchorDirective = (function () {
    function ComponentAnchorDirective(componentFactoryResolver, viewContainer) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainer = viewContainer;
        this.instance = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ComponentAnchorDirective.prototype.ngOnInit = function () {
        var factory = this.componentFactoryResolver
            .resolveComponentFactory(this.ctor);
        var component = this.viewContainer
            .createComponent(factory, 0, this.injector);
        this.instance.emit(component.instance);
    };
    return ComponentAnchorDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"]) === "function" && _a || Object)
], ComponentAnchorDirective.prototype, "ctor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object)
], ComponentAnchorDirective.prototype, "injector", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], ComponentAnchorDirective.prototype, "instance", void 0);
ComponentAnchorDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appComponentAnchor]'
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], ComponentAnchorDirective);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=component-anchor.directive.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_gt_expanding_row_component__ = __webpack_require__("../../../../../@angular-generic-table/core/components/gt-expanding-row.component.ts");
/* unused harmony reexport GtExpandingRowComponent */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__components_gt_expanding_row_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_generic_table_component__ = __webpack_require__("../../../../../@angular-generic-table/core/components/generic-table.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__components_generic_table_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_gt_table_info_component__ = __webpack_require__("../../../../../@angular-generic-table/core/components/gt-table-info.component.ts");
/* unused harmony reexport GtTableInfoComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_gt_pagination_component__ = __webpack_require__("../../../../../@angular-generic-table/core/components/gt-pagination.component.ts");
/* unused harmony reexport GtPaginationComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_module__ = __webpack_require__("../../../../../@angular-generic-table/core/core.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__core_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interfaces_gt_config__ = __webpack_require__("../../../../../@angular-generic-table/core/interfaces/gt-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interfaces_gt_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__interfaces_gt_config__);
/* unused harmony reexport GtConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interfaces_gt_config_field__ = __webpack_require__("../../../../../@angular-generic-table/core/interfaces/gt-config-field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interfaces_gt_config_field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__interfaces_gt_config_field__);
/* unused harmony reexport GtConfigField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interfaces_gt_config_setting__ = __webpack_require__("../../../../../@angular-generic-table/core/interfaces/gt-config-setting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interfaces_gt_config_setting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__interfaces_gt_config_setting__);
/* unused harmony reexport GtConfigSetting */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interfaces_gt_information__ = __webpack_require__("../../../../../@angular-generic-table/core/interfaces/gt-information.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interfaces_gt_information___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__interfaces_gt_information__);
/* unused harmony reexport GtInformation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interfaces_gt_row__ = __webpack_require__("../../../../../@angular-generic-table/core/interfaces/gt-row.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interfaces_gt_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__interfaces_gt_row__);
/* unused harmony reexport GtRow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__interfaces_gt_texts__ = __webpack_require__("../../../../../@angular-generic-table/core/interfaces/gt-texts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__interfaces_gt_texts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__interfaces_gt_texts__);
/* unused harmony reexport GtTexts */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__interfaces_gt_options__ = __webpack_require__("../../../../../@angular-generic-table/core/interfaces/gt-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__interfaces_gt_options___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__interfaces_gt_options__);
/* unused harmony reexport GtOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_gt_custom_component_factory__ = __webpack_require__("../../../../../@angular-generic-table/core/components/gt-custom-component-factory.ts");
/* unused harmony reexport GtCustomComponent */













//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/interfaces/gt-config-field.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=gt-config-field.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/interfaces/gt-config-setting.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=gt-config-setting.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/interfaces/gt-config.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=gt-config.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/interfaces/gt-information.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=gt-information.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/interfaces/gt-options.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=gt-options.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/interfaces/gt-row.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=gt-row.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/interfaces/gt-texts.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=gt-texts.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/node_modules/tether/dist/js/tether.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.0 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
}(this, function(require, exports, module) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          this.options.bodyElement.appendChild(this.element);
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));


/***/ }),

/***/ "../../../../../@angular-generic-table/core/pipes/dash-case.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashCasePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashCasePipe = (function () {
    function DashCasePipe() {
    }
    DashCasePipe.prototype.transform = function (string) {
        return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    };
    return DashCasePipe;
}());
DashCasePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'dashCase'
    })
], DashCasePipe);

//# sourceMappingURL=dash-case.pipe.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/pipes/gt-chunk.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtChunkPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtChunkPipe = (function () {
    function GtChunkPipe() {
    }
    GtChunkPipe.prototype.transform = function (array, gtInfo, chunkSize, page, refreshPageArray, refreshData, gtEvent, data) {
        if (!Array.isArray(array))
            return array;
        data.exportData = array; // store data for export
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
    return GtChunkPipe;
}());
GtChunkPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtChunk'
    })
], GtChunkPipe);

//# sourceMappingURL=gt-chunk.pipe.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/pipes/gt-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtFilterPipe = (function () {
    function GtFilterPipe() {
    }
    //@Output() filterInfo = new EventEmitter();
    GtFilterPipe.prototype.transform = function (allRows, filterBy, gtInfo, refreshFilter, refreshData) {
        //console.log(allRows,filterBy);
        gtInfo.recordsAll = allRows.length;
        if (!Array.isArray(allRows) || !filterBy) {
            //gtInfo.filtered = false;
            var length = allRows === null ? 0 : allRows.length;
            gtInfo.recordsAfterFilter = length;
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
    return GtFilterPipe;
}());
GtFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtFilter'
    })
], GtFilterPipe);

//# sourceMappingURL=gt-filter.pipe.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/pipes/gt-meta.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtMetaPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtMetaPipe = (function () {
    function GtMetaPipe() {
    }
    GtMetaPipe.prototype.transform = function (allRows, page, recordLength, dataLength, metaData) {
        for (var i = 0; i < allRows.length; i++) {
            if (!allRows[i].$$gtRowId) {
                var uniqueRowId = '_' + Math.random().toString(36).substr(2, 16);
                allRows[i].$$gtRowId = page ? (page * recordLength + i) + uniqueRowId : i + uniqueRowId;
            }
        }
        return allRows;
    };
    return GtMetaPipe;
}());
GtMetaPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtMeta'
    })
], GtMetaPipe);

//# sourceMappingURL=gt-meta.pipe.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/pipes/gt-order-by.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtOrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtOrderByPipe = GtOrderByPipe_1 = (function () {
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
        if (!field) {
            console.log('error trying to sort undefined field');
            return false;
        }
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
        // sort boolean values as strings
        if (typeof a === 'boolean') {
            a = a.toString();
        }
        if (typeof b === 'boolean') {
            b = b.toString();
        }
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
    GtOrderByPipe.prototype.transform = function (input, sortByProperties, fields, refreshSorting, refreshData) {
        var _this = this;
        if (!Array.isArray(input) || input === null)
            return input;
        if (!Array.isArray(sortByProperties) || (Array.isArray(sortByProperties) && sortByProperties.length == 1)) {
            var propertyToCheck = sortByProperties[0];
            var desc_1 = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc_1 ? input.sort() : input.sort().reverse();
            }
            else {
                var property_1 = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                // check if custom sort function is defined
                var sortFunction_1 = this.getSortFunction(this.getProperty(fields, property_1));
                return input.sort(function (a, b) {
                    // use custom sort function if one is defined
                    var propertyA = sortFunction_1 === false ? a[property_1] : sortFunction_1(a);
                    var propertyB = sortFunction_1 === false ? b[property_1] : sortFunction_1(b);
                    // if both values are undefined...
                    if (typeof propertyA === 'undefined' && typeof propertyB === 'undefined') {
                        // ...skip comparison
                        return;
                    }
                    return !desc_1 ? GtOrderByPipe_1._orderByComparator(propertyA, propertyB) : -GtOrderByPipe_1._orderByComparator(propertyA, propertyB);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return input.sort(function (a, b) {
                //console.log('multiple');
                for (var i = 0; i < sortByProperties.length; i++) {
                    var desc = sortByProperties[i].substr(0, 1) == '-';
                    var property = sortByProperties[i].substr(0, 1) == '+' || sortByProperties[i].substr(0, 1) == '-'
                        ? sortByProperties[i].substr(1)
                        : sortByProperties[i];
                    //console.log(property);
                    // check if custom sort function is defined
                    var sortFunction = _this.getSortFunction(_this.getProperty(fields, property));
                    // use custom sort function if one is defined
                    var propertyA = sortFunction === false ? a[property] : sortFunction(a);
                    var propertyB = sortFunction === false ? b[property] : sortFunction(b);
                    var comparison = !desc ? GtOrderByPipe_1._orderByComparator(propertyA, propertyB) : -GtOrderByPipe_1._orderByComparator(propertyA, propertyB);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    return GtOrderByPipe;
}());
GtOrderByPipe = GtOrderByPipe_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtOrderBy'
    })
], GtOrderByPipe);

var GtOrderByPipe_1;
//# sourceMappingURL=gt-order-by.pipe.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/pipes/gt-property.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtPropertyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtPropertyPipe = (function () {
    function GtPropertyPipe() {
    }
    GtPropertyPipe.prototype.transform = function (config, objectKey, property, refresh) {
        var output = null;
        try {
            for (var i = 0; i < config.length; i++) {
                if (config[i].objectKey === objectKey) {
                    output = config[i][property];
                }
            }
        }
        catch (error) {
            console.log('cannot read property: "' + property + '" on missing key: "' + objectKey + '" in config.', error);
        }
        return output;
    };
    return GtPropertyPipe;
}());
GtPropertyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtProperty'
    })
], GtPropertyPipe);

//# sourceMappingURL=gt-property.pipe.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/pipes/gt-render.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtRenderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
                row[fields[i].objectKey] = loading ? '' : fields[i].value(row);
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
                        //console.log(fieldSetting);
                    }
                }
                var columnObject = {
                    objectKey: key,
                    sortValue: row[key],
                    columnComponent: fieldSetting.columnComponent
                };
                if (loading) {
                    columnObject.renderValue = row[key] !== null ? row[key] : '';
                }
                else if (highlight && searchString && this.getProperty(settings, key).search !== false) {
                    columnObject.renderValue = fieldSetting.render && typeof fieldSetting.render === 'function' ? this.highlight(fieldSetting.render(row), searchString) : this.highlight(row[key] !== null ? row[key] : '', searchString);
                }
                else {
                    columnObject.renderValue = fieldSetting.render && typeof fieldSetting.render === 'function' ? this.sanitizer.bypassSecurityTrustHtml(fieldSetting.render(row)) : row[key] !== null ? row[key] : '';
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
    return GtRenderPipe;
}());
GtRenderPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtRender'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], GtRenderPipe);

var _a;
//# sourceMappingURL=gt-render.pipe.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/pipes/gt-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
        if (!searchTerms || searchTerms.replace(/"/g, '').length === 0) {
            // ...return all rows
            var length = allRows === null ? 0 : allRows.length;
            gtInfo.recordsAfterSearch = length;
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
    return GtSearchPipe;
}());
GtSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtSearch'
    })
], GtSearchPipe);

//# sourceMappingURL=gt-search.pipe.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/pipes/gt-totals-position.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtTotalsPositionPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtTotalsPositionPipe = (function () {
    function GtTotalsPositionPipe() {
    }
    GtTotalsPositionPipe.prototype.transform = function (array, position) {
        if (position === void 0) { position = 'header'; }
        return array.filter(function (total) {
            // if no position is defined assume position to be header
            var totalPosition = total.position ? total.position : 'header';
            return totalPosition === position;
        });
    };
    return GtTotalsPositionPipe;
}());
GtTotalsPositionPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtTotalsPosition'
    })
], GtTotalsPositionPipe);

//# sourceMappingURL=gt-totals-position.pipe.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/pipes/gt-totals.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtTotalsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtTotalsPipe = (function () {
    function GtTotalsPipe() {
    }
    GtTotalsPipe.prototype.transform = function (value, data, objectKey, refresh) {
        var output;
        if (data.length === 0) {
            return;
        }
        if (typeof value === 'function') {
            output = value(data, objectKey);
        }
        else if (value) {
            output = value;
        }
        else {
            output = '';
        }
        return output;
    };
    return GtTotalsPipe;
}());
GtTotalsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtTotals'
    })
], GtTotalsPipe);

//# sourceMappingURL=gt-totals.pipe.js.map

/***/ }),

/***/ "../../../../../@angular-generic-table/core/pipes/gt-visible.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtVisiblePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GtVisiblePipe = (function () {
    function GtVisiblePipe() {
        // TODO: move to helper functions
        /** Sort by column order */
        this.getColumnOrder = function (a, b) {
            if (a.columnOrder < b.columnOrder)
                return -1;
            if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
                return 1;
            return 0;
        };
    }
    GtVisiblePipe.prototype.transform = function (array, settings) {
        var visibleColumns = settings.sort(this.getColumnOrder).map(function (setting) {
            if (setting.visible !== false && setting.enabled !== false) {
                return setting.objectKey;
            }
        });
        return array.filter(function (column) {
            return visibleColumns.indexOf(column.objectKey) !== -1;
        }).sort(function (a, b) {
            return visibleColumns.indexOf(a.objectKey) < visibleColumns.indexOf(b.objectKey) ? -1 : 1;
        });
    };
    return GtVisiblePipe;
}());
GtVisiblePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gtVisible'
    })
], GtVisiblePipe);

//# sourceMappingURL=gt-visible.pipe.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-remove-edit/add-remove-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Add, remove or edit rows with custom columns</h2>\n<p>Table using several custom column widgets, as well as external state tracking. Functions for adding, removing and inline editing (with data validation).</p>\n<div class=\"alert alert-info\">Please note that this example only persists changes in memory so the data will be reset when component is reinitialized e.g when route changes or page is refreshed.</div>\n<div class=\"card mb-5\">\n    <div class=\"card-header\">Example</div>\n    <div class=\"card-body\" exemplify=\"addRemoveExample\" [context]=\"this\" [escapeStrings]=\"['[gtClasses]','[gtSettings]','[gtFields]','[(gtData)]','[gtRowComponent]','[gtOptions]','[genericTable]','#myTable']\" [source]=\"'child'\" [target]=\"addRemoveExample\"\n         [navStyle]=\"'tabs'\" [externalSources]=\"[{\n    name:'app.module.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular-generic-table/master/src/app/app.module.ts'\n  },{\n    name:'app-remove-edit.component.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular-generic-table/master/src/app/add-remove-edit/add-remove-edit.component.ts'\n  }]\">\n        <div class=\"row mb-3\">\n            <div class=\"col-12 col-sm-auto\">\n                <div class=\"input-group input-group-sm mr-sm-2 mb-3 mb-sm-0\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                    <input class=\"form-control\" #search (keyup)=\"myTable.gtSearch(search.value)\" placeholder=\"Search\">\n                </div>\n            </div>\n            <div class=\"col-12 col-sm\">\n                <div class=\"row justify-content-end\">\n                    <div class=\"col-12 col-sm-auto mb-3 mb-sm-0\">\n                        <button class=\"btn btn-sm btn-primary w-100\" (click)=\"addNew(content)\">Add new row</button>\n                    </div>\n                    <div class=\"col-12 col-sm-auto mb-3 mb-sm-0\">\n                        <button type=\"reset\" (click)=\"deleteSelectedRows()\" [disabled]=\"myTable.selectedRows.length === 0\" class=\"btn btn-sm btn-danger w-100\">\n                            Delete {{myTable.selectedRows.length}} rows\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <generic-table [gtClasses]=\"'table-sm'\" #myTable [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [gtData]=\"configObject.data\" [gtOptions]=\"{highlightSearch:true, rowSelection:true}\"></generic-table>\n        <div class=\"text-center\">\n            <small><gt-table-info class=\"form-text text-muted mb-2\" [genericTable]=\"myTable\"></gt-table-info></small>\n            <gt-pagination [gtClasses]=\"'pagination-sm justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\n        </div>\n        <small class=\"form-text text-muted col-12 col-xl-auto mb-2 mt-lg-2 my-xl-auto row\">Number of selected rows: {{myTable.selectedRows.length}}</small>\n    </div>\n    <div class=\"card-footer\" #addRemoveExample></div>\n</div>\n\n<!-- Modal -->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <form (ngSubmit)=\"onSubmit(newItemForm)\" #newItemForm=\"ngForm\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">New lucky number</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-group\" [ngClass]=\"{ 'has-danger': name?.errors && (name?.dirty || name?.touched) }\">\n                <label class=\"col-sm-2 control-label text-nowrap\" for=\"name\">Name</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" ngModel #name=\"ngModel\" id=\"name\" name=\"name\" placeholder=\"Name\" [ngClass]=\"{'form-control-danger' : name?.errors && (name?.dirty || name?.touched) }\" required/>\n                </div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-danger': lucky_number?.errors && (lucky_number?.dirty || lucky_number?.touched) }\">\n                <label class=\"col-sm-2 control-label text-nowrap\" for=\"lucky_number\">Lucky number</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"number\" class=\"form-control\" ngModel #lucky_number=\"ngModel\" id=\"lucky_number\" name=\"lucky_number\" [ngClass]=\"{'form-control-danger' : lucky_number?.errors && (lucky_number?.dirty || lucky_number?.touched)}\" placeholder=\"Lucky number\" required/>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"c('Close click')\">Close</button>\n            <button class=\"btn btn-primary\" [disabled]=\"!newItemForm.valid\">Save</button>\n        </div>\n    </form>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/add-remove-edit/add-remove-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deepCopy */
/* unused harmony export StateService */
/* unused harmony export EditService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SelectedCheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RequiredNameComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RequiredNumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EditSaveButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeleteDiscardButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRemoveEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__ = __webpack_require__("../../../../../@angular-generic-table/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_generic_table_core_components_gt_custom_component_factory__ = __webpack_require__("../../../../../@angular-generic-table/core/components/gt-custom-component-factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







function deepCopy(dictionary) {
    var newDictionary = {};
    Object.keys(dictionary).forEach(function (key) {
        newDictionary[key] = {};
        Object.keys(dictionary[key]).forEach(function (prop) {
            newDictionary[key][prop] = dictionary[key][prop];
        });
    });
    return newDictionary;
}
var StateService = (function () {
    function StateService() {
        this.updates = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this._states = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.updates
            .scan(function (previousState, apply) { return apply(previousState); }, {})
            .subscribe(this._states);
    }
    Object.defineProperty(StateService.prototype, "states", {
        get: function () {
            return this._states.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.value = function (rowId, property, value) {
        this.updates.next(function (dictionary) {
            var newDictionary = deepCopy(dictionary);
            if (!newDictionary[rowId]) {
                newDictionary[rowId] = {};
            }
            newDictionary[rowId][property] = value;
            return newDictionary;
        });
    };
    return StateService;
}());
StateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], StateService);

var EditService = (function () {
    function EditService() {
        this._rowIds = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this._validations = {};
    }
    Object.defineProperty(EditService.prototype, "ids", {
        get: function () {
            return this._rowIds.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    EditService.prototype.setValidation = function (rowId, property, isValid) {
        var validationsForRow = this._validations[rowId];
        if (!validationsForRow) {
            this._validations[rowId] = {};
        }
        this._validations[rowId][property] = isValid;
    };
    EditService.prototype.isValid = function (rowId) {
        var validationsForRow = this._validations[rowId];
        if (!validationsForRow) {
            return true;
        }
        for (var prop in validationsForRow) {
            if (validationsForRow.hasOwnProperty(prop)) {
                if (validationsForRow[prop] === false) {
                    return false;
                }
            }
        }
        return true;
    };
    EditService.prototype.toggleEditMode = function (rowId) {
        this._rowIds.next(rowId);
    };
    return EditService;
}());
EditService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], EditService);

var SelectedCheckboxComponent = (function (_super) {
    __extends(SelectedCheckboxComponent, _super);
    function SelectedCheckboxComponent(table) {
        var _this = _super.call(this) || this;
        _this.table = table;
        return _this;
    }
    Object.defineProperty(SelectedCheckboxComponent.prototype, "selected", {
        get: function () {
            return this.table.isRowSelected(this.row);
        },
        enumerable: true,
        configurable: true
    });
    return SelectedCheckboxComponent;
}(__WEBPACK_IMPORTED_MODULE_2__angular_generic_table_core_components_gt_custom_component_factory__["a" /* GtCustomComponent */]));
SelectedCheckboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <input type=\"checkbox\" [checked]=\"selected\" />\n  "
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */]) === "function" && _a || Object])
], SelectedCheckboxComponent);

var CustomColumnComponentBase = (function (_super) {
    __extends(CustomColumnComponentBase, _super);
    function CustomColumnComponentBase(editService) {
        var _this = _super.call(this) || this;
        _this.editService = editService;
        _this.editModeActive = false;
        return _this;
    }
    Object.defineProperty(CustomColumnComponentBase.prototype, "isValid", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomColumnComponentBase.prototype, "rowId", {
        get: function () {
            return this.row.$$gtRowId;
        },
        enumerable: true,
        configurable: true
    });
    CustomColumnComponentBase.prototype.ngOnInit = function () {
        var _this = this;
        var source = this.editService.ids
            .startWith(this.rowId)
            .filter(function (id) { return id === _this.rowId; });
        this.edit = source.scan(function (prev) { return !prev; }, true);
        this.view = source.scan(function (prev) { return !prev; }, false);
        this.edit.subscribe(function (e) { return _this.editModeActive = e; });
    };
    return CustomColumnComponentBase;
}(__WEBPACK_IMPORTED_MODULE_2__angular_generic_table_core_components_gt_custom_component_factory__["a" /* GtCustomComponent */]));
var RequiredNameComponent = (function (_super) {
    __extends(RequiredNameComponent, _super);
    function RequiredNameComponent(editService, stateService) {
        var _this = _super.call(this, editService) || this;
        _this.stateService = stateService;
        _this._propertyName = 'name';
        return _this;
    }
    Object.defineProperty(RequiredNameComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
            this.editService.setValidation(this.rowId, this._propertyName, this.isValid);
            this.stateService.value(this.rowId, this._propertyName, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequiredNameComponent.prototype, "isValid", {
        get: function () {
            return !(!this._name || /^\s*$/.test(this._name));
        },
        enumerable: true,
        configurable: true
    });
    RequiredNameComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.name = this.row.name;
        this.edit.subscribe(function (e) {
            _this.name = _this.row.name;
        });
    };
    return RequiredNameComponent;
}(CustomColumnComponentBase));
RequiredNameComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <div *ngIf=\"edit | async\" [ngClass]=\"{ 'has-danger': !isValid }\">\n      <input type=\"text\" class=\"form-control form-control-sm\" [ngClass]=\"{'form-control-danger' : !isValid}\" name=\"name\" [(ngModel)]=\"name\" required>\n    </div>\n    <span *ngIf=\"view | async\">{{row.name}}</span>\n  "
    }),
    __metadata("design:paramtypes", [EditService, StateService])
], RequiredNameComponent);

var RequiredNumberComponent = (function (_super) {
    __extends(RequiredNumberComponent, _super);
    function RequiredNumberComponent(editService, stateService) {
        var _this = _super.call(this, editService) || this;
        _this.stateService = stateService;
        _this._propertyName = 'lucky_number';
        return _this;
    }
    Object.defineProperty(RequiredNumberComponent.prototype, "number", {
        get: function () {
            return this._number;
        },
        set: function (value) {
            this._number = value;
            this.editService.setValidation(this.rowId, this._propertyName, this.isValid);
            this.stateService.value(this.rowId, this._propertyName, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequiredNumberComponent.prototype, "isValid", {
        get: function () {
            return this.number != null;
        },
        enumerable: true,
        configurable: true
    });
    RequiredNumberComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.number = this.row.lucky_number;
        this.edit.subscribe(function (e) {
            _this.number = _this.row.lucky_number;
        });
    };
    return RequiredNumberComponent;
}(CustomColumnComponentBase));
RequiredNumberComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <div *ngIf=\"edit | async\" [ngClass]=\"{ 'has-danger': !isValid }\">\n      <input type=\"number\" class=\"form-control form-control-sm\" [ngClass]=\"{'form-control-danger' : !isValid}\" name=\"number\" [(ngModel)]=\"number\" required>\n    </div>\n    <span *ngIf=\"view | async\">{{row.lucky_number}}</span>\n  "
    }),
    __metadata("design:paramtypes", [EditService, StateService])
], RequiredNumberComponent);

var EditSaveButtonComponent = (function (_super) {
    __extends(EditSaveButtonComponent, _super);
    function EditSaveButtonComponent(editService, stateService) {
        var _this = _super.call(this, editService) || this;
        _this.stateService = stateService;
        return _this;
    }
    Object.defineProperty(EditSaveButtonComponent.prototype, "isValid", {
        get: function () {
            return this.editService.isValid(this.row.$$gtRowId);
        },
        enumerable: true,
        configurable: true
    });
    EditSaveButtonComponent.prototype.click = function (event) {
        if (!this.editModeActive) {
            this.editService.toggleEditMode(this.rowId);
        }
        else {
            this.save();
        }
        event.stopPropagation();
    };
    EditSaveButtonComponent.prototype.save = function () {
        var _this = this;
        this.stateService.states
            .take(1)
            .subscribe(function (dictionary) {
            console.log("Saving object " + JSON.stringify(dictionary[_this.rowId]));
            Object.keys(dictionary[_this.rowId]).forEach(function (prop) {
                _this.row[prop] = dictionary[_this.rowId][prop];
            });
            _this.editService.toggleEditMode(_this.rowId);
        });
    };
    return EditSaveButtonComponent;
}(CustomColumnComponentBase));
EditSaveButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <button *ngIf=\"view | async\" class=\"btn btn-sm btn-outline-primary\" (click)=click($event);><i class=\"fa fa-pencil\"></i></button>\n    <button *ngIf=\"edit | async\" class=\"btn btn-sm btn-primary\" [disabled]=\"!isValid\" (click)=click($event);><i class=\"fa fa-save\"></i></button>\n  ",
        styles: ["\n  .btn.btn-sm {\n      padding-top: 0.15rem;\n      padding-bottom: 0.15rem;\n  }"]
    }),
    __metadata("design:paramtypes", [EditService, StateService])
], EditSaveButtonComponent);

var DeleteDiscardButtonComponent = (function (_super) {
    __extends(DeleteDiscardButtonComponent, _super);
    function DeleteDiscardButtonComponent(editService) {
        return _super.call(this, editService) || this;
    }
    DeleteDiscardButtonComponent.prototype.click = function (event) {
        if (this.editModeActive) {
            console.log("discard row " + JSON.stringify(this.row));
            this.editService.toggleEditMode(this.rowId);
        }
        else {
            console.log("remove row " + JSON.stringify(this.row));
            this.editService.genericTable.removeRow(this.row);
        }
        event.stopPropagation();
    };
    return DeleteDiscardButtonComponent;
}(CustomColumnComponentBase));
DeleteDiscardButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <button *ngIf=\"view | async\" class=\"btn btn-sm btn-outline-danger\" (click)=click($event);><i class=\"fa fa-trash-o\"></i></button>\n    <button *ngIf=\"edit | async\" class=\"btn btn-sm btn-outline-primary\" (click)=click($event);><i class=\"fa fa-times\"></i></button>\n  ",
        styles: ["\n  .btn.btn-sm {\n      padding-top: 0.15rem;\n      padding-bottom: 0.15rem;\n  }"]
    }),
    __metadata("design:paramtypes", [EditService])
], DeleteDiscardButtonComponent);

var AddRemoveEditComponent = (function () {
    function AddRemoveEditComponent(editService, modalService) {
        this.editService = editService;
        this.modalService = modalService;
        this.data = [];
        this.configObject = {
            settings: [{
                    objectKey: 'selected',
                    search: false,
                    sort: 'disable'
                }, {
                    objectKey: 'id',
                    sort: 'desc'
                }, {
                    objectKey: 'name'
                }, {
                    objectKey: 'lucky_number',
                    visible: true
                }, {
                    objectKey: 'edit_action',
                    sort: 'disable',
                    search: false
                }, {
                    objectKey: 'delete_action',
                    sort: 'disable',
                    search: false
                }],
            fields: [{
                    objectKey: 'selected',
                    name: '',
                    columnComponent: {
                        type: SelectedCheckboxComponent
                    },
                    value: function () { return ''; }
                }, {
                    name: 'Id',
                    objectKey: 'id'
                }, {
                    name: 'Name',
                    objectKey: 'name',
                    columnComponent: {
                        type: RequiredNameComponent
                    }
                }, {
                    name: 'Lucky number',
                    objectKey: 'lucky_number',
                    stackedHeading: 'Custom heading',
                    columnComponent: {
                        type: RequiredNumberComponent
                    }
                }, {
                    name: '',
                    classNames: 'gt-button',
                    objectKey: 'delete_action',
                    value: function () { return ''; },
                    columnComponent: {
                        type: DeleteDiscardButtonComponent
                    }
                }, {
                    name: '',
                    classNames: 'gt-button',
                    objectKey: 'edit_action',
                    value: function () { return ''; },
                    columnComponent: {
                        type: EditSaveButtonComponent
                    }
                }],
            data: [{
                    'id': 1,
                    'name': 'Anna',
                    'lucky_number': 63
                }, {
                    'id': 2,
                    'name': 'Julie',
                    'lucky_number': 8
                }, {
                    'id': 3,
                    'name': 'Lillian',
                    'lucky_number': 30
                }, {
                    'id': 4,
                    'name': 'Norma',
                    'lucky_number': 13
                }, {
                    'id': 5,
                    'name': 'Ralph',
                    'lucky_number': 28
                }, {
                    'id': 6,
                    'name': 'Benjamin',
                    'lucky_number': 66
                }, {
                    'id': 7,
                    'name': 'George',
                    'lucky_number': 66
                }, {
                    'id': 8,
                    'name': 'Ryan',
                    'lucky_number': 65
                }, {
                    'id': 9,
                    'name': 'Martha',
                    'lucky_number': 57
                }, {
                    'id': 10,
                    'name': 'Todd',
                    'lucky_number': 65
                }, {
                    'id': 11,
                    'name': 'Norma',
                    'lucky_number': 73
                }, {
                    'id': 12,
                    'name': 'Frank',
                    'lucky_number': 27
                }, {
                    'id': 13,
                    'name': 'Kathryn',
                    'lucky_number': 93
                }, {
                    'id': 14,
                    'name': 'Philip',
                    'lucky_number': 63
                }, {
                    'id': 15,
                    'name': 'Ronald',
                    'lucky_number': 89
                }, {
                    'id': 16,
                    'name': 'Joshua',
                    'lucky_number': 18
                }, {
                    'id': 17,
                    'name': 'Phillip',
                    'lucky_number': 16
                }, {
                    'id': 18,
                    'name': 'Susan',
                    'lucky_number': 6
                }, {
                    'id': 19,
                    'name': 'Louise',
                    'lucky_number': 52
                }, {
                    'id': 20,
                    'name': 'Gary',
                    'lucky_number': 18
                }, {
                    'id': 21,
                    'name': 'Laura',
                    'lucky_number': 9
                }]
        };
    }
    AddRemoveEditComponent.prototype.ngAfterViewInit = function () {
        this.editService.genericTable = this.myTable;
    };
    AddRemoveEditComponent.prototype.deleteSelectedRows = function () {
        for (var i = this.myTable.selectedRows.length - 1; i >= 0; i--) {
            console.log("remove row " + JSON.stringify(this.myTable.selectedRows[i]));
            this.myTable.removeRow(this.myTable.selectedRows[i]);
        }
    };
    AddRemoveEditComponent.prototype.addNew = function (content) {
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
        }, function (reason) {
            console.log("Dismissed " + reason);
        });
    };
    AddRemoveEditComponent.prototype.onSubmit = function (newItemForm) {
        var newItem = {
            id: Math.max.apply(null, this.configObject.data.map(function (x) { return x.id; })) + 1,
            name: newItemForm.value.name,
            lucky_number: newItemForm.value.lucky_number
        };
        console.log("adding item  " + JSON.stringify(newItem));
        this.configObject.data.push(newItem);
        this.myTable.redraw();
        this.modalRef.close();
    };
    return AddRemoveEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('newItemForm'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* NgForm */]) === "function" && _b || Object)
], AddRemoveEditComponent.prototype, "addItemForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */]) === "function" && _c || Object)
], AddRemoveEditComponent.prototype, "myTable", void 0);
AddRemoveEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-remove-edit',
        template: __webpack_require__("../../../../../src/app/add-remove-edit/add-remove-edit.component.html"),
        providers: [EditService, StateService]
    }),
    __metadata("design:paramtypes", [EditService, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]) === "function" && _d || Object])
], AddRemoveEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-remove-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/aggregate/aggregate.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Totals</h2>\n<p>Add totals like sum, average etc. to your table using <code>gt-totals</code> option. Position either at the top, in the table header or at the bottom in the table footer or why not both as in the example below? Write your own functions for calculating values or pass static data (useful when lazy loading data).</p>\n<p>Add how many \"rows\" as you like and enable/disable auto update per row when searching or filtering the table, try searching the table below and you'll see that the total in the bottom won't update as it's been disabled (enabled by default). Works with inline editing too, try updating the number of meetings to see it in action.</p>\n<p>Apply your custom style using <code>.gt-totals</code> class or use the one provided by generic table (shown below). See docs for more info!</p>\n<div class=\"card mb-5\">\n  <div class=\"card-header\">Example</div>\n  <div class=\"card-body\" exemplify=\"basicExample\" [context]=\"this\" [escapeStrings]=\"['[gtClasses]','[gtSettings]','[gtFields]','[(gtData)]','[gtRowComponent]','[gtOptions]','[genericTable]','#myTable']\" [source]=\"'child'\" [target]=\"basicExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\n    name:'app.module.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\n  },{\n    name:'aggregate.component.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/aggregate/aggregate.component.ts'\n  }]\">\n    <form class=\"form form-inline mb-4\">\n      <label for=\"search\" class=\"form-control-label mr-sm-2\">Search</label>\n    <input name=\"search\" id=\"search\" class=\"form-control form-control-sm mb-2 mr-sm-2 mb-lg-0\" #search (keyup)=\"myTable.gtSearch(search.value)\" placeholder=\"Search\"/>\n    </form>\n    <generic-table [gtClasses]=\"'table-sm'\" #myTable [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [gtTotals]=\"configObject.totals\" [gtData]=\"configObject.data\"></generic-table>\n    <small class=\"text-muted\">* Based on total entries before filter and or search has been applied.</small>\n    <div class=\"text-center mt-3\">\n      <small><gt-table-info class=\"form-text text-muted mb-2\" [genericTable]=\"myTable\"></gt-table-info></small>\n      <gt-pagination [gtClasses]=\"'pagination-sm justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\n    </div>\n  </div>\n  <div class=\"card-footer\" #basicExample></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/aggregate/aggregate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AggregateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AggregateComponent = (function () {
    function AggregateComponent() {
        this.data = [];
        this.configObject = {
            settings: [{
                    objectKey: 'id',
                    sort: 'asc'
                }, {
                    objectKey: 'name'
                }, {
                    objectKey: 'meetings'
                }, {
                    objectKey: 'sales'
                }],
            fields: [{
                    name: 'Id',
                    objectKey: 'id'
                }, {
                    name: 'Name',
                    objectKey: 'name'
                }, {
                    name: 'Meetings',
                    objectKey: 'meetings',
                    classNames: 'text-right',
                    inlineEdit: true
                }, {
                    name: 'Sales volume',
                    objectKey: 'sales',
                    classNames: 'text-right'
                }],
            totals: [{
                    name: 'Total *',
                    position: 'footer',
                    update: false,
                    fields: {
                        sales: function (rows, objectKey) {
                            return rows
                                .map(function (row) { return parseFloat(row[objectKey]); })
                                .reduce(function (sum, value) { return (isNaN(sum) ? 0 : sum) + (isNaN(value) ? 0 : value); }).toFixed(2);
                        },
                        name: 'Men: 46, Women: 54',
                        meetings: function (rows, objectKey) {
                            return rows
                                .map(function (row) { return parseFloat(row[objectKey] === '' ? 0 : row[objectKey]); })
                                .reduce(function (sum, value) { return (isNaN(sum) ? 0 : sum) + (isNaN(value) ? 0 : value); });
                        }
                    }
                }, {
                    name: 'Avg per employee',
                    fields: {
                        sales: function (rows, objectKey) {
                            return (rows
                                .map(function (row) { return parseFloat(row[objectKey]); })
                                .reduce(function (sum, value) { return (isNaN(sum) ? 0 : sum) + (isNaN(value) ? 0 : value); }) / rows.length).toFixed(2);
                        },
                        meetings: function (rows, objectKey) {
                            return (rows
                                .map(function (row) { return parseFloat(row[objectKey] === '' ? 0 : row[objectKey]); })
                                .reduce(function (sum, value) { return (isNaN(sum) ? 0 : sum) + (isNaN(value) ? 0 : value); }) / rows.length).toFixed(1);
                        }
                    }
                }, {
                    name: 'Avg per meeting',
                    fields: {
                        sales: function (rows, objectKey) {
                            var totalMeetings = rows
                                .map(function (row) { return parseFloat(row.meetings === '' ? 0 : row.meetings); })
                                .reduce(function (sum, value) {
                                return (isNaN(sum) ? 0 : sum) + (isNaN(value) ? 0 : value);
                            });
                            var totalSales = rows
                                .map(function (row) { return parseFloat(row[objectKey]); })
                                .reduce(function (sum, value) { return (isNaN(sum) ? 0 : sum) + (isNaN(value) ? 0 : value); });
                            return (totalSales / totalMeetings).toFixed(2);
                        }
                    }
                }],
            data: [{
                    'id': 1,
                    'name': 'Pate',
                    'sales': 38163,
                    'meetings': 50
                }, {
                    'id': 2,
                    'name': 'Zena',
                    'sales': 32273,
                    'meetings': 12
                }, {
                    'id': 3,
                    'name': 'Ailbert',
                    'sales': 98705,
                    'meetings': 2
                }, {
                    'id': 4,
                    'name': 'Fionna',
                    'sales': 72268,
                    'meetings': 10
                }, {
                    'id': 5,
                    'name': 'Tressa',
                    'sales': 92143,
                    'meetings': 32
                }, {
                    'id': 6,
                    'name': 'Vance',
                    'sales': 30960,
                    'meetings': 35
                }, {
                    'id': 7,
                    'name': 'Donia',
                    'sales': 19390,
                    'meetings': 47
                }, {
                    'id': 8,
                    'name': 'Fenelia',
                    'sales': 23237,
                    'meetings': 42
                }, {
                    'id': 9,
                    'name': 'Hailee',
                    'sales': 36071,
                    'meetings': 17
                }, {
                    'id': 10,
                    'name': 'Rayner',
                    'sales': 56238,
                    'meetings': 29
                }, {
                    'id': 11,
                    'name': 'Bobbi',
                    'sales': 94334,
                    'meetings': 37
                }, {
                    'id': 12,
                    'name': 'Hayward',
                    'sales': 51204,
                    'meetings': 11
                }, {
                    'id': 13,
                    'name': 'Tab',
                    'sales': 66636,
                    'meetings': 41
                }, {
                    'id': 14,
                    'name': 'Chloette',
                    'sales': 44141,
                    'meetings': 37
                }, {
                    'id': 15,
                    'name': 'Sonny',
                    'sales': 74672,
                    'meetings': 46
                }, {
                    'id': 16,
                    'name': 'Lorenzo',
                    'sales': 52626,
                    'meetings': 2
                }, {
                    'id': 17,
                    'name': 'Bennie',
                    'sales': 93559,
                    'meetings': 29
                }, {
                    'id': 18,
                    'name': 'Selma',
                    'sales': 38568,
                    'meetings': 47
                }, {
                    'id': 19,
                    'name': 'Missy',
                    'sales': 18688,
                    'meetings': 12
                }, {
                    'id': 20,
                    'name': 'Carree',
                    'sales': 43477,
                    'meetings': 48
                }, {
                    'id': 21,
                    'name': 'Alison',
                    'sales': 93392,
                    'meetings': 42
                }, {
                    'id': 22,
                    'name': 'Tate',
                    'sales': 61999,
                    'meetings': 21
                }, {
                    'id': 23,
                    'name': 'Kelcey',
                    'sales': 94450,
                    'meetings': 5
                }, {
                    'id': 24,
                    'name': 'Rochester',
                    'sales': 12220,
                    'meetings': 42
                }, {
                    'id': 25,
                    'name': 'Eloise',
                    'sales': 30843,
                    'meetings': 6
                }, {
                    'id': 26,
                    'name': 'Diarmid',
                    'sales': 45267,
                    'meetings': 2
                }, {
                    'id': 27,
                    'name': 'Rica',
                    'sales': 25748,
                    'meetings': 1
                }, {
                    'id': 28,
                    'name': 'Adriaens',
                    'sales': 78366,
                    'meetings': 39
                }, {
                    'id': 29,
                    'name': 'Sarena',
                    'sales': 19838,
                    'meetings': 6
                }, {
                    'id': 30,
                    'name': 'Anthe',
                    'sales': 21687,
                    'meetings': 47
                }, {
                    'id': 31,
                    'name': 'Parry',
                    'sales': 97603,
                    'meetings': 35
                }, {
                    'id': 32,
                    'name': 'Martynne',
                    'sales': 91269,
                    'meetings': 46
                }, {
                    'id': 33,
                    'name': 'Therine',
                    'sales': 90441,
                    'meetings': 39
                }, {
                    'id': 34,
                    'name': 'De witt',
                    'sales': 46340,
                    'meetings': 18
                }, {
                    'id': 35,
                    'name': 'Henrieta',
                    'sales': 59038,
                    'meetings': 5
                }, {
                    'id': 36,
                    'name': 'Estell',
                    'sales': 90201,
                    'meetings': 13
                }, {
                    'id': 37,
                    'name': 'Lenard',
                    'sales': 92033,
                    'meetings': 13
                }, {
                    'id': 38,
                    'name': 'Gypsy',
                    'sales': 39536,
                    'meetings': 48
                }, {
                    'id': 39,
                    'name': 'Moira',
                    'sales': 42601,
                    'meetings': 33
                }, {
                    'id': 40,
                    'name': 'Orly',
                    'sales': 31429,
                    'meetings': 19
                }, {
                    'id': 41,
                    'name': 'Ogden',
                    'sales': 90292,
                    'meetings': 36
                }, {
                    'id': 42,
                    'name': 'Kirsten',
                    'sales': 65600,
                    'meetings': 27
                }, {
                    'id': 43,
                    'name': 'Nester',
                    'sales': 53651,
                    'meetings': 37
                }, {
                    'id': 44,
                    'name': 'Roddie',
                    'sales': 92812,
                    'meetings': 23
                }, {
                    'id': 45,
                    'name': 'Halie',
                    'sales': 63683,
                    'meetings': 42
                }, {
                    'id': 46,
                    'name': 'Kimberlee',
                    'sales': 25743,
                    'meetings': 10
                }, {
                    'id': 47,
                    'name': 'Alfonso',
                    'sales': 49721,
                    'meetings': 11
                }, {
                    'id': 48,
                    'name': 'Adriana',
                    'sales': 41201,
                    'meetings': 22
                }, {
                    'id': 49,
                    'name': 'Josefa',
                    'sales': 90525,
                    'meetings': 1
                }, {
                    'id': 50,
                    'name': 'Domini',
                    'sales': 60591,
                    'meetings': 14
                }, {
                    'id': 51,
                    'name': 'Filia',
                    'sales': 70784,
                    'meetings': 30
                }, {
                    'id': 52,
                    'name': 'Nickolai',
                    'sales': 31236,
                    'meetings': 39
                }, {
                    'id': 53,
                    'name': 'Alexis',
                    'sales': 63095,
                    'meetings': 43
                }, {
                    'id': 54,
                    'name': 'Nikita',
                    'sales': 28495,
                    'meetings': 10
                }, {
                    'id': 55,
                    'name': 'Loralie',
                    'sales': 77561,
                    'meetings': 45
                }, {
                    'id': 56,
                    'name': 'Marthe',
                    'sales': 83830,
                    'meetings': 26
                }, {
                    'id': 57,
                    'name': 'Alvis',
                    'sales': 89067,
                    'meetings': 35
                }, {
                    'id': 58,
                    'name': 'Delmar',
                    'sales': 97491,
                    'meetings': 41
                }, {
                    'id': 59,
                    'name': 'Cross',
                    'sales': 34674,
                    'meetings': 20
                }, {
                    'id': 60,
                    'name': 'Reed',
                    'sales': 17858,
                    'meetings': 10
                }, {
                    'id': 61,
                    'name': 'Dori',
                    'sales': 17995,
                    'meetings': 34
                }, {
                    'id': 62,
                    'name': 'Dimitry',
                    'sales': 31899,
                    'meetings': 49
                }, {
                    'id': 63,
                    'name': 'Anne',
                    'sales': 86750,
                    'meetings': 37
                }, {
                    'id': 64,
                    'name': 'Emili',
                    'sales': 28101,
                    'meetings': 2
                }, {
                    'id': 65,
                    'name': 'Laurella',
                    'sales': 40531,
                    'meetings': 38
                }, {
                    'id': 66,
                    'name': 'Puff',
                    'sales': 16958,
                    'meetings': 44
                }, {
                    'id': 67,
                    'name': 'Brett',
                    'sales': 34165,
                    'meetings': 44
                }, {
                    'id': 68,
                    'name': 'Suzy',
                    'sales': 96675,
                    'meetings': 37
                }, {
                    'id': 69,
                    'name': 'Murdoch',
                    'sales': 94628,
                    'meetings': 10
                }, {
                    'id': 70,
                    'name': 'Garey',
                    'sales': 39237,
                    'meetings': 28
                }, {
                    'id': 71,
                    'name': 'Piper',
                    'sales': 50629,
                    'meetings': 21
                }, {
                    'id': 72,
                    'name': 'Perle',
                    'sales': 84868,
                    'meetings': 31
                }, {
                    'id': 73,
                    'name': 'Rachele',
                    'sales': 18526,
                    'meetings': 39
                }, {
                    'id': 74,
                    'name': 'Sibyl',
                    'sales': 56675,
                    'meetings': 40
                }, {
                    'id': 75,
                    'name': 'Wilton',
                    'sales': 38103,
                    'meetings': 4
                }, {
                    'id': 76,
                    'name': 'Brennen',
                    'sales': 31274,
                    'meetings': 6
                }, {
                    'id': 77,
                    'name': 'Delcine',
                    'sales': 10128,
                    'meetings': 12
                }, {
                    'id': 78,
                    'name': 'Dene',
                    'sales': 56928,
                    'meetings': 32
                }, {
                    'id': 79,
                    'name': 'Hallie',
                    'sales': 46480,
                    'meetings': 35
                }, {
                    'id': 80,
                    'name': 'Goran',
                    'sales': 73266,
                    'meetings': 44
                }, {
                    'id': 81,
                    'name': 'Wat',
                    'sales': 21856,
                    'meetings': 11
                }, {
                    'id': 82,
                    'name': 'Lotti',
                    'sales': 77348,
                    'meetings': 35
                }, {
                    'id': 83,
                    'name': 'Charity',
                    'sales': 64092,
                    'meetings': 40
                }, {
                    'id': 84,
                    'name': 'Maris',
                    'sales': 97636,
                    'meetings': 29
                }, {
                    'id': 85,
                    'name': 'Thorsten',
                    'sales': 20258,
                    'meetings': 46
                }, {
                    'id': 86,
                    'name': 'Corella',
                    'sales': 47555,
                    'meetings': 21
                }, {
                    'id': 87,
                    'name': 'Berkeley',
                    'sales': 22597,
                    'meetings': 44
                }, {
                    'id': 88,
                    'name': 'Ezekiel',
                    'sales': 60014,
                    'meetings': 4
                }, {
                    'id': 89,
                    'name': 'Salomone',
                    'sales': 61406,
                    'meetings': 27
                }, {
                    'id': 90,
                    'name': 'Rebeca',
                    'sales': 60268,
                    'meetings': 39
                }, {
                    'id': 91,
                    'name': 'Biddy',
                    'sales': 20856,
                    'meetings': 18
                }, {
                    'id': 92,
                    'name': 'Karlik',
                    'sales': 65305,
                    'meetings': 26
                }, {
                    'id': 93,
                    'name': 'Sue',
                    'sales': 40540,
                    'meetings': 31
                }, {
                    'id': 94,
                    'name': 'Patrizia',
                    'sales': 48884,
                    'meetings': 26
                }, {
                    'id': 95,
                    'name': 'Chariot',
                    'sales': 28795,
                    'meetings': 12
                }, {
                    'id': 96,
                    'name': 'Spenser',
                    'sales': 59791,
                    'meetings': 2
                }, {
                    'id': 97,
                    'name': 'Delphine',
                    'sales': 98330,
                    'meetings': 42
                }, {
                    'id': 98,
                    'name': 'Sonnnie',
                    'sales': 89929,
                    'meetings': 45
                }, {
                    'id': 99,
                    'name': 'Annecorinne',
                    'sales': 29895,
                    'meetings': 7
                }, {
                    'id': 100,
                    'name': 'Ferdinande',
                    'sales': 73269,
                    'meetings': 10
                }]
        };
    }
    return AggregateComponent;
}());
AggregateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aggregate',
        template: __webpack_require__("../../../../../src/app/aggregate/aggregate.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], AggregateComponent);

//# sourceMappingURL=aggregate.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lazy_lazy_component__ = __webpack_require__("../../../../../src/app/lazy/lazy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_rest_component__ = __webpack_require__("../../../../../src/app/rest/rest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_basic_component__ = __webpack_require__("../../../../../src/app/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_column_custom_column_component__ = __webpack_require__("../../../../../src/app/custom-column/custom-column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__localization_localization_component__ = __webpack_require__("../../../../../src/app/localization/localization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__change_column_settings_change_column_settings_component__ = __webpack_require__("../../../../../src/app/change-column-settings/change-column-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inline_editing_inline_editing_component__ = __webpack_require__("../../../../../src/app/inline-editing/inline-editing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__column_click_column_click_component__ = __webpack_require__("../../../../../src/app/column-click/column-click.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aggregate_aggregate_component__ = __webpack_require__("../../../../../src/app/aggregate/aggregate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_remove_edit_add_remove_edit_component__ = __webpack_require__("../../../../../src/app/add-remove-edit/add-remove-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__record_selection_record_selection_component__ = __webpack_require__("../../../../../src/app/record-selection/record-selection.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'start', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'lazy', component: __WEBPACK_IMPORTED_MODULE_2__lazy_lazy_component__["a" /* LazyComponent */] },
    { path: 'advanced', component: __WEBPACK_IMPORTED_MODULE_3__rest_rest_component__["a" /* RestComponent */] },
    { path: 'basic', component: __WEBPACK_IMPORTED_MODULE_4__basic_basic_component__["a" /* BasicComponent */] },
    { path: 'record-selection', component: __WEBPACK_IMPORTED_MODULE_13__record_selection_record_selection_component__["a" /* RecordSelectionComponent */] },
    { path: 'totals', component: __WEBPACK_IMPORTED_MODULE_11__aggregate_aggregate_component__["a" /* AggregateComponent */] },
    { path: 'custom-column', component: __WEBPACK_IMPORTED_MODULE_5__custom_column_custom_column_component__["b" /* CustomColumnComponent */] },
    { path: 'column-click', component: __WEBPACK_IMPORTED_MODULE_10__column_click_column_click_component__["a" /* ColumnClickComponent */] },
    { path: 'localization', component: __WEBPACK_IMPORTED_MODULE_6__localization_localization_component__["a" /* LocalizationComponent */] },
    { path: 'inline-editing', component: __WEBPACK_IMPORTED_MODULE_9__inline_editing_inline_editing_component__["a" /* InlineEditingComponent */] },
    { path: 'add-remove-edit', component: __WEBPACK_IMPORTED_MODULE_12__add_remove_edit_add_remove_edit_component__["a" /* AddRemoveEditComponent */] },
    { path: 'column-settings-component', component: __WEBPACK_IMPORTED_MODULE_7__change_column_settings_change_column_settings_component__["a" /* ChangeColumnSettingsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-md-none fixed-top container-fluid mobile-menu px-3 py-2\">\n    <div class=\"menu-icon float-right\" [ngClass]=\"{'active':showMenu}\" (click)=\"showMenu = !showMenu\"><div></div></div>\n    <menu *ngIf=\"showMenu\" class=\"mt-4 p-0 text-white\"></menu>\n</div>\n<div class=\"jumbotron mt-4 mt-md-0 bg-teal text-white rounded-0\">\n    <div class=\"row no-gutters\">\n        <div class=\"col main\">\n            <div class=\"container\">\n                <h1 class=\"display-4\">Angular Generic Table</h1>\n                <p class=\"lead\">A table component for Angular 2+. For more info checkout the docs in the wiki.</p>\n                <a class=\"btn btn-primary\" href=\"https://github.com/hjalmers/angular-generic-table/wiki\" target=\"_blank\">Go to wiki</a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row no-gutters\">\n    <div class=\"col main\">\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <div class=\"col col-auto side d-none d-md-block\">\n        <menu class=\"p-0\"></menu>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.showMenu = false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lazy_lazy_component__ = __webpack_require__("../../../../../src/app/lazy/lazy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rest_rest_component__ = __webpack_require__("../../../../../src/app/rest/rest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__custom_row_custom_row_component__ = __webpack_require__("../../../../../src/app/custom-row/custom-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__basic_basic_component__ = __webpack_require__("../../../../../src/app/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_remove_edit_add_remove_edit_component__ = __webpack_require__("../../../../../src/app/add-remove-edit/add-remove-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__examples_examples_component__ = __webpack_require__("../../../../../src/app/examples/examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_exemplify__ = __webpack_require__("../../../../angular-exemplify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_exemplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular_exemplify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__localization_localization_component__ = __webpack_require__("../../../../../src/app/localization/localization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__custom_column_custom_column_component__ = __webpack_require__("../../../../../src/app/custom-column/custom-column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_generic_table_core__ = __webpack_require__("../../../../../@angular-generic-table/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_generic_table_column_settings__ = __webpack_require__("../../../../../@angular-generic-table/column-settings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__change_column_settings_change_column_settings_component__ = __webpack_require__("../../../../../src/app/change-column-settings/change-column-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__inline_editing_inline_editing_component__ = __webpack_require__("../../../../../src/app/inline-editing/inline-editing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__column_click_column_click_component__ = __webpack_require__("../../../../../src/app/column-click/column-click.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__aggregate_aggregate_component__ = __webpack_require__("../../../../../src/app/aggregate/aggregate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__record_selection_record_selection_component__ = __webpack_require__("../../../../../src/app/record-selection/record-selection.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/** Components used in example */











/** Only needed when using ng2-translate */


function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_17__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
/** Import generic table module */


/** Example components */







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__lazy_lazy_component__["a" /* LazyComponent */],
            __WEBPACK_IMPORTED_MODULE_7__rest_rest_component__["a" /* RestComponent */],
            __WEBPACK_IMPORTED_MODULE_8__custom_row_custom_row_component__["a" /* CustomRowComponent */],
            __WEBPACK_IMPORTED_MODULE_15__custom_column_custom_column_component__["b" /* CustomColumnComponent */],
            __WEBPACK_IMPORTED_MODULE_15__custom_column_custom_column_component__["c" /* NameComponent */],
            __WEBPACK_IMPORTED_MODULE_15__custom_column_custom_column_component__["a" /* AgeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_remove_edit_add_remove_edit_component__["d" /* RequiredNameComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_remove_edit_add_remove_edit_component__["e" /* RequiredNumberComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_remove_edit_add_remove_edit_component__["c" /* EditSaveButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_remove_edit_add_remove_edit_component__["b" /* DeleteDiscardButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_remove_edit_add_remove_edit_component__["f" /* SelectedCheckboxComponent */],
            __WEBPACK_IMPORTED_MODULE_9__basic_basic_component__["a" /* BasicComponent */],
            __WEBPACK_IMPORTED_MODULE_11__examples_examples_component__["a" /* ExamplesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__localization_localization_component__["a" /* LocalizationComponent */],
            __WEBPACK_IMPORTED_MODULE_20__change_column_settings_change_column_settings_component__["a" /* ChangeColumnSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_22__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_23__inline_editing_inline_editing_component__["a" /* InlineEditingComponent */],
            __WEBPACK_IMPORTED_MODULE_24__column_click_column_click_component__["a" /* ColumnClickComponent */],
            __WEBPACK_IMPORTED_MODULE_25__aggregate_aggregate_component__["a" /* AggregateComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_remove_edit_add_remove_edit_component__["a" /* AddRemoveEditComponent */],
            __WEBPACK_IMPORTED_MODULE_26__record_selection_record_selection_component__["a" /* RecordSelectionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_18__angular_generic_table_core__["b" /* GenericTableModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_generic_table_column_settings__["a" /* ColumnSettingsModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular_exemplify__["ExemplifyModule"],
            /** translate module only needed for localization when using ngx */
            __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]]
                }
            })
        ],
        /** add components used by your table i.e. for expanding rows etc. as entry components */
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__custom_row_custom_row_component__["a" /* CustomRowComponent */],
            __WEBPACK_IMPORTED_MODULE_15__custom_column_custom_column_component__["c" /* NameComponent */],
            __WEBPACK_IMPORTED_MODULE_15__custom_column_custom_column_component__["a" /* AgeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_remove_edit_add_remove_edit_component__["d" /* RequiredNameComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_remove_edit_add_remove_edit_component__["e" /* RequiredNumberComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_remove_edit_add_remove_edit_component__["c" /* EditSaveButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_remove_edit_add_remove_edit_component__["b" /* DeleteDiscardButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_remove_edit_add_remove_edit_component__["f" /* SelectedCheckboxComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/basic/basic.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Basic</h2>\n<p>Table with static data and simple pagination.</p>\n<div class=\"card mb-5\">\n  <div class=\"card-header\">Example</div>\n  <div class=\"card-body\" exemplify=\"basicExample\" [context]=\"this\" [escapeStrings]=\"['[gtClasses]','[gtSettings]','[gtFields]','[(gtData)]','[gtRowComponent]','[gtOptions]','[genericTable]','#myTable']\" [source]=\"'child'\" [target]=\"basicExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\n    name:'app.module.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\n  },{\n    name:'basic.component.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/basic/basic.component.ts'\n  }]\">\n    <generic-table [gtClasses]=\"'table-sm'\" #myTable [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [gtData]=\"configObject.data\"></generic-table>\n    <div class=\"text-center\">\n      <small><gt-table-info class=\"form-text text-muted mb-2\" [genericTable]=\"myTable\"></gt-table-info></small>\n      <gt-pagination [gtClasses]=\"'pagination-sm justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\n    </div>\n  </div>\n  <div class=\"card-footer\" #basicExample></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/basic/basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicComponent = (function () {
    function BasicComponent() {
        this.data = [];
        this.configObject = {
            settings: [{
                    objectKey: 'id',
                    sort: 'asc',
                    sortOrder: 1,
                    columnOrder: 0
                }, {
                    objectKey: 'name',
                    sort: 'asc',
                    sortOrder: 0,
                    columnOrder: 1
                }, {
                    objectKey: 'lucky_number',
                    sort: 'enable',
                    columnOrder: 2,
                    visible: true
                }],
            fields: [{
                    name: 'Id',
                    objectKey: 'id'
                }, {
                    name: 'Name',
                    objectKey: 'name'
                }, {
                    name: 'Lucky number',
                    objectKey: 'lucky_number',
                    stackedHeading: 'Custom heading'
                }],
            data: [{
                    'id': 1,
                    'name': 'Anna',
                    'lucky_number': 63
                }, {
                    'id': 2,
                    'name': 'Julie',
                    'lucky_number': 8
                }, {
                    'id': 3,
                    'name': 'Lillian',
                    'lucky_number': 30
                }, {
                    'id': 4,
                    'name': 'Norma',
                    'lucky_number': 13
                }, {
                    'id': 5,
                    'name': 'Ralph',
                    'lucky_number': 28
                }, {
                    'id': 6,
                    'name': 'Benjamin',
                    'lucky_number': 66
                }, {
                    'id': 7,
                    'name': 'George',
                    'lucky_number': 66
                }, {
                    'id': 8,
                    'name': 'Ryan',
                    'lucky_number': 65
                }, {
                    'id': 9,
                    'name': 'Martha',
                    'lucky_number': 57
                }, {
                    'id': 10,
                    'name': 'Todd',
                    'lucky_number': 65
                }, {
                    'id': 11,
                    'name': 'Norma',
                    'lucky_number': 73
                }, {
                    'id': 12,
                    'name': 'Frank',
                    'lucky_number': 27
                }, {
                    'id': 13,
                    'name': 'Kathryn',
                    'lucky_number': 93
                }, {
                    'id': 14,
                    'name': 'Philip',
                    'lucky_number': 63
                }, {
                    'id': 15,
                    'name': 'Ronald',
                    'lucky_number': 89
                }, {
                    'id': 16,
                    'name': 'Joshua',
                    'lucky_number': 18
                }, {
                    'id': 17,
                    'name': 'Phillip',
                    'lucky_number': 16
                }, {
                    'id': 18,
                    'name': 'Susan',
                    'lucky_number': 6
                }, {
                    'id': 19,
                    'name': 'Louise',
                    'lucky_number': 52
                }, {
                    'id': 20,
                    'name': 'Gary',
                    'lucky_number': 18
                }, {
                    'id': 21,
                    'name': 'Laura',
                    'lucky_number': 9
                }, {
                    'id': 22,
                    'name': 'Tina',
                    'lucky_number': 70
                }, {
                    'id': 23,
                    'name': 'Jesse',
                    'lucky_number': 2
                }, {
                    'id': 24,
                    'name': 'Jessica',
                    'lucky_number': 15
                }, {
                    'id': 25,
                    'name': 'Scott',
                    'lucky_number': 38
                }, {
                    'id': 26,
                    'name': 'Michael',
                    'lucky_number': 23
                }, {
                    'id': 27,
                    'name': 'Harold',
                    'lucky_number': 66
                }, {
                    'id': 28,
                    'name': 'William',
                    'lucky_number': 57
                }, {
                    'id': 29,
                    'name': 'Harry',
                    'lucky_number': 14
                }, {
                    'id': 30,
                    'name': 'Dennis',
                    'lucky_number': 9
                }, {
                    'id': 31,
                    'name': 'Sara',
                    'lucky_number': 9
                }, {
                    'id': 32,
                    'name': 'David',
                    'lucky_number': 31
                }, {
                    'id': 33,
                    'name': 'Antonio',
                    'lucky_number': 2
                }, {
                    'id': 34,
                    'name': 'Anna',
                    'lucky_number': 85
                }, {
                    'id': 35,
                    'name': 'Earl',
                    'lucky_number': 98
                }, {
                    'id': 36,
                    'name': 'Melissa',
                    'lucky_number': 70
                }, {
                    'id': 37,
                    'name': 'Eric',
                    'lucky_number': 94
                }, {
                    'id': 38,
                    'name': 'Joe',
                    'lucky_number': 42
                }, {
                    'id': 39,
                    'name': 'Andrea',
                    'lucky_number': 39
                }, {
                    'id': 40,
                    'name': 'Michael',
                    'lucky_number': 44
                }, {
                    'id': 41,
                    'name': 'Lillian',
                    'lucky_number': 10
                }, {
                    'id': 42,
                    'name': 'Elizabeth',
                    'lucky_number': 24
                }, {
                    'id': 43,
                    'name': 'Ryan',
                    'lucky_number': 78
                }, {
                    'id': 44,
                    'name': 'Phillip',
                    'lucky_number': 86
                }, {
                    'id': 45,
                    'name': 'Patrick',
                    'lucky_number': 64
                }, {
                    'id': 46,
                    'name': 'Barbara',
                    'lucky_number': 54
                }, {
                    'id': 47,
                    'name': 'Patricia',
                    'lucky_number': 9
                }, {
                    'id': 48,
                    'name': 'Brenda',
                    'lucky_number': 18
                }, {
                    'id': 49,
                    'name': 'Sara',
                    'lucky_number': 12
                }, {
                    'id': 50,
                    'name': 'Steven',
                    'lucky_number': 50
                }, {
                    'id': 51,
                    'name': 'Steven',
                    'lucky_number': 44
                }, {
                    'id': 52,
                    'name': 'Paul',
                    'lucky_number': 88
                }, {
                    'id': 53,
                    'name': 'Ann',
                    'lucky_number': 51
                }, {
                    'id': 54,
                    'name': 'Frank',
                    'lucky_number': 3
                }, {
                    'id': 55,
                    'name': 'Beverly',
                    'lucky_number': 10
                }, {
                    'id': 56,
                    'name': 'Elizabeth',
                    'lucky_number': 52
                }, {
                    'id': 57,
                    'name': 'Patrick',
                    'lucky_number': 96
                }, {
                    'id': 58,
                    'name': 'Susan',
                    'lucky_number': 92
                }, {
                    'id': 59,
                    'name': 'Lawrence',
                    'lucky_number': 53
                }, {
                    'id': 60,
                    'name': 'Denise',
                    'lucky_number': 65
                }, {
                    'id': 61,
                    'name': 'Carol',
                    'lucky_number': 33
                }, {
                    'id': 62,
                    'name': 'Larry',
                    'lucky_number': 95
                }, {
                    'id': 63,
                    'name': 'Martha',
                    'lucky_number': 32
                }, {
                    'id': 64,
                    'name': 'Steve',
                    'lucky_number': 69
                }, {
                    'id': 65,
                    'name': 'Timothy',
                    'lucky_number': 16
                }, {
                    'id': 66,
                    'name': 'Jose',
                    'lucky_number': 16
                }, {
                    'id': 67,
                    'name': 'Jennifer',
                    'lucky_number': 96
                }, {
                    'id': 68,
                    'name': 'Benjamin',
                    'lucky_number': 20
                }, {
                    'id': 69,
                    'name': 'Christine',
                    'lucky_number': 8
                }, {
                    'id': 70,
                    'name': 'Timothy',
                    'lucky_number': 93
                }, {
                    'id': 71,
                    'name': 'Patricia',
                    'lucky_number': 17
                }, {
                    'id': 72,
                    'name': 'Craig',
                    'lucky_number': 48
                }, {
                    'id': 73,
                    'name': 'Philip',
                    'lucky_number': 88
                }, {
                    'id': 74,
                    'name': 'Lori',
                    'lucky_number': 56
                }, {
                    'id': 75,
                    'name': 'Janet',
                    'lucky_number': 4
                }, {
                    'id': 76,
                    'name': 'Denise',
                    'lucky_number': 30
                }, {
                    'id': 77,
                    'name': 'Elizabeth',
                    'lucky_number': 44
                }, {
                    'id': 78,
                    'name': 'Thomas',
                    'lucky_number': 95
                }, {
                    'id': 79,
                    'name': 'Shirley',
                    'lucky_number': 24
                }, {
                    'id': 80,
                    'name': 'Helen',
                    'lucky_number': 9
                }, {
                    'id': 81,
                    'name': 'Wanda',
                    'lucky_number': 98
                }, {
                    'id': 82,
                    'name': 'Ernest',
                    'lucky_number': 35
                }, {
                    'id': 83,
                    'name': 'Steven',
                    'lucky_number': 9
                }, {
                    'id': 84,
                    'name': 'Jose',
                    'lucky_number': 27
                }, {
                    'id': 85,
                    'name': 'Kimberly',
                    'lucky_number': 52
                }, {
                    'id': 86,
                    'name': 'Nancy',
                    'lucky_number': 48
                }, {
                    'id': 87,
                    'name': 'Christopher',
                    'lucky_number': 44
                }, {
                    'id': 88,
                    'name': 'Nancy',
                    'lucky_number': 40
                }, {
                    'id': 89,
                    'name': 'Philip',
                    'lucky_number': 34
                }, {
                    'id': 90,
                    'name': 'Bruce',
                    'lucky_number': 69
                }, {
                    'id': 91,
                    'name': 'Jason',
                    'lucky_number': 60
                }, {
                    'id': 92,
                    'name': 'Denise',
                    'lucky_number': 30
                }, {
                    'id': 93,
                    'name': 'Jane',
                    'lucky_number': 66
                }, {
                    'id': 94,
                    'name': 'Brian',
                    'lucky_number': 49
                }, {
                    'id': 95,
                    'name': 'Eugene',
                    'lucky_number': 51
                }, {
                    'id': 96,
                    'name': 'Jack',
                    'lucky_number': 97
                }, {
                    'id': 97,
                    'name': 'Peter',
                    'lucky_number': 1
                }, {
                    'id': 98,
                    'name': 'Virginia',
                    'lucky_number': 20
                }, {
                    'id': 99,
                    'name': 'Walter',
                    'lucky_number': 63
                }, {
                    'id': 100,
                    'name': 'Virginia',
                    'lucky_number': 14
                }]
        };
    }
    return BasicComponent;
}());
BasicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic',
        template: __webpack_require__("../../../../../src/app/basic/basic.component.html")
    }),
    __metadata("design:paramtypes", [])
], BasicComponent);

//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ "../../../../../src/app/change-column-settings/change-column-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Column settings component</h2>\n<p class=\"lead\">Toggle column visibility and column order using the <code>ColumnSettingsComponent</code>.</p>\n<h5>Installation</h5>\n<p>Install with npm by running:</p>\n<code>npm install @angular-generic-table/column-settings dragula ng2-dragula --save</code>\n<p class=\"mt-4\">More info available in the <a href=\"https://github.com/hjalmers/angular-generic-table/wiki/Installation-and-basic-usage\" target=\"_blank\">wiki</a>.</p>\n\n<h5>Usage</h5>\n<p>This how the <code>ColumnSettingsComponent</code> looks and behaves by default but feel free to customize it using css or by passing predefined classes. You can also define your own template for the columns.</p>\n<div class=\"card mb-5\">\n  <div class=\"card-header\">Example</div>\n  <div class=\"card-body\" exemplify=\"columnSettingsExample\" [context]=\"this\" [escapeStrings]=\"['[gtClasses]','[gtSettings]','[gtFields]','gtData','[gtRowComponent]','[gtOptions]','[genericTable]','#rowLength','#myTable','#columnSettings']\" [source]=\"'child'\" [target]=\"columnSettingsExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\n    name:'app.module.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\n  },{\n    name:'change-column-settings.component.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/change-column-settings/change-column-settings.component.ts'\n  }]\">\n    <button class=\"btn-link\" (click)=\"columnSettings.toggleColumnSettings()\"> {{columnSettings.active ? 'Hide column settings':'Show column settings'}}</button>\n    <gt-column-settings [genericTable]=\"myTable\" #columnSettings>\n      <div class=\"table-responsive\">\n        <generic-table [gtClasses]=\"'table-hover'\" #myTable [gtSettings]=\"firstConfigObject.settings\" [gtFields]=\"firstConfigObject.fields\" [gtData]=\"firstConfigObject.data\" [gtOptions]=\"{numberOfRows:5}\"></generic-table>\n      </div>\n      <div class=\"text-center\">\n        <gt-pagination [gtClasses]=\"'justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\n      </div>\n    </gt-column-settings>\n\n  </div>\n  <div class=\"card-footer\" #columnSettingsExample></div>\n</div>\n\n<h5>Customize</h5>\n<p>Pass your own template for columns and change texts and css/classes for a custom look and feel.</p>\n<div class=\"card mb-5\">\n  <div class=\"card-header\">Example</div>\n  <div class=\"card-body\" exemplify=\"columnSettingsTemplateExample\" [context]=\"this\" [escapeStrings]=\"['[gtClasses]','[gtSettings]','[gtFields]','gtData','[gtRowComponent]','[gtOptions]','[genericTable]','#rowLength','gtColumnItem','#myCustomTable','[ngClass]','#customColumnSettings','gtTexts','gtHeaderClasses','gtWrapperClasses']\" [source]=\"'child'\" [target]=\"columnSettingsTemplateExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\n    name:'app.module.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\n  },{\n    name:'change-column-settings.component.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/change-column-settings/change-column-settings.component.ts'\n  }]\">\n    <ng-template #gtColumnItem let-column let-index=\"index\" let-name=\"name\">\n      <div class=\"btn-group btn-group-sm mb-1 col-12 p-0\" role=\"group\">\n        <button type=\"button\" class=\"btn w-100\" [ngClass]=\"{'btn-primary':column.visible !== false, 'btn-secondary':column.visible === false}\" style=\"cursor: move;\">{{index}}: {{name}}</button>\n        <button type=\"button\" class=\"btn w-100\" [ngClass]=\"{'btn-outline-primary':column.visible !== false, 'btn-outline-secondary':column.visible === false}\" (click)=\"customColumnSettings.toggleColumnVisibility(column)\" style=\"cursor: pointer;\">{{column.visible !== false ? 'visible':'hidden'}}</button>\n      </div>\n    </ng-template>\n    <button class=\"btn-link\" (click)=\"customColumnSettings.toggleColumnSettings()\"> {{customColumnSettings.active ? 'Hide column settings':'Show column settings'}}</button>\n    <gt-column-settings [genericTable]=\"myCustomTable\" #customColumnSettings [gtColumnItem]=\"gtColumnItem\" [gtTexts]=\"{help:'Click to toggle column visibility, drag to reorder.'}\" [gtHeaderClasses]=\"'px-3 pt-3 pb-2 bg-light'\" [gtWrapperClasses]=\"'px-3 pb-2 bg-light h-50'\">\n      <div class=\"table-responsive\">\n        <generic-table [gtClasses]=\"'table-hover'\" #myCustomTable [gtSettings]=\"secondConfigObject.settings\" [gtFields]=\"secondConfigObject.fields\" [gtData]=\"secondConfigObject.data\"></generic-table>\n      </div>\n      <div class=\"text-center\">\n        <gt-pagination [gtClasses]=\"'justify-content-center'\" [genericTable]=\"myCustomTable\"></gt-pagination>\n      </div>\n    </gt-column-settings>\n  </div>\n  <div class=\"card-footer\" #columnSettingsTemplateExample></div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/change-column-settings/change-column-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeColumnSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangeColumnSettingsComponent = (function () {
    function ChangeColumnSettingsComponent() {
        var data = [{
                'id': 1,
                'first_name': 'Ashley',
                'last_name': 'Hansen',
                'email': 'ahansen0@sourceforge.net',
                'gender': 'Female',
                'ip_address': '42.196.237.110',
                'company': 'Flipbug',
                'country': 'Serbia',
                'favorite_color': '#d759f6',
                'job_title': 'Legal Assistant',
                'phone': '381-(690)132-2252',
                'username': 'ahansen0',
                'time_zone': 'Europe/Belgrade',
                'profile_img': 'http://dummyimage.com/242x179.png/dddddd/000000',
                'birthday': '1955-06-10'
            }, {
                'id': 2,
                'first_name': 'Lillian',
                'last_name': 'Chavez',
                'email': 'lchavez1@fda.gov',
                'gender': 'Female',
                'ip_address': '249.252.103.90',
                'company': 'Ainyx',
                'country': 'United States',
                'favorite_color': '#1db85c',
                'job_title': 'Engineer II',
                'phone': '1-(763)807-2351',
                'username': 'lchavez1',
                'time_zone': 'America/Chicago',
                'profile_img': 'http://dummyimage.com/108x153.jpg/5fa2dd/ffffff',
                'birthday': '2006-08-27'
            }, {
                'id': 3,
                'first_name': 'Cynthia',
                'last_name': 'Stanley',
                'email': 'cstanley2@engadget.com',
                'gender': 'Female',
                'ip_address': '129.246.83.246',
                'company': 'Centimia',
                'country': 'Indonesia',
                'favorite_color': '#f59430',
                'job_title': 'Developer IV',
                'phone': '62-(734)705-4841',
                'username': 'cstanley2',
                'time_zone': 'Asia/Jakarta',
                'profile_img': 'http://dummyimage.com/117x160.bmp/ff4444/ffffff',
                'birthday': '1986-11-04'
            }, {
                'id': 4,
                'first_name': 'Andrea',
                'last_name': 'Fisher',
                'email': 'afisher3@dion.ne.jp',
                'gender': 'Female',
                'ip_address': '116.22.133.176',
                'company': 'Wikizz',
                'country': 'Norway',
                'favorite_color': '#953de7',
                'job_title': 'Computer Systems Analyst III',
                'phone': '47-(288)254-2574',
                'username': 'afisher3',
                'time_zone': 'Europe/Oslo',
                'profile_img': 'http://dummyimage.com/107x151.jpg/5fa2dd/ffffff',
                'birthday': '1999-06-16'
            }, {
                'id': 5,
                'first_name': 'Russell',
                'last_name': 'Sanders',
                'email': 'rsanders4@dmoz.org',
                'gender': 'Male',
                'ip_address': '213.4.47.227',
                'company': 'Youspan',
                'country': 'China',
                'favorite_color': '#299b7f',
                'job_title': 'Desktop Support Technician',
                'phone': '86-(811)544-1191',
                'username': 'rsanders4',
                'time_zone': 'Asia/Chongqing',
                'profile_img': 'http://dummyimage.com/159x211.png/ff4444/ffffff',
                'birthday': '1994-01-25'
            }, {
                'id': 6,
                'first_name': 'Willie',
                'last_name': 'Morris',
                'email': 'wmorris5@huffingtonpost.com',
                'gender': 'Male',
                'ip_address': '237.255.190.122',
                'company': 'Eidel',
                'country': 'China',
                'favorite_color': '#962f03',
                'job_title': 'Marketing Manager',
                'phone': '86-(583)894-9258',
                'username': 'wmorris5',
                'time_zone': 'Asia/Chongqing',
                'profile_img': 'http://dummyimage.com/115x126.png/5fa2dd/ffffff',
                'birthday': '1998-09-21'
            }, {
                'id': 7,
                'first_name': 'Christine',
                'last_name': 'Hanson',
                'email': 'chanson6@reddit.com',
                'gender': 'Female',
                'ip_address': '232.250.153.126',
                'company': 'Twimm',
                'country': 'United States',
                'favorite_color': '#0987a6',
                'job_title': 'Legal Assistant',
                'phone': '1-(414)281-7119',
                'username': 'chanson6',
                'time_zone': 'America/Chicago',
                'profile_img': 'http://dummyimage.com/188x237.png/dddddd/000000',
                'birthday': '1986-10-01'
            }, {
                'id': 8,
                'first_name': 'William',
                'last_name': 'Kelly',
                'email': 'wkelly7@geocities.com',
                'gender': 'Male',
                'ip_address': '64.103.175.253',
                'company': 'Leenti',
                'country': 'Poland',
                'favorite_color': '#b654b6',
                'job_title': 'Director of Sales',
                'phone': '48-(971)291-9791',
                'username': 'wkelly7',
                'time_zone': 'Europe/Warsaw',
                'profile_img': 'http://dummyimage.com/247x134.bmp/ff4444/ffffff',
                'birthday': '1987-05-03'
            }, {
                'id': 9,
                'first_name': 'Adam',
                'last_name': 'Hayes',
                'email': 'ahayes8@nps.gov',
                'gender': 'Male',
                'ip_address': '247.136.87.110',
                'company': 'Dynava',
                'country': 'Bulgaria',
                'favorite_color': '#2cef3b',
                'job_title': 'Structural Analysis Engineer',
                'phone': '359-(547)536-5941',
                'username': 'ahayes8',
                'time_zone': 'Europe/Sofia',
                'profile_img': 'http://dummyimage.com/163x109.png/5fa2dd/ffffff',
                'birthday': '2002-11-17'
            }, {
                'id': 10,
                'first_name': 'Todd',
                'last_name': 'Rogers',
                'email': 'trogers9@noaa.gov',
                'gender': 'Male',
                'ip_address': '187.9.242.198',
                'company': 'Bluezoom',
                'country': 'Portugal',
                'favorite_color': '#f79ea6',
                'job_title': 'Quality Engineer',
                'phone': '351-(257)713-6978',
                'username': 'trogers9',
                'time_zone': 'Europe/Lisbon',
                'profile_img': 'http://dummyimage.com/155x172.jpg/ff4444/ffffff',
                'birthday': '1969-12-27'
            }];
        this.firstConfigObject = { settings: this.getBaseSettings(), fields: this.getBaseFields(), data: data };
        this.secondConfigObject = { settings: this.getBaseSettings(), fields: this.getBaseFields(), data: data };
    }
    ChangeColumnSettingsComponent.prototype.getBaseSettings = function () {
        return [{
                objectKey: 'id',
                sort: 'asc',
            }, {
                objectKey: 'first_name',
            }, {
                objectKey: 'favorite_color',
                visible: false
            }, {
                objectKey: 'last_name',
                visible: false
            }, {
                objectKey: 'email',
                visible: false
            }, {
                objectKey: 'gender',
                visible: false
            }, {
                objectKey: 'ip_address',
                visible: false
            }, {
                objectKey: 'company',
                visible: false
            }, {
                objectKey: 'country',
                visible: false
            }, {
                objectKey: 'job_title',
                visible: false
            }, {
                objectKey: 'phone',
                visible: false
            }, {
                objectKey: 'username',
                visible: false
            }, {
                objectKey: 'time_zone',
                visible: false
            }, {
                objectKey: 'profile_img',
                visible: false
            }, {
                objectKey: 'birthday'
            }];
    };
    ChangeColumnSettingsComponent.prototype.getBaseFields = function () {
        return [{
                name: 'Id',
                objectKey: 'id'
            }, {
                name: 'Name',
                objectKey: 'first_name'
            }, {
                name: 'Lucky number',
                objectKey: 'favorite_color',
            }, {
                objectKey: 'last_name',
                name: 'Last name'
            }, {
                objectKey: 'email',
                name: 'Email'
            }, {
                objectKey: 'gender',
                name: 'Gender'
            }, {
                objectKey: 'ip_address',
                name: 'Ip address'
            }, {
                objectKey: 'company',
                name: 'Company'
            }, {
                objectKey: 'country',
                name: 'Country'
            }, {
                objectKey: 'job_title',
                name: 'Job title'
            }, {
                objectKey: 'phone',
                name: 'Phone'
            }, {
                objectKey: 'username',
                name: 'Username'
            }, {
                objectKey: 'time_zone',
                name: 'Time zone'
            }, {
                objectKey: 'profile_img',
                name: 'Profile img'
            }, {
                objectKey: 'birthday',
                name: 'Birthday'
            }];
    };
    ;
    return ChangeColumnSettingsComponent;
}());
ChangeColumnSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'change-column-settings',
        template: __webpack_require__("../../../../../src/app/change-column-settings/change-column-settings.component.html")
    }),
    __metadata("design:paramtypes", [])
], ChangeColumnSettingsComponent);

//# sourceMappingURL=change-column-settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/column-click/column-click.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Column click</h2>\n<p>This examples uses column click function to re-order rows, but you could call any function you like and apply your own style if you want something else than a regular button.</p>\n<div class=\"card mb-5\">\n  <div class=\"card-header\">Example</div>\n  <div class=\"card-body\" exemplify=\"columnClickExample\" [context]=\"this\" [escapeStrings]=\"['[gtClasses]','[gtSettings]','[gtFields]','gtData','[gtRowComponent]','[gtOptions]','[genericTable]','#rowLength','#myTable','ngModel','[ngClass]','#columnSettings','gtEvent']\" [source]=\"'child'\" [target]=\"columnClickExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\n    name:'app.module.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\n  },{\n    name:'column-click.component.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/column-click/column-click.component.ts'\n  }]\">\n    <div class=\"table-responsive\">\n      <generic-table [gtClasses]=\"'table-hover'\" #myTable [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [gtData]=\"configObject.data\"></generic-table>\n    </div>\n    <div class=\"text-center\">\n      <gt-pagination [gtClasses]=\"'justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\n    </div>\n  </div>\n  <div class=\"card-footer\" #columnClickExample>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/column-click/column-click.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnClickComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__ = __webpack_require__("../../../../../@angular-generic-table/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColumnClickComponent = (function () {
    function ColumnClickComponent() {
        var _this = this;
        this.data = [];
        this.configObject = {
            settings: [{
                    objectKey: 'order',
                    sort: 'asc',
                    sortOrder: 0,
                    visible: false
                }, {
                    objectKey: 'name',
                    sort: 'disable',
                    columnOrder: 1
                }, {
                    objectKey: 'lucky_number',
                    sort: 'disable',
                    columnOrder: 2
                }, {
                    objectKey: 'move_up',
                    sort: 'disable',
                    columnOrder: 3
                }, {
                    objectKey: 'move_down',
                    sort: 'disable',
                    columnOrder: 4
                }],
            fields: [{
                    name: 'order',
                    objectKey: 'order'
                }, {
                    name: 'Name',
                    objectKey: 'name'
                }, {
                    name: 'Lucky number',
                    objectKey: 'lucky_number'
                }, {
                    name: '',
                    classNames: 'gt-button',
                    objectKey: 'move_up',
                    value: function () { return 'up'; },
                    render: function (row) { return '<button class="btn btn-sm btn-primary ' + (row.order === 1 ? 'disabled' : '') + '"><i class="fa fa-arrow-up"></i></button>'; },
                    click: function (row) { return _this.move(row); }
                }, {
                    name: '',
                    classNames: 'gt-button',
                    objectKey: 'move_down',
                    value: function () { return 'down'; },
                    render: function (row) { return '<button class="btn btn-sm btn-primary ' + (row.order === _this.configObject.data.length ? 'disabled' : '') + '"><i class="fa fa-arrow-down"></i></button>'; },
                    click: function (row) { return _this.move(row, false); }
                }],
            data: [{
                    'order': 1,
                    'name': 'Anna',
                    'lucky_number': 63
                }, {
                    'order': 2,
                    'name': 'Julie',
                    'lucky_number': 8
                }, {
                    'order': 3,
                    'name': 'Lillian',
                    'lucky_number': 30
                }, {
                    'order': 4,
                    'name': 'Norma',
                    'lucky_number': 13
                }, {
                    'order': 5,
                    'name': 'Ralph',
                    'lucky_number': 28
                }, {
                    'order': 6,
                    'name': 'Benjamin',
                    'lucky_number': 66
                }, {
                    'order': 7,
                    'name': 'George',
                    'lucky_number': 66
                }, {
                    'order': 8,
                    'name': 'Ryan',
                    'lucky_number': 65
                }, {
                    'order': 9,
                    'name': 'Martha',
                    'lucky_number': 57
                }, {
                    'order': 10,
                    'name': 'Todd',
                    'lucky_number': 65
                }, {
                    'order': 11,
                    'name': 'Norma',
                    'lucky_number': 73
                }, {
                    'order': 12,
                    'name': 'Frank',
                    'lucky_number': 27
                }, {
                    'order': 13,
                    'name': 'Kathryn',
                    'lucky_number': 93
                }, {
                    'order': 14,
                    'name': 'Philip',
                    'lucky_number': 63
                }, {
                    'order': 15,
                    'name': 'Ronald',
                    'lucky_number': 89
                }, {
                    'order': 16,
                    'name': 'Joshua',
                    'lucky_number': 18
                }, {
                    'order': 17,
                    'name': 'Phillip',
                    'lucky_number': 16
                }, {
                    'order': 18,
                    'name': 'Susan',
                    'lucky_number': 6
                }, {
                    'order': 19,
                    'name': 'Louise',
                    'lucky_number': 52
                }, {
                    'order': 20,
                    'name': 'Gary',
                    'lucky_number': 18
                }, {
                    'order': 21,
                    'name': 'Laura',
                    'lucky_number': 9
                }, {
                    'order': 22,
                    'name': 'Tina',
                    'lucky_number': 70
                }, {
                    'order': 23,
                    'name': 'Jesse',
                    'lucky_number': 2
                }, {
                    'order': 24,
                    'name': 'Jessica',
                    'lucky_number': 15
                }, {
                    'order': 25,
                    'name': 'Scott',
                    'lucky_number': 38
                }, {
                    'order': 26,
                    'name': 'Michael',
                    'lucky_number': 23
                }, {
                    'order': 27,
                    'name': 'Harold',
                    'lucky_number': 66
                }, {
                    'order': 28,
                    'name': 'William',
                    'lucky_number': 57
                }, {
                    'order': 29,
                    'name': 'Harry',
                    'lucky_number': 14
                }, {
                    'order': 30,
                    'name': 'Dennis',
                    'lucky_number': 9
                }]
        };
    }
    ColumnClickComponent.prototype.move = function (row, up) {
        if (up === void 0) { up = true; }
        if (up) {
            this.configObject.data[row.order - 2].order += 1; // update row above clicked row
            row.order -= 1; // update clicked row
        }
        else {
            this.configObject.data[row.order].order -= 1; // update row below clicked row
            row.order += 1; // update clicked row
        }
        this.myTable.redraw(); // update table order
    };
    return ColumnClickComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */]) === "function" && _a || Object)
], ColumnClickComponent.prototype, "myTable", void 0);
ColumnClickComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'column-click',
        template: __webpack_require__("../../../../../src/app/column-click/column-click.component.html")
    }),
    __metadata("design:paramtypes", [])
], ColumnClickComponent);

var _a;
//# sourceMappingURL=column-click.component.js.map

/***/ }),

/***/ "../../../../../src/app/custom-column/custom-column.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Custom columns</h2>\n<p>Table using two custom column widgets, as well as external state tracking.</p>\n<div class=\"card mb-5\">\n  <div class=\"card-header\">Example</div>\n  <div class=\"card-body\" exemplify=\"customColumnsExample\" [context]=\"this\"\n       [escapeStrings]=\"['gtSettings','gtFields','gtData','gtClasses']\"\n       [source]=\"'child'\" [target]=\"customColumnsExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\n    name: 'app.module.ts',\n    src: 'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\n  },\n  {\n    name: 'custom-column.component.ts',\n    src: 'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/custom-column/custom-column.component.ts'\n  }]\">\n    <generic-table [gtSettings]=\"gtConfig.settings\"\n                   [gtFields]=\"gtConfig.fields\"\n                   [gtData]=\"gtConfig.data\"\n                   [gtClasses]=\"'table-sm'\"></generic-table>\n    <button type=\"button\" class=\"btn btn-primary btn-sm float-right\" (click)=\"saveAll()\">Save All</button>\n  </div>\n  <div class=\"card-footer\" #customColumnsExample></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/custom-column/custom-column.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deepCopy */
/* unused harmony export StateService */
/* unused harmony export EditService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NameComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CustomColumnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_scan__ = __webpack_require__("../../../../rxjs/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_generic_table_core_components_gt_custom_component_factory__ = __webpack_require__("../../../../../@angular-generic-table/core/components/gt-custom-component-factory.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










function deepCopy(dictionary) {
    var newDictionary = {};
    Object.keys(dictionary).forEach(function (key) {
        newDictionary[key] = {
            name: dictionary[key].name,
            age: dictionary[key].age
        };
    });
    return newDictionary;
}
var StateService = (function () {
    function StateService() {
        this.updates = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this._states = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.updates
            .scan(function (previousState, apply) { return apply(previousState); }, {})
            .subscribe(this._states);
    }
    Object.defineProperty(StateService.prototype, "states", {
        get: function () {
            return this._states.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.name = function (id, name) {
        this.updates.next(function (dictionary) {
            var newDictionary = deepCopy(dictionary);
            if (!newDictionary[id]) {
                newDictionary[id] = {};
            }
            newDictionary[id].name = name;
            return newDictionary;
        });
    };
    StateService.prototype.age = function (id, age) {
        this.updates.next(function (dictionary) {
            var newDictionary = deepCopy(dictionary);
            if (!newDictionary[id]) {
                newDictionary[id] = {};
            }
            newDictionary[id].age = age;
            return newDictionary;
        });
    };
    return StateService;
}());
StateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], StateService);

var EditService = (function () {
    function EditService() {
        this._ids = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(EditService.prototype, "ids", {
        get: function () {
            return this._ids.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    EditService.prototype.click = function (id) {
        this._ids.next(id);
    };
    return EditService;
}());
EditService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], EditService);

var NameComponent = (function (_super) {
    __extends(NameComponent, _super);
    function NameComponent(editService, saveService) {
        var _this = _super.call(this) || this;
        _this.editService = editService;
        _this.saveService = saveService;
        return _this;
    }
    Object.defineProperty(NameComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
            this.saveService.name(this.row.id, value);
        },
        enumerable: true,
        configurable: true
    });
    NameComponent.prototype.ngOnInit = function () {
        var _this = this;
        var source = this.editService.ids
            .startWith(this.row.id)
            .filter(function (id) { return id === _this.row.id; });
        this.edit = source.scan(function (prev) { return !prev; }, true);
        this.view = source.scan(function (prev) { return !prev; }, false);
        this.name = this.row.name;
    };
    return NameComponent;
}(__WEBPACK_IMPORTED_MODULE_9__angular_generic_table_core_components_gt_custom_component_factory__["a" /* GtCustomComponent */]));
NameComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <input *ngIf=\"edit | async\" type=\"text\" class=\"form-control form-control-sm\" name=\"name\" [(ngModel)]=\"name\">\n    <span *ngIf=\"view | async\">{{row.name}}</span>\n  "
    }),
    __metadata("design:paramtypes", [EditService,
        StateService])
], NameComponent);

var AgeComponent = (function (_super) {
    __extends(AgeComponent, _super);
    function AgeComponent(editService, saveService) {
        var _this = _super.call(this) || this;
        _this.editService = editService;
        _this.saveService = saveService;
        _this.AGES = [20, 21, 22, 23, 24, 25];
        return _this;
    }
    Object.defineProperty(AgeComponent.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
            this.saveService.age(this.row.id, value);
        },
        enumerable: true,
        configurable: true
    });
    AgeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var source = this.editService.ids
            .startWith(this.row.id)
            .filter(function (id) { return id === _this.row.id; });
        this.edit = source.scan(function (prev) { return !prev; }, true);
        this.view = source.scan(function (prev) { return !prev; }, false);
        this.age = this.row.age;
    };
    return AgeComponent;
}(__WEBPACK_IMPORTED_MODULE_9__angular_generic_table_core_components_gt_custom_component_factory__["a" /* GtCustomComponent */]));
AgeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <select *ngIf=\"edit | async\" class=\"form-control form-control-sm\" name=\"age\" [(ngModel)]=\"age\">\n      <option *ngFor=\"let AGE of AGES\" [value]=\"AGE\" [selected]=\"AGE === age\">{{AGE}}</option>\n    </select>\n    <span *ngIf=\"view | async\">{{row.age}}</span>\n  "
    }),
    __metadata("design:paramtypes", [EditService,
        StateService])
], AgeComponent);

var CustomColumnComponent = (function () {
    function CustomColumnComponent(editService, stateService) {
        var _this = this;
        this.editService = editService;
        this.stateService = stateService;
        this.gtConfig = {
            settings: [{
                    objectKey: 'edit',
                    columnOrder: 0,
                    sort: 'disable'
                }, {
                    objectKey: 'id',
                    columnOrder: 1,
                    sort: 'asc', sortOrder: 0
                }, {
                    objectKey: 'name',
                    columnOrder: 2
                }, {
                    objectKey: 'age',
                    columnOrder: 3
                }, {
                    objectKey: 'save',
                    columnOrder: 4,
                    sort: 'disable'
                }],
            fields: [{
                    objectKey: 'edit', name: '',
                    value: function () { return ''; },
                    render: function () { return '<button type="button" class="btn btn-outline-primary btn-sm">Edit</button>'; },
                    click: function (row) { return _this.editService.click(row.id); }
                }, {
                    objectKey: 'id',
                    name: 'Id'
                }, {
                    objectKey: 'name',
                    name: 'Name',
                    columnComponent: {
                        type: NameComponent
                    }
                }, {
                    objectKey: 'age',
                    name: 'Age',
                    columnComponent: {
                        type: AgeComponent
                    }
                }, {
                    objectKey: 'save',
                    name: '',
                    value: function () { return ''; },
                    classNames: 'text-right',
                    render: function () { return '<button type="button" class="btn btn-primary btn-sm">Save</button>'; },
                    click: function (row) { return _this.stateService.states
                        .take(1)
                        .delay(Math.floor(Math.random() * 2000) + 1000)
                        .subscribe(function (dictionary) {
                        var name = dictionary[row.id].name;
                        var age = dictionary[row.id].age;
                        console.log("Saving name = \"" + name + "\" and age = " + age + " for id = " + row.id);
                        row.name = name;
                        row.age = age;
                    }); }
                }],
            data: [{
                    id: 1,
                    name: 'Alice Rogers',
                    age: 23
                }, {
                    id: 2,
                    name: 'Nicole Harris',
                    age: 25
                }, {
                    id: 3,
                    name: 'Catherine Fox',
                    age: 20
                }]
        };
    }
    CustomColumnComponent.prototype.saveAll = function () {
        var _this = this;
        this.stateService.states
            .take(1)
            .delay(Math.floor(Math.random() * 2000) + 1000)
            .subscribe(function (dictionary) {
            var newData = Object.keys(dictionary).map(function (key) { return ({
                id: parseInt(key),
                name: dictionary[key].name,
                age: dictionary[key].age
            }); });
            newData.forEach(function (row) {
                console.log("Saving name = \"" + row.name + "\" and age = " + row.age + " for id = " + row.id);
            });
            _this.gtConfig.data = newData;
        });
    };
    return CustomColumnComponent;
}());
CustomColumnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-custom-column',
        template: __webpack_require__("../../../../../src/app/custom-column/custom-column.component.html"),
        providers: [EditService, StateService]
    }),
    __metadata("design:paramtypes", [EditService,
        StateService])
], CustomColumnComponent);

//# sourceMappingURL=custom-column.component.js.map

/***/ }),

/***/ "../../../../../src/app/custom-row/custom-row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n  <div class=\"row\">\r\n    <h4 class=\"col-10\">My custom row component</h4>\r\n    <div class=\"col-2 text-sm-right\">\r\n      <i class=\"fa fa-close fa-lg\" (click)=\"$hide()\" aria-hidden=\"true\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-sm-3\">\r\n      <label class=\"control-label\">First name</label>\r\n      <div class=\"form-control-static\">{{row.first_name}}</div>\r\n    </div>\r\n    <div class=\"form-group col-sm-3\">\r\n      <label class=\"control-label\">Last name</label>\r\n      <div class=\"form-control-static\">{{row.last_name}}</div>\r\n    </div>\r\n    <div class=\"form-group col-sm-3\">\r\n      <label class=\"control-label\">Favorite color</label>\r\n      <div class=\"form-control-static\">{{row.favorite_color}}</div>\r\n    </div>\r\n    <div class=\"form-group col-sm-3\">\r\n      <div style=\"border-radius: 50%;width: 55px;height: 55px;display: inline-block;vertical-align: middle;\" [style.background]=\"row.favorite_color\"></div>\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-primary btn btn-primary col-12 col-sm-auto float-right\" (click)=\"newRandomColor();\">New random color</button>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/custom-row/custom-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__ = __webpack_require__("../../../../../@angular-generic-table/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomRowComponent = (function (_super) {
    __extends(CustomRowComponent, _super);
    function CustomRowComponent() {
        return _super.call(this) || this;
    }
    CustomRowComponent.prototype.ngOnInit = function () {
    };
    CustomRowComponent.prototype.newRandomColor = function () {
        this.row.favorite_color = '#000'.replace(/0/g, function (f) { return '0369cf'[Math.random() * 6 | 0]; });
        this.$redraw();
    };
    ;
    return CustomRowComponent;
}(__WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["c" /* GtExpandedRow */]));
CustomRowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-custom-row',
        template: __webpack_require__("../../../../../src/app/custom-row/custom-row.component.html")
    }),
    __metadata("design:paramtypes", [])
], CustomRowComponent);

//# sourceMappingURL=custom-row.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/examples.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\r\n  <h1>Angular Generic Table Demo</h1>\r\n  <p>Angular Generic Table is a generic table component for Angular. It uses standard markup for tables ie. table, tr and td elements etc. and has support for expanding rows, global search, filters, sorting on multiple columns, pagination, export to CSV, column clicks, row selection, custom column rendering, custom export values, responsive layout etc. See <a href=\"https://github.com/hjalmers/angular-generic-table\" target=\"_blank\">docs</a> for more info.</p>\r\n  <h3>Examples</h3>\r\n  <ul class=\"nav flex-column mb-5\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"examples#basic\">Basic static example</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"examples#rest\">Fetch data using REST</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"examples#localization\">Localization</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"examples#custom\">Custom component inside table cell</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"examples#lazy\">Lazy loading</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"examples#addremoveedit\">Add, remove and edit rows</a>\r\n    </li>\r\n  </ul>\r\n  <app-basic></app-basic>\r\n  <app-rest></app-rest>\r\n  <app-localization></app-localization>\r\n  <app-custom-column></app-custom-column>\r\n  <app-lazy></app-lazy>\r\n  <app-add-remove-edit></app-add-remove-edit>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/examples/examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamplesComponent = (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    return ExamplesComponent;
}());
ExamplesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-examples',
        template: __webpack_require__("../../../../../src/app/examples/examples.component.html"),
    }),
    __metadata("design:paramtypes", [])
], ExamplesComponent);

//# sourceMappingURL=examples.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Getting started</h2>\r\n<p class=\"lead\">Angular Generic Table is a generic table component for Angular. It uses standard markup for tables ie. table, tr and td elements etc. and has support for expanding rows, row selection, global search, filters, sorting on multiple columns, pagination, export to CSV, column clicks, custom column rendering, custom export values, responsive layout etc.</p>\r\n<h5>Installation and usage</h5>\r\n<p>Install with npm by running:</p>\r\n<code>npm install @angular-generic-table/core --save</code>\r\n<p class=\"mt-4\">More info available in the <a href=\"https://github.com/hjalmers/angular-generic-table/wiki/Installation-and-usage\" target=\"_blank\">wiki</a>, feel free to look at the <a routerLink=\"/basic\">basic setup</a> too:)</p>\r\n<h5 class=\"mt-4\">Configuration and options</h5>\r\n<p>Check out the <a href=\"https://github.com/hjalmers/angular-generic-table/wiki\" target=\"_blank\">wiki articles</a> for more info.</p>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/inline-editing/inline-editing.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Inline editing</h2>\n<p>Table with simple inline editing. Edit cells using input field or select a value from a dropdown.</p>\n<div class=\"alert alert-info\">Please note that this example only persists changes in memory so the data will be reset when component is reinitialized e.g when route changes or page is refreshed.</div>\n<div class=\"card mb-5\">\n  <div class=\"card-header\">Example</div>\n  <div class=\"card-body\" exemplify=\"inlineEditExample\" [context]=\"this\" [escapeStrings]=\"['[gtClasses]','[gtSettings]','[gtFields]','[(gtData)]','[gtRowComponent]','[gtOptions]','[genericTable]','#myTable']\" [source]=\"'child'\" [target]=\"inlineEditExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\n    name:'app.module.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\n  },{\n    name:'inline-editing.component.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/inline-editing/inline-editing.component.ts'\n  }]\">\n    <ng-container *ngIf=\"myTable.hasEdits\">\n      <button class=\"btn btn-sm btn-outline-primary mb-3\" (click)=\"myTable.inlineEditCancel()\">Cancel edit</button>\n      <button class=\"btn btn-sm btn-primary mb-3\" (click)=\"myTable.inlineEditUpdate()\">Save changes</button>\n    </ng-container>\n    <div class=\"table-responsive\">\n      <generic-table [gtClasses]=\"'table-sm'\" #myTable [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [gtData]=\"configObject.data\" (gtEvent)=\"trigger($event)\"></generic-table>\n    </div>\n    <div class=\"text-center\">\n      <small><gt-table-info class=\"form-text text-muted mb-2\" [genericTable]=\"myTable\"></gt-table-info></small>\n      <gt-pagination [gtClasses]=\"'pagination-sm justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\n    </div>\n    <div class=\"alert alert-info\" *ngIf=\"updatedRow\">\n      <div><strong>From:</strong> {{updatedRow?.oldValue | json}}</div>\n      <div><strong>To:</strong> {{updatedRow?.newValue | json}}</div>\n      <div><strong>Original:</strong> {{updatedRow?.originalValue | json}}</div>\n    </div>\n\n  </div>\n  <div class=\"card-footer\" #inlineEditExample></div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/inline-editing/inline-editing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlineEditingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InlineEditingComponent = (function () {
    function InlineEditingComponent() {
        var _this = this;
        this.data = [];
        this.languages = ['Albanian', 'Amharic', 'Aymara', 'Bulgarian', 'Dhivehi', 'Estonian', 'Indonesian', 'Kannada', 'Lao', 'Latvian', 'Marathi', 'Persian', 'Pisin', 'Punjabi', 'Somali', 'Tamil', 'Tok', 'Tsonga', 'Tswana', 'Zulu'];
        /** Listen for events
         * */
        this.trigger = function ($event) {
            console.log($event);
            if ($event.value && $event.name === 'gt-row-updated') {
                this.updatedRow = $event.value;
            }
        };
        this.configObject = {
            settings: [{
                    objectKey: 'id',
                    sort: 'asc',
                    sortOrder: 1,
                    columnOrder: 0
                }, {
                    objectKey: 'name',
                    sort: 'asc',
                    sortOrder: 0,
                    columnOrder: 1
                }, {
                    objectKey: 'language',
                    sort: 'enable',
                    columnOrder: 3,
                    visible: true
                }],
            fields: [{
                    name: 'Id',
                    objectKey: 'id'
                }, {
                    name: 'Name',
                    objectKey: 'name',
                    inlineEdit: true,
                    sort: function (row) { return row.name.substring(1, 5); }
                }, {
                    name: 'Language',
                    objectKey: 'language',
                    inlineEdit: this.languages,
                    value: function () {
                        var langId = Math.floor(Math.random() * _this.languages.length);
                        return _this.languages[langId];
                    }
                }],
            data: [{
                    'id': 1,
                    'name': 'Anna'
                }, {
                    'id': 2,
                    'name': 'Julie'
                }, {
                    'id': 3,
                    'name': 'Lillian'
                }, {
                    'id': 4,
                    'name': 'Norma'
                }, {
                    'id': 5,
                    'name': 'Ralph'
                }, {
                    'id': 6,
                    'name': 'Benjamin'
                }, {
                    'id': 7,
                    'name': 'George'
                }, {
                    'id': 8,
                    'name': 'Ryan'
                }, {
                    'id': 9,
                    'name': 'Martha'
                }, {
                    'id': 10,
                    'name': 'Todd'
                }, {
                    'id': 11,
                    'name': 'Norma'
                }, {
                    'id': 12,
                    'name': 'Frank'
                }, {
                    'id': 13,
                    'name': 'Kathryn'
                }, {
                    'id': 14,
                    'name': 'Philip'
                }, {
                    'id': 15,
                    'name': 'Ronald'
                }, {
                    'id': 16,
                    'name': 'Joshua'
                }, {
                    'id': 17,
                    'name': 'Phillip'
                }, {
                    'id': 18,
                    'name': 'Susan'
                }, {
                    'id': 19,
                    'name': 'Louise'
                }, {
                    'id': 20,
                    'name': 'Gary'
                }, {
                    'id': 21,
                    'name': 'Laura'
                }, {
                    'id': 22,
                    'name': 'Tina'
                }, {
                    'id': 23,
                    'name': 'Jesse'
                }, {
                    'id': 24,
                    'name': 'Jessica'
                }, {
                    'id': 25,
                    'name': 'Scott'
                }, {
                    'id': 26,
                    'name': 'Michael'
                }, {
                    'id': 27,
                    'name': 'Harold'
                }, {
                    'id': 28,
                    'name': 'William'
                }, {
                    'id': 29,
                    'name': 'Harry'
                }, {
                    'id': 30,
                    'name': 'Dennis'
                }, {
                    'id': 31,
                    'name': 'Sara'
                }, {
                    'id': 32,
                    'name': 'David'
                }, {
                    'id': 33,
                    'name': 'Antonio'
                }, {
                    'id': 34,
                    'name': 'Anna'
                }, {
                    'id': 35,
                    'name': 'Earl'
                }, {
                    'id': 36,
                    'name': 'Melissa'
                }, {
                    'id': 37,
                    'name': 'Eric'
                }, {
                    'id': 38,
                    'name': 'Joe'
                }, {
                    'id': 39,
                    'name': 'Andrea'
                }, {
                    'id': 40,
                    'name': 'Michael'
                }, {
                    'id': 41,
                    'name': 'Lillian'
                }, {
                    'id': 42,
                    'name': 'Elizabeth'
                }, {
                    'id': 43,
                    'name': 'Ryan'
                }, {
                    'id': 44,
                    'name': 'Phillip'
                }, {
                    'id': 45,
                    'name': 'Patrick'
                }, {
                    'id': 46,
                    'name': 'Barbara'
                }, {
                    'id': 47,
                    'name': 'Patricia'
                }, {
                    'id': 48,
                    'name': 'Brenda'
                }, {
                    'id': 49,
                    'name': 'Sara'
                }, {
                    'id': 50,
                    'name': 'Steven'
                }, {
                    'id': 51,
                    'name': 'Steven'
                }, {
                    'id': 52,
                    'name': 'Paul'
                }, {
                    'id': 53,
                    'name': 'Ann'
                }, {
                    'id': 54,
                    'name': 'Frank'
                }, {
                    'id': 55,
                    'name': 'Beverly'
                }, {
                    'id': 56,
                    'name': 'Elizabeth'
                }, {
                    'id': 57,
                    'name': 'Patrick'
                }, {
                    'id': 58,
                    'name': 'Susan'
                }, {
                    'id': 59,
                    'name': 'Lawrence'
                }, {
                    'id': 60,
                    'name': 'Denise'
                }, {
                    'id': 61,
                    'name': 'Carol'
                }, {
                    'id': 62,
                    'name': 'Larry'
                }, {
                    'id': 63,
                    'name': 'Martha'
                }, {
                    'id': 64,
                    'name': 'Steve'
                }, {
                    'id': 65,
                    'name': 'Timothy'
                }, {
                    'id': 66,
                    'name': 'Jose'
                }, {
                    'id': 67,
                    'name': 'Jennifer'
                }, {
                    'id': 68,
                    'name': 'Benjamin'
                }, {
                    'id': 69,
                    'name': 'Christine'
                }, {
                    'id': 70,
                    'name': 'Timothy'
                }, {
                    'id': 71,
                    'name': 'Patricia'
                }, {
                    'id': 72,
                    'name': 'Craig'
                }, {
                    'id': 73,
                    'name': 'Philip'
                }, {
                    'id': 74,
                    'name': 'Lori'
                }, {
                    'id': 75,
                    'name': 'Janet'
                }, {
                    'id': 76,
                    'name': 'Denise'
                }, {
                    'id': 77,
                    'name': 'Elizabeth'
                }, {
                    'id': 78,
                    'name': 'Thomas'
                }, {
                    'id': 79,
                    'name': 'Shirley'
                }, {
                    'id': 80,
                    'name': 'Helen'
                }, {
                    'id': 81,
                    'name': 'Wanda'
                }, {
                    'id': 82,
                    'name': 'Ernest'
                }, {
                    'id': 83,
                    'name': 'Steven'
                }, {
                    'id': 84,
                    'name': 'Jose'
                }, {
                    'id': 85,
                    'name': 'Kimberly'
                }, {
                    'id': 86,
                    'name': 'Nancy'
                }, {
                    'id': 87,
                    'name': 'Christopher'
                }, {
                    'id': 88,
                    'name': 'Nancy'
                }, {
                    'id': 89,
                    'name': 'Philip'
                }, {
                    'id': 90,
                    'name': 'Bruce'
                }, {
                    'id': 91,
                    'name': 'Jason'
                }, {
                    'id': 92,
                    'name': 'Denise'
                }, {
                    'id': 93,
                    'name': 'Jane'
                }, {
                    'id': 94,
                    'name': 'Brian'
                }, {
                    'id': 95,
                    'name': 'Eugene'
                }, {
                    'id': 96,
                    'name': 'Jack'
                }, {
                    'id': 97,
                    'name': 'Peter'
                }, {
                    'id': 98,
                    'name': 'Virginia'
                }, {
                    'id': 99,
                    'name': 'Walter'
                }, {
                    'id': 100,
                    'name': 'Virginia'
                }]
        };
    }
    InlineEditingComponent.prototype.logData = function () {
        console.log(this.configObject.data);
    };
    return InlineEditingComponent;
}());
InlineEditingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'inline-editing',
        template: __webpack_require__("../../../../../src/app/inline-editing/inline-editing.component.html")
    }),
    __metadata("design:paramtypes", [])
], InlineEditingComponent);

//# sourceMappingURL=inline-editing.component.js.map

/***/ }),

/***/ "../../../../../src/app/lazy/lazy.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Lazy loading</h2>\n<p>Use lazy loading to speed things up when working with large data sets and cache data in the table if you want to avoid unnecessary server requests. This example also utilizes column stacking on tablets and mobile devices so resize the browser and see what happens with the layout on smaller screens.</p>\n<div class=\"card mb-5\">\n  <div class=\"card-header\">Example</div>\n  <div class=\"card-body\" exemplify=\"lazyExample\" [context]=\"this\" [escapeStrings]=\"escape\" [source]=\"'child'\" [target]=\"lazyExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\n    name:'app.module.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\n  },{\n    name:'lazy.component.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/lazy/lazy.component.ts'\n  }]\">\n    <form class=\"form form-inline mb-4\">\n      <label for=\"highlight_input\" class=\"form-control-label mr-sm-2\">Search</label>\n      <input id=\"highlight_input\" class=\"form-control form-control-sm mb-2 mr-sm-2 mb-sm-0\" value=\"al\" disabled placeholder=\"Search\"/>\n      <label class=\"form-control-label mr-sm-2\">Visible columns:</label>\n      <div class=\"form-check form-check-inline ml-0 mr-sm-2\" *ngFor=\"let column of configObject.settings\">\n        <label class=\"form-check-label\">\n          <input type=\"checkbox\" name=\"{{column.objectKey}}\" class=\"form-check-input\" [(ngModel)]=\"column.visible\" (change)=\"myTable.redraw()\">\n          {{configObject.fields | gtProperty:column.objectKey:'name'}}\n        </label>\n      </div>\n      <small class=\"form-text text-muted\"><gt-table-info [genericTable]=\"myTable\"></gt-table-info></small>\n      <small class=\"form-text text-muted mb-2\">\n        Please note that the mock service currently doesn't support search, this is why this example has a fixed search string (just to show the highlight feature together with lazy load). Do the search server-side and return search terms in your response. Separate multiple search terms with a space [ ] or match whole phrase by putting them within quotes [\"].\n      </small>\n      <button class=\"btn btn-outline-primary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.selectAllRows()\">Select all</button>\n      <button class=\"btn btn-outline-primary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.deselectAllRows()\">Deselect all</button>\n      <button class=\"btn btn-outline-primary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.expandAllRows()\">Expand all</button>\n      <button class=\"btn btn-outline-primary btn-sm col-12 col-sm-auto mb-2 mr-sm-2 mb-lg-0\" (click)=\"myTable.collapseAllRows()\">Collapse all</button>\n    </form>\n    <generic-table [gtClasses]=\"'table-hover'\" #myTable [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [(gtData)]=\"configObject.data\" [gtInfo]=\"configObject.info\" [gtRowComponent]=\"expandedRow\" (gtEvent)=\"trigger($event)\" [gtOptions]=\"{stack:true, highlightSearch:true, lazyLoad:true, rowSelection:true}\"></generic-table>\n    <div class=\"text-center\">\n      <gt-pagination [gtClasses]=\"'justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\n    </div>\n  </div>\n  <div class=\"card-footer\" #lazyExample>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lazy/lazy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_row_custom_row_component__ = __webpack_require__("../../../../../src/app/custom-row/custom-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_generic_table_core__ = __webpack_require__("../../../../../@angular-generic-table/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LazyComponent = (function () {
    function LazyComponent(http) {
        this.http = http;
        this.expandedRow = __WEBPACK_IMPORTED_MODULE_2__custom_row_custom_row_component__["a" /* CustomRowComponent */]; // this is the component that will be displayed when expanding a row
        // only used by example
        this.escape = ['[gtClasses]', '[gtSettings]', '[gtFields]', '[(gtData)]', '[gtRowComponent]', '[gtOptions]', '[genericTable]', '[gtInfo]', 'gtEvent', 'gtData', '#myTable', 'ngModel'];
        this.data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.url = 'https://private-730c61-generictable.apiary-mock.com/data'; // apiary end point
        this.trigger = function ($event) {
            switch ($event.name) {
                case 'gt-page-changed-lazy':
                    this.getData($event.value.pageCurrent, $event.value.recordLength);
                    break;
                case 'gt-sorting-applied':
                    console.log($event.value);
                    break;
                default:
                    console.log($event);
                    break;
            }
        };
        this.getData = function (pageCurrent, recordLength) {
            var _this = this;
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
            params.set('page', pageCurrent);
            params.set('per_page', recordLength);
            // if we have an ongoing request cancel it
            if (typeof this.req !== 'undefined') {
                this.req.unsubscribe();
            }
            // create a new request
            this.req = this.http.get(this.url, {
                params: params
            })
                .subscribe(function (res) {
                _this.configObject.data = res.data;
                _this.configObject.info = res['paging'];
                _this.configObject.info.searchTerms = 'al';
            });
        };
        this.configObject = {
            settings: [{
                    objectKey: 'id',
                    visible: true,
                    sort: 'desc',
                    columnOrder: 0
                }, {
                    objectKey: 'name',
                    visible: true,
                    sort: 'enable',
                    columnOrder: 1
                }, {
                    objectKey: 'email',
                    visible: true,
                    enabled: true,
                    sort: 'enable',
                    sortOrder: 0,
                    columnOrder: 2
                }, {
                    objectKey: 'gender',
                    visible: true,
                    enabled: true,
                    sort: 'enable',
                    sortOrder: 0,
                    columnOrder: 3
                }, {
                    objectKey: 'favorite_color',
                    visible: true,
                    enabled: true,
                    sort: 'disable',
                    sortOrder: 0,
                    columnOrder: 4
                }],
            fields: [{
                    name: 'Id',
                    objectKey: 'id',
                    expand: true,
                    classNames: 'clickable'
                }, {
                    name: 'Name',
                    objectKey: 'name',
                    value: function (row) { return row.first_name + ' ' + row.last_name; },
                    render: function (row) {
                        return '<div>' + row.first_name + ' ' + row.last_name + '</div>';
                    },
                    sort: function (row) { return row.first_name + ' ' + row.last_name; }
                }, {
                    name: 'Favorite color',
                    objectKey: 'favorite_color',
                    classNames: 'text-xs-right',
                    render: function (row) { return '<div style="float:right;width:15px;height:15px;border-radius:50%;background: ' + row.favorite_color + '"></div>'; },
                    click: function (row) { return console.log(row.first_name + '\'s favorite color is: ' + row.favorite_color); }
                }, {
                    name: 'Gender',
                    objectKey: 'gender'
                }, {
                    name: 'Email',
                    objectKey: 'email',
                    render: function (row) { return '<a href="mailto:' + row.email + '">' + row.email + '</a>'; },
                }],
            data: []
        };
        this.getData(1, 10);
    }
    return LazyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_generic_table_core__["a" /* GenericTableComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_generic_table_core__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_generic_table_core__["a" /* GenericTableComponent */]) === "function" && _a || Object)
], LazyComponent.prototype, "myTable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LazyComponent.prototype, "data", void 0);
LazyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lazy',
        template: __webpack_require__("../../../../../src/app/lazy/lazy.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], LazyComponent);

var _a, _b;
//# sourceMappingURL=lazy.component.js.map

/***/ }),

/***/ "../../../../../src/app/localization/localization.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{ 'TRANSLATIONS.TITLE' | translate }}</h2>\n<p [innerHTML]=\"'TRANSLATIONS.DESCRIPTION' | translate\"></p>\n<div class=\"card mb-5\">\n  <div class=\"card-header\">{{'TRANSLATIONS.EXAMPLE' | translate}}</div>\n  <div class=\"card-body\" exemplify=\"localizationExample\" [context]=\"this\" [escapeStrings]=\"['[gtClasses]','[gtSettings]','[gtFields]','[(gtData)]','[gtRowComponent]','[gtOptions]','[genericTable]','[gtTexts]','#langSelect','#myTable']\" [source]=\"'child'\" [target]=\"translationsExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\n    name:'app.module.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\n  },{\n    name:'localization.component.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/localization/localization.component.ts'\n  }]\">\n    <form class=\"form form-inline mb-4\">\n      <label for=\"language\" class=\"form-control-label mr-sm-2\">{{ 'TRANSLATIONS.SELECT' | translate }}</label>\n      <select id=\"language\" class=\"form-control form-control-sm mb-2 mr-sm-2 mb-lg-0\" #langSelect (change)=\"translate.use(langSelect.value)\">\n        <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\n      </select>\n    </form>\n    <ng-template [ngIf]=\"configObject\">\n      <generic-table [gtClasses]=\"'table-sm'\" #myTable [gtTexts]=\"translations\" [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [gtData]=\"configObject.data\"></generic-table>\n      <div class=\"text-center\">\n        <small><gt-table-info class=\"form-text text-muted mb-2\" [genericTable]=\"myTable\"></gt-table-info></small>\n        <gt-pagination [gtClasses]=\"'pagination-sm justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\n      </div>\n    </ng-template>\n  </div>\n  <div class=\"card-footer\" #translationsExample></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/localization/localization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalizationComponent = (function () {
    function LocalizationComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.data = [];
        this.configObject = {
            settings: [{
                    objectKey: 'id',
                    sort: 'asc',
                    sortOrder: 1,
                    columnOrder: 0
                }, {
                    objectKey: 'name',
                    sort: 'asc',
                    sortOrder: 0,
                    columnOrder: 1
                }, {
                    objectKey: 'lucky_number',
                    sort: 'enable',
                    columnOrder: 2
                }],
            fields: [],
            data: [{
                    'id': 1,
                    'name': 'Anna',
                    'lucky_number': 63
                }, {
                    'id': 2,
                    'name': 'Julie',
                    'lucky_number': 8
                }, {
                    'id': 3,
                    'name': 'Lillian',
                    'lucky_number': 30
                }, {
                    'id': 4,
                    'name': 'Norma',
                    'lucky_number': 13
                }, {
                    'id': 5,
                    'name': 'Ralph',
                    'lucky_number': 28
                }, {
                    'id': 6,
                    'name': 'Benjamin',
                    'lucky_number': 66
                }, {
                    'id': 7,
                    'name': 'George',
                    'lucky_number': 66
                }, {
                    'id': 8,
                    'name': 'Ryan',
                    'lucky_number': 65
                }, {
                    'id': 9,
                    'name': 'Martha',
                    'lucky_number': 57
                }, {
                    'id': 10,
                    'name': 'Todd',
                    'lucky_number': 65
                }, {
                    'id': 11,
                    'name': 'Norma',
                    'lucky_number': 73
                }, {
                    'id': 12,
                    'name': 'Frank',
                    'lucky_number': 27
                }, {
                    'id': 13,
                    'name': 'Kathryn',
                    'lucky_number': 93
                }, {
                    'id': 14,
                    'name': 'Philip',
                    'lucky_number': 63
                }, {
                    'id': 15,
                    'name': 'Ronald',
                    'lucky_number': 89
                }, {
                    'id': 16,
                    'name': 'Joshua',
                    'lucky_number': 18
                }, {
                    'id': 17,
                    'name': 'Phillip',
                    'lucky_number': 16
                }, {
                    'id': 18,
                    'name': 'Susan',
                    'lucky_number': 6
                }, {
                    'id': 19,
                    'name': 'Louise',
                    'lucky_number': 52
                }, {
                    'id': 20,
                    'name': 'Gary',
                    'lucky_number': 18
                }, {
                    'id': 21,
                    'name': 'Laura',
                    'lucky_number': 9
                }, {
                    'id': 22,
                    'name': 'Tina',
                    'lucky_number': 70
                }, {
                    'id': 23,
                    'name': 'Jesse',
                    'lucky_number': 2
                }, {
                    'id': 24,
                    'name': 'Jessica',
                    'lucky_number': 15
                }, {
                    'id': 25,
                    'name': 'Scott',
                    'lucky_number': 38
                }, {
                    'id': 26,
                    'name': 'Michael',
                    'lucky_number': 23
                }, {
                    'id': 27,
                    'name': 'Harold',
                    'lucky_number': 66
                }, {
                    'id': 28,
                    'name': 'William',
                    'lucky_number': 57
                }, {
                    'id': 29,
                    'name': 'Harry',
                    'lucky_number': 14
                }, {
                    'id': 30,
                    'name': 'Dennis',
                    'lucky_number': 9
                }, {
                    'id': 31,
                    'name': 'Sara',
                    'lucky_number': 9
                }, {
                    'id': 32,
                    'name': 'David',
                    'lucky_number': 31
                }, {
                    'id': 33,
                    'name': 'Antonio',
                    'lucky_number': 2
                }, {
                    'id': 34,
                    'name': 'Anna',
                    'lucky_number': 85
                }, {
                    'id': 35,
                    'name': 'Earl',
                    'lucky_number': 98
                }, {
                    'id': 36,
                    'name': 'Melissa',
                    'lucky_number': 70
                }, {
                    'id': 37,
                    'name': 'Eric',
                    'lucky_number': 94
                }, {
                    'id': 38,
                    'name': 'Joe',
                    'lucky_number': 42
                }, {
                    'id': 39,
                    'name': 'Andrea',
                    'lucky_number': 39
                }, {
                    'id': 40,
                    'name': 'Michael',
                    'lucky_number': 44
                }, {
                    'id': 41,
                    'name': 'Lillian',
                    'lucky_number': 10
                }, {
                    'id': 42,
                    'name': 'Elizabeth',
                    'lucky_number': 24
                }, {
                    'id': 43,
                    'name': 'Ryan',
                    'lucky_number': 78
                }, {
                    'id': 44,
                    'name': 'Phillip',
                    'lucky_number': 86
                }, {
                    'id': 45,
                    'name': 'Patrick',
                    'lucky_number': 64
                }, {
                    'id': 46,
                    'name': 'Barbara',
                    'lucky_number': 54
                }, {
                    'id': 47,
                    'name': 'Patricia',
                    'lucky_number': 9
                }, {
                    'id': 48,
                    'name': 'Brenda',
                    'lucky_number': 18
                }, {
                    'id': 49,
                    'name': 'Sara',
                    'lucky_number': 12
                }, {
                    'id': 50,
                    'name': 'Steven',
                    'lucky_number': 50
                }, {
                    'id': 51,
                    'name': 'Steven',
                    'lucky_number': 44
                }, {
                    'id': 52,
                    'name': 'Paul',
                    'lucky_number': 88
                }, {
                    'id': 53,
                    'name': 'Ann',
                    'lucky_number': 51
                }, {
                    'id': 54,
                    'name': 'Frank',
                    'lucky_number': 3
                }, {
                    'id': 55,
                    'name': 'Beverly',
                    'lucky_number': 10
                }, {
                    'id': 56,
                    'name': 'Elizabeth',
                    'lucky_number': 52
                }, {
                    'id': 57,
                    'name': 'Patrick',
                    'lucky_number': 96
                }, {
                    'id': 58,
                    'name': 'Susan',
                    'lucky_number': 92
                }, {
                    'id': 59,
                    'name': 'Lawrence',
                    'lucky_number': 53
                }, {
                    'id': 60,
                    'name': 'Denise',
                    'lucky_number': 65
                }, {
                    'id': 61,
                    'name': 'Carol',
                    'lucky_number': 33
                }, {
                    'id': 62,
                    'name': 'Larry',
                    'lucky_number': 95
                }, {
                    'id': 63,
                    'name': 'Martha',
                    'lucky_number': 32
                }, {
                    'id': 64,
                    'name': 'Steve',
                    'lucky_number': 69
                }, {
                    'id': 65,
                    'name': 'Timothy',
                    'lucky_number': 16
                }, {
                    'id': 66,
                    'name': 'Jose',
                    'lucky_number': 16
                }, {
                    'id': 67,
                    'name': 'Jennifer',
                    'lucky_number': 96
                }, {
                    'id': 68,
                    'name': 'Benjamin',
                    'lucky_number': 20
                }, {
                    'id': 69,
                    'name': 'Christine',
                    'lucky_number': 8
                }, {
                    'id': 70,
                    'name': 'Timothy',
                    'lucky_number': 93
                }, {
                    'id': 71,
                    'name': 'Patricia',
                    'lucky_number': 17
                }, {
                    'id': 72,
                    'name': 'Craig',
                    'lucky_number': 48
                }, {
                    'id': 73,
                    'name': 'Philip',
                    'lucky_number': 88
                }, {
                    'id': 74,
                    'name': 'Lori',
                    'lucky_number': 56
                }, {
                    'id': 75,
                    'name': 'Janet',
                    'lucky_number': 4
                }, {
                    'id': 76,
                    'name': 'Denise',
                    'lucky_number': 30
                }, {
                    'id': 77,
                    'name': 'Elizabeth',
                    'lucky_number': 44
                }, {
                    'id': 78,
                    'name': 'Thomas',
                    'lucky_number': 95
                }, {
                    'id': 79,
                    'name': 'Shirley',
                    'lucky_number': 24
                }, {
                    'id': 80,
                    'name': 'Helen',
                    'lucky_number': 9
                }, {
                    'id': 81,
                    'name': 'Wanda',
                    'lucky_number': 98
                }, {
                    'id': 82,
                    'name': 'Ernest',
                    'lucky_number': 35
                }, {
                    'id': 83,
                    'name': 'Steven',
                    'lucky_number': 9
                }, {
                    'id': 84,
                    'name': 'Jose',
                    'lucky_number': 27
                }, {
                    'id': 85,
                    'name': 'Kimberly',
                    'lucky_number': 52
                }, {
                    'id': 86,
                    'name': 'Nancy',
                    'lucky_number': 48
                }, {
                    'id': 87,
                    'name': 'Christopher',
                    'lucky_number': 44
                }, {
                    'id': 88,
                    'name': 'Nancy',
                    'lucky_number': 40
                }, {
                    'id': 89,
                    'name': 'Philip',
                    'lucky_number': 34
                }, {
                    'id': 90,
                    'name': 'Bruce',
                    'lucky_number': 69
                }, {
                    'id': 91,
                    'name': 'Jason',
                    'lucky_number': 60
                }, {
                    'id': 92,
                    'name': 'Denise',
                    'lucky_number': 30
                }, {
                    'id': 93,
                    'name': 'Jane',
                    'lucky_number': 66
                }, {
                    'id': 94,
                    'name': 'Brian',
                    'lucky_number': 49
                }, {
                    'id': 95,
                    'name': 'Eugene',
                    'lucky_number': 51
                }, {
                    'id': 96,
                    'name': 'Jack',
                    'lucky_number': 97
                }, {
                    'id': 97,
                    'name': 'Peter',
                    'lucky_number': 1
                }, {
                    'id': 98,
                    'name': 'Virginia',
                    'lucky_number': 20
                }, {
                    'id': 99,
                    'name': 'Walter',
                    'lucky_number': 63
                }, {
                    'id': 100,
                    'name': 'Virginia',
                    'lucky_number': 14
                }]
        };
        if (translate.currentLang) {
            this.translateTable();
        }
        else {
            translate.addLangs(['en', 'sv']);
            translate.setDefaultLang('en');
            var browserLang = translate.getBrowserLang();
            translate.use(browserLang.match(/en|sv/) ? browserLang : 'en');
        }
        translate.onLangChange.subscribe(function (event) {
            _this.translations = {
                loading: _this.translate.instant('TRANSLATIONS.LOADING'),
                noData: _this.translate.instant('TRANSLATIONS.NO_DATA'),
                noMatchingData: _this.translate.instant('TRANSLATIONS.NO_MATCHING_DATA'),
                noVisibleColumnsHeading: _this.translate.instant('TRANSLATIONS.NO_VISIBLE_COLUMNS_HEADING'),
                noVisibleColumns: _this.translate.instant('TRANSLATIONS.NO_VISIBLE_COLUMNS'),
                tableInfo: _this.translate.instant('TRANSLATIONS.TABLE_INFO'),
                tableInfoAfterSearch: _this.translate.instant('TRANSLATIONS.TABLE_INFO_AFTER_SEARCH'),
                csvDownload: _this.translate.instant('TRANSLATIONS.CSV_DOWNLOAD'),
                sortLabel: _this.translate.instant('TRANSLATIONS.SORT_LABEL')
            };
            _this.translateTable();
        });
    }
    LocalizationComponent.prototype.translateTable = function () {
        var _this = this;
        this.configObject.fields = [{
                name: this.translate.instant('TRANSLATIONS.ID_HEADING'),
                objectKey: 'id'
            }, {
                name: this.translate.instant('TRANSLATIONS.NAME_HEADING'),
                objectKey: 'name',
                render: function (row) { return _this.translate.instant('TRANSLATIONS.NAME_DATA', { name: row.name }); }
            }, {
                name: this.translate.instant('TRANSLATIONS.LUCKY_NUMBER_HEADING'),
                objectKey: 'lucky_number',
                stackedHeading: 'Custom heading'
            }];
    };
    return LocalizationComponent;
}());
LocalizationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-localization',
        template: __webpack_require__("../../../../../src/app/localization/localization.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], LocalizationComponent);

var _a;
//# sourceMappingURL=localization.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<h5>Angular generic table</h5>\n<ul class=\"navbar-nav mb-4\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/start\" routerLinkActive=\"active\">Getting started</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"https://github.com/hjalmers/angular-generic-table/releases\" target=\"_blank\">Release notes</a>\n  </li>\n</ul>\n<h5>Core</h5>\n<ul class=\"navbar-nav mb-4\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/basic\" routerLinkActive=\"active\">Basic example</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/advanced\" routerLinkActive=\"active\">Advanced example</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/column-click\" routerLinkActive=\"active\">Column click example</a>\n  </li>\n  <!--<li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/record-selection\" routerLinkActive=\"active\">Record selection</a>\n  </li>-->\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/totals\" routerLinkActive=\"active\">Totals example</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/localization\" routerLinkActive=\"active\">Localization</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/lazy\" routerLinkActive=\"active\">Lazy loading</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/inline-editing\" routerLinkActive=\"active\">Inline editing</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/add-remove-edit\" routerLinkActive=\"active\">Add, remove and edit rows</a>\n  </li>\n  <li class=\"nav-item\">\n     <a class=\"nav-link\" routerLink=\"/custom-column\" routerLinkActive=\"active\">Custom component inside table cell</a>\n  </li>\n</ul>\n<h5>Column settings</h5>\n<ul class=\"navbar-nav\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/column-settings-component\" routerLinkActive=\"active\">Column settings component</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/record-selection/record-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Basic</h2>\n<p>Table with static data and simple pagination.</p>\n<div class=\"card mb-5\">\n  <div class=\"card-header\">Example</div>\n  <div class=\"card-body\" exemplify=\"basicExample\" [context]=\"this\" [escapeStrings]=\"['[gtClasses]','[gtSettings]','[gtFields]','[(gtData)]','[gtRowComponent]','[gtOptions]','[genericTable]','#myTable']\" [source]=\"'child'\" [target]=\"basicExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\n    name:'app.module.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\n  },{\n    name:'record-selection.component.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/record-selection/record-selection.component.ts'\n  }]\">\n    <generic-table [gtClasses]=\"'table-sm'\" #myTable [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [(gtData)]=\"configObject.data\" [gtOptions]=\"{rowSelection:true}\"></generic-table>\n    <div class=\"text-center\">\n      <small><gt-table-info class=\"form-text text-muted mb-2\" [genericTable]=\"myTable\"></gt-table-info></small>\n      <gt-pagination [gtClasses]=\"'pagination-sm justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\n    </div>\n  </div>\n  <div class=\"card-footer\" #basicExample></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/record-selection/record-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__ = __webpack_require__("../../../../../@angular-generic-table/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecordSelectionComponent = (function () {
    function RecordSelectionComponent() {
        this.configObject = {
            settings: [{
                    objectKey: 'id',
                    sort: 'asc',
                    sortOrder: 1,
                    columnOrder: 0
                }, {
                    objectKey: 'name',
                    sort: 'asc',
                    sortOrder: 0,
                    columnOrder: 1
                }, {
                    objectKey: 'lucky_number',
                    sort: 'enable',
                    columnOrder: 2,
                    visible: true
                }],
            fields: [{
                    name: 'Id',
                    objectKey: 'id'
                }, {
                    name: 'Name',
                    objectKey: 'name'
                }, {
                    name: 'Lucky number',
                    objectKey: 'lucky_number',
                    stackedHeading: 'Custom heading'
                }],
            data: [{
                    'id': 1,
                    'name': 'Anna',
                    'lucky_number': 63
                }, {
                    'id': 2,
                    'name': 'Julie',
                    'lucky_number': 8
                }, {
                    'id': 3,
                    'name': 'Lillian',
                    'lucky_number': 30
                }, {
                    'id': 4,
                    'name': 'Norma',
                    'lucky_number': 13
                }, {
                    'id': 5,
                    'name': 'Ralph',
                    'lucky_number': 28
                }, {
                    'id': 6,
                    'name': 'Benjamin',
                    'lucky_number': 66
                }, {
                    'id': 7,
                    'name': 'George',
                    'lucky_number': 66
                }, {
                    'id': 8,
                    'name': 'Ryan',
                    'lucky_number': 65
                }, {
                    'id': 9,
                    'name': 'Martha',
                    'lucky_number': 57
                }, {
                    'id': 10,
                    'name': 'Todd',
                    'lucky_number': 65
                }, {
                    'id': 11,
                    'name': 'Norma',
                    'lucky_number': 73
                }, {
                    'id': 12,
                    'name': 'Frank',
                    'lucky_number': 27
                }, {
                    'id': 13,
                    'name': 'Kathryn',
                    'lucky_number': 93
                }, {
                    'id': 14,
                    'name': 'Philip',
                    'lucky_number': 63
                }, {
                    'id': 15,
                    'name': 'Ronald',
                    'lucky_number': 89
                }, {
                    'id': 16,
                    'name': 'Joshua',
                    'lucky_number': 18
                }, {
                    'id': 17,
                    'name': 'Phillip',
                    'lucky_number': 16
                }, {
                    'id': 18,
                    'name': 'Susan',
                    'lucky_number': 6
                }, {
                    'id': 19,
                    'name': 'Louise',
                    'lucky_number': 52
                }, {
                    'id': 20,
                    'name': 'Gary',
                    'lucky_number': 18
                }, {
                    'id': 21,
                    'name': 'Laura',
                    'lucky_number': 9
                }, {
                    'id': 22,
                    'name': 'Tina',
                    'lucky_number': 70
                }, {
                    'id': 23,
                    'name': 'Jesse',
                    'lucky_number': 2
                }, {
                    'id': 24,
                    'name': 'Jessica',
                    'lucky_number': 15
                }, {
                    'id': 25,
                    'name': 'Scott',
                    'lucky_number': 38
                }, {
                    'id': 26,
                    'name': 'Michael',
                    'lucky_number': 23
                }, {
                    'id': 27,
                    'name': 'Harold',
                    'lucky_number': 66
                }, {
                    'id': 28,
                    'name': 'William',
                    'lucky_number': 57
                }, {
                    'id': 29,
                    'name': 'Harry',
                    'lucky_number': 14
                }, {
                    'id': 30,
                    'name': 'Dennis',
                    'lucky_number': 9
                }, {
                    'id': 31,
                    'name': 'Sara',
                    'lucky_number': 9
                }, {
                    'id': 32,
                    'name': 'David',
                    'lucky_number': 31
                }, {
                    'id': 33,
                    'name': 'Antonio',
                    'lucky_number': 2
                }, {
                    'id': 34,
                    'name': 'Anna',
                    'lucky_number': 85
                }, {
                    'id': 35,
                    'name': 'Earl',
                    'lucky_number': 98
                }, {
                    'id': 36,
                    'name': 'Melissa',
                    'lucky_number': 70
                }, {
                    'id': 37,
                    'name': 'Eric',
                    'lucky_number': 94
                }, {
                    'id': 38,
                    'name': 'Joe',
                    'lucky_number': 42
                }, {
                    'id': 39,
                    'name': 'Andrea',
                    'lucky_number': 39
                }, {
                    'id': 40,
                    'name': 'Michael',
                    'lucky_number': 44
                }, {
                    'id': 41,
                    'name': 'Lillian',
                    'lucky_number': 10
                }, {
                    'id': 42,
                    'name': 'Elizabeth',
                    'lucky_number': 24
                }, {
                    'id': 43,
                    'name': 'Ryan',
                    'lucky_number': 78
                }, {
                    'id': 44,
                    'name': 'Phillip',
                    'lucky_number': 86
                }, {
                    'id': 45,
                    'name': 'Patrick',
                    'lucky_number': 64
                }, {
                    'id': 46,
                    'name': 'Barbara',
                    'lucky_number': 54
                }, {
                    'id': 47,
                    'name': 'Patricia',
                    'lucky_number': 9
                }, {
                    'id': 48,
                    'name': 'Brenda',
                    'lucky_number': 18
                }, {
                    'id': 49,
                    'name': 'Sara',
                    'lucky_number': 12
                }, {
                    'id': 50,
                    'name': 'Steven',
                    'lucky_number': 50
                }, {
                    'id': 51,
                    'name': 'Steven',
                    'lucky_number': 44
                }, {
                    'id': 52,
                    'name': 'Paul',
                    'lucky_number': 88
                }, {
                    'id': 53,
                    'name': 'Ann',
                    'lucky_number': 51
                }, {
                    'id': 54,
                    'name': 'Frank',
                    'lucky_number': 3
                }, {
                    'id': 55,
                    'name': 'Beverly',
                    'lucky_number': 10
                }, {
                    'id': 56,
                    'name': 'Elizabeth',
                    'lucky_number': 52
                }, {
                    'id': 57,
                    'name': 'Patrick',
                    'lucky_number': 96
                }, {
                    'id': 58,
                    'name': 'Susan',
                    'lucky_number': 92
                }, {
                    'id': 59,
                    'name': 'Lawrence',
                    'lucky_number': 53
                }, {
                    'id': 60,
                    'name': 'Denise',
                    'lucky_number': 65
                }, {
                    'id': 61,
                    'name': 'Carol',
                    'lucky_number': 33
                }, {
                    'id': 62,
                    'name': 'Larry',
                    'lucky_number': 95
                }, {
                    'id': 63,
                    'name': 'Martha',
                    'lucky_number': 32
                }, {
                    'id': 64,
                    'name': 'Steve',
                    'lucky_number': 69
                }, {
                    'id': 65,
                    'name': 'Timothy',
                    'lucky_number': 16
                }, {
                    'id': 66,
                    'name': 'Jose',
                    'lucky_number': 16
                }, {
                    'id': 67,
                    'name': 'Jennifer',
                    'lucky_number': 96
                }, {
                    'id': 68,
                    'name': 'Benjamin',
                    'lucky_number': 20
                }, {
                    'id': 69,
                    'name': 'Christine',
                    'lucky_number': 8
                }, {
                    'id': 70,
                    'name': 'Timothy',
                    'lucky_number': 93
                }, {
                    'id': 71,
                    'name': 'Patricia',
                    'lucky_number': 17
                }, {
                    'id': 72,
                    'name': 'Craig',
                    'lucky_number': 48
                }, {
                    'id': 73,
                    'name': 'Philip',
                    'lucky_number': 88
                }, {
                    'id': 74,
                    'name': 'Lori',
                    'lucky_number': 56
                }, {
                    'id': 75,
                    'name': 'Janet',
                    'lucky_number': 4
                }, {
                    'id': 76,
                    'name': 'Denise',
                    'lucky_number': 30
                }, {
                    'id': 77,
                    'name': 'Elizabeth',
                    'lucky_number': 44
                }, {
                    'id': 78,
                    'name': 'Thomas',
                    'lucky_number': 95
                }, {
                    'id': 79,
                    'name': 'Shirley',
                    'lucky_number': 24
                }, {
                    'id': 80,
                    'name': 'Helen',
                    'lucky_number': 9
                }, {
                    'id': 81,
                    'name': 'Wanda',
                    'lucky_number': 98
                }, {
                    'id': 82,
                    'name': 'Ernest',
                    'lucky_number': 35
                }, {
                    'id': 83,
                    'name': 'Steven',
                    'lucky_number': 9
                }, {
                    'id': 84,
                    'name': 'Jose',
                    'lucky_number': 27
                }, {
                    'id': 85,
                    'name': 'Kimberly',
                    'lucky_number': 52
                }, {
                    'id': 86,
                    'name': 'Nancy',
                    'lucky_number': 48
                }, {
                    'id': 87,
                    'name': 'Christopher',
                    'lucky_number': 44
                }, {
                    'id': 88,
                    'name': 'Nancy',
                    'lucky_number': 40
                }, {
                    'id': 89,
                    'name': 'Philip',
                    'lucky_number': 34
                }, {
                    'id': 90,
                    'name': 'Bruce',
                    'lucky_number': 69
                }, {
                    'id': 91,
                    'name': 'Jason',
                    'lucky_number': 60
                }, {
                    'id': 92,
                    'name': 'Denise',
                    'lucky_number': 30
                }, {
                    'id': 93,
                    'name': 'Jane',
                    'lucky_number': 66
                }, {
                    'id': 94,
                    'name': 'Brian',
                    'lucky_number': 49
                }, {
                    'id': 95,
                    'name': 'Eugene',
                    'lucky_number': 51
                }, {
                    'id': 96,
                    'name': 'Jack',
                    'lucky_number': 97
                }, {
                    'id': 97,
                    'name': 'Peter',
                    'lucky_number': 1
                }, {
                    'id': 98,
                    'name': 'Virginia',
                    'lucky_number': 20
                }, {
                    'id': 99,
                    'name': 'Walter',
                    'lucky_number': 63
                }, {
                    'id': 100,
                    'name': 'Virginia',
                    'lucky_number': 14
                }]
        };
    }
    RecordSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.myTable.toggleSelect(_this.configObject.data[1]);
        }, 0);
    };
    return RecordSelectionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_generic_table_core__["a" /* GenericTableComponent */]) === "function" && _a || Object)
], RecordSelectionComponent.prototype, "myTable", void 0);
RecordSelectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'record-selection',
        template: __webpack_require__("../../../../../src/app/record-selection/record-selection.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], RecordSelectionComponent);

var _a;
//# sourceMappingURL=record-selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/rest/rest.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Advanced</h2>\n<p>Fetch data using REST-service, expand rows and display a custom component, use custom functions for rendering, sorting and exporting. Apply predefined filter and simple function for adding new random data to table. To control columns we use the <code><a routerLink=\"/column-settings-component\">ColumnSettingsComponent</a></code>. This example also utilizes column stacking on tablets and mobile devices so resize the browser and see what happens with the layout on smaller screens.</p>\n<div class=\"card mb-5\">\n  <div class=\"card-header\">Example</div>\n  <div class=\"card-body\" exemplify=\"restExample\" [context]=\"this\" [escapeStrings]=\"['[gtClasses]','[gtSettings]','[gtFields]','gtData','[gtRowComponent]','[gtOptions]','[genericTable]','#rowLength','#myTable','ngModel','[ngClass]','#columnSettings','gtEvent']\" [source]=\"'child'\" [target]=\"restExample\" [navStyle]=\"'tabs'\" [externalSources]=\"[{\n    name:'app.module.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/app.module.ts'\n  },{\n    name:'rest.component.ts',\n    src:'https://raw.githubusercontent.com/hjalmers/angular2-generic-table/master/src/app/rest/rest.component.ts'\n  }]\">\n    <form class=\"form form-inline mb-4\">\n      <label for=\"rows\" class=\"form-control-label mr-sm-2\">Rows</label>\n      <select id=\"rows\" class=\"form-control form-control-sm mr-sm-2 mb-3 mb-sm-0\" #rowLength (change)=\"myTable.changeRowLength(rowLength.value)\">\n        <option value=10>10</option>\n        <option value=25>25</option>\n        <option value=50>50</option>\n        <option value=100>100</option>\n      </select>\n      <input class=\"form-control form-control-sm mr-sm-2 mb-3 mb-sm-0\" #search (keyup)=\"myTable.gtSearch(search.value)\" placeholder=\"Search\"/>\n      <div ngbDropdown class=\"col-12 col-sm-auto mr-sm-3 mb-3 mb-sm-0 p-0\">\n        <button class=\"btn btn-sm btn-primary w-100\" id=\"actions\" ngbDropdownToggle>Actions</button>\n        <div ngbDropdownMenu aria-labelledby=\"actions\">\n          <button class=\"dropdown-item\" (click)=\"applyFilter();\">Apply predefined filter</button>\n          <button class=\"dropdown-item\" (click)=\"myTable.gtClearFilter()\">Remove filter</button>\n          <button class=\"dropdown-item\" (click)=\"addData()\">Add data</button>\n          <button class=\"dropdown-item\" (click)=\"showColumnControls = !showColumnControls\">Toggle columns</button>\n          <button class=\"dropdown-item\" (click)=\"myTable.exportCSV()\">Export to CSV</button>\n          <button class=\"dropdown-item\" (click)=\"myTable.selectAllRows()\">Select all</button>\n          <button class=\"dropdown-item\" (click)=\"myTable.deselectAllRows()\">Deselect all</button>\n          <button class=\"dropdown-item\" (click)=\"myTable.expandAllRows()\">Expand all</button>\n          <button class=\"dropdown-item\" (click)=\"myTable.collapseAllRows()\">Collapse all</button>\n          <!--<button class=\"dropdown-item\" (click)=\"getData()\">Refresh data</button>-->\n        </div>\n      </div>\n      <small class=\"form-text text-muted col-12 col-xl-auto mb-2 mt-lg-2 my-xl-auto row\"><gt-table-info [genericTable]=\"myTable\"></gt-table-info> Number of selected rows: {{selectedRows}}</small>\n      <div *ngIf=\"showColumnControls\" class=\"col-12 row mt-xl-2\">\n        <label class=\"form-control-label mr-sm-2\">Visible columns:</label>\n        <div class=\"form-check form-check-inline ml-0 ml-sm-2\" *ngFor=\"let column of configObject.settings\">\n          <label class=\"form-check-label\">\n            <input type=\"checkbox\" name=\"{{column.objectKey}}\" class=\"form-check-input\" [(ngModel)]=\"column.visible\" (change)=\"myTable.redraw()\">\n            {{configObject.fields | gtProperty:column.objectKey:'name'}}\n          </label>\n        </div>\n      </div>\n    </form>\n    <button class=\"btn-link\" (click)=\"columnSettings.toggleColumnSettings()\"> {{columnSettings.active ? 'Hide column settings':'Show column settings'}}</button>\n    <gt-column-settings [genericTable]=\"myTable\" #columnSettings>\n      <div class=\"table-responsive\">\n        <generic-table [gtClasses]=\"'table-hover'\" #myTable [gtSettings]=\"configObject.settings\" [gtFields]=\"configObject.fields\" [gtData]=\"configObject.data\" [gtRowComponent]=\"expandedRow\" [gtOptions]=\"{stack:true, highlightSearch:true, rowSelection:true}\" (gtEvent)=\"trigger($event)\"></generic-table>\n      </div>\n      <div class=\"text-center\">\n        <gt-pagination [gtClasses]=\"'justify-content-center'\" [genericTable]=\"myTable\"></gt-pagination>\n      </div>\n    </gt-column-settings>\n  </div>\n  <div class=\"card-footer\" #restExample>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/rest/rest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_row_custom_row_component__ = __webpack_require__("../../../../../src/app/custom-row/custom-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_generic_table_core__ = __webpack_require__("../../../../../@angular-generic-table/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestComponent = (function () {
    function RestComponent(http) {
        this.http = http;
        this.data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.expandedRow = __WEBPACK_IMPORTED_MODULE_2__custom_row_custom_row_component__["a" /* CustomRowComponent */];
        this.showColumnControls = false;
        this.selectedRows = 0;
        this.url = 'https://private-730c61-generictable.apiary-mock.com/data'; // apiary end point
        this.getData = function () {
            var _this = this;
            // tell generic table instance that we're loading data
            this.myTable ? this.myTable.loading = true : '';
            this.http.get(this.url)
                .subscribe(function (res) {
                _this.configObject.data = res.data;
            });
        };
        this.addData = function () {
            // create mock data
            var random = Math.floor(Math.random() * this.configObject.data.length - 1) + 1;
            var firstName = this.configObject.data[random].first_name;
            var lastName = this.configObject.data[Math.floor(Math.random() * this.configObject.data.length - 1) + 1].last_name;
            var gender = this.configObject.data[random].gender;
            var favoriteColor = this.configObject.data[Math.floor(Math.random() * this.configObject.data.length - 1) + 1].favorite_color;
            var birthday = this.configObject.data[Math.floor(Math.random() * this.configObject.data.length - 1) + 1].birthday;
            // push data to data array (could be swapped to a method for persisting the data to a database).
            this.configObject.data.push({
                'id': this.configObject.data.length + 1,
                'first_name': firstName,
                'last_name': lastName,
                'email': firstName + '.' + lastName + '@some_email_address.xyz',
                'gender': gender,
                'favorite_color': favoriteColor,
                'birthday': birthday
            });
        };
        /** Apply predefined filter using first_name.
         * */
        this.applyFilter = function () {
            this.myTable.gtApplyFilter({
                first_name: ['Victor', 'Joe', 'Carol']
            });
        };
        /** Listen for events
         * */
        this.trigger = function ($event) {
            console.log($event);
            if ($event.value && $event.value.selectedRows) {
                this.selectedRows = $event.value.selectedRows.length;
            }
        };
        this.configObject = {
            settings: [{
                    objectKey: 'id',
                    visible: true,
                    sort: 'desc',
                    columnOrder: 0,
                    enabled: true
                }, {
                    objectKey: 'name',
                    visible: true,
                    sort: 'enable',
                    columnOrder: 1
                }, {
                    objectKey: 'email',
                    visible: true,
                    enabled: true,
                    sort: 'enable',
                    sortOrder: 0,
                    columnOrder: 2
                }, {
                    objectKey: 'gender',
                    visible: true,
                    enabled: true,
                    sort: 'enable',
                    sortOrder: 0,
                    columnOrder: 3,
                    search: false
                }, {
                    objectKey: 'favorite_color',
                    visible: true,
                    enabled: true,
                    sort: 'disable',
                    sortOrder: 0,
                    columnOrder: 4,
                    search: false
                }],
            fields: [{
                    name: 'Id',
                    objectKey: 'id',
                    classNames: 'clickable sort-numeric',
                    expand: true
                }, {
                    name: 'Name',
                    objectKey: 'name',
                    classNames: 'sort-string',
                    value: function (row) { return row.first_name + ' ' + row.last_name; },
                    render: function (row) { return '<div>' + row.first_name + ' ' + row.last_name + '</div>'; }
                }, {
                    name: 'Favorite color',
                    objectKey: 'favorite_color',
                    classNames: 'text-xs-right',
                    render: function (row) { return '<div style="float:right;width:15px;height:15px;border-radius:50%;background: ' + row.favorite_color + '"></div>'; },
                    click: function (row) { return console.log(row.first_name + '\'s favorite color is: ' + row.favorite_color); }
                }, {
                    name: 'Gender',
                    classNames: 'sort-string',
                    objectKey: 'gender'
                }, {
                    name: 'Email',
                    classNames: 'sort-string',
                    objectKey: 'email',
                    render: function (row) { return '<a href="mailto:' + row.email + '">' + row.email + '</a>'; }
                }],
            data: []
        };
    }
    RestComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    return RestComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], RestComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_generic_table_core__["a" /* GenericTableComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_generic_table_core__["a" /* GenericTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_generic_table_core__["a" /* GenericTableComponent */]) === "function" && _a || Object)
], RestComponent.prototype, "myTable", void 0);
RestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rest',
        template: __webpack_require__("../../../../../src/app/rest/rest.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], RestComponent);

var _a, _b;
//# sourceMappingURL=rest.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_weak_map__ = __webpack_require__("../../../../core-js/es6/weak-map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_weak_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_weak_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/














/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** Evergreen browsers require these. **/


/**
 * Required to support Web Animations `@angular/animation`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map