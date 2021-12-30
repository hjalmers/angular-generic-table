import { TableColumn } from './table-column.interface';

export interface TableConfig {
  hidden?: boolean;
  class?: string;
  columns: {
    [key: string]: TableColumn;
  };
  pagination?: {
    length?: number;
  };
}
