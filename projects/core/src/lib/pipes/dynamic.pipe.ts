import { Injector, Pipe, PipeTransform, Type } from '@angular/core';

@Pipe({
  name: 'dynamicPipe',
  standalone: true,
})
export class DynamicPipe implements PipeTransform {
  private _cache = new Map<Type<any>, PipeTransform>();

  constructor(private injector: Injector) {}

  transform(value: any, requiredPipe: Type<any>, pipeArgs: any[]): any {
    const cached = this._cache.get(requiredPipe);
    if (cached) {
      return cached.transform(value, ...(pipeArgs || []));
    }
    const childInjector = Injector.create({
      name: 'DynamicPipe',
      parent: this.injector,
      providers: [{ provide: requiredPipe }],
    });
    const pipe = childInjector.get(requiredPipe) as PipeTransform;
    this._cache.set(requiredPipe, pipe);
    return pipe.transform(value, ...(pipeArgs || []));
  }
}
