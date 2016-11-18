import {
  Component,
  EventEmitter,
  Input,
  Output,
  Type
} from '@angular/core';

export interface Row {
  isOpen?: boolean;
}

export class GtExpandedRow<R extends Row> {

  row: R;
  redrawEvent = new EventEmitter<R>();

  protected $hide(): void {
    this.row.isOpen = false;
  }

  protected $redraw(): void {
    this.redrawEvent.emit(this.row);
  }

}

@Component({
  selector: 'gt-expanding-row',
  template: `
    <div appComponentAnchor
         [ctor]="type" (instance)="newInstance($event)"></div>`
})
export class GtExpandingRowComponent<R extends Row, C extends GtExpandedRow<R>> {

  @Input() type: Type<C>;
  @Input() row: R;

  @Output() redrawEvent = new EventEmitter<R>();

  newInstance(instance: C): void {
    instance.row = this.row;
    instance.redrawEvent.subscribe(this.redrawEvent);
  }

}

