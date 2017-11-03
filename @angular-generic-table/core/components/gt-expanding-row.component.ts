import {
    Component,
    EventEmitter,
    Input,
    Output,
    Type
} from '@angular/core';
import { GtRow } from '../interfaces/gt-row';
import {GtConfigField} from '../interfaces/gt-config-field';
import {GtConfigSetting} from '../interfaces/gt-config-setting';

export class GtExpandedRow<R extends GtRow> {
    row: R;
    columnWidth: Object;
    gtSettings: Array<GtConfigSetting>;
    gtFields: Array<GtConfigField<R, any>>;
    gtOptions: any;
    gtInfo: any;
    data: any;
    redrawEvent = new EventEmitter<R>();
    toggleRowEvent = new EventEmitter<R>();

    public $hide(): void {
        this.toggleRowEvent.emit(this.row);
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
    @Input() columnWidth: Object;
    @Input() gtSettings: Array<GtConfigSetting>;
    @Input() gtFields: Array<GtConfigField<R, any>>;
    @Input() gtOptions: any;
    @Input() gtInfo: any;
    @Input() data: any;

    @Output() redrawEvent = new EventEmitter<R>();
    @Output() toggleRowEvent = new EventEmitter<R>();

    newInstance(instance: C): void {
        instance.row = this.row;
        instance.columnWidth = this.columnWidth;
        instance.gtSettings = this.gtSettings;
        instance.gtFields = this.gtFields;
        instance.gtOptions = this.gtOptions;
        instance.gtInfo = this.gtInfo;
        instance.data = typeof this.data === 'function' ? this.data(this.row) : this.data;
        instance.redrawEvent.subscribe(this.redrawEvent);
        instance.toggleRowEvent.subscribe(this.toggleRowEvent);

    }
}
