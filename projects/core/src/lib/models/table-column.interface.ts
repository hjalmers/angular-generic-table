import { TemplateRef } from '@angular/core';
import { TableRow } from './table-row.interface';

export interface TableColumn {
  header?: string | false;
  mobileHeader?: string | boolean;
  hidden?: boolean;
  sortable?: boolean;
  order?: number;
  search?: boolean | SearchFunction;
  templateRef?: TemplateRef<any>;
  transform?: {
    pipe: any;
    args?: Array<any>;
  };
  class?: string;
  mapTo?: {
    path: string;
    missingValue?: string | number;
  };
}

export type SearchFunction = (
  row: TableRow,
  column: string,
  value: any
) => string;
