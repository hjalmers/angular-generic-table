import {
  dashed,
  capitalize,
  chunk,
  search,
  calculate,
  sortOnMultipleKeys,
  parseSortOrderParams,
  sortOrderConfigToParam,
  sortOrderToParams,
} from './utilities';
import { TableRow } from '../models/table-row.interface';
import { TableConfig } from '../models/table-config.interface';
import { GtSortOrder } from '../models/table-sort.interface';

// ---------------------------------------------------------------------------
// dashed
// ---------------------------------------------------------------------------
describe('dashed', () => {
  it('should convert camelCase to dash-case', () => {
    expect(dashed('camelCase')).toBe('camel-case');
  });

  it('should convert multiple uppercase letters', () => {
    expect(dashed('myLongPropertyName')).toBe('my-long-property-name');
  });

  it('should return an already lowercased string unchanged', () => {
    expect(dashed('alreadylower')).toBe('alreadylower');
  });

  it('should handle a leading uppercase letter', () => {
    expect(dashed('Name')).toBe('-name');
  });

  it('should handle empty string', () => {
    expect(dashed('')).toBe('');
  });

  it('should handle consecutive uppercase letters individually', () => {
    expect(dashed('innerHTML')).toBe('inner-h-t-m-l');
  });
});

// ---------------------------------------------------------------------------
// capitalize
// ---------------------------------------------------------------------------
describe('capitalize', () => {
  it('should capitalize the first letter of a simple word', () => {
    expect(capitalize('name')).toBe('Name');
  });

  it('should split camelCase into separate words', () => {
    expect(capitalize('firstName')).toBe('First Name');
  });

  it('should replace underscores with spaces', () => {
    expect(capitalize('first_name')).toBe('First name');
  });

  it('should handle consecutive uppercase letters as a group', () => {
    expect(capitalize('parseHTML')).toBe('Parse HTML');
  });

  it('should handle single character string', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('should trim extra spaces', () => {
    expect(capitalize('myLongPropertyName')).toBe('My Long Property Name');
  });

  it('should handle already capitalized string', () => {
    expect(capitalize('Name')).toBe('Name');
  });
});

// ---------------------------------------------------------------------------
// chunk
// ---------------------------------------------------------------------------
describe('chunk', () => {
  it('should split an array into chunks of given size', () => {
    const result = chunk([1, 2, 3, 4, 5], 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should return the full array in one chunk when chunkSize >= array length', () => {
    const result = chunk([1, 2, 3], 5);
    expect(result).toEqual([[1, 2, 3]]);
  });

  it('should return single-element chunks when chunkSize is 1', () => {
    const result = chunk([1, 2, 3], 1);
    expect(result).toEqual([[1], [2], [3]]);
  });

  it('should return an empty array when given an empty array', () => {
    const result = chunk([], 3);
    expect(result).toEqual([]);
  });

  it('should throw an error when chunkSize is negative', () => {
    expect(() => chunk([1, 2], -1)).toThrow('Invalid chunk size');
  });

  it('should return the whole array wrapped in an array when chunkSize is 0', () => {
    // chunkSize 0 is falsy, so the guard `chunkSize === 0 && !chunkSize` is true
    const result = chunk([1, 2, 3], 0);
    expect(result).toEqual([[1, 2, 3]]);
  });

  it('should handle exact multiples', () => {
    const result = chunk([1, 2, 3, 4], 2);
    expect(result).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});

// ---------------------------------------------------------------------------
// search
// ---------------------------------------------------------------------------
describe('search', () => {
  const data: TableRow[] = [
    { name: 'Alice', age: 30, city: 'Berlin' },
    { name: 'Bob', age: 25, city: 'Paris' },
    { name: 'Charlie', age: 35, city: 'Berlin' },
  ];

  const config: TableConfig = {
    columns: {
      name: {},
      age: {},
      city: {},
    },
  };

  it('should return matching rows (case-insensitive)', () => {
    const result = search('alice', false, data, config);
    expect(result).toEqual([{ name: 'Alice', age: 30, city: 'Berlin' }]);
  });

  it('should be case-insensitive by default when caseSensitive is false', () => {
    const result = search('BERLIN', false, data, config);
    expect(result.length).toBe(2);
  });

  it('should respect case sensitivity when caseSensitive is true', () => {
    const result = search('alice', true, data, config);
    expect(result.length).toBe(0);
  });

  it('should return all rows when search text matches all', () => {
    // All rows will have age as a number, searching for empty string matches everything
    const result = search('', false, data, config);
    expect(result.length).toBe(3);
  });

  it('should return empty array when no rows match', () => {
    const result = search('nonexistent', false, data, config);
    expect(result.length).toBe(0);
  });

  it('should skip hidden columns', () => {
    const configWithHidden: TableConfig = {
      columns: {
        name: { hidden: true },
        age: {},
        city: {},
      },
    };
    // searching for "alice" should not match because name column is hidden
    const result = search('alice', false, data, configWithHidden);
    expect(result.length).toBe(0);
  });

  it('should skip columns where search is false', () => {
    const configNoSearch: TableConfig = {
      columns: {
        name: { search: false },
        age: {},
        city: {},
      },
    };
    const result = search('alice', false, data, configNoSearch);
    expect(result.length).toBe(0);
  });

  it('should return all data when config has no columns', () => {
    const result = search('alice', false, data, {});
    expect(result).toBe(data);
  });

  it('should use custom search function when provided', () => {
    const customConfig: TableConfig = {
      columns: {
        name: {
          search: (row: TableRow, key: string | number, value: any) =>
            `custom_${value}`,
        },
        age: {},
        city: {},
      },
    };
    const result = search('custom_Alice', false, data, customConfig);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Alice');
  });
});

// ---------------------------------------------------------------------------
// calculate
// ---------------------------------------------------------------------------
describe('calculate', () => {
  const data: TableRow[] = [
    { price: 10, quantity: 2 },
    { price: 20, quantity: 3 },
    { price: 30, quantity: 5 },
  ];

  it('should calculate sum', () => {
    const config: TableConfig = {
      footer: {
        columns: {
          price: { sum: true },
        },
      },
    };
    const result = calculate(data, config);
    expect(result.calculated.price.sum).toBe(60);
  });

  it('should calculate avg', () => {
    const config: TableConfig = {
      footer: {
        columns: {
          price: { avg: true },
        },
      },
    };
    const result = calculate(data, config);
    expect(result.calculated.price.avg).toBe(20);
    // sum should be removed when only avg is requested
    expect(result.calculated.price.sum).toBeUndefined();
  });

  it('should calculate both sum and avg when both requested', () => {
    const config: TableConfig = {
      footer: {
        columns: {
          price: { sum: true, avg: true },
        },
      },
    };
    const result = calculate(data, config);
    expect(result.calculated.price.sum).toBe(60);
    expect(result.calculated.price.avg).toBe(20);
  });

  it('should calculate min', () => {
    const config: TableConfig = {
      footer: {
        columns: {
          price: { min: true },
        },
      },
    };
    const result = calculate(data, config);
    expect(result.calculated.price.min).toBe(10);
  });

  it('should calculate max', () => {
    const config: TableConfig = {
      footer: {
        columns: {
          price: { max: true },
        },
      },
    };
    const result = calculate(data, config);
    expect(result.calculated.price.max).toBe(30);
  });

  it('should calculate count', () => {
    const config: TableConfig = {
      footer: {
        columns: {
          price: { count: true },
        },
      },
    };
    const result = calculate(data, config);
    expect(result.calculated.price.count).toBe(3);
  });

  it('should support custom calculation function', () => {
    const config: TableConfig = {
      footer: {
        columns: {
          price: {
            sum: true,
            custom: (rows: TableRow[], col: string) =>
              rows.reduce((acc, row) => acc + row[col] * 2, 0),
          },
        },
      },
    };
    const result = calculate(data, config);
    expect(result.calculated.price.custom).toBe(120);
    expect(result.calculated.price.sum).toBe(60);
  });

  it('should calculate across multiple columns', () => {
    const config: TableConfig = {
      footer: {
        columns: {
          price: { sum: true },
          quantity: { sum: true },
        },
      },
    };
    const result = calculate(data, config);
    expect(result.calculated.price.sum).toBe(60);
    expect(result.calculated.quantity.sum).toBe(10);
    expect(result.calculatedColumnsCount).toBe(2);
  });

  it('should return empty calculations when no footer config', () => {
    const config: TableConfig = {};
    const result = calculate(data, config);
    expect(result.calculatedColumnsCount).toBe(0);
    expect(result.calculations).toEqual([]);
  });

  it('should skip calculations set to false', () => {
    const config: TableConfig = {
      footer: {
        columns: {
          price: { sum: false as any, max: true },
        },
      },
    };
    const result = calculate(data, config);
    expect(result.calculated.price.max).toBe(30);
    expect(result.calculated.price.sum).toBeUndefined();
  });

  it('should return unique calculation names in calculations array', () => {
    const config: TableConfig = {
      footer: {
        columns: {
          price: { sum: true, avg: true },
          quantity: { sum: true, count: true },
        },
      },
    };
    const result = calculate(data, config);
    expect(result.calculations).toContain('sum');
    expect(result.calculations).toContain('avg');
    expect(result.calculations).toContain('count');
  });
});

// ---------------------------------------------------------------------------
// sortOnMultipleKeys
// ---------------------------------------------------------------------------
describe('sortOnMultipleKeys', () => {
  it('should sort ascending by a single key', () => {
    const data: TableRow[] = [
      { name: 'Charlie', age: 35 },
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
    ];
    const sortOrder: GtSortOrder = [{ key: 'name', order: 'asc' }];
    const sorted = [...data].sort(sortOnMultipleKeys(sortOrder));
    expect(sorted.map((r) => r.name)).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  it('should sort descending by a single key', () => {
    const data: TableRow[] = [
      { name: 'Alice', age: 30 },
      { name: 'Charlie', age: 35 },
      { name: 'Bob', age: 25 },
    ];
    const sortOrder: GtSortOrder = [{ key: 'name', order: 'desc' }];
    const sorted = [...data].sort(sortOnMultipleKeys(sortOrder));
    expect(sorted.map((r) => r.name)).toEqual(['Charlie', 'Bob', 'Alice']);
  });

  it('should tiebreak on secondary key when primary key is equal', () => {
    const data: TableRow[] = [
      { city: 'Paris', name: 'Bob' },
      { city: 'Berlin', name: 'Charlie' },
      { city: 'Berlin', name: 'Alice' },
    ];
    const sortOrder: GtSortOrder = [
      { key: 'city', order: 'asc' },
      { key: 'name', order: 'asc' },
    ];
    const sorted = [...data].sort(sortOnMultipleKeys(sortOrder));
    expect(sorted).toEqual([
      { city: 'Berlin', name: 'Alice' },
      { city: 'Berlin', name: 'Charlie' },
      { city: 'Paris', name: 'Bob' },
    ]);
  });

  it('should handle null values by placing them last', () => {
    const data: TableRow[] = [
      { name: null, age: 20 },
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
    ];
    const sortOrder: GtSortOrder = [{ key: 'name', order: 'asc' }];
    const sorted = [...data].sort(sortOnMultipleKeys(sortOrder));
    expect(sorted[0].name).toBe('Alice');
    expect(sorted[1].name).toBe('Bob');
    expect(sorted[2].name).toBe(null);
  });

  it('should return 0 for equal values', () => {
    const sortOrder: GtSortOrder = [{ key: 'name', order: 'asc' }];
    const comparator = sortOnMultipleKeys(sortOrder);
    expect(comparator({ name: 'Alice' }, { name: 'Alice' })).toBe(0);
  });

  it('should handle empty sort keys array', () => {
    const data: TableRow[] = [
      { name: 'Charlie' },
      { name: 'Alice' },
    ];
    const sortOrder: GtSortOrder = [];
    const comparator = sortOnMultipleKeys(sortOrder);
    // With no keys, comparator always returns 0
    expect(comparator(data[0], data[1])).toBe(0);
  });

  it('should sort numbers correctly', () => {
    const data: TableRow[] = [
      { value: 100 },
      { value: 3 },
      { value: 20 },
    ];
    const sortOrder: GtSortOrder = [{ key: 'value', order: 'asc' }];
    const sorted = [...data].sort(sortOnMultipleKeys(sortOrder));
    expect(sorted.map((r) => r.value)).toEqual([3, 20, 100]);
  });

  it('should handle mixed asc/desc on multiple keys', () => {
    const data: TableRow[] = [
      { city: 'Berlin', age: 25 },
      { city: 'Berlin', age: 35 },
      { city: 'Paris', age: 30 },
    ];
    const sortOrder: GtSortOrder = [
      { key: 'city', order: 'asc' },
      { key: 'age', order: 'desc' },
    ];
    const sorted = [...data].sort(sortOnMultipleKeys(sortOrder));
    expect(sorted).toEqual([
      { city: 'Berlin', age: 35 },
      { city: 'Berlin', age: 25 },
      { city: 'Paris', age: 30 },
    ]);
  });

  it('should sort strings alphanumerically (natural sort)', () => {
    const data: TableRow[] = [
      { name: 'Item 10' },
      { name: 'Item 2' },
      { name: 'Item 1' },
      { name: 'Item 20' },
    ];
    const sortOrder: GtSortOrder = [{ key: 'name', order: 'asc' }];
    const sorted = [...data].sort(sortOnMultipleKeys(sortOrder));
    expect(sorted.map((r) => r.name)).toEqual([
      'Item 1',
      'Item 2',
      'Item 10',
      'Item 20',
    ]);
  });

  it('should sort strings case-insensitively', () => {
    const data: TableRow[] = [
      { name: 'banana' },
      { name: 'Apple' },
      { name: 'cherry' },
    ];
    const sortOrder: GtSortOrder = [{ key: 'name', order: 'asc' }];
    const sorted = [...data].sort(sortOnMultipleKeys(sortOrder));
    expect(sorted.map((r) => r.name)).toEqual(['Apple', 'banana', 'cherry']);
  });
});

// ---------------------------------------------------------------------------
// parseSortOrderParams
// ---------------------------------------------------------------------------
describe('parseSortOrderParams', () => {
  it('should parse a single ascending sort param', () => {
    const result = parseSortOrderParams('name:asc');
    expect(result).toEqual([{ key: 'name', order: 'asc' }]);
  });

  it('should parse a single descending sort param', () => {
    const result = parseSortOrderParams('name:desc');
    expect(result).toEqual([{ key: 'name', order: 'desc' }]);
  });

  it('should parse multiple sort params', () => {
    const result = parseSortOrderParams('name:asc,age:desc');
    expect(result).toEqual([
      { key: 'name', order: 'asc' },
      { key: 'age', order: 'desc' },
    ]);
  });

  it('should default to asc when order is not desc', () => {
    const result = parseSortOrderParams('name:something');
    expect(result).toEqual([{ key: 'name', order: 'asc' }]);
  });

  it('should strip leading + or - from the key', () => {
    const result = parseSortOrderParams('+name:asc,-age:desc');
    expect(result).toEqual([
      { key: 'name', order: 'asc' },
      { key: 'age', order: 'desc' },
    ]);
  });

  it('should handle param without colon (no explicit order)', () => {
    const result = parseSortOrderParams('name');
    // order is undefined which is not 'desc', so defaults to 'asc'
    expect(result).toEqual([{ key: 'name', order: 'asc' }]);
  });
});

// ---------------------------------------------------------------------------
// sortOrderConfigToParam
// ---------------------------------------------------------------------------
describe('sortOrderConfigToParam', () => {
  it('should convert ascending sort config to param string', () => {
    const result = sortOrderConfigToParam({ key: 'name', order: 'asc' });
    expect(result).toBe('+name');
  });

  it('should convert descending sort config to param string', () => {
    const result = sortOrderConfigToParam({ key: 'name', order: 'desc' });
    expect(result).toBe('-name');
  });

  it('should work with GtSortEvent-like object', () => {
    const result = sortOrderConfigToParam({
      key: 'age',
      order: 'desc',
      currentSortOrder: [],
      addSortKey: false,
    });
    expect(result).toBe('-age');
  });
});

// ---------------------------------------------------------------------------
// sortOrderToParams
// ---------------------------------------------------------------------------
describe('sortOrderToParams', () => {
  it('should convert a single sort order to a param string', () => {
    const sortOrder: GtSortOrder = [{ key: 'name', order: 'asc' }];
    expect(sortOrderToParams(sortOrder)).toBe('+name');
  });

  it('should convert multiple sort orders to a comma-separated param string', () => {
    const sortOrder: GtSortOrder = [
      { key: 'name', order: 'asc' },
      { key: 'age', order: 'desc' },
    ];
    expect(sortOrderToParams(sortOrder)).toBe('+name,-age');
  });

  it('should return empty string for empty sort order array', () => {
    expect(sortOrderToParams([])).toBe('');
  });

  it('should handle all ascending orders', () => {
    const sortOrder: GtSortOrder = [
      { key: 'a', order: 'asc' },
      { key: 'b', order: 'asc' },
      { key: 'c', order: 'asc' },
    ];
    expect(sortOrderToParams(sortOrder)).toBe('+a,+b,+c');
  });

  it('should handle all descending orders', () => {
    const sortOrder: GtSortOrder = [
      { key: 'x', order: 'desc' },
      { key: 'y', order: 'desc' },
    ];
    expect(sortOrderToParams(sortOrder)).toBe('-x,-y');
  });
});
