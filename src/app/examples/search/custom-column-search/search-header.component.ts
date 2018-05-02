import { Component, OnInit } from '@angular/core';
import { GtCustomComponent } from '@angular-generic-table/core';
import { Person } from '../person';

@Component({
	selector: 'app-search-header',
	template: `
		<div class="column-name">{{column | titlecase}}</div>
		<input type="text" placeholder="{{column}}"
			(click)="$event.stopPropagation()" />
	`,
	styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent extends GtCustomComponent<Person>
	implements OnInit {
	constructor() {
		super();
	}

	ngOnInit(): void {}
}
