import { ComponentFixture, TestBed } from '@angular/core/testing';
import { initTestBed } from '../../test-setup';
import { GtDeltaComponent } from './gt-delta.component';

initTestBed();

describe('GtDeltaComponent', () => {
  let fixture: ComponentFixture<GtDeltaComponent>;
  let component: GtDeltaComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GtDeltaComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(GtDeltaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return undefined when data is empty', () => {
    fixture.componentRef.setInput('data', []);
    fixture.componentRef.setInput('index', 0);
    fixture.detectChanges();
    expect(component.value()).toBeUndefined();
  });

  it('should calculate delta between consecutive rows', () => {
    fixture.componentRef.setInput('data', [
      { value: 10 },
      { value: 15 },
      { value: 25 },
    ]);
    fixture.componentRef.setInput('index', 1);
    fixture.detectChanges();

    const delta = component.value();
    expect(delta).toBeDefined();
    expect(delta!.absolute).toBe(5);
    expect(delta!.relative).toBeCloseTo(0.5);
  });

  it('should calculate delta relative to a base index', () => {
    fixture.componentRef.setInput('data', [
      { value: 10 },
      { value: 15 },
      { value: 25 },
    ]);
    fixture.componentRef.setInput('index', 2);
    fixture.componentRef.setInput('baseIndex', 0);
    fixture.detectChanges();

    const delta = component.value();
    expect(delta!.absolute).toBe(15);
    expect(delta!.relative).toBeCloseTo(1.5);
  });

  it('should use initialValue for index 0', () => {
    fixture.componentRef.setInput('data', [{ value: 10 }]);
    fixture.componentRef.setInput('index', 0);
    fixture.componentRef.setInput('initialValue', 42);
    fixture.detectChanges();

    const delta = component.value();
    expect(delta!.absolute).toBe(42);
    expect(delta!.relative).toBe(42);
  });

  it('should handle negative deltas', () => {
    fixture.componentRef.setInput('data', [
      { value: 20 },
      { value: 10 },
    ]);
    fixture.componentRef.setInput('index', 1);
    fixture.detectChanges();

    const delta = component.value();
    expect(delta!.absolute).toBe(-10);
    expect(delta!.relative).toBeCloseTo(-0.5);
  });

  it('should use custom key', () => {
    fixture.componentRef.setInput('data', [
      { price: 100 },
      { price: 150 },
    ]);
    fixture.componentRef.setInput('index', 1);
    fixture.componentRef.setInput('key', 'price');
    fixture.detectChanges();

    const delta = component.value();
    expect(delta!.absolute).toBe(50);
  });

  it('should render notApplicableValue for division by zero', () => {
    fixture.componentRef.setInput('data', [
      { value: 0 },
      { value: 10 },
    ]);
    fixture.componentRef.setInput('index', 1);
    fixture.componentRef.setInput('notApplicableValue', 'N/A');
    fixture.detectChanges();

    const delta = component.value();
    expect(delta!.absolute).toBe(10);
    expect(delta!.relative).toBe('N/A');
    // Should render the string directly, not through PercentPipe
    expect(fixture.nativeElement.textContent).toContain('N/A');
  });

  it('should render positive delta with correct CSS class', () => {
    fixture.componentRef.setInput('data', [
      { value: 10 },
      { value: 20 },
    ]);
    fixture.componentRef.setInput('index', 1);
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.gt-delta-positive');
    expect(span).toBeTruthy();
  });

  it('should render negative delta with correct CSS class', () => {
    fixture.componentRef.setInput('data', [
      { value: 20 },
      { value: 10 },
    ]);
    fixture.componentRef.setInput('index', 1);
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.gt-delta-negative');
    expect(span).toBeTruthy();
  });
});
