import { PipeTransform } from '@angular/core';
import { GtConfigField } from "../interfaces/gt-config-field";
import { GtRow } from '../interfaces/gt-row';
import { GtConfigSetting } from '../interfaces/gt-config-setting';
export declare class GtSearchPipe<R extends GtRow> implements PipeTransform {
    /** Return property */
    private getProperty;
    transform(allRows: any, searchTerms: string, settings: Array<GtConfigSetting>, fields: Array<GtConfigField<R>>, refreshData: number): any;
}
