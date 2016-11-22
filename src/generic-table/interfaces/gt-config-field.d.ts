import { GtRow } from './gt-row';
export interface GtRenderFunc<R extends GtRow> {
    (row: R): string;
}
export interface GtValueFunc<R extends GtRow> {
    (row: R): any;
}
export interface GtClickFunc<R extends GtRow> {
    (row: R, col: any): void;
}
export interface GtConfigField<R extends GtRow> {
    name: string;
    objectKey: string;
    classNames?: string;
    render?: GtRenderFunc<R>;
    compile?: boolean;
    value?: GtValueFunc<R>;
    click?: GtClickFunc<R>;
    expand?: boolean;
    export?: GtValueFunc<R>;
    sort?: GtValueFunc<R>;
    search?: any;
}
