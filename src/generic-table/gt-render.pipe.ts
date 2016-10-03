import { Pipe, PipeTransform } from '@angular/core';
import {GtConfigSetting} from "./gt-config-setting";
import {GtConfigField} from "./gt-config-field";
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'gtRender'
})
export class GtRenderPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){
    this.sanitizer = sanitizer;
  }

  transform(row:any, settings:[GtConfigSetting], fields:[GtConfigField]) : Array<Object> {
    //let arr = [{"temp":123,"name":"happy"},{"temp":456,"name":"dfgdfg"},{"temp":789,"name":"asdasd"}];
    //console.log(arr,arr.map(function(item){return item.temp}));
    //console.log(settings.map('objectKey'));

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
        keys.push({
          objectKey: key,
          renderValue: fieldSetting.render && typeof fieldSetting.render === 'function' ? this.sanitizer.bypassSecurityTrustHtml(fieldSetting.render(row)):row[key],
          exportValue: fieldSetting.export && typeof fieldSetting.export === 'function' ? fieldSetting.export(row):row[key],
          sortValue: row[key]
        });

      }
    }
    //console.log(keys);
    return keys;
  }

}
