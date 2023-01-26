import { TableRow } from './table-row.interface';

export type GtSortOrder<R = TableRow> = Array<GtSortConfig<R>>;
export interface GtSortConfig<R = {}> {
  key: keyof R;
  order: GtOrder;
}

export type GtOrder = 'asc' | 'desc';
