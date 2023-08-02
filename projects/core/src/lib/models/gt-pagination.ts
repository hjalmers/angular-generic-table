export interface GtPaginationClasses {
  nav?: string;
  ul?: string;
  li?: string;
  button?: string;
}

export interface GtPaginationAriaLabels {
  nav: string;
  button: string;
}

export interface GtPaginationInfo {
  pageNext: number | null;
  pageCurrent: number | null;
  pagePrevious: number | null;
  pageSize: number | null;
  numberOfRecords: number | null;
  pageTotal?: number | null;
}
