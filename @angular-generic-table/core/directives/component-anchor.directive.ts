import {
	ComponentFactory,
	ComponentFactoryResolver,
	ComponentRef,
	Directive,
	EventEmitter,
	Injector,
	Input,
	OnInit,
	Output,
	Type,
	ViewContainerRef
} from '@angular/core';

@Directive({
	selector: '[gtComponentAnchor]'
})
export class ComponentAnchorDirective<C> implements OnInit {
	@Input() ctor: Type<C>;
	@Input() injector: Injector;
	@Output() instance: EventEmitter<C> = new EventEmitter<C>();

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private viewContainer: ViewContainerRef
	) {}

	ngOnInit(): void {
		const factory: ComponentFactory<
			C
		> = this.componentFactoryResolver.resolveComponentFactory(this.ctor);
		const component: ComponentRef<C> = this.viewContainer.createComponent(
			factory,
			0,
			this.injector
		);
		this.instance.emit(component.instance);
	}
}
