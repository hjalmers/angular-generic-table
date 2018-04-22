import { Component, OnInit } from '@angular/core';
import { GtExpandedRow } from './gt-expanding-row.component';

@Component({
	selector: 'gt-drilldown',
	template: `
      <table class="table">
          <tr *ngFor="let row of data">
              <!--<td *ngFor="let column of gtSettings" [style.width]="columnWidth[column.objectKey]">{{column.objectKey}}</td>-->
              <td *ngFor="let column of row | gtRender:gtSettings:gtFields:refreshPipe:loading:gtOptions.highlightSearch:gtInfo.searchTerms;"
                  ngClass="{{column.objectKey +'-column' | dashCase}} {{gtFields | gtProperty:column.objectKey:'classNames'}} {{(gtFields | gtProperty:column.objectKey:'inlineEdit') ? 'gt-inline-edit':''}} {{column.edited ? 'gt-edited':''}} {{ gtFields | gtColumnClass:row:column }}" [style.width]="columnWidth[column.objectKey]" [style.max-width]="columnWidth[column.objectKey]">
                        <span class="gt-row-label"
                              *ngIf="gtOptions.stack">{{(gtFields | gtProperty:column.objectKey:'stackedHeading') ? (gtFields | gtProperty:column.objectKey:'stackedHeading') : (gtFields | gtProperty:column.objectKey:'name')}}</span>
                  <gt-custom-component-factory *ngIf="column.columnComponent" class="gt-row-content"
                                               [type]="column.columnComponent.type"
                                               [injector]="column.columnComponent.injector" [row]="row"
                                               [column]="column" (redrawEvent)="redraw($event)"
                                               (click)="column.click ? column.click(row,column,$event):'';column.expand ? toggleCollapse(row):''"></gt-custom-component-factory>
                  <span *ngIf="!column.columnComponent"
                        class="gt-row-content" [innerHTML]="column.renderValue"
                        (click)="column.click ? column.click(row,column,$event):''"></span>
              </td>

          </tr>
      </table>
  `,
	styles: []
})
export class GtDrilldownComponent extends GtExpandedRow<any> implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
