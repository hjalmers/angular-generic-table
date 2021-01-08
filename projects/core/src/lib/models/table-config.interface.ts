import { TableColumn } from './table-column.interface';

export interface TableConfig {
  hidden?: boolean;
  columns: {
    [key: string]: TableColumn;
  };
  pagination: {
    length: number;
  };
}
