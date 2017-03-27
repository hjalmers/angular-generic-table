import {Component, ChangeDetectorRef, AfterViewChecked, Input} from '@angular/core';
import {GenericTableComponent} from './generic-table.component';

@Component({
  selector: 'gt-table-info',
  template: `<span *ngIf="genericTable.gtInfo">{{(customText? customText:genericTable.gtTexts) | gtTableInfo:genericTable.gtInfo:genericTable.gtInfo.recordsAfterSearch:genericTable.gtInfo.recordFrom:genericTable.gtInfo.recordTo:genericTable.gtInfo.recordsAll:genericTable.gtTexts.loading:genericTable.gtTexts.tableInfoAfterSearch}}</span>`
})
export class GtTableInfoComponent implements AfterViewChecked {

  @Input() genericTable:GenericTableComponent<any,any>;
  @Input() customText:string;

  constructor(private _changeDetectionRef : ChangeDetectorRef) {
  }

  ngAfterViewChecked(){
    this._changeDetectionRef.detectChanges();
  }
}
import { Pipe, PipeTransform } from '@angular/core';
import { GtInformation } from '../interfaces/gt-information';
import { GtTexts } from '../interfaces/gt-texts';

@Pipe({
  name: 'gtTableInfo'
})
export class TableInfoPipe implements PipeTransform {

  transform(texts:GtTexts,keys:GtInformation,refresh:number): string {
    let text = texts.tableInfo;
    if(keys.recordsAfterSearch !== keys.recordsAll){
      text = texts.tableInfoAfterSearch;
    }
    for (let key in keys) {
      if( keys.hasOwnProperty(key) ) {
        let searchString = new RegExp('#'+key, 'g');
        text = text.replace(searchString,keys[key]);
      }
    }
    return text;
  };
}
