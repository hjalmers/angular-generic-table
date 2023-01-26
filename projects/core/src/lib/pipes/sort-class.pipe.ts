import { Pipe, PipeTransform } from '@angular/core';
import { GtSortOrder } from '../models/table-sort.interface';

@Pipe({
  name: 'sortClass',
  standalone: true,
})
export class SortClassPipe implements PipeTransform {
  transform(
    sortOrder: GtSortOrder | null,
    key: string,
    context: 'class' | 'aria' | 'order' = 'class'
  ): string | null {
    const sortIndex = sortOrder
      ? sortOrder.findIndex((s) => s.key === key)
      : -1;
    if (context === 'aria') {
      if (sortIndex === -1 || !sortOrder) {
        return null;
      } else {
        return `${sortOrder[sortIndex].order}ending`;
      }
    } else if (context === 'class') {
      if (sortIndex === -1 || !sortOrder) {
        return '';
      } else {
        return `gt-sort-${sortOrder[sortIndex].order}`;
      }
    } else {
      return (sortOrder && sortOrder?.length === 1) || sortIndex < 0
        ? null
        : sortIndex + 1 + '';
    }
  }
}
