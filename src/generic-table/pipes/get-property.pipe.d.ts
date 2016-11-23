import { PipeTransform } from '@angular/core';
import { GtConfigField } from "../interfaces/gt-config-field";
import { GtConfigSetting } from '../interfaces/gt-config-setting';
import { GtRow } from '../interfaces/gt-row';
export declare class GetPropertyPipe<R extends GtRow> implements PipeTransform {
    transform(config: GtConfigField<R>[] | GtConfigSetting[], objectKey: string, property: string, refresh?: boolean): any;
}
