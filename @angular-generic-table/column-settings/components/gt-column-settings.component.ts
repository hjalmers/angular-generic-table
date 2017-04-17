import {Component, Input, ViewChild, TemplateRef, ElementRef, Pipe, PipeTransform} from '@angular/core';
import {GenericTableComponent} from '@angular-generic-table/core';
import {GtConfigSetting} from '@angular-generic-table/core';
import {DragulaService} from "ng2-dragula";
import {GtColumnSettingsTexts} from "../interfaces/gt-column-settings-texts";

@Component({
  selector: 'gt-column-settings',
  template: `
    <ng-template #columnItem let-column>
      <span class="badge badge-default">{{column.columnOrder + 1}}</span>
      <span (dblclick)="toggleColumnVisibility(column)" class="badge" [ngClass]="{'badge-success':column.visible !== false, 'badge-danger':column.visible === false}">{{genericTable.gtFields | gtProperty:column.objectKey:'name'}}</span>
    </ng-template>
    <div class="gt-column-settings" (window:resize)="onResize($event)">
      <div class="gt-column-settings-panel"  *ngIf="active" [style.padding-top]="offset" [style.height]="'calc(100% - '+offset+')'">
        <div #gtColumnSettingsHeader class="gt-column-settings-header border-bottom-0" [ngClass]="gtHeaderClasses">
          <button type="button" class="close" aria-label="Close" (click)="toggleColumnSettings()">
            <span aria-hidden="true">&times;</span>
          </button>
          <h6 class="gt-column-settings-title" *ngIf="gtTexts.title">{{gtTexts.title}}</h6>
          <small class="gt-column-settings-help form-text text-muted" *ngIf="gtTexts.help">{{gtTexts.help}}</small>
        </div>
        <div class="gt-column-settings-item-wrapper" [ngClass]="gtWrapperClasses" [dragula]='"gt-column-settings"'  data-visible="true" [style.max-height]="'calc(100% - '+heightAdjust+')'">
          <div class="gt-column-settings-item pr-0 pr-sm-4" *ngFor="let i = index;let column of genericTable.gtSettings | gtColumn:true" [attr.data-object-key]="column.objectKey">
            <ng-template [ngTemplateOutlet]="gtColumnItem ? gtColumnItem:columnItem" [ngOutletContext]="{$implicit: column}"></ng-template>
          </div>
        </div>
        <div class="gt-overlay" *ngIf="active && overlay" (click)="toggleColumnSettings()" [style.height]="'calc(100% - -'+offset+')'"></div>
      </div>
      <ng-template #genericTableElement [ngIf]="genericTable">
        <ng-content></ng-content>
      </ng-template>
    </div>
  `
})
export class GtColumnSettingsComponent {

  @ViewChild('genericTableElement') elementView: TemplateRef<ElementRef>;
  @ViewChild('gtColumnSettingsHeader') gtColumnSettingsHeader: ElementRef;

  @Input() genericTable:GenericTableComponent<any,any>;
  @Input() gtHeaderClasses:string = 'px-3 pt-3 pb-2 table-bordered border-left-0 border-right-0 border-bottom-0 alert-info';
  @Input() gtWrapperClasses:string = 'px-3 pb-3 table-bordered border-left-0 border-right-0 border-top-0 alert-info';
  @Input() overlay:boolean = true;
  @Input() gtColumnItem: TemplateRef<ElementRef>;
  public gtDefaultTexts: GtColumnSettingsTexts = {
    title: "Columns",
    help: "Double click to toggle visibility, drag and drop to reorder."
  };
  @Input() gtTexts: GtColumnSettingsTexts = this.gtDefaultTexts;

  public active:boolean = false;
  public offset:string;
  public heightAdjust: string;

  constructor(private dragulaService: DragulaService) {
    dragulaService.drop.subscribe((value:Array<any>) => {
      this._onDrop(value.slice(1));
    });
  }

  ngOnInit(){
    // setup texts
    this.gtTexts = <GtColumnSettingsTexts>this.extend(this.gtDefaultTexts, this.gtTexts);
  }

  /**
   *  Extend object function.
   */
  private extend = function (a: Object, b: Object) {
    for (let key in b)
      if (b.hasOwnProperty(key))
        a[key] = b[key];
    return a;
  };

  /**
   * Toggle column settings visibility.
   */
  public toggleColumnSettings() {

    this.active = !this.active;

    if(this.active) {
      this.offset = this._getTableHeadHeight();

      // check and adjust height offset
      setTimeout(()=>{
        this.heightAdjust = this._getColumnSettingsHeaderHeight();
      },0);
    }
  }

  /**
   * Toggle column visibility.
   * @param {object} column - column object.
   */
  public toggleColumnVisibility(column:any) {
    // toggle column visibility
    column.visible = !column.visible;

    // redraw table
    this.genericTable.redraw();

    // check and reset offset
    setTimeout(()=>{
      this.offset = this._getTableHeadHeight();
    },0)
  }

  /**
   * Sort table by object key.
   * @param {string} args - name of key to sort on.
   */
  private _onDrop(args:Array<any>) {
    let [e, target] = args;
    const order = {};
    for(let i = 0;i < target.children.length;i++) {
      order[target.children[i].getAttribute('data-object-key')] = i;
    }
    for(let i = 0; i < this.genericTable.gtSettings.length; i++ ) {
      this.genericTable.gtSettings[i].columnOrder = order[this.genericTable.gtSettings[i].objectKey];
    }
    this.genericTable.redraw();
  }

  /**
   * Check offset height on window resize.
   */
  public onResize() {
    this.offset = this._getTableHeadHeight();
    this.heightAdjust = this._getColumnSettingsHeaderHeight();
  }

  /**
   * Get height of table head element ie. first row containing table headers.
   * @returns {string} offset height for table header in px.
   */
  private _getTableHeadHeight():string {
    try{
      return this.elementView.elementRef.nativeElement.nextElementSibling.firstElementChild.firstElementChild.offsetHeight + 'px';
    } catch(error) {
      return '0px';
    }
  }

  /**
   * Get height of table head element ie. first row containing table headers.
   * @returns {string} offset height for table header in px.
   */
  private _getColumnSettingsHeaderHeight():string {
    try{
      return this.gtColumnSettingsHeader.nativeElement.offsetHeight + 'px';
    } catch(error) {
      return '0px';
    }
  }

}


@Pipe({
  name: 'gtColumn'
})
export class GtColumnPipe implements PipeTransform {

  // TODO: move to helper functions
  /** Sort by column order */
  private getColumnOrder = function(a:any,b:any) {
    if (a.columnOrder < b.columnOrder)
      return -1;
    if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
      return 1;
    return 0;
  };

  transform(settings: Array<GtConfigSetting>, visible:boolean): Array<GtConfigSetting> {

    return settings.sort(this.getColumnOrder);
  }
}
