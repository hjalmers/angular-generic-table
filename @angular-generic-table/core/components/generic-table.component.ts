import {
  Component,
  OnInit,
  OnChanges,
  Output,
  Input,
  EventEmitter,
  Type,
  SimpleChanges
} from '@angular/core';
import 'rxjs/Rx';
import { GtConfig } from '../interfaces/gt-config';
import { GtConfigField } from '../interfaces/gt-config-field';
import { GtConfigSetting } from '../interfaces/gt-config-setting';
import { GtTexts } from '../interfaces/gt-texts';
import { GtInformation } from '../interfaces/gt-information';
import { GtExpandedRow } from './gt-expanding-row.component';
import { GtRow } from '../interfaces/gt-row';
import { GtOptions } from '../interfaces/gt-options';
import {GtRowMeta} from '../interfaces/gt-row-meta';
import {GtRenderField} from '../pipes/gt-render.pipe';

@Component({
  selector: 'generic-table',
  template: `
    <table class="table" ngClass="{{gtClasses}} {{gtOptions.stack ? 'table-stacked':''}}" *ngIf="gtFields && gtSettings && (gtFields | gtVisible:gtSettings:refreshPipe).length > 0">
      <thead>
      <tr>
        <th class="gt-sort-label" *ngIf="gtOptions.stack">{{gtTexts.sortLabel}}</th><th *ngFor="let column of gtSettings | gtVisible:gtSettings:refreshPipe" ngClass="{{column.objectKey +'-column' | dashCase}} {{gtFields | gtProperty:column.objectKey:'classNames'}} {{column.sortEnabled ? 'sort-'+column.sort:''}} {{column.sortEnabled && column.sortOrder >= 0  ? 'sort-order-'+column.sortOrder:''}}" (click)="column.sortEnabled ? gtSort(column.objectKey,$event):'';">{{gtFields | gtProperty:column.objectKey:'name'}}</th>
      </tr>
      </thead>
      <ng-template [ngIf]="gtTotals && (gtData | gtFilter:gtInfo.filter:gtInfo:refreshFilter:gtData.length | gtSearch:gtInfo.searchTerms:gtInfo:gtSettings:gtFields:gtData.length).length > 0">
        <thead class="gt-totals">
        <tr *ngFor="let total of gtTotals | gtTotalsPosition">
          <td *ngFor="let column of gtSettings | gtVisible:gtSettings:refreshPipe;let i = index;" ngClass="{{column.objectKey +'-totals-column' | dashCase}} {{gtFields | gtProperty:column.objectKey:'classNames'}}">{{test}}<span *ngIf="i === 0" class="float-left">{{total.name}}</span><span [innerHTML]="total.fields[column.objectKey] | gtTotals:total.update === false ? gtData:(gtData | gtFilter:gtInfo.filter:gtInfo:refreshFilter:gtData.length | gtSearch:gtInfo.searchTerms:gtInfo:gtSettings:gtFields:gtData.length):column.objectKey:refreshTotals"></span></td>
        </tr>
        </thead>
        <tfoot class="gt-totals">
        <tr *ngFor="let total of gtTotals | gtTotalsPosition:'footer'">
          <td *ngFor="let column of gtSettings | gtVisible:gtSettings:refreshPipe;let i = index;" ngClass="{{column.objectKey +'-totals-column' | dashCase}} {{gtFields | gtProperty:column.objectKey:'classNames'}}"><span *ngIf="i === 0" class="float-left">{{total.name}}</span><span [innerHTML]="total.fields[column.objectKey] | gtTotals:total.update === false ? gtData:(gtData | gtFilter:gtInfo.filter:gtInfo:refreshFilter:gtData.length | gtSearch:gtInfo.searchTerms:gtInfo:gtSettings:gtFields:gtData.length):column.objectKey:refreshTotals"></span></td>
        </tr>
        </tfoot>
      </ng-template>
      <tbody *ngIf="gtData && gtInfo">
      <ng-template class="table-rows" ngFor let-row [ngForOf]="gtOptions.lazyLoad && gtInfo ? (gtData[gtInfo.pageCurrent-1] | gtMeta:(gtInfo.pageCurrent-1):gtInfo.recordLength) : (gtData | gtMeta:null:null:gtData.length | gtFilter:gtInfo.filter:gtInfo:refreshFilter:gtData.length | gtSearch:gtInfo.searchTerms:gtInfo:gtSettings:gtFields:gtData.length | gtOrderBy:sortOrder:gtFields:refreshSorting:gtData.length | gtChunk:gtInfo:gtInfo.recordLength:gtInfo.pageCurrent:refreshPageArray:gtData.length:gtEvent:data)">
        <tr [ngClass]="{'row-selected':metaInfo[row.$$gtRowId]?.isSelected, 'row-open':metaInfo[row.$$gtRowId]?.isOpen, 'row-loading':loading}" (click)="gtOptions.rowSelection ? toggleSelect(row):null">
          <td *ngFor="let column of row | gtRender:gtSettings:gtFields:refreshPipe:loading:gtOptions.highlightSearch:gtInfo.searchTerms;" ngClass="{{column.objectKey +'-column' | dashCase}} {{gtFields | gtProperty:column.objectKey:'classNames'}} {{(gtFields | gtProperty:column.objectKey:'inlineEdit') ? 'gt-inline-edit':''}} {{column.edited ? 'gt-edited':''}}">
            <span class="gt-row-label" *ngIf="gtOptions.stack">{{(gtFields | gtProperty:column.objectKey:'stackedHeading')? (gtFields | gtProperty:column.objectKey:'stackedHeading'):(gtFields | gtProperty:column.objectKey:'name')}}</span>
            <gt-custom-component-factory *ngIf="column.columnComponent" class="gt-row-content" [type]="column.columnComponent.type" [injector]="column.columnComponent.injector" [row]="row" [column]="column" (redrawEvent)="redraw($event)" (click)="column.click ? column.click(row,column):'';column.expand ? toggleCollapse(row):''"></gt-custom-component-factory>
            <span *ngIf="!column.columnComponent && !(gtFields | gtProperty:column.objectKey:'inlineEdit')" class="gt-row-content" [innerHTML]="column.renderValue" (click)="column.click ? column.click(row,column):'';column.expand ? toggleCollapse(row):''"></span>
            <ng-template [ngIf]="!column.columnComponent && (gtFields | gtProperty:column.objectKey:'inlineEdit') === true">
              <input class="inline-edit" type="text" [(ngModel)]="column.renderValue" (keyup)="gtUpdateColumn($event,row, column)">
              <span class="gt-inline-edit-notice">{{gtTexts.inlineEditEdited}}</span>
            </ng-template>
            <gt-dropdown *ngIf="!column.columnComponent && (gtFields | gtProperty:column.objectKey:'inlineEdit') && (gtFields | gtProperty:column.objectKey:'inlineEdit').length > 0" [options]="gtFields | gtProperty:column.objectKey:'inlineEdit'" [(selected)]="column.renderValue" (selectedChange)="gtSelect(row, column)">Add inline editing module</gt-dropdown>
          </td>
        </tr>
        <tr class="row-expanded" *ngIf="metaInfo[row.$$gtRowId]?.isOpen">
          <td [attr.colspan]="(gtFields | gtVisible:gtSettings:refreshPipe).length">
            <gt-expanding-row [row]="row" [type]="gtRowComponent" (redrawEvent)="redraw($event)" (toggleRowEvent)="toggleCollapse($event)"></gt-expanding-row>
          </td>
        </tr>
      </ng-template>
      <tr *ngIf="gtInfo.pageTotal === 0 && (gtInfo.searchTerms || gtInfo.filter) && !loading">
        <td class="gt-no-matching-results" [attr.colspan]="(gtFields | gtVisible:gtSettings).length">{{gtTexts.noMatchingData}}</td>
      </tr>
      <tr *ngIf="gtInfo.pageTotal === 0 && !(gtInfo.searchTerms || gtInfo.filter) && !loading">
        <td class="gt-no-results" [attr.colspan]="(gtFields | gtVisible:gtSettings).length">{{gtTexts.noData}}</td>
      </tr>
      <tr *ngIf="gtInfo.pageTotal === 0 && loading">
        <td class="gt-loading-data" [attr.colspan]="(gtFields | gtVisible:gtSettings).length">{{gtTexts.loading}}</td>
      </tr>
      </tbody>
    </table>
    <table class="table" ngClass="{{gtClasses}} {{gtOptions.stack ? 'table-stacked':''}}"  *ngIf="gtFields && gtSettings && (gtFields | gtVisible:gtSettings:refreshPipe).length === 0">
      <thead>
      <tr>
        <th class="gt-no-visible-columns">{{gtTexts.noVisibleColumnsHeading}}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="gt-no-visible-columns">{{gtTexts.noVisibleColumns}}</td>
      </tr>
      </tbody>
    </table>
    <table class="table" ngClass="{{gtClasses}} {{gtOptions.stack ? 'table-stacked':''}}"  *ngIf="!gtFields || !gtSettings">
      <thead>
      <tr>
        <th class="gt-loading-config">&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="gt-loading-config">&nbsp;</td>
      </tr>
      </tbody>
    </table>
  `,
})
export class GenericTableComponent<R extends GtRow, C extends GtExpandedRow<R>> implements OnInit, OnChanges {
  get gtTotals(): any {
    return this._gtTotals;
  }

