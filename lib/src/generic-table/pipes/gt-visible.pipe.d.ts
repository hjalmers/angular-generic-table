import { PipeTransform } from '@angular/core';
import { GtConfigField } from "../interfaces/gt-config-field";
import { GtConfigSetting } from "../interfaces/gt-config-setting";
export declare class GtVisiblePipe implements PipeTransform {
    /** Sort by column order */
    private getColumnOrder;
    transform(array: [GtConfigField], settings: [GtConfigSetting]): Array<GtConfigField>;
}
