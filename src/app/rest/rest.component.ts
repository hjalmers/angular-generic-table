import {
	Component,
	Output,
	EventEmitter,
	ViewChild,
	OnInit
} from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { CustomRowComponent } from '../custom-row/custom-row.component';
import {
	GenericTableComponent,
	GtConfig,
	GtCustomComponent,
	GtRow
} from '@angular-generic-table/core';
import 'rxjs/add/operator/map';

export interface RowData extends GtRow {
	id: number;
	name: string;
	email: string;
	gender: string;
	favorite_color: string;
}
@Component({
	template: `<span ngbTooltip="{{'Some tooltip for '+ row.first_name + ' ' + row.last_name }}" [innerHTML]="(row.first_name + ' ' + row.last_name) | gtHighlight:searchTerms"></span>`,
	styles: []
})
export class TooltipComponent extends GtCustomComponent<any> {
	constructor() {
		super();
	}
}

@Component({
	selector: 'app-rest',
	templateUrl: './rest.component.html'
})
export class RestComponent implements OnInit {
	public configObject: GtConfig<any>;

	@Output() data = new EventEmitter();

	@ViewChild(GenericTableComponent)
	private myTable: GenericTableComponent<RowData, CustomRowComponent>;
	public showColumnControls = false;
	public selectedRows = 0;
	private url = 'https://private-730c61-generictable.apiary-mock.com/data'; // apiary end point

	constructor(private http: HttpClient) {
		this.configObject = {
			settings: [
				{
					objectKey: 'id',
					visible: true,
					sort: 'desc',
					columnOrder: 0,
					enabled: true
				},
				{
					objectKey: 'name',
					visible: true,
					sort: 'enable',
					columnOrder: 1
				},
				{
					objectKey: 'email',
					visible: true,
					enabled: true,
					sort: 'enable',
					sortOrder: 0,
					columnOrder: 2
				},
				{
					objectKey: 'gender',
					visible: true,
					enabled: true,
					sort: 'enable',
					sortOrder: 0,
					columnOrder: 3,
					search: false
				},
				{
					objectKey: 'favorite_color',
					visible: true,
					enabled: true,
					sort: 'disable',
					sortOrder: 0,
					columnOrder: 4,
					search: false
				}
			],
			fields: [
				{
					name: 'Id',
					objectKey: 'id',
					columnClass: 'clickable sort-numeric',
					expand: {
						component: CustomRowComponent
					}
				},
				{
					name: 'Name',
					objectKey: 'name',
					columnClass: 'sort-string',
					value: function(row) {
						return row.first_name + ' ' + row.last_name;
					},
					columnComponent: {
						type: TooltipComponent
					}
				},
				{
					name: 'Favorite color',
					objectKey: 'favorite_color',
					columnClass: 'text-right',
					render: function(row) {
						return (
							'<div style="float:right;width:15px;height:15px;border-radius:50%;background: ' +
							row.favorite_color +
							'"></div>'
						);
					},
					click: row => {
						return console.log(
							row.first_name + "'s favorite color is: " + row.favorite_color
						);
					}
				},
				{
					name: 'Gender',
					columnClass: 'sort-string',
					objectKey: 'gender'
				},
				{
					name: 'Email',
					columnClass: 'sort-string',
					objectKey: 'email',
					render: function(row) {
						return '<a href="mailto:' + row.email + '">' + row.email + '</a>';
					}
				}
			],
			data: []
		};
	}

	public getData = function() {
		// tell generic table instance that we're loading data
		/* tslint:disable */
		this.myTable ? (this.myTable.loading = true) : '';
		/* tslint:enable */

		this.http
			.get(this.url)
			// .map((res: Response) => res.json())
			.subscribe(res => {
				this.configObject.data = res.data;
			});
	};

	public addData = function() {
		// create mock data
		const random =
			Math.floor(Math.random() * this.configObject.data.length - 1) + 1;
		const firstName = this.configObject.data[random].first_name;
		const lastName = this.configObject.data[
			Math.floor(Math.random() * this.configObject.data.length - 1) + 1
		].last_name;
		const gender = this.configObject.data[random].gender;
		const favoriteColor = this.configObject.data[
			Math.floor(Math.random() * this.configObject.data.length - 1) + 1
		].favorite_color;

		// add data to table (could be swapped to a method for persisting the data to a database i.e. should go through server first).
		// gtAdd method returns new data array with added records, which we reassign to this.configObject.data
		this.configObject.data = this.myTable.gtAdd([
			{
				id: this.configObject.data.length + 1,
				first_name: firstName,
				last_name: lastName,
				email: firstName + '.' + lastName + '@some_email_address.xyz',
				gender: gender,
				favorite_color: favoriteColor
			}
		]);
	};

	public deleteData = function() {
		this.configObject.data = this.myTable.gtDelete(
			'id',
			this.configObject.data[0].id
		);
	};

	public deleteAll = function() {
		this.configObject.data = this.myTable.gtDelete('gender', 'Male', 'all');
	};

	/** Apply predefined filter using first_name.
	 * */
	public applyFilter = function() {
		this.myTable.gtApplyFilter({
			first_name: ['Victor', 'Joe', 'Carol']
		});
	};

	/** Listen for events
	 * */
	public trigger = function($event) {
		console.log($event);
		if ($event.value && $event.value.selectedRows) {
			this.selectedRows = $event.value.selectedRows.length;
		}
	};

	public expandAllRows() {
		this.myTable.expandAllRows({ component: CustomRowComponent });
	}

	public collapseAllRows() {
		this.myTable.collapseAllRows();
	}

	ngOnInit() {
		this.getData();
	}
}
