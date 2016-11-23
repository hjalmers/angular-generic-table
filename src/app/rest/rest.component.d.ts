import { EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { CustomRowComponent } from '../custom-row/custom-row.component';
import { GtConfig } from '../../../src/generic-table/interfaces/gt-config';
import 'rxjs/add/operator/map';
export declare class RestComponent {
    private http;
    configObject: GtConfig<any>;
    data: EventEmitter<{}>;
    private myTable;
    expandedRow: typeof CustomRowComponent;
    constructor(http: Http);
    addData: () => void;
    /** Apply predefined filter using first_name.
     * */
    applyFilter: () => void;
    /** Apply search
     * */
    applySearch: (value: string) => void;
}
