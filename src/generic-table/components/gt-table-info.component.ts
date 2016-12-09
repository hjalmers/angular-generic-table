import {Component, ChangeDetectorRef, AfterViewChecked} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';
import {GenericTableComponent} from './generic-table.component';

@Component({
  selector: 'gt-table-info',
  template: `<span>{{(customText? customText:genericTable.gtTexts) | gtTableInfo:genericTable.gtInfo:genericTable.gtInfo.recordsAfterSearch:genericTable.gtInfo.recordFrom:genericTable.gtInfo.recordTo}}</span>`
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
    let text:string = texts.tableInfo;
    if(keys.recordsAfterSearch !== keys.recordsAll){
      text = texts.tableInfoAfterSearch;
    }
    for (var key in keys) {
      if( keys.hasOwnProperty(key) ) {
        let searchString = new RegExp('#'+key, 'g');
        text = text.replace(searchString,keys[key]);
      }
    }
    return text;
  };
}
