import { TableColumn } from './table-column.interface';

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
}
