import { RowSelectionPipe } from './row-selection.pipe';
import { TableRow } from '../models/table-row.interface';

describe('RowSelectionPipe', () => {
  let pipe: RowSelectionPipe;

  beforeEach(() => {
    pipe = new RowSelectionPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return className when comparator returns true', () => {
    const row: TableRow = { id: 1, name: 'Alice' };
    const selection = { id: 1 };
    const comparator = (r: TableRow, s: any) => r['id'] === s.id;

    expect(pipe.transform(row, selection, comparator, 'selected')).toBe(
      'selected'
    );
  });

  it('should return empty string when comparator returns false', () => {
    const row: TableRow = { id: 1, name: 'Alice' };
    const selection = { id: 2 };
    const comparator = (r: TableRow, s: any) => r['id'] === s.id;

    expect(pipe.transform(row, selection, comparator, 'selected')).toBe('');
  });

  it('should return empty string when className is undefined', () => {
    const row: TableRow = { id: 1, name: 'Alice' };
    const selection = { id: 1 };
    const comparator = (r: TableRow, s: any) => r['id'] === s.id;

    expect(pipe.transform(row, selection, comparator, undefined)).toBe('');
  });

  it('should return empty string when className is empty string', () => {
    const row: TableRow = { id: 1, name: 'Alice' };
    const selection = { id: 1 };
    const comparator = (r: TableRow, s: any) => r['id'] === s.id;

    expect(pipe.transform(row, selection, comparator, '')).toBe('');
  });

  it('should pass row and selection to comparator', () => {
    const row: TableRow = { id: 5, name: 'Bob' };
    const selection = [5, 10];
    const comparator = vi.fn().mockReturnValue(true);

    pipe.transform(row, selection, comparator, 'active');

    expect(comparator).toHaveBeenCalledWith(row, selection);
  });

  it('should work with array-based selection', () => {
    const row: TableRow = { id: 3, name: 'Charlie' };
    const selection = [1, 3, 5];
    const comparator = (r: TableRow, s: number[]) => s.includes(r['id']);

    expect(pipe.transform(row, selection, comparator, 'highlight')).toBe(
      'highlight'
    );
  });

  it('should return empty string when row is not in array selection', () => {
    const row: TableRow = { id: 4, name: 'Diana' };
    const selection = [1, 3, 5];
    const comparator = (r: TableRow, s: number[]) => s.includes(r['id']);

    expect(pipe.transform(row, selection, comparator, 'highlight')).toBe('');
  });
});
