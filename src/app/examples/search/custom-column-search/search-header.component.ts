import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GtCustomComponent } from '@angular-generic-table/core';
import { Person } from '../person';

@Component({
	selector: 'app-search-header',
	template: `
		<div class="column-name">{{column | titlecase}}</div>
		<input #inputBox type="text" placeholder="{{column}}"
			(click)="$event.stopPropagation()" />
	`,
	styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent extends GtCustomComponent<Person>
	implements OnInit {
	@ViewChild('inputBox') inputElement: ElementRef;

	constructor() {
		super();
	}

	ngOnInit(): void {
		this.setInputElementId();
	}

	setInputElementId(): void {
		this.inputElement.nativeElement.id = this.columnObjectKey;
	}
}
