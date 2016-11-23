import {
  Pipe,
  PipeTransform
} from '@angular/core';
import { GtConfigSetting } from '../interfaces/gt-config-setting';
import {
  GtClickFunc,
  GtConfigField
} from '../interfaces/gt-config-field';
import { DomSanitizer } from '@angular/platform-browser';
import { GtRow } from '../interfaces/gt-row';

export interface GtRenderField<R extends GtRow> {
  objectKey: string;
  renderValue?: any;
  click?: GtClickFunc<R>;
  expand?: boolean;
  exportValue: any;
  sortValue: any;
}

@Pipe({
  name: 'gtRender'
})
export class GtRenderPipe<R extends GtRow> implements PipeTransform {

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

  /** Sort by length */
  private getOrderByLength = function(a,b) {
    return b.length - a.length;
  };

  /** Return property */
  private getProperty = function(array, key){
    for (let i = 0; i < array.length;i++){
      if (array[i].objectKey === key) {
        return array[i];
      }
    }
  };

  private highlight(haystack: any, needles: string) {

    const haystackAlwaysString = haystack + '';
    let highlightedText = haystackAlwaysString; // fallback

    let searchPattern;
    try {

      searchPattern = new RegExp(
        '(' +
        needles.toLowerCase()
          .match(/".*?"|[^ ]+/g) // extract words
          .map(
            needle => needle.replace(/"(.*?)"/, '$1') // strip away '"'
          )
          .join('|') + // combine words
        ')', 'ig'
      );

    } catch (error) {

      return this.sanitizer
        .bypassSecurityTrustHtml(highlightedText);

    }

    const containsTagPattern = /(<.*?>)(.*)(<\/.*?>)/ig;
    const containsTagMatches = containsTagPattern.exec(haystackAlwaysString);

    if (containsTagMatches) { // tag exists in haystack

      highlightedText =
        containsTagMatches[1] +
        containsTagMatches[2]
          .replace(
            searchPattern,
            '<span class="gt-highlight-search">$1</span>'
          ) +
        containsTagMatches[3];

    } else {

      highlightedText =
        haystackAlwaysString
          .replace(
            searchPattern,
            '<span class="gt-highlight-search">$1</span>'
          );

    }

    return this.sanitizer
      .bypassSecurityTrustHtml(highlightedText);

  };

  transform(row: any, settings: Array<GtConfigSetting>, fields: Array<GtConfigField<R>>, updated: boolean, loading: boolean, highlight: boolean = false, searchString?: string): Array<Object> {
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

        let columnObject: GtRenderField<R> = {
          objectKey: key,
          exportValue: fieldSetting.export && typeof fieldSetting.export === 'function' ? fieldSetting.export(row):row[key],
          sortValue: row[key]
        };

        if (highlight && searchString && this.getProperty(settings,key).search !== false){
          columnObject.renderValue = fieldSetting.render && typeof fieldSetting.render === 'function' ? this.highlight(fieldSetting.render(row),searchString):this.highlight(row[key],searchString);
        } else {
          columnObject.renderValue = fieldSetting.render && typeof fieldSetting.render === 'function' ? this.sanitizer.bypassSecurityTrustHtml(fieldSetting.render(row)):row[key];
        }

        if(fieldSetting.click && typeof fieldSetting.click === 'function'){
          columnObject.click = fieldSetting.click;
        }
        if(fieldSetting.expand){
          columnObject.expand = fieldSetting.expand;
        }

        keys.push(columnObject);

      }
    }

    keys.sort(function(a,b){
      return columns.indexOf(a.objectKey) < columns.indexOf(b.objectKey) ? -1 : 1;
    });
    return keys;
  }

}
