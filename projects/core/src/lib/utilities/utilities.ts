import { TableRow } from '../models/table-row.interface';
import { TableConfig } from '../models/table-config.interface';

export let dashed: (s: string) => string;
dashed = (s: string) => s.replace(/[A-Z]/g, m => '-' + m.toLowerCase());

export let chunk: (array: Array<any>, chunkSize: number) => Array<Array<TableRow>>;
chunk = (array, chunkSize) => {
  if (chunkSize < 0) {
    throw new Error('Invalid chunk size');
  }
  if (chunkSize === 0 && !chunkSize) {
    return [array];
  }
  const CHUNK = [];
  for (let i = 0, len = array.length; i < len; i += chunkSize) {
    CHUNK.push(array.slice(i, i + chunkSize));
  }
  return CHUNK;
};

export let search: (text: string, caseSensitive: boolean, data: Array<TableRow>, config: TableConfig) => TableRow[];
search = (text: string, caseSensitive: boolean, data: Array<TableRow>, config: TableConfig) => {
  const searchColumns = Object.keys(config.columns).filter(
    key => !config.columns[key].hidden && config.columns[key].search !== false
  );
  return data.filter(
    row =>
      Object.entries(row)
        .filter(([key, value]) => searchColumns.indexOf(key) !== -1)
        .reduce(
          (prev, [key, value]): string =>
            prev + (prev === '' ? '' : ' & ') + (caseSensitive ? value + '' : (value + '').toLowerCase()),
          ''
        )
        .indexOf(text) !== -1
  );
};
