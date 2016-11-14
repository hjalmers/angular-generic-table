import {
  Component, OnInit, OnChanges, NgModule, Output, Input, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';
import 'rxjs/Rx';
import {GtConfig} from './interfaces/gt-config';
import {GtConfigField} from "./interfaces/gt-config-field";
import {GtConfigSetting} from "./interfaces/gt-config-setting";
import {Observable} from 'rxjs/Observable';
import {GtTexts} from './interfaces/gt-texts';
import {GtInformation} from './interfaces/gt-information';
import {GtPagingInfo} from './interfaces/gt-paging-info';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'generic-table',
  //templateUrl: './generic-table.component.html',
  //styleUrls: ['./generic-table.component.scss'],
  template:`
<table class="table" ngClass="{{gtClasses}}">
  <thead>
  <tr>
    <th *ngFor="let column of gtFields | gtVisible:gtSettings" ngClass="{{column.objectKey +'-column' | dashCase}} {{column.classNames}} sort-{{gtSettings | getProperty:column.objectKey:'sort':refreshHeading}} sort-order-{{gtSettings | getProperty:column.objectKey:'sortOrder':refreshHeading}}" (click)="gtSort(column.objectKey,$event);refreshHeading = !refreshHeading">{{column.name}}</th>
  </tr>
  </thead>
  <tbody *ngIf="gtLazy">
  <template ngFor let-row [ngForOf]="gtData[gt.currentPage-1]">
    <tr ngClass="{{row.isOpen ? 'row-open':''}}">
      <td *ngFor="let column of row | gtRender:gtSettings:gtFields:refreshPipe:loading" ngClass="{{column.objectKey +'-column' | dashCase}} {{gtFields | getProperty:column.objectKey:'classNames'}}" [innerHTML]="column.renderValue" (click)="column.click ? column.click(row,column):'';column.expand ? row.isOpen = !row.isOpen:''"></td>
    </tr>
    <tr class="expanded-row" *ngIf="row.isOpen">
      <td [attr.colspan]="(gtFields | gtVisible:gtSettings).length">
        <gt-expanding-row [row]="row" [type]="component" (redrawEvent)="redraw($event)"></gt-expanding-row>
      </td>
    </tr>
  </template>
  </tbody>
  <tbody *ngIf="!gtLazy && gtData">
  <template class="table-rows" ngFor let-row [ngForOf]="gtData | gtFilter:gt.filter:gt:refreshFilter:gtData.length | gtSearch:gt.searchTerms:gtFields:gtData.length | gtOrderBy:sortOrder:gtFields:refreshSorting:gtData.length | gtChunk:gt.rowLength:gt.currentPage:refreshPageArray:gtData.length">
    <tr ngClass="{{row.isOpen ? 'row-open':''}}">
      <td *ngFor="let column of row | gtRender:gtSettings:gtFields:refreshPipe:loading" ngClass="{{column.objectKey +'-column' | dashCase}} {{gtFields | getProperty:column.objectKey:'classNames'}}" [innerHTML]="column.renderValue" (click)="column.click ? column.click(row,column):'';column.expand ? row.isOpen = !row.isOpen:''"></td>
    </tr>
    <tr class="expanded-row" *ngIf="row.isOpen">
      <td [attr.colspan]="(gtFields | gtVisible:gtSettings).length">
        <gt-expanding-row [row]="row" [type]="component" (redrawEvent)="redraw($event)"></gt-expanding-row>
      </td>
    </tr>
  </template>
  </tbody>
</table>
`
})
export class GenericTableComponent implements OnInit, OnChanges {

  //public safeInnerHtml = this.sanitizer.bypassSecurityTrustHtml('<gt-expanded-row></gt-expanded-row>');
  @Input() component:any;
  public data: [Object];
  public configObject:GtConfig;
  public sortOrder:Array<any> = [];

  @Input() gtSettings: [GtConfigSetting];
  @Input() gtFields: [GtConfigField];
  @Input() gtPaging: GtPagingInfo;
  @Input() gtData: Array<any>;
  @Input() gtLazy: boolean = false;
  @Input() gtTexts:GtTexts = {
    'loading':'Loading...'
  };
  @Input() gtClasses: string;
  @Output() lazyLoad = new EventEmitter();
  @Output() gtEvent = new EventEmitter();
  public store: Array<any> = [];
  public loading: boolean = false;
  public debounceTimer:void = null;
  public debounceTime:number = 200;
  public loadingProperty:string;
  private refreshPipe:boolean = false;
  private refreshSorting:boolean = false;

