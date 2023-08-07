import { TableRow } from './table-row.interface';
import { GtOrder, GtSortOrder } from './table-sort.interface';

export interface GtRowClickEvent<R = TableRow> {
  row: R;
  index: number;
  event: MouseEvent;
}

export interface GtRowActiveEvent<R = TableRow> {
  row: R | null;
  index: number | null;
  event?: MouseEvent | KeyboardEvent;
}

export interface GtRowSelectEvent<R = TableRow> {
  row: R | null;
  index: number | null;
  event?: KeyboardEvent;
}

export interface GtSortEvent<R = TableRow> {
  key: keyof R;
  order: GtOrder;
  currentSortOrder: GtSortOrder<R>;
  event?: MouseEvent;
  addSortKey: boolean /** Add additional key to sort on multiple properties? True if the user is holding shift while sorting */;
}

export interface GtPageChangeEvent {
  index: number;
}
