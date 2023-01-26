import { TableColumn } from './table-column.interface';
import { TableRow } from './table-row.interface';

export interface TableConfig<R = TableRow> {
  /** Disable sorting of table data, useful when sorting is handled externally e.g. server-side pagination. Table will still use sortOrder to visually show how the data is sorted. <p>**Default:** `false`</p> */
  disableTableSort?: boolean;
  /** Allows for a more mobile friendly layout by displaying columns as rows instead. This is accomplished with css by adding `table-mobile` class to table element and adding column headers as data labels to each row. <p>**Default:** `false`</p>*/
  mobileLayout?: boolean;
  /** Make row and/or column headers sticky by adding `gt-sticky-row-header` and `gt-sticky-column-header` to table to alter table behaviour using css. Please note that in order for headers to be sticky, table can't be placed inside element with overflow set to auto. <p>**Default:** `{row:false, column:false}`</p>*/
  stickyHeaders?: {
    row?: boolean;
    column?: boolean;
  };
  /** Add one or more CSS classes to the table element e.g. `table table-striped table-bordered`. <p>**Default:** `table`</p>*/

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
