import { Component } from '@angular/core';
import { GtCustomComponent } from '@angular-generic-table/core';
import { Person } from '../person';

@Component({
	selector: 'app-search-header',
	templateUrl: './search-header.component.html',
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
