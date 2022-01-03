import { Injector, Pipe, PipeTransform, Type } from '@angular/core';

@Pipe({
  name: 'dynamicPipe',
})
export class DynamicPipe implements PipeTransform {
  constructor(private injector: Injector) {}

  transform(value: any, requiredPipe: Type<any>, pipeArgs: any): any {
    console.log(value, requiredPipe, pipeArgs);
    const injector = Injector.create({
      name: 'DynamicPipe',
      parent: this.injector,
      providers: [{ provide: requiredPipe }],
    });
    const pipe = injector.get(requiredPipe);
    return pipe.transform(value, pipeArgs);
  }
}
