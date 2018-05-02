import { Component, OnInit } from '@angular/core';
import { GtCustomComponent } from '@angular-generic-table/core';
import { Person } from '../person';

@Component({
	selector: 'app-search-header',
	template: `<span>{{column}}</span>`
})
export class SearchHeaderComponent extends GtCustomComponent<Person>
	implements OnInit {
	constructor() {
		super();
	}

	ngOnInit(): void {}
}
