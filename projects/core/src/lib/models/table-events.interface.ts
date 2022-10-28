import { TableRow } from './table-row.interface';

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
