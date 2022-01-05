import { PipeTransform, TemplateRef } from '@angular/core';

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
    args?: string;
  };
  class?: string;
}
