import { GtConfig } from '../../generic-table/interfaces/gt-config';
export declare class StaticComponent {
    configObject: GtConfig<any>;
    data: Array<{
        id: number;
        name: string;
        lucky_number: number;
    }>;
    constructor();
}
