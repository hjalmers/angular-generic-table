import { Component, OnInit } from '@angular/core';
import { GtConfig, GtRow } from '@angular-generic-table/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Employee extends GtRow {
	id: number;
	name: string;
	lucky_number: number;
}
@Component({
	templateUrl: './lazy-load-example.component.html',
	styles: []
})
export class LazyLoadExampleComponent implements OnInit {
	public $employeeData: Observable<Array<Employee>>;
	public configObject: GtConfig<Employee>;

	public data: Array<any> = [];
	constructor(public http: HttpClient) {}

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
		this.http
			.get<Array<Employee>>('http://localhost:4200/assets/data/employee.json')
			.subscribe(res => (this.data = res));
		/*this.$employeeData = this.http.get<Array<Employee>>(
			'http://localhost:4200/assets/data/employee.json'
		);*/
	}
}
