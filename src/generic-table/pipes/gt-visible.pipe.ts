import { Pipe, PipeTransform } from '@angular/core';
import {GtConfigField} from "../interfaces/gt-config-field";
import {GtConfigSetting} from "../interfaces/gt-config-setting";

@Pipe({
  name: 'gtVisible'
})
export class GtVisiblePipe implements PipeTransform {

  // TODO: move to helper functions
  /** Sort by column order */
  private getColumnOrder = function(a,b) {
    if (a.columnOrder < b.columnOrder)
      return -1;
    if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
      return 1;
    return 0;
  };

  transform(array:[GtConfigField],settings:[GtConfigSetting]): Array<GtConfigField> {
    let visibleColumns = settings.sort(this.getColumnOrder).map((setting:GtConfigSetting) => {
      if(setting.visible !== false && setting.enabled !== false) {
        return setting.objectKey;
      }
    });

    let columns = array.filter((column:GtConfigField)=> {
        return visibleColumns.indexOf(column.objectKey) !== -1;
    }).sort(function(a,b){
      return visibleColumns.indexOf(a.objectKey) < visibleColumns.indexOf(b.objectKey) ? -1 : 1;
    });
    
    return columns;
  }

}
