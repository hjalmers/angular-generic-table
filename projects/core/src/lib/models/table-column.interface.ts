import { TemplateRef } from '@angular/core';

export interface TableColumn {
  header?: string;
  mobileHeader?: string | boolean;
  hidden?: boolean;
  sortable?: boolean;
  order?: number;
  search?: boolean;
  templateRef?: TemplateRef<any>;
  class?: string;
}
