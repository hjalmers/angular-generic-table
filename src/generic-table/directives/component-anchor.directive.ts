import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Type,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appComponentAnchor]'
})
export class ComponentAnchorDirective<C> implements OnInit {

  @Input() ctor: Type<C>;
  @Output() instance: EventEmitter<C> = new EventEmitter<C>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainer: ViewContainerRef) {
  }

  ngOnInit(): void {
    const factory: ComponentFactory<C> = this.componentFactoryResolver
      .resolveComponentFactory(this.ctor);
    const component: ComponentRef<C> = this.viewContainer
      .createComponent(factory);
    this.instance.emit(component.instance);
  }

}
