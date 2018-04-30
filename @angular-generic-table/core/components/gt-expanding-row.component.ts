import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { GtRow, GtConfigField, GtConfigSetting, GtEvent } from '..';

export class GtExpandedRow<R extends GtRow> {
	row: R;
	columnWidth: Object;
	gtSettings: Array<GtConfigSetting>;
	gtFields: Array<GtConfigField<R, any>>;
	gtOptions: any;
	gtInfo: any;
	data: any;
	redrawEvent = new EventEmitter<R>();
	gtEvent: EventEmitter<GtEvent>;
	toggleRowEvent = new EventEmitter<R>();

	public $hide(): void {
		this.toggleRowEvent.emit(this.row);
	}

	protected $redraw(): void {
		this.redrawEvent.emit(this.row);
	}
	protected $rowClick(row: GtRow, $event: MouseEvent) {
		this.gtEvent.emit({
			name: 'gt-row-clicked',
			value: { row: row, event: $event }
		});
	}
}

@Component({
	selector: 'gt-expanding-row',
	template: `
        <div gtComponentAnchor
             [ctor]="type" (instance)="newInstance($event)"></div>`
})
export class GtExpandingRowComponent<
	R extends GtRow,
	C extends GtExpandedRow<R>
> {
	@Input() type: Type<C>;
	@Input() row: R;
	@Input() columnWidth: Object;
	@Input() gtSettings: Array<GtConfigSetting>;
	@Input() gtFields: Array<GtConfigField<R, any>>;
	@Input() gtOptions: any;
	@Input() gtInfo: any;
	@Input() data: any;

	@Output() redrawEvent = new EventEmitter<R>();
	@Output() toggleRowEvent = new EventEmitter<R>();
	@Input() gtEvent: any;

	newInstance(instance: C): void {
		instance.row = this.row;
		instance.columnWidth = this.columnWidth;
		instance.gtSettings = this.gtSettings;
		instance.gtFields = this.gtFields;
		instance.gtOptions = this.gtOptions;
		instance.gtInfo = this.gtInfo;
		instance.data =
			typeof this.data === 'function' ? this.data(this.row) : this.data;
		instance.redrawEvent.subscribe(this.redrawEvent);
		instance.toggleRowEvent.subscribe(this.toggleRowEvent);
		instance.gtEvent = this.gtEvent;
	}
}
