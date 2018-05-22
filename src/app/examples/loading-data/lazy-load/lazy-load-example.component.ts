import { Component, OnInit, ViewChild } from '@angular/core';
import {
	GenericTableComponent,
	GtConfig,
	GtInformation,
	GtOptions,
	GtRow
} from '@angular-generic-table/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CustomRowComponent } from '../../../custom-row/custom-row.component';

export interface Employee extends GtRow {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	lucky_number: number;
	favorite_color: string;
}
@Component({
	templateUrl: './lazy-load-example.component.html',
	styles: []
})
export class LazyLoadExampleComponent implements OnInit {
	public configObject: GtConfig<Employee>;
	options: GtOptions;
	@ViewChild(GenericTableComponent)
	public employeeTable: GenericTableComponent<Employee, any>;

	public data: Array<any> = [];
	constructor(public http: HttpClient) {
		this.options = {
			lazyLoad: true,
			cache: false,
			rowIndex: 'id'
		};
	}

	ngOnInit() {
		this.configObject = {
			settings: [
				{
					objectKey: 'id',
					sort: 'desc'
				},
				{
					objectKey: 'name'
				},
				{
					objectKey: 'email'
				},
				{
					objectKey: 'gender'
				},
				{
					objectKey: 'favorite_color',
					sort: 'disable'
				},
				{
					objectKey: 'checkbox'
				}
			],
			fields: [
				{
					name: 'Id',
					objectKey: 'id',
					expand: {
						component: CustomRowComponent
					},
					columnClass: 'clickable'
				},
				{
					name: 'Name',
					objectKey: 'name',
					value: row => row.first_name + ' ' + row.last_name,
					render: row =>
						'<div>' + row.first_name + ' ' + row.last_name + '</div>',
					sort: row => row.first_name + ' ' + row.last_name
				},
				{
					name: 'Favorite color',
					objectKey: 'favorite_color',
					columnClass: 'text-right',
					render: row =>
						'<div class="float-right" style="width:15px;height:15px;border-radius:50%;background: ' +
						row.favorite_color +
						'"></div>',

					click: row =>
						console.log(
							row.first_name + "'s favorite color is: " + row.favorite_color
						)
				},
				{
					name: 'Gender',
					objectKey: 'gender'
				},
				{
					name: 'Email',
					objectKey: 'email',
					render: row =>
						'<a href="mailto:' + row.email + '">' + row.email + '</a>'
				},
				{
					name: '',
					objectKey: 'checkbox',
					columnClass: 'text-right',
					columnComponent: {
						type: 'checkbox'
					},
					value: row => this.employeeTable.isRowSelected(row)
				}
			]
		};
		this.getData(1, 10);
		/*this.$employeeData = this.http.get<Array<Employee>>(
			'http://localhost:4200/assets/data/employee.json'
		);*/
	}
	getData(pageCurrent, recordLength) {
		const params = new HttpParams()
			.set('page', pageCurrent)
			.set('per_page', recordLength);
		this.http
			.get<Array<Employee>>(
				'https://private-730c61-generictable.apiary-mock.com/data',
				{ params }
			)
			.subscribe(res => {
				this.data = res['data'];
				this.configObject.info = <GtInformation>res['paging'];
			});
	}

	trigger($event) {
		switch ($event.name) {
			case 'gt-page-changed-lazy':
				this.getData($event.value.pageCurrent, $event.value.recordLength);
				break;
			case 'gt-sorting-applied':
				console.log($event.value);
				break;
			default:
				console.log($event);
				break;
		}
	}
}
