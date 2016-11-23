import { PipeTransform } from '@angular/core';
export declare class GtChunkPipe implements PipeTransform {
    transform(array: any[], chunkSize: number, page: number, refreshPageArray: boolean, refreshData: number): any[];
}
