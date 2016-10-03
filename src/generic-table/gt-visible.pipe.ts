import { Pipe, PipeTransform } from '@angular/core';
import {GtConfigField} from "./gt-config-field";
import {GtConfigSetting} from "./gt-config-setting";

@Pipe({
  name: 'gtVisible'
})
export class GtVisiblePipe implements PipeTransform {

  transform(array:[GtConfigField],settings:[GtConfigSetting]): Array<GtConfigField> {
    let visibleColumns = settings.map((setting:GtConfigSetting) => {
      if(setting.visible !== false && setting.enabled !== false) {
        return setting.objectKey;
      }
    });

    let columns = array.filter((column:GtConfigField)=> {
        return visibleColumns.indexOf(column.objectKey) !== -1;
    });
    return columns;
  }

}
