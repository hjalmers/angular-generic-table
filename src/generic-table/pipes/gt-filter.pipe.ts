import {Pipe, PipeTransform, EventEmitter, Output} from '@angular/core';

@Pipe({
  name: 'gtFilter'
})
export class GtFilterPipe implements PipeTransform {
  //@Output() filterInfo = new EventEmitter();

  transform(array: any[], filterBy: Object, gt: { filtered: number | boolean, refresh: any }, refreshFilter: boolean, refreshData: number): any[] {
    //console.log(array,filterBy);
    //console.log('filter by');

    if(!Array.isArray(array) || !filterBy) {
      //gt.filtered = false;

      let length = array === null ? 0:array.length;
      gt.refresh(length,gt);
      return array;
    }

    let output = [];
    for(let i = 0; i < array.length; i++) {

      let rowObject = array[i];
      let match = true;

      for (let property in filterBy) {
        if (filterBy.hasOwnProperty(property)) {
          //console.log(property);
          //console.log(filter[property].indexOf(obj[property]));
          if(filterBy[property].indexOf(rowObject[property]) === -1){
            match = false;

          }
          // do stuff
        }
      }
      if(match){
        output.push(rowObject);
      }

    }
    //gt.filtered = output.length; //.emit(output.length);
    gt.refresh(output.length,gt);
    return output;
  }

}
