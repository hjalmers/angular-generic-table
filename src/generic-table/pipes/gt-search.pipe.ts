import { Pipe, PipeTransform } from '@angular/core';
import {GtConfigField} from "../interfaces/gt-config-field";


@Pipe({
  name: 'gtSearch'
})
export class GtSearchPipe implements PipeTransform {

  transform(allRows: any, searchTerms: string, fieldsSettings: Array<GtConfigField>, refreshData: number): any {

    let search: any = {};
    let fields: Array<any> = [];

    for(let k=0; k<fieldsSettings.length; k++){
      let fieldSettings = fieldsSettings[k];
      if(fieldSettings.search && typeof fieldSettings.search ==='function'){
        let objectKey = fieldSettings.objectKey;
        search[objectKey] = fieldSettings.search;
        fields.push(fieldSettings);
      }
      else if(fieldSettings.search === false){
      }
      else {
        fields.push(fieldSettings);
      }
    }

    if(!searchTerms || searchTerms.replace(/"/g,"").length === 0){
      return allRows;
    }

    let filteredRows: Array<any> = [];
    searchTerms = typeof searchTerms === 'undefined' ? '':searchTerms;
    var searchTermsArray = searchTerms.toLowerCase().match(/"[^"]+"|[\w]+/g);

    for(let i=0; i<allRows.length; i++){
      let row = allRows[i];
      let string = '';

      for(let ii=0; ii<fields.length; ii++){
        var separator = ii === 0 ? '':' & ';
        string += search[fields[ii].objectKey] ? separator + search[fields[ii].objectKey](row, ii) : separator + row[fields[ii].objectKey];
      }
      string = string.toLowerCase();
      let match: Boolean = true;

      for (let k=0; k<searchTermsArray.length; k++){
        let term = searchTermsArray[k].replace(/"/g,'');
        match = string.indexOf(term) !== -1;

        if(!match){
          break;
        }
      }
      if(match){
        filteredRows.push(row);
      }
    }
    return filteredRows;
  }
}
