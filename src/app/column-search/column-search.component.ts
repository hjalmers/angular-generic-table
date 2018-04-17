import { Component, OnInit } from '@angular/core';
import { GenericTableComponent, GtConfig } from '@angular-generic-table/core';

import { Person, PEOPLE } from './person';

@Component({
	selector: 'column-search',
	templateUrl: './column-search.component.html',
	styleUrls: ['./column-search.component.scss']
})
export class ColumnSearchComponent implements OnInit {
	public configObject: GtConfig<Person>;

	constructor() {
		this.configObject = {
			settings: [
				{
					objectKey: 'id',
					sort: 'asc',
					sortOrder: 1,
					columnOrder: 0
				},
				{
					objectKey: 'name',
					sort: 'asc',
					sortOrder: 0,
					columnOrder: 1
				},
				{
					objectKey: 'lucky_number',
					sort: 'enable',
					columnOrder: 2,
					visible: true
				}
			],
			fields: [
				{
					name: 'Id',
					objectKey: 'id'
				},
				{
					name: 'Name',
					objectKey: 'name'
				},
				{
					name: 'Lucky number',
					objectKey: 'lucky_number',
					stackedHeading: 'Custom heading'
				}
			],
			data: PEOPLE
		};
	}

	ngOnInit() {}
}
