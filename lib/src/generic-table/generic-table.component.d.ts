import { OnInit, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { GtConfig } from './interfaces/gt-config';
import { GtConfigField } from "./interfaces/gt-config-field";
import { GtConfigSetting } from "./interfaces/gt-config-setting";
import { Observable } from 'rxjs/Observable';
import { GtTexts } from './interfaces/gt-texts';
import { GtPagingInfo } from './interfaces/gt-paging-info';
import { DomSanitizer } from '@angular/platform-browser';
export declare class GenericTableComponent implements OnInit {
    private sanitizer;
    component: any;
    data: [Object];
    configObject: GtConfig;
    sortOrder: Array<any>;
    gtSettings: [GtConfigSetting];
    gtFields: [GtConfigField];
    gtPaging: GtPagingInfo;
    gtData: Observable<any> | Array<any>;
    gtAsync: boolean;
    gtLazy: boolean;
    gtTexts: GtTexts;
    lazyLoad: EventEmitter<{}>;
    gtEvent: EventEmitter<{}>;
    store: Array<any>;
    loading: boolean;
    debounceTimer: void;
    debounceTime: number;
    loadingProperty: string;
    private refreshPipe;
    private refreshSorting;
    constructor(sanitizer: DomSanitizer);
    /**
     * Sort table by object key.
     * @param {string} objectKey - name of key to sort on.
     * @param {any} event - such as key press during sorting.
     */
    private gtSort;
    /**
     * Change number of rows to be displayed.
     * @param {string} rowLength - total number of rows.
     * @param {boolean} reset - how many records to show per page.
     * @returns {number} number of pages to display.
     */
    changeRowLength: (rowLength: any, reset?: boolean) => void;
    /**
     * Get total number of pages.
     * @returns {number} number of pages to display.
     */
    private updateTotalPages;
    /**
     * Refresh total number of pages, this function is used by pipes to update total number of pages.
     * @param {number} rows - total number of rows.
     * @param {Object} gt - how many records to show per page.
     * @returns {Array} a nested array to hold records per page.
     */
    private refresh;
    /**
     * Force a redraw of table rows.
     * As the table uses pure pipes, we need to force a redraw if an object in the array is changed to see the changes.
     */
    private redraw;
    /** Go to next page. */
    nextPage: () => void;
    /** Go to previous page. */
    previousPage: () => void;
    /** Request more data (used when lazy loading) */
    private getData;
    /**
     * Go to specific page.
     * @param {number} page - page number.
     */
    goToPage: (page: number) => void;
    /**
     * Apply filter(s).
     * @param {Object} filter - object containing key value pairs, where value should be array of values.
     */
    gtApplyFilter: (filter: Object) => void;
    /** Clear/remove applied filter(s). */
    gtClearFilter: () => void;
    private gt;
    /**
     * Create store to hold previously loaded records.
     * @param {number} records - total number of records in store.
     * @param {number} perPage - how many records to show per page.
     * @returns {Array} a nested array to hold records per page.
     */
    private createStore;
    /**
     * Create placeholders for rows while loading data from back-end.
     * @param {number} perPage - how many records to show per page.
     * @returns {Array} an array containing empty records to be presented while fetching real data.
     */
    private loadingContent;
    /** Sort by sort order */
    private getSortOrder;
    /** Sort by column order */
    private getColumnOrder;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    refreshRender: boolean;
}
