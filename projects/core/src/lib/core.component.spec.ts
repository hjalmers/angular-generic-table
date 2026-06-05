import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { initTestBed } from '../test-setup';
import { CoreComponent } from './core.component';
import { TableConfig } from './models/table-config.interface';

@Component({
  selector: 'test-cell',
  template: `<span class="test-cell">{{ row().name }} ({{ index() }})</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestCellComponent {
  readonly row = input.required<any>();
  readonly col = input.required<any>();
  readonly index = input.required<number>();
  readonly data = input<any[]>();
  readonly search = input<string | null>(null);
}

@Component({
  selector: 'test-cell-extras',
  template: `<span class="test-extras">{{ label() }}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestCellExtrasComponent {
  readonly row = input.required<any>();
  readonly col = input.required<any>();
  readonly index = input.required<number>();
  readonly label = input('');
}

@Component({
  selector: 'test-header',
  template: `<span class="test-header">{{ column().key }} header</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestHeaderComponent {
  readonly column = input.required<any>();
  readonly sortable = input(false);
  readonly sortOrder = input<any[]>([]);
  readonly search = input<string | null>(null);
}

@Component({
  selector: 'test-header-full',
  template: `<button class="test-header-full" (click)="sort()?.($event)">{{ column().key }}</button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestHeaderFullComponent {
  readonly column = input.required<any>();
  readonly sortable = input(false);
  readonly sortOrder = input<any[]>([]);
  readonly search = input<string | null>(null);
  readonly sort = input<((event: MouseEvent) => void) | undefined>();
}

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

    it('should fall back to the default page size for auto mode before measuring', () => {
      // jsdom reports zero element heights, so measurement no-ops and the
      // default initial page size is used.
      const data = Array.from({ length: 25 }, (_, i) => ({ name: `Item ${i}` }));
      fixture.componentRef.setInput('data', data);
      fixture.componentRef.setInput('config', {
        columns: { name: {} },
        pagination: { length: 'auto' },
      });
      fixture.detectChanges();

      const rows = el.querySelectorAll('tbody tr');
      expect(rows.length).toBe(10);
      expect(component.tableInfo?.pageSize).toBe(10);
      expect(component.tableInfo?.pageTotal).toBe(3);
    });

    it('should re-chunk auto mode according to the measured page size', () => {
      const data = Array.from({ length: 25 }, (_, i) => ({ name: `Item ${i}` }));
      fixture.componentRef.setInput('data', data);
      fixture.componentRef.setInput('config', {
        columns: { name: {} },
        pagination: { length: 'auto' },
      });
      fixture.detectChanges();

      // Simulate a measurement result (DOM measurement is unavailable in jsdom).
      (component as any).autoPageSize.set(4);
      fixture.detectChanges();

      const rows = el.querySelectorAll('tbody tr');
      expect(rows.length).toBe(4);
      expect(component.tableInfo?.pageSize).toBe(4);
      expect(component.tableInfo?.pageTotal).toBe(7);
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

  // ─── Component Rendering ───

  describe('component rendering', () => {
    it('should render a component in a cell', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', {
        columns: {
          id: {},
          name: { component: TestCellComponent },
          age: {},
          city: {},
        },
      });
      fixture.detectChanges();

      const cells = el.querySelectorAll('.test-cell');
      expect(cells.length).toBe(3);
      expect(cells[0].textContent).toBe('Alice (0)');
      expect(cells[1].textContent).toBe('Bob (1)');
    });

    it('should pass componentInputs as extra inputs', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', {
        columns: {
          name: { component: TestCellExtrasComponent, componentInputs: { label: 'custom' } },
        },
      });
      fixture.detectChanges();

      const cells = el.querySelectorAll('.test-extras');
      expect(cells.length).toBe(3);
      expect(cells[0].textContent).toBe('custom');
    });

    it('should bypass search highlighting when component is set', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', {
        columns: {
          name: { component: TestCellComponent },
        },
      });
      fixture.componentRef.setInput('search', 'Alice');
      fixture.detectChanges();

      // Component should still render (not replaced by highlight template)
      const cells = el.querySelectorAll('.test-cell');
      expect(cells.length).toBeGreaterThan(0);
      // No highlight spans should be present in component cells
      const highlights = el.querySelectorAll('.gt-highlight-search');
      expect(highlights.length).toBe(0);
    });
  });

  // ─── Header Component/Template Rendering ───

  describe('header rendering', () => {
    it('should render headerComponent inside sort button by default', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', {
        columns: {
          name: { sortable: true, headerComponent: TestHeaderComponent },
        },
      });
      fixture.detectChanges();

      // The sort button should still exist
      const sortButton = el.querySelector('.gt-sort');
      expect(sortButton).toBeTruthy();
      // The custom header component should be inside the button
      const header = sortButton?.querySelector('.test-header');
      expect(header).toBeTruthy();
      expect(header?.textContent).toBe('name header');
    });

    it('should render headerComponent without sort button when headerReplaceFull is true', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', {
        columns: {
          name: { sortable: true, headerComponent: TestHeaderFullComponent, headerReplaceFull: true },
        },
      });
      fixture.detectChanges();

      // No sort button should exist
      const sortButton = el.querySelector('.gt-sort');
      expect(sortButton).toBeNull();
      // The full-control component should render directly in the th
      const header = el.querySelector('.test-header-full');
      expect(header).toBeTruthy();
    });

    it('should render headerComponent on non-sortable column', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', {
        columns: {
          name: { headerComponent: TestHeaderComponent },
        },
      });
      fixture.detectChanges();

      const header = el.querySelector('.test-header');
      expect(header).toBeTruthy();
      expect(header?.textContent).toBe('name header');
      // No sort button should exist
      expect(el.querySelector('.gt-sort')).toBeNull();
    });

    it('should pass sort callback in full-control mode', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', {
        columns: {
          name: { sortable: true, headerComponent: TestHeaderFullComponent, headerReplaceFull: true },
        },
      });
      fixture.detectChanges();

      let emitted: any;
      component.columnSort.subscribe((event) => (emitted = event));

      const button = el.querySelector('.test-header-full') as HTMLButtonElement;
      button?.click();
      fixture.detectChanges();

      expect(emitted).toBeDefined();
      expect(emitted.currentSortOrder.length).toBe(1);
    });

    it('should fall back to text when no headerComponent or headerTemplateRef', () => {
      fixture.componentRef.setInput('data', SAMPLE_DATA);
      fixture.componentRef.setInput('config', {
        columns: {
          name: { sortable: true, header: 'Custom Name' },
        },
      });
      fixture.detectChanges();

      const span = el.querySelector('.gt-sort span');
      expect(span?.textContent?.trim()).toBe('Custom Name');
    });
  });
});
