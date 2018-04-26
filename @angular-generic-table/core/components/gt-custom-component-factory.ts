import {
	Component,
	EventEmitter,
	Injector,
	Input,
	OnInit,
	Output,
	Type
} from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export abstract class GtCustomComponent<R> implements OnInit {
	row: R;
	column: any;
	redrawEvent = new EventEmitter<{ row: R; column: any }>();
	searchTerms: string;
	$searchTerms: ReplaySubject<string> = new ReplaySubject(1);

	protected $redraw() {
		this.redrawEvent.emit({ row: this.row, column: this.column });
	}
	ngOnInit() {
		this.$searchTerms.subscribe(terms => (this.searchTerms = terms));
	}
}

@Component({
	selector: 'gt-custom-component-factory',
	template: `<div gtComponentAnchor [ctor]="type"
                    [injector]="injector"
                    (instance)="instance($event)"></div>`
})
export class GtCustomComponentFactory<R, C extends GtCustomComponent<R>> {
	@Input()
	set searchTerms(value: string) {
		this.$searchTerms.next(value);
	}
	@Input() type: Type<C>;
	@Input() injector: Injector;
	@Input() row: R;
	@Input() column: any;
	$searchTerms: ReplaySubject<string> = new ReplaySubject(1);
	@Output() redrawEvent = new EventEmitter<{ row: R; column: any }>();

	instance(instance: C) {
		instance.row = this.row;
		instance.column = this.column;
		instance.$searchTerms = this.$searchTerms;
		instance.redrawEvent.subscribe(this.redrawEvent);
	}
}
