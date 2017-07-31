import { Pipe, PipeTransform } from '@angular/core';
import {GtConfigTotal} from "../interfaces/gt-config-total";

@Pipe({
  name: 'gtTotalsPosition'
})
export class GtTotalsPositionPipe implements PipeTransform {

  transform(array: Array<GtConfigTotal>, position: 'header' | 'footer' = 'header'): Array<any> {
    return array.filter(total=>{

      // if no position is defined assume position to be header
      const totalPosition = total.position ? total.position:'header';
      return totalPosition === position;
    });
  }

}
