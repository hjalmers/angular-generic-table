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
require('rxjs/Rx');
let GenericTableComponent = class GenericTableComponent {
    constructor() {
        this.sortOrder = [];
        this.gtAsync = false;
        this.gtLazy = false;
        this.gtTexts = {
            'loading': 'Loading...'
        };
        this.lazyLoad = new core_1.EventEmitter();
        this.gtEvent = new core_1.EventEmitter();
        this.store = [];
        this.loading = false;
        /**
         * Sort table by object key.
         * @param {string} objectKey - name of key to sort on.
         * @param {any} event - such as key press during sorting.
         */
        this.gtSort = function (objectKey, event) {
            //console.log('key pressed:',objectKey,event.metaKey);
            // check length
            let sortProperties = this.sortOrder.length;
            let ctrlKey = event.metaKey || event.ctrlKey;
            let sort = this.sortOrder.slice(0);
            let match = -1;
            let matchDesc = -1;
            // check if property already exits
            for (let i = 0; i < sort.length; i++) {
                let hit = sort[i].indexOf(objectKey);
                //console.log('match:',sort[i],objectKey,match,hit);
                if (hit !== -1) {
                    //console.log('MATCH',this.sortOrder,objectKey);
                    match = this.sortOrder.indexOf(objectKey);
                    matchDesc = match === -1 ? this.sortOrder.indexOf('-' + objectKey) : match;
                }
            }
            //console.log('outcome:',match);
            // if not sorted...
            if (sortProperties === 0) {
                this.sortOrder.push(objectKey);
            }
            else 
            // if sorted asc...
            if (match !== -1) {
                // ...change to desc
                this.sortOrder[match] = '-' + objectKey;
            }
            else if (match === 1) {
                // ...remove
                this.sortOrder.splice(0, 1);
            }
            else if (match === -1 && !ctrlKey) {
                // ...replace sorting
                this.sortOrder = [objectKey];
            }
            else if (match === -1 && ctrlKey) {
                // ...if property is already sorted using desc
                if (matchDesc !== -1) {
                    // ...remove it if sorting is applied with more than one properties
                    if (this.sortOrder.length > 1) {
                        this.sortOrder.splice(matchDesc, 1);
                    }
                    else {
                        this.sortOrder = [objectKey];
                    }
                }
                else {
                    // ...if not add it
                    this.sortOrder.push(objectKey);
                }
            }
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
            let newPosition = 0;
            if (reset !== true) {
                let currentRecord = this.gt.rowLength * (this.gt.currentPage - 1);
                let currentPosition = this.gtData.indexOf(this.gtData[currentRecord]) + 1;
                newPosition = Math.ceil(currentPosition / rowLength);
            }
            this.gt.rowLength = parseInt(rowLength);
            this.updateTotalPages();
            this.gt.currentPage = newPosition;
        };
        /**
         * Get total number of pages.
         * @returns {number} number of pages to display.
         */
        this.updateTotalPages = function () {
            //console.log('get total');
            let rows = this.gt.filtered ? this.gt.filtered : this.gtData.length;
            this.gt.pagesTotal = Math.ceil(rows / this.gt.rowLength);
        };
        /**
         * Refresh total number of pages, this function is used by pipes to update total number of pages.
         * @param {number} rows - total number of rows.
         * @param {Object} gt - how many records to show per page.
         * @returns {Array} a nested array to hold records per page.
         */
        this.refresh = function (rows, gt) {
            //console.log('refresh',this.gtPaging);
            if (this.gtPaging) {
                gt.pagesTotal = Math.ceil(this.gtPaging.total_records / gt.rowLength);
            }
            else {
                gt.pagesTotal = Math.ceil(rows / gt.rowLength);
            }
        };
        /** Go to next page. */
        this.nextPage = function () {
            let page = this.gt.currentPage === this.gt.pagesTotal ? this.gt.pagesTotal : this.gt.currentPage += 1;
            this.goToPage(page);
        };
        /** Go to previous page. */
        this.previousPage = function () {
            let page = this.gt.currentPage === 1 ? 1 : this.gt.currentPage -= 1;
            this.goToPage(page);
        };
        /**
         * Go to specific page.
         * @param {number} page - page number.
         */
        this.goToPage = function (page) {
            this.gt.currentPage = page;
            // if lazy loading and if page contains no records...
            if (this.gtLazy && this.gtData[this.gt.currentPage - 1].length === 0) {
                // ...emit event requesting for more data
                console.log('load from server');
                this.gtEvent.emit({
                    name: 'gt-page-changed',
                    value: { page: this.gt.currentPage, pageLength: this.gt.rowLength }
                });
                // ...create temporary content while waiting for data
                this.gtData[this.gt.currentPage - 1] = this.loadingContent(this.gt.rowLength);
                this.loading = true; // loading true
            }
        };
        /**
         * Apply filter(s).
         * @param {Object} filter - object containing key value pairs, where value should be array of values.
         */
        this.gtApplyFilter = function (filter) {
            this.gt.filter = filter;
            // go to first page
            this.gt.currentPage = 1;
            //this.updateTotalPages();
        };
        /** Clear/remove applied filter(s). */
        this.gtClearFilter = function () {
            this.gt.filter = false;
            //this.updateTotalPages();
        };
        this.gt = {
            rowLength: 10,
            currentPage: 1,
            pagesTotal: null,
            filter: false,
            refresh: this.refresh
        };
        /**
         * Create store to hold previously loaded records.
         * @param {number} records - total number of records in store.
         * @param {number} perPage - how many records to show per page.
         * @returns {Array} a nested array to hold records per page.
         */
        this.createStore = function (records, perPage) {
            let stores = Math.ceil(records / perPage);
            let store = [];
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
            let rowObject = {};
            // sort settings by column order
            this.gtSettings.sort(this.getColumnOrder);
            // loop through all settings objects...
            for (var i = 0; i < this.gtSettings.length; i++) {
                let setting = this.gtSettings[i];
                // ...if column is visible and enabled...
                if (setting.visible !== false && setting.enabled !== false) {
                    // ...if first column set value to loading text otherwise leave it empty
                    rowObject[setting.objectKey] = i === 0 ? this.gtTexts.loading : '';
                }
            }
            // create content placeholder
            let contentPlaceholder = [];
            // create equal number of rows as rows per page
            for (var i = 0; i < perPage; i++) {
                // ...add temporary row object
                contentPlaceholder.push(rowObject);
            }
            return contentPlaceholder;
        };
        /** Sort by sort order */
        this.getSortOrder = function (a, b) {
            if (a.sortOrder < b.sortOrder)
                return -1;
            if (a.sortOrder > b.sortOrder || typeof a.sortOrder === 'undefined')
                return 1;
            return 0;
        };
        /** Sort by column order */
        this.getColumnOrder = function (a, b) {
            if (a.columnOrder < b.columnOrder)
                return -1;
            if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
                return 1;
            return 0;
        };
    }
    ngOnInit() {
        /** If we're not lazy loading data and handling sorting server side, we want to apply some default sorting.
         *  This is done by checking sort properties in the settings array of the table, if no sorting is defined
         *  we'll sort the data by the first visible and enabled column in the table(ascending). */
        // if not using lazy loading...
        if (!this.gtLazy) {
            // ...create sorting array
            let sorting = [];
            // ...sort settings by sort order
            this.gtSettings.sort(this.getSortOrder);
            // ...loop through settings
            for (let i = 0; i < this.gtSettings.length; i++) {
                let setting = this.gtSettings[i];
                // ...if sorted ascending...
                if (setting.sort === 'asc') {
                    // ... add to sorting
                    sorting.push(setting.objectKey);
                }
                else if (setting.sort === 'asc') {
                    // ... add to sorting
                    sorting.push("-" + setting.objectKey);
                }
            }
            // ...if no sorting applied...
            if (sorting.length === 0) {
                // ...sort settings by column order
                this.gtSettings.sort(this.getColumnOrder);
                // ...loop through settings
                for (let i = 0; i < this.gtSettings.length; i++) {
                    let setting = this.gtSettings[i];
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
    }
    ngAfterViewInit() {
        //console.log('view');
    }
    ngOnChanges() {
        if (this.gtPaging) {
            this.gt.rowLength = this.gtPaging.per_page;
            this.gt.pagesTotal = this.gtPaging.total_records;
            this.refresh(this.gtPaging.total_records, this.gt);
        }
        else {
            this.updateTotalPages();
        }
        // if lazy loading data and paging infromation is avaialble...
        if (this.gtLazy && this.gtPaging) {
            // ...declare store position
            let storePosition = this.gtPaging.current_page - 1;
            // ...and if store is empty...
            if (this.store.length === 0) {
                console.log('create store');
                // ...create store
                this.store = this.createStore(this.gtPaging.filtered_records, this.gtPaging.per_page);
            }
            // ...and if store position is empty...
            if (this.store[storePosition].length === 0 || this.loading) {
                console.log('fill store position:', storePosition);
                // ...store retrieved data in store at store position
                this.store[storePosition] = this.gtData;
            }
            // replace data with store
            this.gtData = this.store;
            this.loading = false;
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], GenericTableComponent.prototype, "gtSettings", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], GenericTableComponent.prototype, "gtFields", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], GenericTableComponent.prototype, "gtPaging", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], GenericTableComponent.prototype, "gtData", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], GenericTableComponent.prototype, "gtAsync", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], GenericTableComponent.prototype, "gtLazy", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], GenericTableComponent.prototype, "gtTexts", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], GenericTableComponent.prototype, "lazyLoad", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], GenericTableComponent.prototype, "gtEvent", void 0);
GenericTableComponent = __decorate([
    core_1.Component({
        selector: 'app-generic-table',
        templateUrl: './generic-table.component.html',
        styleUrls: ['./generic-table.component.scss']
    }), 
    __metadata('design:paramtypes', [])
], GenericTableComponent);
exports.GenericTableComponent = GenericTableComponent;
//# sourceMappingURL=generic-table.component.js.map