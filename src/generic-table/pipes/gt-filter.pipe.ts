import {Pipe, PipeTransform, EventEmitter, Output} from '@angular/core';

@Pipe({
  name: 'gtFilter'
})
export class GtFilterPipe implements PipeTransform {
  //@Output() filterInfo = new EventEmitter();

  transform(allRows: any[], filterBy: Object, gt: { filtered: number | boolean, refresh: any }, refreshFilter: boolean, refreshData: number): any[] {
    //console.log(allRows,filterBy);
    //console.log('filter by');

    if(!Array.isArray(allRows) || !filterBy) {
      //gt.filtered = false;

      let length = allRows === null ? 0:allRows.length;
      gt.refresh(length,gt);
      return allRows;
    }

    let output = [];
    for(let i = 0; i < allRows.length; i++) {

      let rowObject = allRows[i];
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
