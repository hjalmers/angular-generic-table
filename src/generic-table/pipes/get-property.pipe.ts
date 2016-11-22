import { Pipe, PipeTransform } from '@angular/core';
import {GtConfigField} from "../interfaces/gt-config-field";
import {GtConfigSetting} from '../interfaces/gt-config-setting';
import { GtRow } from '../interfaces/gt-row';

@Pipe({
  name: 'getProperty'
})
export class GetPropertyPipe<R extends GtRow> implements PipeTransform {

  transform(config: GtConfigField<R>[] | GtConfigSetting[], objectKey: string, property: string, refresh?: boolean): any {
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
