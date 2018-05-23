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
import { GtColumnSearch } from '../interfaces/gt-column-search';

export abstract class GtCustomComponent<R> implements OnInit {
	row: R;
	column: any;
	redrawEvent = new EventEmitter<{ row: R; column: any }>();
	columnSearch: EventEmitter<GtColumnSearch>;
	columnObjectKey: string;
	searchTerms: string;
	$searchTerms: ReplaySubject<string> = new ReplaySubject(1);

	protected $redraw($event?: any) {
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
	@Input() columnObjectKey?: string;
	$searchTerms: ReplaySubject<string> = new ReplaySubject(1);
	@Output() redrawEvent = new EventEmitter<{ row: R; column: any }>();
	@Output() columnSearch = new EventEmitter<GtColumnSearch>();

	instance(instance: C) {
		instance.row = this.row;
		instance.column = this.column;
		instance.$searchTerms = this.$searchTerms;
		instance.redrawEvent.subscribe(this.redrawEvent);
		instance.columnSearch = this.columnSearch;

		if (this.columnObjectKey) {
			instance.columnObjectKey = this.columnObjectKey;
		}
	}
}
