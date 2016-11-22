import { PipeTransform } from '@angular/core';
import { GtConfigField } from "../interfaces/gt-config-field";
import { GtConfigSetting } from "../interfaces/gt-config-setting";
import { GtRow } from '../interfaces/gt-row';
export declare class GtVisiblePipe<R extends GtRow> implements PipeTransform {
    /** Sort by column order */
    private getColumnOrder;
    transform(array: GtConfigField<R>[], settings: GtConfigSetting[]): GtConfigField<R>[];
}
