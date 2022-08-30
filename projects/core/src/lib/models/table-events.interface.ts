import { TableRow } from './table-row.interface';

export interface GtRowClickEvent {
  row: TableRow;
  index: number;
  event: MouseEvent;
}

export interface GtRowHoverEvent {
  row: TableRow | null;
  index: number | null;
  event?: MouseEvent;
}
