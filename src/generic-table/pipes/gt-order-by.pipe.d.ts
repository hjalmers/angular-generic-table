import { PipeTransform } from '@angular/core';
import { GtConfigField } from '../interfaces/gt-config-field';
import { GtRow } from '../interfaces/gt-row';
export declare class GtOrderByPipe<R extends GtRow> implements PipeTransform {
    /** Return property */
    private getProperty;
    /** Return sort function */
    private getSortFunction(field);
    static _orderByComparator(a: any, b: any): number;
    transform(input: any, config: string[], fields: GtConfigField<R>[], refreshSorting: boolean, refreshData: number): any;
}
