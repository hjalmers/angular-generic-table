import { TemplateRef } from '@angular/core';
import { TableRow } from './table-row.interface';
export interface TableColumn<R = TableRow> {
  header?: string | false;
  mobileHeader?: string | boolean;
  hidden?: boolean;
  sortable?: boolean;
  order?: number;
  search?: boolean | SearchFunction<R>;
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

export type SearchFunction<R = TableRow> = (
  row: R,
  column: keyof R,
  value: typeof row[keyof R]
) => string;
