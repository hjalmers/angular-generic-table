import { PipeTransform } from '@angular/core';
import { GtConfigSetting } from '../interfaces/gt-config-setting';
import { GtClickFunc, GtConfigField } from '../interfaces/gt-config-field';
import { DomSanitizer } from '@angular/platform-browser';
import { GtRow } from '../interfaces/gt-row';
export interface GtRenderField<R extends GtRow> {
    objectKey: string;
    renderValue?: any;
    click?: GtClickFunc<R>;
    expand?: boolean;
    exportValue: any;
    sortValue: any;
}
export declare class GtRenderPipe<R extends GtRow> implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    /** Sort by column order */
    private getColumnOrder;
    /** Sort by length */
    private getOrderByLength;
    /** Return property */
    private getProperty;
    private highlight(haystack, needles);
    transform(row: any, settings: Array<GtConfigSetting>, fields: Array<GtConfigField<R>>, updated: boolean, loading: boolean, highlight?: boolean, searchString?: string): Array<Object>;
}
