import { Component, ViewChild, ElementRef } from '@angular/core';
import { GtCustomComponent } from '@angular-generic-table/core';
import { Person } from '../person';

@Component({
	selector: 'app-search-header',
	template: `
		<div class="column-name">{{column | titlecase}}</div>
		<input #inputBox type="text" placeholder="{{column}}"
			(click)="$event.stopPropagation()"
			(keyup)="searchWithinColumn($event)"/>
	`,
	styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent extends GtCustomComponent<Person> {
	@ViewChild('inputBox') inputElement: ElementRef;

	constructor() {
		super();
	}

	searchWithinColumn(event: any): void {
		const searchTerm: string = event.target.value;
		this.columnSearch.emit({
			id: this.columnObjectKey,
			value: searchTerm
		});
	}
}
