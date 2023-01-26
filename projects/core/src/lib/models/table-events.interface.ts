import { TableRow } from './table-row.interface';
import { GtOrder, GtSortOrder } from './table-sort.interface';

export interface GtRowClickEvent<R = TableRow> {
  row: R;
  index: number;
  event: MouseEvent;
}

export interface GtRowHoverEvent<R = TableRow> {
  row: R | null;
  index: number | null;
  event?: MouseEvent;
}

export interface GtSortEvent<R = TableRow> {
  key: keyof R;
  order: GtOrder;
  currentSortOrder: GtSortOrder<R>;
  event?: MouseEvent;
}
