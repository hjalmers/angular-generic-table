import { PipeTransform } from '@angular/core';
import { GtConfigSetting } from "./gt-config-setting";
import { GtConfigField } from "./gt-config-field";
import { DomSanitizer } from '@angular/platform-browser';
export declare class GtRenderPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(row: any, settings: [GtConfigSetting], fields: [GtConfigField]): Array<Object>;
}
