import { ComponentFixture, TestBed } from '@angular/core/testing';
import { initTestBed } from '../test-setup';
import { CoreComponent } from './core.component';
import { TableConfig } from './models/table-config.interface';

initTestBed();

const SAMPLE_DATA = [
  { id: 1, name: 'Alice', age: 30, city: 'Stockholm' },
  { id: 2, name: 'Bob', age: 25, city: 'Gothenburg' },
  { id: 3, name: 'Charlie', age: 35, city: 'Malmö' },
];

const SAMPLE_CONFIG: TableConfig = {
  columns: {
    id: { sortable: true },
    name: { sortable: true },
    age: { sortable: true },
    city: {},
  },
};

describe('CoreComponent', () => {
  let fixture: ComponentFixture<CoreComponent>;
  let component: CoreComponent;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
  });

  // ─── Creation ───

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ─── Rendering ───

  describe('rendering', () => {
    it('should render column headers', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', SAMPLE_CONFIG);
      fixture.detectChanges();

      const headers = el.querySelectorAll('th');
      expect(headers.length).toBe(4);
    });

    it('should render data rows', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', SAMPLE_CONFIG);
      fixture.detectChanges();

      const rows = el.querySelectorAll('tbody tr');
      expect(rows.length).toBe(3);
    });

    it('should render cell values', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', SAMPLE_CONFIG);
      fixture.detectChanges();

      const firstRow = el.querySelector('tbody tr');
      expect(firstRow?.textContent).toContain('Alice');
    });

    it('should hide columns marked as hidden', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', {
        columns: {
          id: {},
          name: {},
          age: { hidden: true },
          city: {},
        },
      });
      fixture.detectChanges();

      const headers = el.querySelectorAll('th');
      expect(headers.length).toBe(3);
    });

    it('should respect column order', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', {
        columns: {
          name: { order: 1 },
          id: { order: 0 },
          age: { order: 2 },
        },
      });
      fixture.detectChanges();

      const headers = Array.from(el.querySelectorAll('th'));
      const headerTexts = headers.map((h) => h.textContent?.trim().toLowerCase());
      expect(headerTexts).toEqual(['id', 'name', 'age']);
    });
  });

  // ─── Loading State ───

  describe('loading', () => {
    it('should show loading content when loading is true', () => {
      fixture.componentRef.setInput('data', []);
      fixture.componentRef.setInput('config', SAMPLE_CONFIG);
      fixture.componentRef.setInput('loading', true);
      fixture.detectChanges();

      const loadingContent = el.querySelector('.table-loading');
      // Content projection slot exists in the template
      expect(el.querySelector('[aria-busy="true"]')).toBeTruthy();
    });

    it('should not show aria-busy when not loading', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', SAMPLE_CONFIG);
      fixture.componentRef.setInput('loading', false);
      fixture.detectChanges();

      expect(el.querySelector('[aria-busy]')).toBeNull();
    });
  });

  // ─── Sorting ───

  describe('sorting', () => {
    it('should emit columnSort when a sortable header is clicked', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', SAMPLE_CONFIG);
      fixture.detectChanges();

      let emitted: any;
      component.columnSort.subscribe((event) => (emitted = event));

      const sortButton = el.querySelector('.gt-sort') as HTMLButtonElement;
      sortButton?.click();
      fixture.detectChanges();

      expect(emitted).toBeDefined();
      expect(emitted.currentSortOrder.length).toBe(1);
    });

    it('should sort data ascending on first click', () => {
      fixture.componentRef.setInput('data', [
        { name: 'Charlie' },
        { name: 'Alice' },
        { name: 'Bob' },
      ]);
      fixture.componentRef.setInput('config', {
        columns: { name: { sortable: true } },
      });
      fixture.detectChanges();

      const sortButton = el.querySelector('.gt-sort') as HTMLButtonElement;
      sortButton?.click();
      fixture.detectChanges();

      const cells = Array.from(el.querySelectorAll('tbody td'));
      const values = cells.map((c) => c.textContent?.trim());
      expect(values).toEqual(['Alice', 'Bob', 'Charlie']);
    });

    it('should toggle to descending on second click', () => {
      fixture.componentRef.setInput('data', [
        { name: 'Charlie' },
        { name: 'Alice' },
        { name: 'Bob' },
      ]);
      fixture.componentRef.setInput('config', {
        columns: { name: { sortable: true } },
      });
      fixture.detectChanges();

      const sortButton = el.querySelector('.gt-sort') as HTMLButtonElement;
      sortButton?.click();
      fixture.detectChanges();
      sortButton?.click();
      fixture.detectChanges();

      const cells = Array.from(el.querySelectorAll('tbody td'));
      const values = cells.map((c) => c.textContent?.trim());
      expect(values).toEqual(['Charlie', 'Bob', 'Alice']);
    });
  });

  // ─── Pagination ───

  describe('pagination', () => {
    it('should paginate data according to config', () => {
      const data = Array.from({ length: 15 }, (_, i) => ({ name: `Item ${i}` }));
      fixture.componentRef.setInput('data', data);
      fixture.componentRef.setInput('config', {
        columns: { name: {} },
        pagination: { length: 5 },
      });
      fixture.detectChanges();

      const rows = el.querySelectorAll('tbody tr');
      expect(rows.length).toBe(5);
    });

    it('should show different page when paginationIndex changes', () => {
      const data = Array.from({ length: 10 }, (_, i) => ({ name: `Item ${i}` }));
      fixture.componentRef.setInput('data', data);
      fixture.componentRef.setInput('config', {
        columns: { name: {} },
        pagination: { length: 5 },
      });
      fixture.detectChanges();

      component.paginationIndex = 1;
      fixture.detectChanges();

      const firstCell = el.querySelector('tbody td');
      expect(firstCell?.textContent?.trim()).toBe('Item 5');
    });

    it('should emit pageChange when paginationIndex is set', () => {
      const data = Array.from({ length: 10 }, (_, i) => ({ name: `Item ${i}` }));
      fixture.componentRef.setInput('data', data);
      fixture.componentRef.setInput('config', {
        columns: { name: {} },
        pagination: { length: 5 },
      });
      fixture.detectChanges();

      let emitted: any;
      component.pageChange.subscribe((event) => (emitted = event));

      component.paginationIndex = 1;
      expect(emitted).toBeDefined();
      expect(emitted.index).toBe(1);
    });

    it('should clamp paginationIndex to valid range', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', {
        columns: { name: {} },
        pagination: { length: 2 },
      });
      fixture.detectChanges();

      component.paginationIndex = 999;
      fixture.detectChanges();

      expect(component.boundedPaginationIndex()).toBeLessThanOrEqual(1);
    });
  });

  // ─── Search ───

  describe('search', () => {
    it('should filter rows by search term', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', SAMPLE_CONFIG);
      fixture.componentRef.setInput('search', 'Alice');
      fixture.detectChanges();

      const rows = el.querySelectorAll('tbody tr');
      expect(rows.length).toBe(1);
    });

    it('should show all rows when search is cleared', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', SAMPLE_CONFIG);
      fixture.componentRef.setInput('search', 'Alice');
      fixture.detectChanges();

      fixture.componentRef.setInput('search', null);
      fixture.detectChanges();

      const rows = el.querySelectorAll('tbody tr');
      expect(rows.length).toBe(3);
    });
  });

  // ─── Lazy Loading ───

  describe('lazy loading', () => {
    it('should use pagingInfo for lazy-loaded mode', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', {
        columns: { id: {}, name: {} },
      });
      fixture.componentRef.setInput('pagingInfo', {
        pageCurrent: 1,
        numberOfRecords: 100,
        pageSize: 10,
        pageTotal: 10,
      });
      fixture.detectChanges();

      const info = component.tableInfoSignal();
      expect(info.lazyLoaded).toBe(true);
      expect(info.numberOfRecords).toBe(100);
    });

    it('should skip client-side search when lazy-loaded', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', SAMPLE_CONFIG);
      fixture.componentRef.setInput('pagingInfo', {
        pageCurrent: 1,
        numberOfRecords: 100,
        pageSize: 10,
        pageTotal: 10,
      });
      fixture.componentRef.setInput('search', 'Alice');
      fixture.detectChanges();

      // All 3 rows should still be shown — search is server-side
      const rows = el.querySelectorAll('tbody tr');
      expect(rows.length).toBe(3);
    });
  });

  // ─── Row Interaction ───

  describe('row interaction', () => {
    it('should emit rowClick when row is clicked', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', {
        ...SAMPLE_CONFIG,
        rowClick: true,
      });
      fixture.detectChanges();

      let emitted: any;
      component.rowClick.subscribe((event) => (emitted = event));

      const row = el.querySelector('tbody tr') as HTMLTableRowElement;
      row?.click();
      fixture.detectChanges();

      expect(emitted).toBeDefined();
      expect(emitted.index).toBe(0);
    });
  });


  // ─── Table Info ───

  describe('tableInfo', () => {
    it('should report correct record count', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', SAMPLE_CONFIG);
      fixture.detectChanges();

      expect(component.tableInfo?.numberOfRecords).toBe(3);
    });

    it('should report correct page total with pagination', () => {
      const data = Array.from({ length: 15 }, (_, i) => ({ name: `Item ${i}` }));
      fixture.componentRef.setInput('data', data);
      fixture.componentRef.setInput('config', {
        columns: { name: {} },
        pagination: { length: 5 },
      });
      fixture.detectChanges();

      expect(component.tableInfo?.pageTotal).toBe(3);
    });
  });
});
