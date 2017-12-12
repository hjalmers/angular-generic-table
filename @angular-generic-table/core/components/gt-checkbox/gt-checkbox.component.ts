import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GtRow} from '../../interfaces/gt-row';
import {GtCustomComponent} from '../gt-custom-component-factory';

@Component({
  selector: 'gt-checkbox',
  template: `    
    <label class="custom-control custom-checkbox" (click)="$event.stopPropagation()">
      <input #checkbox type="checkbox" class="custom-control-input" [(checked)]="checked" (change)="toggle($event);">
      <span class="custom-control-indicator"></span>
    </label>
  `,
  styles: []
})
export class GtCheckboxComponent implements OnInit {
  get initialValue(): boolean {
    return this._initialValue;
  }

  @Input() set initialValue(value: boolean) {
    console.log(value);
    this._initialValue = value;
  }
  get checked(): boolean {
    return this._checked;
  }

  @Input() set checked(value: boolean) {
    console.log(value);
    this._checked = value;
  }

  private _checked: boolean;
  private _initialValue: boolean;
  @Output() changed: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggle(checked: boolean) {
    console.log(checked, checked, this._checked);
    this.changed.emit(this.checked);
  }

}
