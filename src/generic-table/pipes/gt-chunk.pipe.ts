import {Pipe, PipeTransform, EventEmitter} from '@angular/core';
import {GtInformation} from '../interfaces/gt-information';

@Pipe({
  name: 'gtChunk'
})
export class GtChunkPipe implements PipeTransform {

  transform(array: any[],gtInfo:GtInformation, chunkSize: number, page: number, refreshPageArray: boolean, refreshData: number, gtEvent: EventEmitter<any>): any[] {
    //console.log('chunk array');
    //console.log(array,chunkSize,page);
    if(!Array.isArray(array)) return array;
    let pages = [];
    for (let i=0,len=array.length; i<len; i+=chunkSize)
      pages.push(array.slice(i,i+chunkSize));
    gtInfo.pageTotal = pages.length;
    setTimeout(()=>gtEvent.emit({
      name:'gt-info',
      value:gtInfo
    }),0);
    return pages[page-1];
  }
}
