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

  private highlight = function(string:string,searchString:string){

    // split search term and sort by longest word
    const searchTermsArray = searchString.toLowerCase().match(/"[^"]+"|[\w]+/g).sort(this.getOrderByLength);

    // make sure value is string
    string = string + '';

    let newString = highlightSearchTerm(string, 0);

    function highlightSearchTerm(partialString: string, currentSearchIndex: number) {

      // if search index equals number of search terms...
      if (currentSearchIndex === searchTermsArray.length) {

        // ...return partial string
        return partialString;
      }

      // remove double quotes
      let unescapedSearchString = searchTermsArray[currentSearchIndex].replace(/"/g,'');

      // find unescaped search term
      let searchTermRegExp = new RegExp(`(.*)(${unescapedSearchString})(.*)`, 'ig');

      // remove one tag i.e. skip first element when searching for string
      let tagPattern = new RegExp("(<[^>]*>)([^<]*)(<[^>]*>)","ig");

      // check if string contains tags/elements
      let containsElement = tagPattern.exec(partialString);

      if (containsElement){
        let searchTermMatches = searchTermRegExp.exec(containsElement[2]);
        if (searchTermMatches) {
          return containsElement[1] + highlightSearchTerm(searchTermMatches[1], currentSearchIndex + 1) + '<span class="gt-highlight-search">' + searchTermMatches[2] + '</span>' + highlightSearchTerm(searchTermMatches[3], currentSearchIndex + 1) + containsElement[3];
        } else {
          return containsElement[1] +  highlightSearchTerm(containsElement[2], currentSearchIndex + 1) + containsElement[3] ;
        }
      }

      else {
        let searchTermMatches = searchTermRegExp.exec(partialString);
        if (searchTermMatches) {
          return highlightSearchTerm(searchTermMatches[1], currentSearchIndex + 1) + '<span class="gt-highlight-search">' + searchTermMatches[2] + '</span>' + highlightSearchTerm(searchTermMatches[3], currentSearchIndex + 1);
        } else {
          return highlightSearchTerm(partialString, currentSearchIndex + 1);
        }
      }
    }

    return this.sanitizer.bypassSecurityTrustHtml(newString);
  };

  transform(row:any, settings:[GtConfigSetting], fields:[GtConfigField], updated:boolean, loading:boolean, highlight:boolean = false, searchString?:string) : Array<Object> {
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
export interface GtRenderField {
  objectKey:string, // key for mapping column with settings and totals,
  renderValue?: any,//function(row,column){ return '<span>'+row[column]+'</span>';} // custom function for column presentation (OPTIONAL),
  click?: any, //function(){ return console.log('column clicked);} // click function for column (OPTIONAL),
  expand?: boolean,//"<my-directive></my-directive>" // expand (open/close) row when clicked and add this as content (could be a directive or plain html) (OPTIONAL),
  exportValue: any,//function(row,column){ return parseFloat(row[column]);} // custom function for export presentation (OPTIONAL),
  sortValue: any // should field be searchable, true or false, true by default (OPTIONAL)

}
