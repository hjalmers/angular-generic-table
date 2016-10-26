import { PipeTransform } from '@angular/core';
import { GtConfigField } from '../interfaces/gt-config-field';
export declare class GtOrderByPipe implements PipeTransform {
    /** Return property */
    private getProperty;
    static _orderByComparator(a: any, b: any): number;
    transform(input: any, [config]: [string], fields: Array<GtConfigField>, refreshSorting: boolean, refreshData: number): any;
}
