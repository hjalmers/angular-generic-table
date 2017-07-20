export interface GtConfigTotal {
  name: string;
  position?: 'header' | 'footer';
  update?: boolean;
  fields: {
    [key: string]: string | number | Function;
  };
}
