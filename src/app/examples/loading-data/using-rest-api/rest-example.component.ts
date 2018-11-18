import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GtConfig } from '../../../../../projects/core/src/lib/interfaces/gt-config';
import { GtRow } from '../../../../../projects/core/src/lib/interfaces/gt-row';

export interface Employee extends GtRow {
	id: number;
	name: string;
	lucky_number: number;
}
@Component({
	templateUrl: './rest-example.component.html',
	styles: []
})
export class RestExampleComponent implements OnInit {
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
