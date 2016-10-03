import { PipeTransform } from '@angular/core';
import { GtConfigField } from "./gt-config-field";
export declare class GetPropertyPipe implements PipeTransform {
    transform(fields: Array<GtConfigField>, objectKey: string, property: string): any;
}
