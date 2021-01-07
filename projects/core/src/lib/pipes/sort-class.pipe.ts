import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../enums/order.enum';

@Pipe({
  name: 'sortClass'
})
export class SortClassPipe implements PipeTransform {
  transform(selection: { sortBy: string; sortByOrder: Order } | any, property: string): string {
    return selection.sortBy === property ? 'sort-' + selection.sortByOrder : '';
  }
}
