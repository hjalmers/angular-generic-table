export interface GtConfigTotal {
  name:string;
  position?:'header'|'footer';
  update?: boolean;
  fields:Array<{
    [key: string]:string | number | Function
  }>;
}
