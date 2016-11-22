export interface GtConfigSetting {
  objectKey:string,
  visible?:boolean,
  enabled?:boolean,
  sort?:string,
  sortOrder?:number,
  columnOrder?:number,
  export?:boolean, // should column be exported to CSV (OPTIONAL)
  search?:boolean // should we include this column when using global search (OPTIONAL)
}
