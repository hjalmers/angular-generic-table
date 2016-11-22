export interface GtConfigSetting {
  objectKey: string;
  visible?: boolean;
  enabled?: boolean;
  sort?: string;
  sortOrder?: number;
  columnOrder?: number;
  // should column be exported to csv
  export?: boolean;
}
