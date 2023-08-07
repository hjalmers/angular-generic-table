import { Pipe, PipeTransform } from '@angular/core';
import { TableRow } from '../models/table-row.interface';

@Pipe({
  name: 'rowSelection',
  standalone: true,
})
export class RowSelectionPipe implements PipeTransform {
  transform(
    row: TableRow,
    selection: any,
    comparator: (row: TableRow, selection: any) => boolean,
    className?: string
  ): string {
    return className && comparator(row, selection) ? className : '';
  }
}
