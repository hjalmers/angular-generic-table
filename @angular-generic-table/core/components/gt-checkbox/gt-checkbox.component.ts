import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'gt-checkbox',
	template: `
    <label class="custom-control custom-checkbox" (click)="$event.stopPropagation()">
      <input #checkbox type="checkbox" class="custom-control-input" [(checked)]="checked" (change)="toggle($event);">
      <span class="custom-control-label"></span>
    </label>
  `,
	styles: [],
	host: { class: 'd-flex justify-content-end' }
})
export class GtCheckboxComponent implements OnInit {
	get initialValue(): boolean {
		return this._initialValue;
	}

	@Input()
	set initialValue(value: boolean) {
		this._initialValue = value;
	}
	get checked(): boolean {
		return this._checked;
	}

	@Input()
	set checked(value: boolean) {
		this._checked = value;
	}

	private _checked: boolean;
	private _initialValue: boolean;
	@Output() changed: EventEmitter<boolean> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	toggle(checked: boolean) {
		this.changed.emit(this.checked);
	}
}
