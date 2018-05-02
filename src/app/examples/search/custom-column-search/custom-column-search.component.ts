import { Component, OnInit } from '@angular/core';
import {
	GenericTableComponent,
	GtConfig,
	GtOptions
} from '@angular-generic-table/core';
import { Person, PEOPLE } from '../person';

@Component({
	selector: 'app-custom-column-search',
	templateUrl: './custom-column-search.component.html'
})
export class CustomColumnSearchComponent implements OnInit {
	public configObject: GtConfig<Person>;

	public options: GtOptions = {
		highlightSearch: true
	};

	ngOnInit(): void {
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
}
