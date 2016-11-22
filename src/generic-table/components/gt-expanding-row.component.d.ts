import { EventEmitter, Type } from '@angular/core';
import { GtRow } from '../interfaces/gt-row';
export declare class GtExpandedRow<R extends GtRow> {
    row: R;
    redrawEvent: EventEmitter<R>;
    protected $hide(): void;
    protected $redraw(): void;
}
export declare class GtExpandingRowComponent<R extends GtRow, C extends GtExpandedRow<R>> {
    type: Type<C>;
    row: R;
    redrawEvent: EventEmitter<R>;
    newInstance(instance: C): void;
}
