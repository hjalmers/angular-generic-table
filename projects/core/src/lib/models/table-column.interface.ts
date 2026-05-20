import { TemplateRef, Type } from '@angular/core';
import { TableRow } from './table-row.interface';
import { GtSortOrder } from './table-sort.interface';

export interface GtCellContext<R = TableRow> {
  row: R;
  col: { key: string; value: TableColumn<R> };
  index: number;
  data: R[];
  search: string | null;
}

export interface GtHeaderContext<R = TableRow> {
  column: { key: string; value: TableColumn<R> };
  sortable: boolean;
  sortOrder: GtSortOrder<R>;
  search: string | null;
  sort?: (event: MouseEvent) => void;
}

export interface TableColumn<R = TableRow> {
  header?: string | false;
  headerTemplateRef?: TemplateRef<any>;
  headerComponent?: Type<any>;
  headerComponentInputs?: Record<string, unknown>;
  headerReplaceFull?: boolean;
  mobileHeader?: string | boolean;
  hidden?: boolean;
  sortable?: boolean;
  order?: number;
  search?: boolean | SearchFunction<R>;
  templateRef?: TemplateRef<any>;
  component?: Type<any>;
  componentInputs?: Record<string, unknown>;
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
