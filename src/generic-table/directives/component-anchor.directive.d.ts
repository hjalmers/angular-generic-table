import { ComponentFactoryResolver, EventEmitter, OnInit, Type, ViewContainerRef } from '@angular/core';
export declare class ComponentAnchorDirective<C> implements OnInit {
    private componentFactoryResolver;
    private viewContainer;
    ctor: Type<C>;
    instance: EventEmitter<C>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainer: ViewContainerRef);
    ngOnInit(): void;
}
