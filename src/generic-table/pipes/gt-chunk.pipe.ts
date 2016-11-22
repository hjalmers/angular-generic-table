import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gtChunk'
})
export class GtChunkPipe implements PipeTransform {

  transform(array: any[], chunkSize: number, page: number, refreshPageArray: boolean, refreshData: number): any[] {
    //console.log('chunk array');
    //console.log(array,chunkSize,page);
    if(!Array.isArray(array)) return array;
    var R = [];
    for (var i=0,len=array.length; i<len; i+=chunkSize)
      R.push(array.slice(i,i+chunkSize));
    //console.log(R)
    return R[page-1];
  }

}
