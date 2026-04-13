import { SortClassPipe } from './sort-class.pipe';
import { GtSortOrder } from '../models/table-sort.interface';

describe('SortClassPipe', () => {
  let pipe: SortClassPipe;

  beforeEach(() => {
    pipe = new SortClassPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('context: class (default)', () => {
    it('should return "gt-sort-asc" for ascending sort', () => {
      const sortOrder: GtSortOrder = [{ key: 'name', order: 'asc' }];
      expect(pipe.transform(sortOrder, 'name')).toBe('gt-sort-asc');
    });

    it('should return "gt-sort-desc" for descending sort', () => {
      const sortOrder: GtSortOrder = [{ key: 'name', order: 'desc' }];
      expect(pipe.transform(sortOrder, 'name')).toBe('gt-sort-desc');
    });

    it('should return empty string when key is not in sort order', () => {
      const sortOrder: GtSortOrder = [{ key: 'name', order: 'asc' }];
      expect(pipe.transform(sortOrder, 'age')).toBe('');
    });

    it('should return empty string when sortOrder is null', () => {
      expect(pipe.transform(null, 'name')).toBe('');
    });

    it('should return empty string when sortOrder is empty', () => {
      expect(pipe.transform([], 'name')).toBe('');
    });
  });

  describe('context: aria', () => {
    it('should return "ascending" for asc sort', () => {
      const sortOrder: GtSortOrder = [{ key: 'name', order: 'asc' }];
      expect(pipe.transform(sortOrder, 'name', 'aria')).toBe('ascending');
    });

    it('should return "descending" for desc sort', () => {
      const sortOrder: GtSortOrder = [{ key: 'name', order: 'desc' }];
      expect(pipe.transform(sortOrder, 'name', 'aria')).toBe('descending');
    });

    it('should return null when key is not in sort order', () => {
      const sortOrder: GtSortOrder = [{ key: 'name', order: 'asc' }];
      expect(pipe.transform(sortOrder, 'age', 'aria')).toBeNull();
    });

    it('should return null when sortOrder is null', () => {
      expect(pipe.transform(null, 'name', 'aria')).toBeNull();
    });
  });

  describe('context: order', () => {
    it('should return null when only one column is sorted', () => {
      const sortOrder: GtSortOrder = [{ key: 'name', order: 'asc' }];
      expect(pipe.transform(sortOrder, 'name', 'order')).toBeNull();
    });

    it('should return 1-based index when multiple columns are sorted', () => {
      const sortOrder: GtSortOrder = [
        { key: 'name', order: 'asc' },
        { key: 'age', order: 'desc' },
      ];
      expect(pipe.transform(sortOrder, 'name', 'order')).toBe('1');
      expect(pipe.transform(sortOrder, 'age', 'order')).toBe('2');
    });

    it('should return null when key is not in sort order', () => {
      const sortOrder: GtSortOrder = [
        { key: 'name', order: 'asc' },
        { key: 'age', order: 'desc' },
      ];
      expect(pipe.transform(sortOrder, 'email', 'order')).toBeNull();
    });

    it('should return null when sortOrder is null', () => {
      expect(pipe.transform(null, 'name', 'order')).toBeNull();
    });
  });
});
