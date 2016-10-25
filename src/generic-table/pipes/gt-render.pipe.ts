import { Pipe, PipeTransform } from '@angular/core';
import {GtConfigSetting} from "../interfaces/gt-config-setting";
import {GtConfigField} from "../interfaces/gt-config-field";
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'gtRender'
})
export class GtRenderPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){
    this.sanitizer = sanitizer;
  }

  // TODO: move to helper functions
  /** Sort by column order */
  private getColumnOrder = function(a,b) {
    if (a.columnOrder < b.columnOrder)
      return -1;
    if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
      return 1;
    return 0;
  };

  transform(row:any, settings:[GtConfigSetting], fields:[GtConfigField], updated:boolean, loading:boolean) : Array<Object> {
    //let arr = [{"temp":123,"name":"happy"},{"temp":456,"name":"dfgdfg"},{"temp":789,"name":"asdasd"}];
    //console.log(arr,arr.map(function(item){return item.temp}));
    //console.log(settings.map('objectKey'));

    //console.log('render');
    let columns = [];
    for (let i = 0; i < settings.length; i++) {
      if(settings[i].visible !== false && settings[i].enabled !== false) {
        columns.push(settings[i].objectKey);
      }
    }

    for (let i = 0; i < fields.length;i++){
      //console.log(!row[fields[i].objectKey]);
      if(fields[i].value && typeof fields[i].value === 'function' && !row[fields[i].objectKey]){
        row[fields[i].objectKey] = fields[i].value(row);
      }
    }
    //console.log(row);
    let keys = [];
    for (let key in row) {
      //console.log(key);
      if(columns.indexOf(key) !== -1){
        let fieldSetting;
        for (let i = 0; i < fields.length;i++){
          if(fields[i].objectKey === key){
            fieldSetting = fields[i];
            //console.log(fieldSetting);
          }
        }

        let columnObject:GtRenderField = {
          objectKey: key,
          renderValue: fieldSetting.render && typeof fieldSetting.render === 'function' ? this.sanitizer.bypassSecurityTrustHtml(fieldSetting.render(row)):row[key],
          exportValue: fieldSetting.export && typeof fieldSetting.export === 'function' ? fieldSetting.export(row):row[key],
          sortValue: row[key]
        };
        if(fieldSetting.click && typeof fieldSetting.click === 'function'){
          columnObject.click = fieldSetting.click;
        }
        if(fieldSetting.expand){
          columnObject.expand = fieldSetting.expand;
        }
        //console.log(loading,columnObject);
        keys.push(columnObject);

      }
    }

    keys.sort(function(a,b){
      return columns.indexOf(a.objectKey) < columns.indexOf(b.objectKey) ? -1 : 1;
    });
    return keys;
  }

}
export interface GtRenderField {
  objectKey:string, // key for mapping column with settings and totals,
  renderValue?: any,//function(row,column){ return '<span>'+row[column]+'</span>';} // custom function for column presentation (OPTIONAL),
  click?: any, //function(){ return console.log('column clicked);} // click function for column (OPTIONAL),
  expand?: string,//"<my-directive></my-directive>" // expand (open/close) row when clicked and add this as content (could be a directive or plain html) (OPTIONAL),
  exportValue: any,//function(row,column){ return parseFloat(row[column]);} // custom function for export presentation (OPTIONAL),
  sortValue: any // should field be searchable, true or false, true by default (OPTIONAL)

}
