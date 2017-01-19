import {
  Component,
  Injector,
  Input,
  Type
} from '@angular/core';

export abstract class GtCustomComponent<R> {
  row: R;
  column: any;
}

@Component({
  selector: 'gt-custom-component-factory',
  template: `<div appComponentAnchor [ctor]="type" 
                                     [injector]="injector" 
                                     (instance)="instance($event)"></div>`
})
export class GtCustomComponentFactory<R, C extends GtCustomComponent<R>> {
  @Input() type: Type<C>;
  @Input() injector: Injector;
  @Input() row: R;
  @Input() column: any;

  instance(instance: C) {
    instance.row = this.row;
    instance.column = this.column;
  }
}
