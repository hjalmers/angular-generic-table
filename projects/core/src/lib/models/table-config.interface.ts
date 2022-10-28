import { TableColumn } from './table-column.interface';
import { TableRow } from './table-row.interface';

export interface TableConfig {
  hidden?: boolean;
  mobileLayout?: boolean;
  stickyHeaders?: {
    row?: boolean;
    column?: boolean;
  };
  class?: string;
  rows?: {
    [key: string]: TableColumn;
  };
  columns?: {
    [key: string]: TableColumn;
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
      [key: string]: Partial<TableFooterColumn>;
    };
    rowOrder?: Array<FooterCalculation | string>;
    emptyContent?: string;
  };
}

interface TableFooterColumn {
  [key: FooterCalculation | string]: boolean | number | string | CalcFunc;
}
interface CalcFunc {
  (data: Array<TableRow>, key: string): number | string;
}
type FooterCalculation = 'sum' | 'avg' | 'count' | 'max' | 'min';
