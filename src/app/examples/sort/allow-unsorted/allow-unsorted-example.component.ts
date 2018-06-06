import { Component, OnInit } from '@angular/core';
import { GtConfig, GtOptions, GtRow } from '@angular-generic-table/core';

export interface Employee extends GtRow {
	id: number;
	name: string;
	lucky_number: number;
}
@Component({
	templateUrl: './allow-unsorted-example.component.html',
	styles: []
})
export class AllowUnsortedExampleComponent implements OnInit {
	public employeeData: Array<Employee> = [];
	public configObject: GtConfig<Employee>;
	public options: GtOptions = {
		allowUnsorted: false
	};

	constructor() {}

	ngOnInit() {
		this.configObject = {
			settings: [
				{
					objectKey: 'id'
				},
				{
					objectKey: 'name'
				},
				{
					objectKey: 'lucky_number'
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
					objectKey: 'lucky_number'
				}
			]
		};
		this.employeeData = [
			{
				id: 1,
				name: 'Anna',
				lucky_number: 63
			},
			{
				id: 2,
				name: 'Julie',
				lucky_number: 8
			},
			{
				id: 3,
				name: 'Lillian',
				lucky_number: 30
			},
			{
				id: 4,
				name: 'Norma',
				lucky_number: 13
			},
			{
				id: 5,
				name: 'Ralph',
				lucky_number: 28
			},
			{
				id: 6,
				name: 'Benjamin',
				lucky_number: 66
			},
			{
				id: 7,
				name: 'George',
				lucky_number: 66
			},
			{
				id: 8,
				name: 'Ryan',
				lucky_number: 65
			},
			{
				id: 9,
				name: 'Martha',
				lucky_number: 57
			},
			{
				id: 10,
				name: 'Todd',
				lucky_number: 65
			}
		];
	}

	changeSortBehavior() {
		/*const UPDATED_OPTIONS = {
			allowUnsorted: !this.options.allowUnsorted
		}*/
		this.options = {...{allowUnsorted: !this.options.allowUnsorted}}

}
