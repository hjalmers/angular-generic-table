import {
  Component, Input, ViewChild, TemplateRef, ElementRef, Pipe, PipeTransform, OnInit,
  ChangeDetectorRef, HostListener
} from '@angular/core';
import {GenericTableComponent} from '@angular-generic-table/core';
import {GtConfigSetting} from '@angular-generic-table/core';
import {DragulaService} from 'ng2-dragula';
import {GtColumnSettingsTexts} from '../interfaces/gt-column-settings-texts';

@Pipe({
  name: 'gtColumn'
})
export class GtColumnPipe implements PipeTransform {

  // TODO: move to helper functions
  /** Sort by column order */
  private getColumnOrder(a: any, b: any) {
    if (a.columnOrder < b.columnOrder)
      return -1;
    if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
      return 1;
    return 0;
  };

  /** return enabled columns */
  private getEnabled(column: GtConfigSetting) {
    return column.enabled !== false ? column : null;
  }

  transform(settings: Array<GtConfigSetting>): Array<GtConfigSetting> {

    return settings.filter(this.getEnabled).sort(this.getColumnOrder);
  }
}

@Component({
  selector: 'gt-column-settings',
  template: `
    <ng-template #columnItem let-column let-index="index">
      <span class="badge badge-secondary">{{index}}</span>
      <span (dblclick)="toggleColumnVisibility(column)" class="badge" [ngClass]="{'badge-success':column.visible !== false, 'badge-danger':column.visible === false}">{{genericTable.gtFields | gtProperty:column.objectKey:'name'}}</span>
    </ng-template>
    <div class="gt-column-settings">
      <div class="gt-column-settings-panel"  *ngIf="active" [style.padding-top]="offset" [style.height]="'calc(100% - '+offset+')'">
        <div #gtColumnSettingsHeader class="gt-column-settings-header border-bottom-0" [ngClass]="gtHeaderClasses">
          <button type="button" class="close" aria-label="Close" (click)="toggleColumnSettings()">
            <span aria-hidden="true">&times;</span>
          </button>
          <h6 class="gt-column-settings-title" *ngIf="gtTexts.title">{{gtTexts.title}}</h6>
          <small class="gt-column-settings-help form-text text-muted" *ngIf="gtTexts.help">{{gtTexts.help}}</small>
        </div>
        <div class="gt-column-settings-item-wrapper" [ngClass]="gtWrapperClasses" [dragula]='bagId'  data-visible="true" [style.max-height]="'calc(100% - '+heightAdjust+')'">
          <div class="gt-column-settings-item pr-0 pr-sm-4" *ngFor="let i = index;let column of genericTable.gtSettings | gtColumn" [attr.data-object-key]="column.objectKey">
            <ng-template [ngTemplateOutlet]="gtColumnItem ? gtColumnItem:columnItem" [ngOutletContext]="{$implicit: column,index: this.reordered ? column.columnOrder+1:i+1, name: (genericTable.gtFields | gtProperty:column.objectKey:'name')}"></ng-template>
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
export class GtColumnSettingsComponent implements OnInit{
  get genericTable(): GenericTableComponent<any, any> {
    return this._genericTable;
  }
  /**
 * Check offset height on window resize.
 */
  @HostListener('window:resize', [])
  public onResize() {
    this.offset = this._getTableHeadHeight();
    this.heightAdjust = this._getColumnSettingsHeaderHeight();
  }

  @Input() set genericTable(value: GenericTableComponent<any, any>) {
    this._genericTable = value;
  }

  @ViewChild('genericTableElement') elementView: TemplateRef<ElementRef>;
  @ViewChild('gtColumnSettingsHeader') gtColumnSettingsHeader: ElementRef;

  private _genericTable: GenericTableComponent<any, any>;
  @Input() gtHeaderClasses = 'px-3 pt-3 pb-2 table-bordered border-left-0 border-right-0 border-bottom-0 alert-info';
  @Input() gtWrapperClasses = 'px-3 pb-3 table-bordered border-left-0 border-right-0 border-top-0 alert-info';
  @Input() overlay = true;
  @Input() gtColumnItem: TemplateRef<ElementRef>;
  public gtDefaultTexts: GtColumnSettingsTexts = {
    title: 'Columns',
    help: 'Double click to toggle visibility, drag and drop to reorder.'
  };
  @Input() gtTexts: GtColumnSettingsTexts = this.gtDefaultTexts;

  public active = false;
  public offset: string;
  public heightAdjust: string;
  public reordered = false;
  public bagId: string;

  constructor(private dragulaService: DragulaService, private changeDetectorRef: ChangeDetectorRef) {
    dragulaService.drop.subscribe((value: Array<any>) => {
      if (value[0] === this.bagId){
        this._onDrop(value.slice(1));
      }
    });
  }

  ngOnInit(){


    this.bagId = this.generateId();
    // setup texts
    this.gtTexts = <GtColumnSettingsTexts>this.extend(this.gtDefaultTexts, this.gtTexts);


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

  /**
   * Toggle column settings visibility.
   */
  public toggleColumnSettings() {

    this.active = !this.active;

    if (this.active) {
      this.offset = this._getTableHeadHeight();

      // check and adjust height offset
      setTimeout(() => {
        this.heightAdjust = this._getColumnSettingsHeaderHeight();
      }, 0);
    }
  }

  /**
   * Toggle column visibility.
   * @param {object} column - column object.
   */
  public toggleColumnVisibility(column: any) {

    // toggle column visibility
    column.visible = typeof column.visible === 'undefined' ? false:!column.visible;

    // redraw table
    this._genericTable.redraw();

    // check and reset offset
    setTimeout(() => {
      this.offset = this._getTableHeadHeight();
    }, 0);
  }

  /**
   * Order table by object key.
   * @param {string} args - name of key to sort on.
   */
  private _onDrop(args: Array<any>) {
    this.reordered = true;
    const [e, target] = args;
    const order = {};
    for (let i = 0; i < target.children.length; i++) {
      order[target.children[i].getAttribute('data-object-key')] = i;
    }
    for (let i = 0; i < this._genericTable.gtSettings.length; i++ ) {
      this._genericTable.gtSettings[i].columnOrder = order[this._genericTable.gtSettings[i].objectKey];
    }

    // reset array to trigger change detection
    this._genericTable.gtSettings = [...this._genericTable.gtSettings];
    this.changeDetectorRef.markForCheck();

    this._genericTable.redraw();
  }

  /**
   * Get height of table head element ie. first row containing table headers.
   * @returns {string} offset height for table header in px.
   */
  private _getTableHeadHeight(): string {
    try{
      if (this.elementView.elementRef.nativeElement.nextElementSibling.firstElementChild.firstElementChild.tagName === 'THEAD') {
        return this.elementView.elementRef.nativeElement.nextElementSibling.firstElementChild.firstElementChild.offsetHeight + 'px';
      }
      if (this.elementView.elementRef.nativeElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.tagName === 'THEAD'){
        return this.elementView.elementRef.nativeElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.offsetHeight + 'px';
      }
      return '0px';
    } catch (error) {
      return '0px';
    }
  }

  /**
   * Get height of table head element ie. first row containing table headers.
   * @returns {string} offset height for table header in px.
   */
  private _getColumnSettingsHeaderHeight(): string {
    try{
      return this.gtColumnSettingsHeader.nativeElement.offsetHeight + 'px';
    } catch (error) {
      return '0px';
    }
  }

  /** generate a unique id for dragula instance i.e. a unique bag name*/
  private generateId() {
    let d = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

}
