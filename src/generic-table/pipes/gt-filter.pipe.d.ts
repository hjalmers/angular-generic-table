import { PipeTransform } from '@angular/core';
export declare class GtFilterPipe implements PipeTransform {
    transform(array: any[], filterBy: Object, gt: {
        filtered: number | boolean;
        refresh: any;
    }, refreshFilter: boolean, refreshData: number): any[];
}
