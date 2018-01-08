import {Pipe, PipeTransform, EventEmitter} from '@angular/core';
import {GtInformation} from '../interfaces/gt-information';

@Pipe({
    name: 'gtChunk'
})
export class GtChunkPipe implements PipeTransform {

    transform(array: any[], gtInfo: GtInformation, chunkSize: number, page: number, refreshPageArray: boolean, refreshData: number, gtEvent: EventEmitter<any>, data: {exportData: Array<any>}): any[] {

        if (!Array.isArray(array)) { return array; }
        data.exportData = array; // store data for export

        const PAGES = [];
        const ENTRIES = array.length;

        for (let i = 0; i < ENTRIES; i += chunkSize) {
            PAGES.push(array.slice(i, i + chunkSize));
        }
        gtInfo.visibleRecords = !PAGES[page - 1] ? [] : [...PAGES[page - 1]]; // add visible rows
        gtInfo.pageTotal = PAGES.length; // add number of pages

        setTimeout(() => gtEvent.emit({
            name: 'gt-info',
            value: gtInfo
        }), 0);
        return PAGES[page - 1];
    }
}
