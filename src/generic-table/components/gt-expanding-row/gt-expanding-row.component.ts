import {
  Component,
  EventEmitter,
  Input,
  Output,
  Type
} from '@angular/core';
import { GtRow } from '../../interfaces/gt-row';

export class GtExpandedRow<R extends GtRow> {

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
export class GtExpandingRowComponent<R extends GtRow, C extends GtExpandedRow<R>> {

  @Input() type: Type<C>;
  @Input() row: R;

  @Output() redrawEvent = new EventEmitter<R>();

  newInstance(instance: C): void {
    instance.row = this.row;
    instance.redrawEvent.subscribe(this.redrawEvent);
  }

}