  get gtFields(): GtConfigField<R, any>[] {
    return this._gtFields;
  }

  get gtSettings(): GtConfigSetting[] {
    return this._gtSettings;
  }

  get gtData(): Array<any> {
    return this._gtData;
  }

  @Input() set gtTotals(value: any) {
    this._gtTotals = value;
  }
  @Input() set gtFields(value: GtConfigField<R, any>[]) {
    this._gtFields = value;
  }
  @Input() set gtSettings(value: GtConfigSetting[]) {
    this._gtSettings = value;
  }
  @Input() set gtData(value: Array<any>) {
    this._gtData = value;
  }

  @Input() gtRowComponent: Type<C>;
  public configObject: GtConfig<R>;
  public sortOrder: Array<any> = [];
  public metaInfo: {[gtRowId: string]: GtRowMeta} = {};
  public selectedRows: Array<GtRow> = [];
  public openRows: Array<GtRow> = [];
  private _gtSettings: GtConfigSetting[] = [];
  private _gtFields: GtConfigField<R, any>[] = [];
  private _gtData: Array<any>;
  private _gtTotals:any;
  public gtDefaultTexts: GtTexts = {
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
  @Input() gtTexts: GtTexts = this.gtDefaultTexts;
  @Input() gtClasses: string;
  @Output() gtEvent: EventEmitter<any> = new EventEmitter();
  public gtDefaultOptions: GtOptions = {
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
  @Input() gtOptions: GtOptions = this.gtDefaultOptions;
  public store: Array<any> = [];
  public loading = true;
  private debounceTimer: void = null;
  public loadingProperty: string;

  @Input() gtInfo: GtInformation = {
    pageCurrent: 1,
    pageTotal: 0,
    recordFrom: 0,
    recordTo: 0,
    recordLength: this.gtOptions.numberOfRows,
    recordsAll: 0,
    recordsAfterFilter: 0,
    recordsAfterSearch: 0
  };

  public refreshPipe = false;
  public refreshTotals = false;
  public refreshSorting = false;

  constructor() {
    this.gtEvent.subscribe(($event: any) => {
      if ($event.name === 'gt-info') {
        this.updateRecordRange();
      }
      if ($event.name === 'gt-row-updated') {
        this.updateTotals();
      }
    });
  }

  /**
   * Sort table by object key.
   * @param {string} objectKey - name of key to sort on.
   * @param {any} event - such as key press during sorting.
   */
  private gtSort = function (objectKey: string, event: any) {
    //console.log('key pressed:',objectKey,event.metaKey);

    // loop through current settings
    for (let i = 0; i < this._gtSettings.length; i++) {
      if (this._gtSettings[i].objectKey === objectKey) {

        // check if sorting is disabled...
        if (this._gtSettings[i].sort && this._gtSettings[i].sort.indexOf('disable') !== -1) {
          //...if so, exit function without applying any sorting
          return;
        }
        // check if sorting is undefined...
        else if (typeof this._gtSettings[i].sort === 'undefined'){

          //...is so, set sorting property to enable
          this._gtSettings[i].sort = 'enable';
        }
      }
    }

    // check length
    const ctrlKey = event.metaKey || event.ctrlKey;
    const sort = this.sortOrder.slice(0);

    let match = -1;
    let matchDesc = -1;
    let pos = -1;

    // check if property already exits
    for (let i = 0; i < sort.length; i++) {
      const hit = sort[i].indexOf(objectKey);
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
          } else if (this.sortOrder.length > 1) {
            // ...remove sorting if sorted desc
            this.sortOrder.splice(pos, 1);
          } else if (this.sortOrder.length === 1) {
            // ...set sorting to asc if only sorted property
            this.sortOrder[pos] = objectKey;
          }
          break;
      }
    }
    // if ctrl key or meta key is not press together with sort...
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
    for (let i = 0; i < this._gtSettings.length; i++) {
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
      } else if (this._gtSettings[i].sort && this._gtSettings[i].sort.indexOf('disable') === -1 && this.sortOrder.indexOf(this._gtSettings[i].objectKey) === -1 && this.sortOrder.indexOf('-' + this._gtSettings[i].objectKey) === -1) {
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
  public changeRowLength = function (rowLength: any, reset?: boolean) {
    //console.log('change rows');
    let newPosition = 1;

    // if reset is not true and we're not lazy loading data...
    if (reset !== true && this.gtOptions.lazyLoad !== true) {

      // ...get current position in record set
      const currentRecord = this.gtInfo.recordLength * (this.gtInfo.pageCurrent - 1);
      const currentPosition = this._gtData.indexOf(this._gtData[currentRecord]) + 1;

      // ...get new position
      newPosition = Math.ceil(currentPosition / rowLength);
    }

    // change row length
    this.gtInfo.recordLength = parseInt(rowLength);

    // go to new position
    this.gtInfo.pageCurrent = newPosition;

    // if lazy loading data...
    if (this.gtOptions.lazyLoad) {

      // ...replace data with place holders for new data
      this._gtData[0] = this.loadingContent(rowLength);

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
  public redraw = function () {
    this.refreshSorting = !this.refreshSorting;
    this.refreshPageArray = !this.refreshPageArray;
    this.refreshPipe = !this.refreshPipe;
  };

  /** Update record range. */
  private updateRecordRange() {
    this.gtInfo.recordFrom = this.gtInfo.recordsAfterSearch === 0 ? 0 : (this.gtInfo.pageCurrent - 1) * this.gtInfo.recordLength + 1;
    this.gtInfo.recordTo = this.gtInfo.recordsAfterSearch < this.gtInfo.pageCurrent * this.gtInfo.recordLength ? this.gtInfo.recordsAfterSearch : this.gtInfo.pageCurrent * this.gtInfo.recordLength;
    //this._changeDetectionRef.detectChanges();
  };

  /** Update totals. */
  private updateTotals() {
    this.refreshTotals = !this.refreshTotals;
  }

  /** Go to next page. */
  public nextPage = function () {
    const page = this.gtInfo.pageCurrent === this.gtInfo.pageTotal ? this.gtInfo.pageTotal : this.gtInfo.pageCurrent += 1;
    this.goToPage(page);

    // prevent browser reload
    //event.preventDefault();
  };

  /** Go to previous page. */
  public previousPage = function () {
    const page = this.gtInfo.pageCurrent === 1 ? 1 : this.gtInfo.pageCurrent -= 1;
    this.goToPage(page);

    // prevent browser reload
    //event.preventDefault();
  };

  /** Request more data (used when lazy loading) */
  private getData = function () {
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
  public goToPage = function (page: number) {

    this.gtInfo.pageCurrent = page;

    // if lazy loading and if page contains no records...
    if (this.gtOptions.lazyLoad) {

      // ...if data for current page contains no entries...
      if (this.gtOptions.cache === false || this._gtData[this.gtInfo.pageCurrent - 1].length === 0) {
        // ...create temporary content while waiting for data
        this._gtData[this.gtInfo.pageCurrent - 1] = this.loadingContent(this.gtInfo.recordLength);
        this.loading = true; // loading true
      }
      // ...if first entry in current page equals our loading placeholder...
      if (this._gtData[this.gtInfo.pageCurrent - 1][0][this.loadingProperty] === this.gtTexts.loading) {

        // ...get data
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
          this.getData();
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
   * Get meta data for row.
   */
  public getRowState(row: R): GtRowMeta {
    return typeof this.metaInfo[row.$$gtRowId] === 'undefined' ? null : this.metaInfo[row.$$gtRowId];
  }

  /**
   * Expand all rows.
   */
  public expandAllRows(): void {
    this._toggleAllRowProperty('isOpen', true);
  }

  /**
   * Collapse all rows.
   */
  public collapseAllRows(): void {
    this._toggleAllRowProperty('isOpen', false);
  }

  /**
   * Select all rows.
   */
  public selectAllRows(): void {
    this._toggleAllRowProperty('isSelected', true);
  }

  /**
   * Deselect all rows.
   */
  public deselectAllRows(): void {
    this._toggleAllRowProperty('isSelected', false);
  }

  /**
   * Toggle row collapsed state ie. expanded/open or collapsed/closed.
   * @param {GtRow} row - row object that should be expanded/collapsed.
   */
  public toggleCollapse(row: GtRow) {
    this._toggleRowProperty(row, 'isOpen');
  }

  /**
   * Toggle row selected state ie. selected or not.
   * @param {GtRow} row - row object that should be selected/deselected.
   */
  public toggleSelect(row: GtRow) {
    this._toggleRowProperty(row, 'isSelected');
  }

  /**
   * Edit row data.
   * @param {GtRow} row - row object that has been edited.
   * @param {GtRow} oldValue - row object before edit.
   */
  public editRow(row: GtRow, oldValue: GtRow) {
    this._toggleRowProperty(row, 'isEdited', oldValue);
  }

  /**
   * Update meta info for all rows, ie. isSelected, isOpen.
   * @param {Array} array - array that holds rows that need to be updated.
   * @param {string} property - name of property that should be changed/toggled.
   * @param {boolean} active - should rows be expanded/open, selected.
   * @param {GtRow} exception - update all rows except this one.
   */
  private _updateMetaInfo(array: Array<GtRow>, property: string, active: boolean, exception?: GtRow) {
    for (let i = 0; i < array.length; i++) {
      if (!this.metaInfo[array[i].$$gtRowId]) {
        this.metaInfo[array[i].$$gtRowId] = {};
      }
      if (exception && array[i].$$gtRowId === exception.$$gtRowId){
      } else {
        this.metaInfo[array[i].$$gtRowId][property] = active;
      }
    }
  }

  /**
   * Push selected/expanded lazy loaded rows to array with meta data.
   * @param {Array} target - array to which rows should be added.
   * @param {Array} source - array that holds rows that should be added.
   * @returns {Array} array with added rows.
   */
  private _pushLazyRows(target: Array<GtRow>, source: Array<GtRow>): Array<GtRow> {
    for (let i = 0; i < source.length; i ++) {
      target.push(source[i]);
    }
    return target;
  }

  /**
   * Toggle meta info for all rows, ie. isSelected, isOpen.
   * @param {string} property - name of property that should be changed/toggled.
   * @param {boolean} active - should rows be expanded/open, selected.
   */
  private _toggleAllRowProperty(property: string, active: boolean) {
    let eventName: string;
    let eventValue: any;
    switch (property) {
      case 'isOpen':
        // check if multiple expanded rows are allowed...
        if (this.gtOptions.rowExpandAllowMultiple === false){

          //...if not, exit function
          console.log('feature disabled: enable by setting "rowExpandAllowMultiple = true"');
          return;
        }
        if (active) {
          eventName = 'expand-all';
          this.openRows = this.gtOptions.lazyLoad ? this._pushLazyRows(this.openRows, this._gtData[this.gtInfo.pageCurrent - 1].slice()) : this._gtData.slice();
          this._updateMetaInfo(this.openRows, property, active);
        } else {
          eventName = 'collapse-all';
          this._updateMetaInfo(this.openRows, property, active);
          this.openRows = [];
        }
        eventValue = {
          expandedRows: this.openRows,
          changedRow: 'all'
        };
        //array = this.openRows;
        break;
      case 'isSelected':
        // check if multi row selection is allowed...
        if (this.gtOptions.rowSelectionAllowMultiple === false){

          //...if not, exit function
          console.log('feature disabled: enable by setting "rowSelectionAllowMultiple = true"');
          return;
        }
        if (active) {
          eventName = 'select-all';
          this.selectedRows = this.gtOptions.lazyLoad ? this._pushLazyRows(this.selectedRows, this._gtData[this.gtInfo.pageCurrent - 1].slice()) : this._gtData.slice();
          this._updateMetaInfo(this.selectedRows, property, active);
        } else {
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
  }

  /**
   * Toggle meta info for row, ie. isSelected, isOpen.
   * @param {Object} row - row object.
   * @param {string} property - name of property that should be changed/toggled.
   * @param {any} propertyValues - optional property values that can be passed.
   */
  private _toggleRowProperty(row: GtRow, property: string, propertyValues?: any) {

    let eventName: string;
    let eventValue: any;
    // make sure gtRowId exists on row object
    if (typeof row.$$gtRowId !== 'undefined') {

      // check if meta info exists for row
      if (!this.metaInfo[row.$$gtRowId]) {

        // if not, add object to store meta info
        this.metaInfo[row.$$gtRowId] = {};
      }

      switch (property) {
        case 'isOpen':
          const opened = this.metaInfo[row.$$gtRowId][property];

          // check if multiple expanded rows are allowed...
          if (this.gtOptions.rowExpandAllowMultiple === false){

            //...if not, collapse all rows except current row
            this._updateMetaInfo(this.openRows, property, false, row);
            this.openRows = [];
          }

          // check if row is expanded
          if (!opened) {
            eventName = 'expand';
            // add row to expanded rows
            this.openRows.push(row);

          } else {
            eventName = 'collapse';
            // loop through expanded rows...
            for (let i = 0; i < this.openRows.length; i++) {

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
          const selected = this.metaInfo[row.$$gtRowId][property];

          // check if multi row selection is allowed...
          if (this.gtOptions.rowSelectionAllowMultiple === false){

            //...if not, deselect all rows except current row
            this._updateMetaInfo(this.selectedRows, property, false, row);
            this.selectedRows = [];
          }

          // check if row is selected
          if (!selected) {
            eventName = 'select';
            // add row to selected rows
            this.selectedRows.push(row);

          } else {
            eventName = 'deselect';
            // loop through selected rows...
            for (let i = 0; i < this.selectedRows.length; i++) {

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

        case 'isEdited':
          eventName = 'updated';
          const oldValue = propertyValues;
          // check if edit object exists for row
          if (typeof this.metaInfo[row.$$gtRowId][property] === 'undefined') {
            this.metaInfo[row.$$gtRowId][property] = {
              originalValue: oldValue,
              oldValue: oldValue,
              newValue: row
            };
          } else {
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
      if (property !== 'isEdited') {
        this.metaInfo[row.$$gtRowId][property] = !this.metaInfo[row.$$gtRowId][property];
      }
    }

  }


  /**
   * Update column.
   * @param {Object} $event - key up event.
   * @param {GtRow} row - row object.
   * @param {GtRenderField} column - column object.
   */
  public gtUpdateColumn($event:KeyboardEvent, row: GtRow, column: GtRenderField<any, any>) {

    switch ($event.key) {
      case 'Enter': // update data object
        const oldValue = {...row};
        row[column.objectKey] = column.renderValue;
        this.editRow(row, oldValue);
        column.edited = false;
        break;
      case 'Escape': // cancel
        column.renderValue = row[column.objectKey];
        column.edited = false;
        break;
      default: // mark cell as edited if value has changed
        column.edited = row[column.objectKey] !== column.renderValue;
        break;
    }
  }

  public gtSelect(row: GtRow, column: GtRenderField<any, any>) {
    const oldValue = {...row};
    row[column.objectKey] = column.renderValue;
    this.editRow(row, oldValue);
  }

  /**
   * Apply filter(s).
   * @param {Object} filter - object containing key value pairs, where value should be array of values.
   */
  public gtApplyFilter(filter: Object) {
    this.gtInfo.filter = filter;
    // go to first page
    this.goToPage(1);
    this.updateTotals();
  };

  /** Clear/remove applied filter(s). */
  public gtClearFilter() {
    this.gtInfo.filter = false;
    this.updateTotals();
    //this.updateRecordRange();
  };

  /**
   * Search
   * @param {string} value - string containing one or more words
   */
  public gtSearch(value: string) {
    this.gtInfo.searchTerms = value;
    //always go to first page when searching
    this.goToPage(1);
    this.updateTotals();
  };

  /**
   * Create store to hold previously loaded records.
   * @param {number} records - total number of records in store.
   * @param {number} perPage - how many records to show per page.
   * @returns {Array} a nested array to hold records per page.
   */
  private createStore(records: number, perPage: number) {
    const stores = Math.ceil(records / perPage);
    const store: Array<Array<any>> = [];
    for (let i = 0; i < stores; i++) {
      store[i] = [];
    }
    return store;
  };


  /**
   * Create placeholders for rows while loading data from back-end.
   * @param {number} perPage - how many records to show per page.
   * @returns {Array} an array containing empty records to be presented while fetching real data.
   */
  private loadingContent(perPage: number) {

    // create row object
    const rowObject: Object = {
      $$loading: true
    };
    let order = 0;

    // sort settings by column order
    this._gtSettings.sort(this.getColumnOrder);


    // loop through all settings objects...
    for (let i = 0; i < this._gtSettings.length; i++) {
      const setting = this._gtSettings[i];

      // ...if column is visible and enabled...
      if (setting.visible !== false && setting.enabled !== false) {
        // ...if first column, set value to loading text otherwise leave it empty
        if (order === 0) {
          //console.log(setting.objectKey);
          rowObject[setting.objectKey] = this.gtTexts.loading;
          this.loadingProperty = setting.objectKey;
        } else {
          rowObject[setting.objectKey] = '';
        }
        order++;
      } else {
        rowObject[setting.objectKey] = '';
      }
    }

    // create content placeholder
    const contentPlaceholder: Array<any> = [];

    // create equal number of rows as rows per page
    for (let i = 0; i < perPage; i++) {
      // ...add temporary row object
      contentPlaceholder.push(rowObject);
    }
    return contentPlaceholder;
  };

  // TODO: move to helper functions
  /** Sort by sort order */
  private getSortOrder = function (a: GtConfigSetting, b: GtConfigSetting) {
    if (a.sortOrder < b.sortOrder)
      return -1;
    if (a.sortOrder > b.sortOrder || typeof a.sortOrder === 'undefined')
      return 1;
    return 0;
  };

  // TODO: move to helper functions
  /** Sort by column order */
  private getColumnOrder = function (a: GtConfigSetting, b: GtConfigSetting) {
    if (a.columnOrder === undefined) {
      return -1;
    }
    if (a.columnOrder < b.columnOrder)
      return -1;
    if (a.columnOrder > b.columnOrder)
      return 1;
    return 0;
  };

  /** Store filtered data for export */
  private data: {
    exportData: Array<any>
  } = {
    exportData: []
  };

  /** Export data as CSV
   * @param {string} fileName - optional file name (overrides default file name).
   */
  public exportCSV(fileName?: string) {
    const data = this.data.exportData;
    let csv = '';

    //csv export headers
    for (let i = 0; i < this._gtSettings.length; i++) {
      if (this._gtSettings[i].export !== false) {
        csv += this.getProperty(this._gtFields, this._gtSettings[i].objectKey).name;

        if (i < (this._gtSettings.length - 1)) {
          csv += this.gtOptions.csvDelimiter; //this.csvSeparator;
        }
      }
    }

    // csv export body
    data.forEach((row, i) => {
      csv += '\n';
      for (let i = 0; i < this._gtSettings.length; i++) {
        if (this._gtSettings[i].export !== false) {
          // get field settings
          const fieldSetting = this.getProperty(this._gtFields, this._gtSettings[i].objectKey);

          // get export value, if export function is defined use it otherwise check for value function and as a last resort export raw data
          let exportValue: string = fieldSetting.export && typeof fieldSetting.export === 'function' ?
            fieldSetting.export(row) : fieldSetting.value && typeof fieldSetting.value === 'function' ?
              fieldSetting.value(row) : row[this._gtSettings[i].objectKey];

          // escape export value using double quotes (") if export value contains delimiter
          exportValue = typeof exportValue === 'string' && exportValue.indexOf(this.gtOptions.csvDelimiter) != -1 ? '"' + exportValue + '"' : exportValue;

          csv += exportValue;
          if (i < (this._gtSettings.length - 1)) {
            csv += this.gtOptions.csvDelimiter; //this.csvSeparator;
          }
        }
      }
    });

    const blob = new Blob([csv], {
      type: 'text/csv;charset=utf-8;'
    });

    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, fileName ? fileName : this.gtTexts.csvDownload + '.csv');
    }
    else {
      const link = document.createElement('a');
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
  }

  /** Return property */
  private getProperty = function (array: Array<any>, key: string) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].objectKey === key) {
        return array[i];
      }
    }
  };

  ngOnInit() {

    /** Check and store sort order upon initialization.
     *  This is done by checking sort properties in the settings array of the table, if no sorting is defined
     *  we'll sort the data by the first visible and enabled column in the table(ascending). Please note that actually
     *  sorting have to be done server side when lazy loading data for obvious reasons.  */
      // create sorting array
    const sorting = [];
    if (this._gtSettings){


      // ...sort settings by sort order
      this._gtSettings.sort(this.getSortOrder);

      // ...loop through settings
      for (let i = 0; i < this._gtSettings.length; i++) {
        const setting = this._gtSettings[i];

        // ...if sorted ascending...
        if (setting.sort === 'asc') {
          // ... add to sorting
          sorting.push(setting.objectKey);
        }
        // ...else if sorted descending...
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
        for (let i = 0; i < this._gtSettings.length; i++) {
          const setting = this._gtSettings[i];

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
  }

  /**
   *  Extend object function.
   */
  private extend = function (a: Object, b: Object) {
    for (const key in b)
      if (b.hasOwnProperty(key))
        a[key] = b[key];
    return a;
  };

  ngOnChanges(changes: SimpleChanges) {
    // if gt options have changed...
    if (changes['gtOptions']) {

      // if this is the first change and if number of rows is passed...
      if (changes['gtOptions'].firstChange && this.gtOptions.numberOfRows) {

        // ...update record length and redraw table
        this.gtInfo.recordLength = this.gtOptions.numberOfRows;
        this.redraw();
      }

      // ...extend gtOptions default values with values passed into component
      this.gtOptions = <GtOptions>this.extend(this.gtDefaultOptions, this.gtOptions);

    }

    // if gt texts have changed...
    if (changes['gtTexts']) {

      // ...extend gtOptions default values with values passed into component
      this.gtTexts = <GtTexts>this.extend(this.gtDefaultTexts, this.gtTexts);
    }

    // if gt settings have changed...
    if (this._gtSettings && changes['gtSettings']) {

      // loop through current settings
      for (let i = 0; i < this._gtSettings.length; i++) {

        // set sort enabled/disabled setting
        this._gtSettings[i].sortEnabled = !(this._gtSettings[i].sort && this._gtSettings[i].sort.indexOf('disable') !== -1);

        // check if sorting is undefined...
        if (typeof this._gtSettings[i].sort === 'undefined') {

          //...is so, set sorting property to enable
          this._gtSettings[i].sort = 'enable';
        }

        // check if column order is undefined...
        if (typeof this._gtSettings[i].columnOrder === 'undefined' && this._gtSettings[i].enabled !== false) {

          //...is so, set sorting property to enable
          this._gtSettings[i].columnOrder = this._gtSettings[i - 1] ? this._gtSettings[i - 1].columnOrder + 1 : 0;
        }
      }
    }

    // if lazy loading data and paging information is available...
    if (this.gtOptions.lazyLoad && this.gtInfo) {

      // ...calculate total number of pages
      this.gtInfo.pageTotal = Math.ceil(this.gtInfo.recordsAfterSearch / this.gtInfo.recordLength);


      // ...declare store position
      const storePosition = this.gtInfo.pageCurrent - 1;


      // ...and if store is empty or page length has changed...
      if (this.store.length === 0 || this.store[0].length !== this.gtInfo.recordLength) {
        //console.log('create store');
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
    } else if (this._gtData && this._gtData.length >= 0 && changes['gtData'].previousValue) {
      this.loading = false;
    } else if(changes['gtData'].firstChange && this._gtData && this._gtData.length > 0) {
      this.loading = false;
    }
  }
}
