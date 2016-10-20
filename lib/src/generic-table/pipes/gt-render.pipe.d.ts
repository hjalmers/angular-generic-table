import { PipeTransform } from '@angular/core';
import { GtConfigSetting } from "../interfaces/gt-config-setting";
import { GtConfigField } from "../interfaces/gt-config-field";
import { DomSanitizer } from '@angular/platform-browser';
export declare class GtRenderPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    /** Sort by column order */
    private getColumnOrder;
    transform(row: any, settings: [GtConfigSetting], fields: [GtConfigField], updated: boolean): Array<Object>;
}
export interface GtRenderField {
    objectKey: string;
    renderValue?: any;
    click?: any;
    expand?: string;
    exportValue: any;
    sortValue: any;
}
