import { Injector, Pipe, PipeTransform } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { initTestBed } from '../../test-setup';
import { DynamicPipe } from './dynamic.pipe';

initTestBed();

@Pipe({ name: 'double', standalone: true })
class DoublePipe implements PipeTransform {
  transform(value: number): number {
    return value * 2;
  }
}

@Pipe({ name: 'prefix', standalone: true })
class PrefixPipe implements PipeTransform {
  transform(value: string, prefix: string): string {
    return prefix + value;
  }
}

describe('DynamicPipe', () => {
  let pipe: DynamicPipe;
  let injector: Injector;

  beforeEach(() => {
    injector = TestBed.inject(Injector);
    pipe = new DynamicPipe(injector);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should delegate to the required pipe', () => {
    const result = pipe.transform(5, DoublePipe, []);
    expect(result).toBe(10);
  });

  it('should pass additional arguments to the required pipe', () => {
    const result = pipe.transform('World', PrefixPipe, ['Hello ']);
    expect(result).toBe('Hello World');
  });

  it('should handle null pipeArgs gracefully', () => {
    const result = pipe.transform(7, DoublePipe, null as any);
    expect(result).toBe(14);
  });

  it('should cache pipe instances and return the same instance on second call', () => {
    const result1 = pipe.transform(3, DoublePipe, []);
    const result2 = pipe.transform(4, DoublePipe, []);

    expect(result1).toBe(6);
    expect(result2).toBe(8);

    // Access the private cache to verify caching
    const cache = (pipe as any)._cache as Map<any, PipeTransform>;
    expect(cache.size).toBe(1);
    expect(cache.has(DoublePipe)).toBe(true);
  });

  it('should cache different pipe types separately', () => {
    pipe.transform(3, DoublePipe, []);
    pipe.transform('x', PrefixPipe, ['y']);

    const cache = (pipe as any)._cache as Map<any, PipeTransform>;
    expect(cache.size).toBe(2);
    expect(cache.has(DoublePipe)).toBe(true);
    expect(cache.has(PrefixPipe)).toBe(true);
  });
});
