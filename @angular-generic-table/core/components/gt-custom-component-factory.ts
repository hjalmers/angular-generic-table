import {
  Component,
  EventEmitter,
  Injector,
  Input,
  Output,
  Type
} from '@angular/core';

export abstract class GtCustomComponent<R> {
  row: R;
  column: any;
  redrawEvent = new EventEmitter<{row: R, column: any}>();

  protected $redraw() {
    this.redrawEvent.emit({row: this.row, column: this.column});
  }
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
  @Output() redrawEvent = new EventEmitter<{row: R, column: any}>();

  instance(instance: C) {
    instance.row = this.row;
    instance.column = this.column;
    instance.redrawEvent.subscribe(this.redrawEvent);
  }
}
