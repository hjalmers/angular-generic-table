import { Pipe, PipeTransform } from '@angular/core';
import {GtConfigField} from "./gt-config-field";

@Pipe({
  name: 'getProperty'
})
export class GetPropertyPipe implements PipeTransform {

  transform(fields: Array<GtConfigField>, objectKey: string, property: string): any {
    try {
      var output = null;
      for (var i = 0; i < fields.length;i++){
        if(fields[i].objectKey === objectKey){
          output = fields[i][property];
        }
      }
    } catch (error) {
      console.log('cannot read property: "' + property + '" on missing key: "' + objectKey + '" in fields.', error);
    }
    return output;
  }
}
