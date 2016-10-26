import { Pipe, PipeTransform } from '@angular/core';
import {GtConfigField} from "../interfaces/gt-config-field";
import {GtConfigSetting} from '../interfaces/gt-config-setting';

@Pipe({
  name: 'getProperty'
})
export class GetPropertyPipe implements PipeTransform {

  transform(config: Array<GtConfigField> | Array<GtConfigSetting>, objectKey: string, property: string, refresh?:boolean): any {
    try {
      var output = null;
      for (var i = 0; i < config.length;i++){
        if(config[i].objectKey === objectKey){
          output = config[i][property];
        }
      }
    } catch (error) {
      console.log('cannot read property: "' + property + '" on missing key: "' + objectKey + '" in config.', error);
    }
    return output;
  }
}
