import { PipeTransform } from '@angular/core';
import { GtConfigField } from "../interfaces/gt-config-field";
export declare class GetPropertyPipe implements PipeTransform {
    transform(fields: Array<GtConfigField>, objectKey: string, property: string): any;
}
