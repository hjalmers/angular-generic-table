import { TemplateRef } from '@angular/core';

export interface TableColumn {
  header?: string;
  hidden?: boolean;
  sortable?: boolean;
  order?: number;
  search?: boolean;
  templateRef?: TemplateRef<any>;
}
