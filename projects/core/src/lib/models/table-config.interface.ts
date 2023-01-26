import { TableColumn } from './table-column.interface';
import { TableRow } from './table-row.interface';

export interface TableConfig<R = TableRow> {
  /** Disable sorting of table data, useful when sorting is handled externally e.g. server-side pagination. Table will still use sortOrder to visually show how the data is sorted. <p>**Default:** `false`</p> */
  disableTableSort?: boolean;
  mobileLayout?: boolean;
  stickyHeaders?: {
    row?: boolean;
    column?: boolean;
  };
  class?: string;
  rows?: {
    [Property in keyof R]: TableColumn<R>;
  };
  columns?: {
    [Property in keyof R]: TableColumn<R>;
  };
  pagination?: {
    length?: number;
  };
  rowClick?: boolean;
  rowHover?: boolean;
  footer?: {
    headers?: {
      [key: FooterCalculation | string]: string | boolean;
    };
    columns?: {
      [Property in keyof R]: Partial<TableFooterColumn<R>>;
    };
    rowOrder?: Array<keyof R | FooterCalculation>;
    emptyContent?: string;
  };
}

interface TableFooterColumn<R> {
  [key: FooterCalculation | string]: boolean | number | string | CalcFunc<R>;
}
interface CalcFunc<R> {
  (data: Array<R>, key: keyof R): number | string;
}
type FooterCalculation = 'sum' | 'avg' | 'count' | 'max' | 'min';
