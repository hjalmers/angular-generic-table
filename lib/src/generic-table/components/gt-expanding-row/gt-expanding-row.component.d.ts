import { ViewContainerRef, ComponentFactoryResolver, EventEmitter } from '@angular/core';
export declare class GtExpandingRowComponent {
    private componentFactoryResolver;
    target: ViewContainerRef;
    type: any;
    row: {
        isOpen: boolean;
    };
    redrawEvent: EventEmitter<{}>;
    private cmpRef;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
export declare class GtExpandedRow {
    row: any;
    column: any;
    redrawEvent: EventEmitter<{}>;
    protected $hide(): void;
    protected $redraw(): void;
}
