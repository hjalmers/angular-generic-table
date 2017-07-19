import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gtTotals'
})
export class GtTotalsPipe implements PipeTransform {

  transform(value:string | number | Function, data: Array<any>,objectKey:string, refresh:boolean): any {
    let output;

    if(data.length === 0) {
      return
    }

    if(typeof value === 'function') {
      output = value(data, objectKey);
    } else if(value) {
      output = value;
    } else {
      output = ''
    }

    return output;
  }

}