  constructor(private sanitizer:DomSanitizer) {}

  /**
   * Sort table by object key.
   * @param {string} objectKey - name of key to sort on.
   * @param {any} event - such as key press during sorting.
   */
  private gtSort = function(objectKey:string,event:any){
    //console.log('key pressed:',objectKey,event.metaKey);

    // check if sorting is disabled
    for (let i = 0; i < this.gtSettings.length;i++){
      if(this.gtSettings[i].objectKey === objectKey){
        if(this.gtSettings[i].sort === 'disable') {
          return;
        }
      }
    }

    // check length
    let ctrlKey = event.metaKey || event.ctrlKey;
    let sort = this.sortOrder.slice(0);

    let match = -1;
    let matchDesc = -1;
    let pos = -1;

    // check if property already exits
    for(let i = 0; i < sort.length; i++) {
      let hit = sort[i].indexOf(objectKey);
      //console.log('match:',sort[i],objectKey,match,hit);
      if(hit !== -1){
        //console.log('MATCH',this.sortOrder,objectKey);
        match = this.sortOrder.indexOf(objectKey);
        matchDesc = match === -1 ?  this.sortOrder.indexOf('-' + objectKey):match;
        pos = Math.max(match, matchDesc);
      }
    }

    // if ctrl key or meta key is press together with sort...
    if(ctrlKey){
      switch(pos){
          // ...and property is not sorted before...
        case -1:
          // ...add property to sorting
          this.sortOrder.push(objectKey);
          break;
        default:
          // ...and property is sorted before...
          if(match !== -1){
            // ...change from asc to desc if sorted asc
            this.sortOrder[pos] = '-'+objectKey;
          } else if (this.sortOrder.length > 1) {
            // ...remove sorting if sorted desc
            this.sortOrder.splice(pos,1);
          } else if (this.sortOrder.length === 1){
            // ...set sorting to asc if only sorted property
            this.sortOrder[pos] = objectKey;
          }
          break;
      }
    }
    // if ctrl key or meta key is not press together with sort...
    else {
      switch(pos){
          // ...and property is not sorted before...
        case -1:
          // ...sort by property
          this.sortOrder = [objectKey];
            break;
        default:
          // ...change from desc to asc and vise versa
          this.sortOrder = match !== -1? ['-'+objectKey]:[objectKey];
          break;
      }
    }

    // update settings object with new sorting information
    for (let i = 0; i < this.gtSettings.length;i++){
      if(this.gtSettings[i].objectKey === objectKey){
        switch(this.gtSettings[i].sort) {
            // if sorted asc...
          case 'asc':
            // ...change to desc
            this.gtSettings[i].sort = 'desc';
            break;
            // if sorted desc...
          case 'desc':
            // ...change to asc if it's the only sorted property otherwise remove sorting
            this.gtSettings[i].sort = this.sortOrder.length === 1  && sort.length < 2 ? 'asc':'enable';
            break;
            // if sorting enabled...
          case 'enable':
            // ...change to asc
            this.gtSettings[i].sort = 'asc';
            break;
        }
        this.gtSettings[i].sortOrder = this.gtSettings[i].sort === 'enable' ? (this.gtSettings.length -1) :this.sortOrder.indexOf(objectKey) === -1 ? this.sortOrder.indexOf('-'+objectKey) : this.sortOrder.indexOf(objectKey);
      } else if(this.gtSettings[i].sort !== 'disable' && this.sortOrder.indexOf(this.gtSettings[i].objectKey) === -1 && this.sortOrder.indexOf('-'+this.gtSettings[i].objectKey) === -1){
        this.gtSettings[i].sort = 'enable';
        this.gtSettings[i].sortOrder = (this.gtSettings.length -1);
      }
    }

    // refresh sorting pipe
    this.refreshSorting = !this.refreshSorting;
    this.refreshPageArray = !this.refreshPageArray;

    // emit sort event
    this.gtEvent.emit({
      name:'gt-sorting-applied',
      value:this.sortOrder
    });
  };

