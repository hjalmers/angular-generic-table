import { ComponentFixture, TestBed } from '@angular/core/testing';
import { initTestBed } from '../../test-setup';
import { PaginationComponent } from './pagination.component';
import { CoreComponent } from '../core.component';

initTestBed();

describe('PaginationComponent', () => {
  let tableFixture: ComponentFixture<CoreComponent>;
  let table: CoreComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreComponent, PaginationComponent],
    }).compileComponents();

    tableFixture = TestBed.createComponent(CoreComponent);
    table = tableFixture.componentInstance;
  });

  function createPagination(data: any[], pageLength: number) {
    tableFixture.componentRef.setInput('data', data);
    tableFixture.componentRef.setInput('config', {
      columns: { name: {} },
      pagination: { length: pageLength },
    });
    tableFixture.detectChanges();

    const paginationFixture = TestBed.createComponent(PaginationComponent);
    paginationFixture.componentRef.setInput('table', table);
    paginationFixture.detectChanges();
    return paginationFixture;
  }

  it('should create', () => {
    const fixture = createPagination([], 10);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should not render when there is only one page', () => {
    const fixture = createPagination(
      [{ name: 'A' }, { name: 'B' }],
      10
    );
    const nav = fixture.nativeElement.querySelector('nav');
    expect(nav).toBeNull();
  });

  it('should render pagination when there are multiple pages', () => {
    const data = Array.from({ length: 25 }, (_, i) => ({ name: `Item ${i}` }));
    const fixture = createPagination(data, 10);
    const nav = fixture.nativeElement.querySelector('nav');
    expect(nav).toBeTruthy();
  });

  it('should render correct number of page links', () => {
    const data = Array.from({ length: 25 }, (_, i) => ({ name: `Item ${i}` }));
    const fixture = createPagination(data, 10);
    const buttons = fixture.nativeElement.querySelectorAll('button:not([disabled])');
    expect(buttons.length).toBe(3); // 3 pages
  });

  it('should mark first page as active by default', () => {
    const data = Array.from({ length: 25 }, (_, i) => ({ name: `Item ${i}` }));
    const fixture = createPagination(data, 10);
    const activeItem = fixture.nativeElement.querySelector('.active');
    expect(activeItem).toBeTruthy();
    expect(activeItem.querySelector('button').textContent.trim()).toBe('1');
  });

  it('should change page when goToPage is called', () => {
    const data = Array.from({ length: 25 }, (_, i) => ({ name: `Item ${i}` }));
    const fixture = createPagination(data, 10);

    fixture.componentInstance.goToPage(2);
    tableFixture.detectChanges();
    fixture.detectChanges();

    expect(table.paginationIndex).toBe(1);
  });

  it('should show ellipsis for many pages', () => {
    const data = Array.from({ length: 100 }, (_, i) => ({ name: `Item ${i}` }));
    const fixture = createPagination(data, 10);
    const ellipsis = fixture.nativeElement.querySelectorAll('.gt-ellipsis');
    expect(ellipsis.length).toBeGreaterThan(0);
  });
});
