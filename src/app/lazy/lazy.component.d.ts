import { EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { GtConfig } from '../../generic-table/interfaces/gt-config';
import { CustomRowComponent } from '../custom-row/custom-row.component';
export declare class LazyComponent {
    private http;
    configObject: GtConfig<any>;
    expandedRow: typeof CustomRowComponent;
    data: EventEmitter<{}>;
    url: string;
    private req;
    trigger: ($event: any) => void;
    constructor(http: Http);
    getData: (page: any, pageLength: any) => void;
}
