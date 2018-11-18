import { Component, ViewChild } from '@angular/core';
import { GtRow } from '../../../projects/core/src/lib/interfaces/gt-row';
import { GtConfig } from '../../../projects/core/src/lib/interfaces/gt-config';
import { GenericTableComponent } from '../../../projects/core/src/lib/components/generic-table/generic-table.component';
import { GtDrilldownComponent } from '../../../projects/core/src/lib/components/gt-drilldown/gt-drilldown.component';
import { GtEvent } from '../../../projects/core/src/lib/interfaces/gt-event';

export interface RowData extends GtRow {
	name: string;
	color: string;
	qty: number;
	drilldown?: Array<any>;
}

@Component({
	selector: 'app-drilldown',
	templateUrl: './drilldown.component.html',
	styles: [
		`
        :host ::ng-deep tr > td.name-column .gt-row-content::before {
            display: inline-block;
            content: "\\f078";
            font: normal normal normal 14px/1 FontAwesome;
            width: 20px;
        }

        :host ::ng-deep tr > td.name-column .gt-row-content {
            cursor: pointer;
            white-space: nowrap;
        }

        :host ::ng-deep tr.row-open > td.name-column .gt-row-content::before {
            display: inline-block;
            content: "\\f077";
            font: normal normal normal 14px/1 FontAwesome;
        }

        :host ::ng-deep tr.row-expanded td.name-column .gt-row-content {
            cursor: initial;
        }

        :host ::ng-deep tr.row-expanded td.name-column .gt-row-content::before {
            content: '';
        }

        :host ::ng-deep gt-drilldown .table {
            margin: 0;
            border-bottom: solid 1px #e9ecef;
        }
    `
	]
})
export class DrilldownComponent {
	public options = {
		reportColumnWidth: true,
		rowExpandInitialState: row => {
			return row.name === 'vegetables';
		},
		rowExpandInitialComponent: {
			component: GtDrilldownComponent,
			data: row => row.drilldown
		}
	};
	@ViewChild(GenericTableComponent)
	private myTable: GenericTableComponent<RowData, any>;
	public data = [
		{
			name: 'banana',
			type: 'fruit',
			qty: 15,
			color: '#ffd10d'
		},
		{
			name: 'pear',
			type: 'fruit',
			qty: 5,
			color: '#36850a'
		},
		{
			name: 'apple',
			type: 'fruit',
			qty: 6,
			color: '#a3ff17'
		},
		{
			name: 'orange',
			type: 'fruit',
			qty: 26,
			color: '#ff8e09'
		},
		{
			name: 'kiwi',
			type: 'fruit',
			qty: 2,
			color: '#586e37'
		},
		{
			name: 'potato',
			type: 'vegetable',
			qty: 23,
			color: '#c3a14f'
		},
		{
			name: 'pepper',
			type: 'vegetable',
			qty: 7,
			color: '#c3130d'
		},
		{
			name: 'broccoli',
			type: 'vegetable',
			qty: 5,
			color: '#357400'
		},
		{
			name: 'garlic',
			type: 'vegetable',
			qty: 4,
			color: '#d9d9d9'
		}
	];
	public configObject: GtConfig<RowData>;

	constructor() {
		this.configObject = {
			settings: [
				{
					objectKey: 'name',
					columnOrder: 0
				},
				{
					objectKey: 'qty',
					columnOrder: 1
				},
				{
					objectKey: 'color',
					columnOrder: 3,
					search: false
				},
				{
					objectKey: 'variants',
					columnOrder: 2,
					search: false
				}
			],
			fields: [
				{
					name: 'Name',
					objectKey: 'name',
					render: row => row.name.charAt(0).toUpperCase() + row.name.slice(1),
					expand: {
						component: GtDrilldownComponent,
						data: row => row.drilldown
					}
				},
				{
					name: 'Quantity',
					objectKey: 'qty',
					columnClass: 'text-right'
				},
				{
					name: 'Color',
					objectKey: 'color',
					columnClass: 'text-right',
					render: row =>
						row.color
							? '<div class="d-inline-block" style="width:15px;height:15px;border-radius:50%;background: ' +
							  row.color +
							  '"></div>'
							: 'n/a'
				},
				{
					name: 'Variants',
					objectKey: 'variants',
					columnClass: 'text-right',
					value: row => (row.drilldown ? row.drilldown.length : 1)
				}
			],
			data: this.groupData(this.data)
		};
	}

	// group fruits and vegetables by type
	groupData(array) {
		return array.reduce((prev, el) => {
			if (prev.map(i => i.type).indexOf(el.type) === -1) {
				const GROUP: any = { ...el }; // create a copy of our element (fruit or vegetable)
				GROUP.name = el.type + 's'; // make plural
				GROUP.color = null; // color not applicable for group
				GROUP.drilldown = [el]; // add element to drilldown array
				prev.push(GROUP); // push group to array
			} else {
				const INDEX = prev.map(i => i.type).indexOf(el.type); // get index of type in array
				prev[INDEX].qty += el.qty; // add to quantity
				prev[INDEX].drilldown.push(el); // push element to drilldown array
			}
			return prev;
		}, []);
	}

	eventListener($event: GtEvent) {
		if ($event.name === 'gt-row-clicked') {
			console.log($event.value);
		}
	}
}
