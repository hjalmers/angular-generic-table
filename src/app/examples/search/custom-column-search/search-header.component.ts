import { Component, ViewChild, ElementRef } from '@angular/core';
import { GtCustomComponent } from '@angular-generic-table/core';
import { Person } from '../person';

@Component({
	selector: 'app-search-header',
	template: `
		<div class="column-name">{{column | titlecase}}</div>
		<input #inputBox type="text" placeholder="{{column}}"
			(click)="$event.stopPropagation()"
			(keyup)="searchWithinColumn(inputBox.value, false)" />
	`,
	styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent extends GtCustomComponent<Person> {
	constructor() {
		super();
	}

	searchWithinColumn(searchTerm: string, onlyNull: boolean): void {
		this.columnSearch.emit({
			id: this.columnObjectKey,
			value: searchTerm,
			onlyNull: onlyNull
		});
	}
}
