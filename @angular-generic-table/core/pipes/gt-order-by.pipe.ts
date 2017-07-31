import { Pipe, PipeTransform } from '@angular/core';
import {GtConfigField} from '../interfaces/gt-config-field';
import { GtRow } from '../interfaces/gt-row';

@Pipe({
  name: 'gtOrderBy'
})
export class GtOrderByPipe<R extends GtRow> implements PipeTransform {

  /** Return property */
  private getProperty = function(array: Array<any>, key: string){
    for (let i = 0; i < array.length; i++){
      if (array[i].objectKey === key) {
        return array[i];
      }
    }
  };

  /** Return sort function */
  private getSortFunction(field: any){
    if(!field){
      console.log('error trying to sort undefined field');
      return false;
    }
    if (typeof field.sort === 'function'){
      return field.sort;
    } else if (typeof field.value === 'function'){
      return field.value;
    } else {
      return false;
    }
  }


  static _orderByComparator(a: any, b: any): number{

    // sort boolean values as strings
    if(typeof a === 'boolean') {a = a.toString();}
    if(typeof b === 'boolean') {b = b.toString();}

    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){

      if (b === null || typeof b === 'undefined' && (a !== null && typeof a !== 'undefined' )) return 1;
      if (a === null || typeof a === 'undefined' && (b !== null && typeof b !== 'undefined' )) return -1;

      //Isn't a number so lowercase the string to properly compare
      try {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
      } catch (error) {
        return 0;
      }
    }
    else{
      //Parse strings as numbers to compare properly
      if (parseFloat(a) < parseFloat(b)) return -1;
      if (parseFloat(a) > parseFloat(b)) return 1;
    }

    return 0; //equal each other
  }

  transform(input: any, sortByProperties: Array<string>, fields: GtConfigField<R, any>[], refreshSorting: boolean, refreshData: number): any {

    if (!Array.isArray(input) || input === null) return input;
    if (!Array.isArray(sortByProperties) || (Array.isArray(sortByProperties) && sortByProperties.length == 1)){

      const propertyToCheck: string = sortByProperties[0];
      const desc = propertyToCheck.substr(0, 1) == '-';

      //Basic array
      if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+'){
        return !desc ? input.sort() : input.sort().reverse();
      }
      else {
        const property: string = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
          ? propertyToCheck.substr(1)
          : propertyToCheck;

        // check if custom sort function is defined
        const sortFunction: any = this.getSortFunction(this.getProperty(fields, property));

        return input.sort(function(a: any, b: any){

          // use custom sort function if one is defined
          const propertyA = sortFunction === false ? a[property] : sortFunction(a);
          const propertyB = sortFunction === false ? b[property] : sortFunction(b);

          // if both values are undefined...
          if (typeof propertyA === 'undefined' && typeof propertyB === 'undefined' ){
            // ...skip comparison
            return;
          }

          return !desc ? GtOrderByPipe._orderByComparator(propertyA, propertyB) : -GtOrderByPipe._orderByComparator(propertyA, propertyB);
        });
      }
    }
    else {
      //Loop over property of the array in order and sort
      return input.sort((a: any, b: any) => {
        //console.log('multiple');
        for (let i = 0; i < sortByProperties.length; i++){
          const desc = sortByProperties[i].substr(0, 1) == '-';
          const property = sortByProperties[i].substr(0, 1) == '+' || sortByProperties[i].substr(0, 1) == '-'
            ? sortByProperties[i].substr(1)
            : sortByProperties[i];

          //console.log(property);
          // check if custom sort function is defined
          const sortFunction: any = this.getSortFunction(this.getProperty(fields, property));

          // use custom sort function if one is defined
          const propertyA = sortFunction === false ? a[property] : sortFunction(a);
          const propertyB = sortFunction === false ? b[property] : sortFunction(b);

          const comparison = !desc ? GtOrderByPipe._orderByComparator(propertyA, propertyB) : -GtOrderByPipe._orderByComparator(propertyA, propertyB);

          //Don't return 0 yet in case of needing to sort by next property
          if (comparison != 0) return comparison;
        }

        return 0; //equal each other
      });
    }
  }

}
