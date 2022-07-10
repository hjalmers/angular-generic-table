import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../enums/order.enum';

@Pipe({
  name: 'sortClass',
})
export class SortClassPipe implements PipeTransform {
  transform(
    selection: { sortBy: string; sortByOrder: Order } | any,
    property: string,
    aria = false
  ): string | null {
    return selection?.sortBy === property
      ? !aria
        ? 'sort-' + selection.sortByOrder
        : selection.sortByOrder + 'ending'
      : !aria
      ? ''
      : null;
  }
}