  /**
   * Change number of rows to be displayed.
   * @param {string} rowLength - total number of rows.
   * @param {boolean} reset - how many records to show per page.
   * @returns {number} number of pages to display.
   */
  public changeRowLength = function(rowLength:any,reset?:boolean){
    //console.log('change rows');
    let newPosition = 1;

    // if reset is not true and we're not lazy loading data...
    if(reset !== true && this.gtLazy !== true){

      // ...get current position in record set
      let currentRecord = this.gt.rowLength * (this.gt.currentPage-1);
      let currentPosition = this.gtData.indexOf(this.gtData[currentRecord])+1;

      // ...get new position
      newPosition = Math.ceil(currentPosition/rowLength);
    }

    // change row length
    this.gt.rowLength = parseInt(rowLength);

    // update total pages
    this.updateTotalPages();

    // go to new position
    this.gt.currentPage = newPosition;

    // if lazy loading data...
    if(this.gtLazy){

      // ...replace data with place holders for new data
      this.gtData[0] = this.loadingContent(rowLength);

      // ...empty current store
      this.store = [];
    }

    this.gtEvent.emit({
      name:'gt-row-length-changed',
      value:rowLength
    });
  };

  /**
   * Get total number of pages.
   * @returns {number} number of pages to display.
   */
  private updateTotalPages = function(){
    const gtDataLength: number = this.gtData ? this.gtData.length : 0;
    const rows: number = this.gt.filtered ? this.gt.filtered : gtDataLength;
    this.gt.pagesTotal = Math.ceil(rows/this.gt.rowLength);
    //console.log('get total',this.gt.pagesTotal);
  };

  /**
   * Refresh total number of pages, this function is used by pipes to update total number of pages.
   * @param {number} rows - total number of rows.
   * @param {Object} gt - how many records to show per page.
   * @returns {Array} a nested array to hold records per page.
   */
  private refresh = function(rows:number,gt:GtInformation){
    //console.log('refresh',this.gtPaging);

    if(this.gtPaging){
      gt.pagesTotal = Math.ceil(this.gtPaging.total_records/gt.rowLength);
      //console.log('refresh with paging',gt.pagesTotal,this.gtPaging.total_records);

    } else {
      gt.pagesTotal = Math.ceil(rows/gt.rowLength);
    }
  };

  /**
   * Force a redraw of table rows.
   * As the table uses pure pipes, we need to force a redraw if an object in the array is changed to see the changes.
   */
  private redraw = function(){
    this.refreshPipe = !this.refreshPipe;
  };

  /** Go to next page. */
  public nextPage = function(){
    let page = this.gt.currentPage === this.gt.pagesTotal ? this.gt.pagesTotal:this.gt.currentPage += 1;
    this.goToPage(page);

    // prevent browser reload
    event.preventDefault();
  };

  /** Go to previous page. */
  public previousPage = function(){
    let page = this.gt.currentPage === 1 ? 1:this.gt.currentPage -= 1;
    this.goToPage(page);

    // prevent browser reload
    event.preventDefault();
  };

  /** Request more data (used when lazy loading) */
  private getData = function(){
    // ...emit event requesting for more data
    this.gtEvent.emit({
      name: 'gt-page-changed-lazy',
      value: {page: this.gt.currentPage, pageLength: this.gt.rowLength}
    });
  };

