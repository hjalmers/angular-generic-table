import { PipeTransform } from '@angular/core';
import { GtConfigField } from "../interfaces/gt-config-field";
import { GtConfigSetting } from '../interfaces/gt-config-setting';
export declare class GetPropertyPipe implements PipeTransform {
    transform(config: Array<GtConfigField> | Array<GtConfigSetting>, objectKey: string, property: string, refresh?: boolean): any;
}
