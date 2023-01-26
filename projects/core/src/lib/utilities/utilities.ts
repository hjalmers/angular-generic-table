import { TableRow } from '../models/table-row.interface';
import { TableConfig } from '../models/table-config.interface';
import { GtSortOrder } from '../models/table-sort.interface';
export let dashed: (s: string) => string;
dashed = (s: string) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

export let capitalize: (s: string) => string;
capitalize = (s) =>
  (s.charAt(0).toUpperCase() + s.slice(1))
    .replace(/_/g, ' ')
    .replace(/([A-Z][a-z]+)/g, ' $1')
    .replace(/([A-Z]{2,})/g, ' $1')
    .replace(/\s{2,}/g, ' ')
    .trim();

export let chunk: (
  array: Array<any>,
  chunkSize: number
) => Array<Array<TableRow>>;
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

export let search: (
  text: string,
  caseSensitive: boolean,
  data: Array<TableRow>,
  config: TableConfig
) => TableRow[];
search = (
  text: string,
  caseSensitive: boolean,
  data: Array<TableRow>,
  config: TableConfig
) => {
  if (config.columns) {
    const searchColumns = Object.keys(config.columns).filter(
      // @ts-ignore
      (key) =>
        config.columns &&
        !config.columns[key]?.hidden &&
        config.columns[key]?.search !== false
    );

    const FILTERED = [];
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const match =
        Object.entries(row)
          .filter(([key, value]) => searchColumns.indexOf(key) !== -1)
          .reduce((acc, [key, value], index): string => {
            const search = config?.columns![key]?.search;
            // if search is a function...
            if (typeof search === 'function') {
              // ...use search function to return value to search
              value = search(row, key, value);
            }
            return (
              acc +
              (index === 0 ? '' : ' ? ') +
              (caseSensitive ? value + '' : (value + '').toLowerCase())
            );
          }, '')
          .indexOf(caseSensitive ? text : text.toLowerCase()) !== -1;
      if (match) {
        FILTERED[FILTERED.length] = row;
      }
    }
    return FILTERED;
  } else {
    return data;
  }
};

export let calculate = (data: Array<TableRow>, config: TableConfig) => {
  const CALCULATIONS: { [key: string]: boolean } = {};
  const COLUMN_CALCULATIONS: { [key: string]: Array<string> } = {};
  let CALCULATED = Object.entries(config.footer?.columns || {})
    .filter(
      ([columnName, calculations]) =>
        Object.values(calculations || {}).filter((value) => value !== false)
          .length >= 0
    )
    .reduce((acc: any, [columnName, calculations], index) => {
      acc[columnName] = Object.entries(calculations || {})
        .filter(([calculation, value]) => value !== false)
        .reduce((acc: any, [calculation, value]) => {
          if (COLUMN_CALCULATIONS[columnName]) {
            COLUMN_CALCULATIONS[columnName].push(calculation);
          } else if (value === true) {
            COLUMN_CALCULATIONS[columnName] = [calculation];
          }
          CALCULATIONS[calculation] = true;
          if (typeof value === 'function') {
            value = value(data, columnName);
          }
          acc[calculation] = value === true ? 0 : value;
          return acc;
        }, {});
      return acc;
    }, {});
  if (Object.keys(CALCULATED).length > 0) {
    for (let i = 0; i < data.length; i++) {
      Object.entries(COLUMN_CALCULATIONS).forEach(([column, calculations]) => {
        if (calculations.indexOf('sum') > -1) {
          CALCULATED[column].sum += data[i][column];
        }
        if (
          calculations.indexOf('avg') > -1 &&
          calculations.indexOf('sum') === -1
        ) {
          if (CALCULATED[column].sum === undefined) {
            CALCULATED[column].sum = 0;
          }
          CALCULATED[column].sum += data[i][column];
        }
        if (
          calculations.indexOf('max') > -1 &&
          (!CALCULATED[column].max || +data[i][column] > CALCULATED[column].max)
        ) {
          CALCULATED[column].max = +data[i][column];
        }
        if (
          calculations.indexOf('min') > -1 &&
          (!CALCULATED[column].min || +data[i][column] < CALCULATED[column].min)
        ) {
          CALCULATED[column].min = +data[i][column];
        }
      });
    }
    Object.entries(COLUMN_CALCULATIONS).forEach(([column, calculations]) => {
      if (calculations.indexOf('avg') !== -1) {
        CALCULATED[column].avg = CALCULATED[column]?.sum / data.length;
        // if sum is not part of calculations config...
        if (calculations.indexOf('sum') === -1 && CALCULATED[column].sum) {
          // ...remove it
          delete CALCULATED[column].sum;
        }
      }
      if (calculations.indexOf('count') !== -1) {
        CALCULATED[column].count = data.length;
      }
    });
  }
  return {
    calculated: CALCULATED,
    calculations: Object.keys(CALCULATIONS).sort(
      (a, b) =>
        (config.footer?.rowOrder?.indexOf(a) || 0) -
        (config.footer?.rowOrder?.indexOf(b) || 0)
    ),
    calculatedColumnsCount: Object.keys(CALCULATED).length || 0,
  };
};

/** sortOnMultipleKeys
 * @param {GtSortOrder} keys - array with sort config objects to sort on, data will be sorted according to array order
 * @returns sort function
 */
export const sortOnMultipleKeys = (
  keys: GtSortOrder
): ((a: TableRow, b: TableRow) => number) => {
  const order = keys.map((key) => (key.order === 'desc' ? -1 : 1));
  return (a, b) => {
    for (let i = 0; i < keys.length; i++) {
      const o = keys[i].key;
      if (a[o] > b[o]) return order[i];
      if (a[o] < b[o]) return -order[i];
    }
    return 0;
  };
};
