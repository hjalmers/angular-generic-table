import { OnInit } from '@angular/core';
import { GtExpandedRow } from '../../generic-table/components/gt-expanding-row.component';
export declare class CustomRowComponent extends GtExpandedRow<any> implements OnInit {
    constructor();
    ngOnInit(): void;
    newRandomColor: () => void;
}
