export interface GtInformation {
  filter?: Object;
  pageCurrent: number;
  pageNext?: number;
  pagePrevious?: number;
  pageTotal?: number;
  recordFrom?: number;
  recordTo?: number;
  recordLength: number;
  recordsAll: number;
  recordsAfterFilter: number;
  recordsAfterSearch: number;
  searchTerms?: string;
}
