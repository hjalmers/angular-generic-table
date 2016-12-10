"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/Rx');
var GenericTableComponent = (function () {
    function GenericTableComponent() {
        var _this = this;
        this.sortOrder = [];
        this.gtLazy = false;
        this.gtTexts = {
            'loading': 'Loading...',
            'noData': 'No data',
            'noMatchingData': 'No data matching results found',
            'tableInfo': 'Showing #recordFrom to #recordTo of #recordsAfterSearch entries.',
            'tableInfoAfterSearch': 'Showing  #recordFrom to #recordTo of #recordsAfterSearch entries (filtered from a total of #recordsAll entries).'
        };
        this.gtHighlightSearch = false;
        this.lazyLoad = new core_1.EventEmitter();
        this.gtEvent = new core_1.EventEmitter();
        this.gtOptions = {
            cache: false,
            debounceTime: 200
        };
        this.store = [];
        this.loading = true;
        this.debounceTimer = null;
        this.gtInfo = {
            pageCurrent: 1,
            pageTotal: 0,
            recordFrom: 0,
            recordTo: 0,
            recordLength: 10,
            recordsAll: 0,
            recordsAfterFilter: 0,
            recordsAfterSearch: 0
        };
        this.refreshPipe = false;
        this.refreshSorting = false;
        /**
         * Sort table by object key.
         * @param {string} objectKey - name of key to sort on.
         * @param {any} event - such as key press during sorting.
         */
        this.gtSort = function (objectKey, event) {
            //console.log('key pressed:',objectKey,event.metaKey);
            // check if sorting is disabled
            for (var i = 0; i < this.gtSettings.length; i++) {
                if (this.gtSettings[i].objectKey === objectKey) {
                    if (this.gtSettings[i].sort === 'disable') {
                        return;
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
                //console.log('match:',sort[i],objectKey,match,hit);
                if (hit !== -1) {
                    //console.log('MATCH',this.sortOrder,objectKey);
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
            }
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
            for (var i = 0; i < this.gtSettings.length; i++) {
                if (this.gtSettings[i].objectKey === objectKey) {
                    switch (this.gtSettings[i].sort) {
                        // if sorted asc...
                        case 'asc':
                            // ...change to desc
                            this.gtSettings[i].sort = 'desc';
                            break;
                        // if sorted desc...
                        case 'desc':
                            // ...change to asc if it's the only sorted property otherwise remove sorting
                            this.gtSettings[i].sort = this.sortOrder.length === 1 && sort.length < 2 ? 'asc' : 'enable';
                            break;
                        // if sorting enabled...
                        case 'enable':
                            // ...change to asc
                            this.gtSettings[i].sort = 'asc';
                            break;
                    }
                    this.gtSettings[i].sortOrder = this.gtSettings[i].sort === 'enable' ? (this.gtSettings.length - 1) : this.sortOrder.indexOf(objectKey) === -1 ? this.sortOrder.indexOf('-' + objectKey) : this.sortOrder.indexOf(objectKey);
                }
                else if (this.gtSettings[i].sort !== 'disable' && this.sortOrder.indexOf(this.gtSettings[i].objectKey) === -1 && this.sortOrder.indexOf('-' + this.gtSettings[i].objectKey) === -1) {
                    this.gtSettings[i].sort = 'enable';
                    this.gtSettings[i].sortOrder = (this.gtSettings.length - 1);
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
         * @param {boolean} reset - how many records to show per page.
         * @returns {number} number of pages to display.
         */
        this.changeRowLength = function (rowLength, reset) {
            //console.log('change rows');
            var newPosition = 1;
            // if reset is not true and we're not lazy loading data...
            if (reset !== true && this.gtLazy !== true) {
                // ...get current position in record set
                var currentRecord = this.gtInfo.recordLength * (this.gtInfo.pageCurrent - 1);
                var currentPosition = this.gtData.indexOf(this.gtData[currentRecord]) + 1;
                // ...get new position
                newPosition = Math.ceil(currentPosition / rowLength);
            }
            // change row length
            this.gtInfo.recordLength = parseInt(rowLength);
            // go to new position
            this.gtInfo.pageCurrent = newPosition;
            // if lazy loading data...
            if (this.gtLazy) {
                // ...replace data with place holders for new data
                this.gtData[0] = this.loadingContent(rowLength);
                // ...empty current store
                this.store = [];
            }
            //this.updateRecordRange();
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
            this.refreshPipe = !this.refreshPipe;
        };
        /** Update record range. */
        this.updateRecordRange = function () {
            this.gtInfo.recordFrom = this.gtInfo.recordsAfterSearch === 0 ? 0 : (this.gtInfo.pageCurrent - 1) * this.gtInfo.recordLength + 1;
            this.gtInfo.recordTo = this.gtInfo.recordsAfterSearch < this.gtInfo.pageCurrent * this.gtInfo.recordLength ? this.gtInfo.recordsAfterSearch : this.gtInfo.pageCurrent * this.gtInfo.recordLength;
            //this._changeDetectionRef.detectChanges();
        };
        /** Go to next page. */
        this.nextPage = function () {
            var page = this.gtInfo.pageCurrent === this.gtInfo.pageTotal ? this.gtInfo.pageTotal : this.gtInfo.pageCurrent += 1;
            this.goToPage(page);
            // prevent browser reload
            //event.preventDefault();
        };
        /** Go to previous page. */
        this.previousPage = function () {
            var page = this.gtInfo.pageCurrent === 1 ? 1 : this.gtInfo.pageCurrent -= 1;
            this.goToPage(page);
            // prevent browser reload
            //event.preventDefault();
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
            // if lazy loading and if page contains no records...
            if (this.gtLazy) {
                // ...if data for current page contains no entries...
                if (this.gtOptions.cache === false || this.gtData[this.gtInfo.pageCurrent - 1].length === 0) {
                    // ...create temporary content while waiting for data
                    this.gtData[this.gtInfo.pageCurrent - 1] = this.loadingContent(this.gtInfo.recordLength);
                    this.loading = true; // loading true
                }
                // ...if first entry in current page equals our loading placeholder...
                if (this.gtData[this.gtInfo.pageCurrent - 1][0][this.loadingProperty] === this.gtTexts.loading) {
                    // ...get data
                    clearTimeout(this.debounceTimer);
                    this.debounceTimer = setTimeout(function () {
                        _this.getData();
                    }, this.gtOptions.debounceTime);
                }
            }
            //this.updateRecordRange();
            // ...emit page change event
            this.gtEvent.emit({
                name: 'gt-page-changed',
                value: { pageCurrent: this.gtInfo.pageCurrent, recordLength: this.gtInfo.recordLength }
            });
        };
        /**
         * Apply filter(s).
         * @param {Object} filter - object containing key value pairs, where value should be array of values.
         */
        this.gtApplyFilter = function (filter) {
            this.gtInfo.filter = filter;
            // go to first page
            this.goToPage(1);
        };
        /** Clear/remove applied filter(s). */
        this.gtClearFilter = function () {
            this.gtInfo.filter = false;
            //this.updateRecordRange();
        };
        /**
         * Search
         * @param (string) value - string containing one or more words
         */
        this.gtSearch = function (value) {
            this.gtInfo.searchTerms = value;
            //always go to first page when searching
            this.goToPage(1);
        };
        /**
         * Create store to hold previously loaded records.
         * @param {number} records - total number of records in store.
         * @param {number} perPage - how many records to show per page.
         * @returns {Array} a nested array to hold records per page.
         */
        this.createStore = function (records, perPage) {
            var stores = Math.ceil(records / perPage);
            var store = [];
            for (var i = 0; i < stores; i++) {
                store[i] = [];
            }
            return store;
        };
        /**
         * Create placeholders for rows while loading data from back-end.
         * @param {number} perPage - how many records to show per page.
         * @returns {Array} an array containing empty records to be presented while fetching real data.
         */
        this.loadingContent = function (perPage) {
            // create row object
            var rowObject = {
                $$loading: true
            };
            var order = 0;
            // sort settings by column order
            this.gtSettings.sort(this.getColumnOrder);
            // loop through all settings objects...
            for (var i = 0; i < this.gtSettings.length; i++) {
                var setting = this.gtSettings[i];
                // ...if column is visible and enabled...
                if (setting.visible !== false && setting.enabled !== false) {
                    // ...if first column, set value to loading text otherwise leave it empty
                    if (order === 0) {
                        //console.log(setting.objectKey);
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
        // TODO: move to helper functions
        /** Sort by sort order */
        this.getSortOrder = function (a, b) {
            if (a.sortOrder < b.sortOrder)
                return -1;
            if (a.sortOrder > b.sortOrder || typeof a.sortOrder === 'undefined')
                return 1;
            return 0;
        };
        // TODO: move to helper functions
        /** Sort by column order */
        this.getColumnOrder = function (a, b) {
            if (a.columnOrder === undefined) {
                return -1;
            }
            if (a.columnOrder < b.columnOrder)
                return -1;
            if (a.columnOrder > b.columnOrder)
                return 1;
            return 0;
        };
        this.gtEvent.subscribe(function ($event) {
            if ($event.name === 'gt-info') {
                _this.updateRecordRange();
            }
        });
    }
    GenericTableComponent.prototype.ngOnInit = function () {
        /** If we're not lazy loading data and handling sorting server side, we want to apply some default sorting.
         *  This is done by checking sort properties in the settings array of the table, if no sorting is defined
         *  we'll sort the data by the first visible and enabled column in the table(ascending). */
        // if not using lazy loading...
        if (!this.gtLazy) {
            // ...create sorting array
            var sorting = [];
            // ...sort settings by sort order
            this.gtSettings.sort(this.getSortOrder);
            // ...loop through settings
            for (var i = 0; i < this.gtSettings.length; i++) {
                var setting = this.gtSettings[i];
                // ...if sorted ascending...
                if (setting.sort === 'asc') {
                    // ... add to sorting
                    sorting.push(setting.objectKey);
                }
                else if (setting.sort === 'desc') {
                    // ... add to sorting
                    sorting.push("-" + setting.objectKey);
                }
            }
            // ...if no sorting applied...
            if (sorting.length === 0) {
                // ...sort settings by column order
                this.gtSettings.sort(this.getColumnOrder);
                // ...loop through settings
                for (var i = 0; i < this.gtSettings.length; i++) {
                    var setting = this.gtSettings[i];
                    // ...if column is enabled and visible...
                    if (setting.enabled !== false && setting.visible !== false) {
                        // ...add first match and exit function
                        this.sortOrder = [this.gtSettings[i].objectKey];
                        return;
                    }
                }
            }
            else {
                this.sortOrder = sorting;
            }
        }
    };
    GenericTableComponent.prototype.ngOnChanges = function () {
        // if lazy loading data and paging information is available...
        if (this.gtLazy && this.gtInfo) {
            // ...calculate total number of pages
            this.gtInfo.pageTotal = Math.ceil(this.gtInfo.recordsAfterSearch / this.gtInfo.recordLength);
            // ...declare store position
            var storePosition = this.gtInfo.pageCurrent - 1;
            // ...and if store is empty or page length has changed...
            if (this.store.length === 0 || this.store[0].length !== this.gtInfo.recordLength) {
                //console.log('create store');
                // ...create store
                this.store = this.createStore(this.gtInfo.recordsAfterSearch, this.gtInfo.recordLength);
            }
            // ...store retrieved data in store at store position
            this.store[storePosition] = this.gtData;
            // replace data with store
            this.gtData = this.store;
            this.loading = false;
            this.updateRecordRange();
        }
        else if (this.gtData.length > 0) {
            this.loading = false;
        }
    };
    __decorate([
        core_1.Input()
    ], GenericTableComponent.prototype, "gtRowComponent", void 0);
    __decorate([
        core_1.Input()
    ], GenericTableComponent.prototype, "gtSettings", void 0);
    __decorate([
        core_1.Input()
    ], GenericTableComponent.prototype, "gtFields", void 0);
    __decorate([
        core_1.Input()
    ], GenericTableComponent.prototype, "gtData", void 0);
    __decorate([
        core_1.Input()
    ], GenericTableComponent.prototype, "gtLazy", void 0);
    __decorate([
        core_1.Input()
    ], GenericTableComponent.prototype, "gtTexts", void 0);
    __decorate([
        core_1.Input()
    ], GenericTableComponent.prototype, "gtClasses", void 0);
    __decorate([
        core_1.Input()
    ], GenericTableComponent.prototype, "gtHighlightSearch", void 0);
    __decorate([
        core_1.Output()
    ], GenericTableComponent.prototype, "lazyLoad", void 0);
    __decorate([
        core_1.Output()
    ], GenericTableComponent.prototype, "gtEvent", void 0);
    __decorate([
        core_1.Input()
    ], GenericTableComponent.prototype, "gtOptions", void 0);
    __decorate([
        core_1.Input()
    ], GenericTableComponent.prototype, "gtInfo", void 0);
    GenericTableComponent = __decorate([
        core_1.Component({
            selector: 'generic-table',
            template: "\n<table class=\"table\" ngClass=\"{{gtClasses}}\">\n  <thead>\n  <tr>\n    <th *ngFor=\"let column of gtFields | gtVisible:gtSettings\" ngClass=\"{{column.objectKey +'-column' | dashCase}} {{column.classNames}} sort-{{gtSettings | getProperty:column.objectKey:'sort':refreshHeading}} sort-order-{{gtSettings | getProperty:column.objectKey:'sortOrder':refreshHeading}}\" (click)=\"gtSort(column.objectKey,$event);refreshHeading = !refreshHeading\">{{column.name}}</th>\n  </tr>\n  </thead>\n  <tbody *ngIf=\"gtLazy && gtInfo\">\n  <template ngFor let-row [ngForOf]=\"gtData[gtInfo.pageCurrent-1]\">\n    <tr ngClass=\"{{row.isOpen ? 'row-open':''}}{{loading ? 'row-loading':''}}\">\n      <td *ngFor=\"let column of row | gtRender:gtSettings:gtFields:refreshPipe:loading:gtHighlightSearch:gtInfo.searchTerms\" ngClass=\"{{column.objectKey +'-column' | dashCase}} {{gtFields | getProperty:column.objectKey:'classNames'}}\"><span [innerHTML]=\"column.renderValue\" (click)=\"column.click ? column.click(row,column):'';column.expand ? row.isOpen = !row.isOpen:''\"></span></td>\n    </tr>\n    <tr class=\"expanded-row\" *ngIf=\"row.isOpen\">\n      <td [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">\n        <gt-expanding-row [row]=\"row\" [type]=\"gtRowComponent\" (redrawEvent)=\"redraw($event)\"></gt-expanding-row>\n      </td>\n    </tr>\n  </template>\n  <tr *ngIf=\"gtInfo.pageTotal === 0 && (gtInfo.searchTerms || gtInfo.filter) && !loading\">\n   <td class=\"gt-no-matching-results\" [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">{{gtTexts.noMatchingData}}</td>\n  </tr>\n  <tr *ngIf=\"gtInfo.pageTotal === 0 && !(gtInfo.searchTerms || gtInfo.filter) && !loading\">\n   <td class=\"gt-no-results\" [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">{{gtTexts.noData}}</td>\n  </tr>\n  <tr *ngIf=\"gtInfo.pageTotal === 0 && loading\">\n   <td class=\"gt-loading-data\" [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">{{gtTexts.loading}}</td>\n  </tr>\n  </tbody>\n  <tbody *ngIf=\"!gtLazy && gtData\">\n  <template class=\"table-rows\" ngFor let-row [ngForOf]=\"gtData | gtFilter:gtInfo.filter:gtInfo:refreshFilter:gtData.length | gtSearch:gtInfo.searchTerms:gtInfo:gtSettings:gtFields:gtData.length | gtOrderBy:sortOrder:gtFields:refreshSorting:gtData.length | gtChunk:gtInfo:gtInfo.recordLength:gtInfo.pageCurrent:refreshPageArray:gtData.length:gtEvent\">\n    <tr ngClass=\"{{row.isOpen ? 'row-open':''}}\">\n      <td *ngFor=\"let column of row | gtRender:gtSettings:gtFields:refreshPipe:loading:gtHighlightSearch:gtInfo.searchTerms\" ngClass=\"{{column.objectKey +'-column' | dashCase}} {{gtFields | getProperty:column.objectKey:'classNames'}}\"><span [innerHTML]=\"column.renderValue\" (click)=\"column.click ? column.click(row,column):'';column.expand ? row.isOpen = !row.isOpen:''\"></span></td>\n    </tr>\n    <tr class=\"expanded-row\" *ngIf=\"row.isOpen\">\n      <td [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">\n        <gt-expanding-row [row]=\"row\" [type]=\"gtRowComponent\" (redrawEvent)=\"redraw($event)\"></gt-expanding-row>\n      </td>\n    </tr>\n  </template>\n  <tr *ngIf=\"gtInfo.pageTotal === 0 && (gtInfo.searchTerms || gtInfo.filter) && !loading\">\n   <td class=\"gt-no-matching-results\" [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">{{gtTexts.noMatchingData}}</td>\n  </tr>\n  <tr *ngIf=\"gtInfo.pageTotal === 0 && !(gtInfo.searchTerms || gtInfo.filter) && !loading\">\n   <td class=\"gt-no-results\" [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">{{gtTexts.noData}}</td>\n  </tr>\n  <tr *ngIf=\"gtInfo.pageTotal === 0 && loading\">\n   <td class=\"gt-loading-data\" [attr.colspan]=\"(gtFields | gtVisible:gtSettings).length\">{{gtTexts.loading}}</td>\n  </tr>\n  </tbody>\n</table>\n",
        })
    ], GenericTableComponent);
    return GenericTableComponent;
}());
exports.GenericTableComponent = GenericTableComponent;
