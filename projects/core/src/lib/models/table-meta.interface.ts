import { TableRow } from './table-row.interface';
import { TableConfig } from './table-config.interface';
import { TableInfo } from './table-info.interface';
import { Observable } from 'rxjs';

export interface TableMeta {
  data: Array<Array<TableRow>>;
  config: TableConfig;
  info: TableInfo;
}
