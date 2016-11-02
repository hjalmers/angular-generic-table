import { PipeTransform } from '@angular/core';
export declare class GtFilterPipe implements PipeTransform {
    transform(array: Array<any>, filterBy: Object, gt: {
        filtered: number | boolean;
        refresh: any;
    }, refreshFilter: boolean, refreshData: number): Array<any>;
}
