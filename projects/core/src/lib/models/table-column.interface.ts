import { TemplateRef } from '@angular/core';

export interface TableColumn {
  header?: string | false;
  mobileHeader?: string | boolean;
  hidden?: boolean;
  sortable?: boolean;
  order?: number;
  search?: boolean;
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
