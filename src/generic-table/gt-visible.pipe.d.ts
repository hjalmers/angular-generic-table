import { PipeTransform } from '@angular/core';
import { GtConfigField } from "./gt-config-field";
import { GtConfigSetting } from "./gt-config-setting";
export declare class GtVisiblePipe implements PipeTransform {
    transform(array: [GtConfigField], settings: [GtConfigSetting]): Array<GtConfigField>;
}