  /**
   * Go to specific page.
   * @param {number} page - page number.
   */
  public goToPage = function(page:number){
    this.gt.currentPage = page;

    // if lazy loading and if page contains no records...
    if(this.gtLazy){

      // ...if data for current page contains no entries...
      if(this.gtData[this.gt.currentPage-1].length === 0) {
        // ...create temporary content while waiting for data
        this.gtData[this.gt.currentPage - 1] = this.loadingContent(this.gt.rowLength);
        this.loading = true; // loading true
      }
      // ...if first entry in current page equals our loading placeholder...
      if(this.gtData[this.gt.currentPage-1][0][this.loadingProperty] === this.gtTexts.loading){

        // ...get data
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
          this.getData();
        },this.debounceTime);
      }
    }

    // ...emit page change event
    this.gtEvent.emit({
      name: 'gt-page-changed',
      value: {page: this.gt.currentPage, pageLength: this.gt.rowLength}
    });
  };

  /**
   * Apply filter(s).
   * @param {Object} filter - object containing key value pairs, where value should be array of values.
   */
  public gtApplyFilter = function(filter:Object) {
    this.gt.filter = filter;
    // go to first page
    this.gt.currentPage = 1;
    //this.updateTotalPages();
  };

  /** Clear/remove applied filter(s). */
  public gtClearFilter = function() {
    this.gt.filter = false;
    //this.updateTotalPages();
  };

  /**
   * Search
   * @param (string) value - string containing one or more words
   */
  public gtSearch = function(value:string){
    this.gt.searchTerms = value;
  };


  private gt:GtInformation = {
    rowLength:10,
    currentPage:1,
    pagesTotal:null,
    filter:false,
    refresh:this.refresh
  };

  /**
   * Create store to hold previously loaded records.
   * @param {number} records - total number of records in store.
   * @param {number} perPage - how many records to show per page.
   * @returns {Array} a nested array to hold records per page.
   */
  private createStore = function(records:number,perPage:number){
    let stores = Math.ceil(records/perPage);
    let store:Array<Array<any>> = [];
    for(var i = 0;i < stores;i++){
      store[i]=[];
    }
    return store;
  };


  /**
   * Create placeholders for rows while loading data from back-end.
   * @param {number} perPage - how many records to show per page.
   * @returns {Array} an array containing empty records to be presented while fetching real data.
   */
  private loadingContent = function(perPage:number){

    // create row object
    let rowObject:Object = {
      $$loading:true
    };
    let order = 0;

    // sort settings by column order
    this.gtSettings.sort(this.getColumnOrder);


    // loop through all settings objects...
    for (var i = 0;i < this.gtSettings.length; i++ ) {
      let setting = this.gtSettings[i];

      // ...if column is visible and enabled...
      if(setting.visible !== false && setting.enabled !== false) {
        // ...if first column, set value to loading text otherwise leave it empty
        if(order === 0){
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
    let contentPlaceholder:Array<any> = [];

    // create equal number of rows as rows per page
    for(var i = 0;i < perPage;i++){
      // ...add temporary row object
      contentPlaceholder.push(rowObject);
    }
    return contentPlaceholder;
  };

  // TODO: move to helper functions
  /** Sort by sort order */
  private getSortOrder = function(a,b) {
    if (a.sortOrder < b.sortOrder)
      return -1;
    if (a.sortOrder > b.sortOrder || typeof a.sortOrder === 'undefined')
      return 1;
    return 0;
  };

  // TODO: move to helper functions
  /** Sort by column order */
  private getColumnOrder = function(a,b) {
    if (a.columnOrder === undefined) {
      return -1;
    }
    if (a.columnOrder < b.columnOrder)
      return -1;
    if (a.columnOrder > b.columnOrder)
      return 1;
    return 0;
  };

  ngOnInit() {

    /** If we're not lazy loading data and handling sorting server side, we want to apply some default sorting.
     *  This is done by checking sort properties in the settings array of the table, if no sorting is defined
     *  we'll sort the data by the first visible and enabled column in the table(ascending). */
    // if not using lazy loading...
    if(!this.gtLazy) {

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
        // ...else if sorted descending...
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
        for (let i = 0; i < this.gtSettings.length; i++) {
          let setting = this.gtSettings[i];

          // ...if column is enabled and visible...
          if (setting.enabled !== false && setting.visible !== false) {

            // ...add first match and exit function
            this.sortOrder = [this.gtSettings[i].objectKey];
            return
          }
        }
      } else {
        this.sortOrder = sorting;
      }
    }

  }

  ngAfterViewInit() {
    //console.log('view');
  }
  ngOnChanges() {
    //console.log('changed');
    if(this.gtPaging){

      this.gt.rowLength = this.gtPaging.per_page;
      this.gt.pagesTotal = this.gtPaging.total_records;
      this.refresh(this.gtPaging.total_records,this.gt);
    } else {
      this.updateTotalPages();

    }

    // if lazy loading data and paging information is available...
    if(this.gtLazy && this.gtPaging){

      // ...declare store position
      let storePosition = this.gtPaging.current_page-1;



      // ...and if store is empty or page length has changed...
      if(this.store.length === 0 || this.store[0].length !== this.gtPaging.per_page){
        //console.log('create store');
        // ...create store
        this.store = this.createStore(this.gtPaging.filtered_records,this.gtPaging.per_page);
        this.gt.pagesTotal = Math.ceil(this.gtPaging.filtered_records/this.gt.rowLength)
      }


      //console.log(this.store[0].length === this.gtPaging.per_page,this.store[0].length, this.gtPaging.per_page);

      //console.log('add to store',this.gtPaging.current_page,this.gtData,storePosition,this.store[storePosition].length,this.store);

      // ...and if store position is empty...
      //if(this.store[storePosition].length === 0 || this.loading){
      //console.log('fill store position:',storePosition);

      // ...store retrieved data in store at store position
      this.store[storePosition] = this.gtData;
      //}

      // replace data with store
      this.gtData = this.store;
      this.loading = false;
    }
  }
  public refreshRender = false;
}

