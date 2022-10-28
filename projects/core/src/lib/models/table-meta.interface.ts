import { TableRow } from './table-row.interface';
import { TableConfig } from './table-config.interface';
import { TableInfo } from './table-info.interface';

export interface TableMeta<R = TableRow> {
  data: Array<Array<R>>;
  config: TableConfig<R>;
  info: TableInfo;
}
