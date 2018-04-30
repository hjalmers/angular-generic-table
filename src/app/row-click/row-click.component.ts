import { Component, OnInit, ViewChild } from '@angular/core';
import {
	GenericTableComponent,
	GtConfig,
	GtEvent,
	GtRow
} from '@angular-generic-table/core';
import { CustomRowComponent } from '../custom-row/custom-row.component';
import { GtExpandedRow } from '../../../@angular-generic-table/core/components/gt-expanding-row.component';

export interface RowData extends GtRow {
	id: number;
	name: string;
	lucky_number: number;
}
// Don't forget to add component to entry components
@Component({
	template: `
    <div class="row p-3">
      <div class="col-sm-12">
        <div class="row">
          <h4 class="col-10">Row click expanded component</h4>
          <div class="col-2 text-sm-right">
            <i class="fa fa-close fa-lg" (click)="$hide()" aria-hidden="true"></i>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-sm">
            <label class="control-label">Id</label>
            <div class="form-control-static">{{row.id}}</div>
          </div>
          <div class="form-group col-sm">
            <label class="control-label">Name</label>
            <div class="form-control-static">{{row.name}}</div>
          </div>
          <div class="form-group col-sm">
            <label class="control-label">Lucky number</label>
            <div class="form-control-static">{{row.lucky_number}}</div>
          </div>
        </div>
      </div>
    </div>`
})
export class RowClickExpandedComponent extends GtExpandedRow<RowData> {}

@Component({
	selector: 'app-row-click',
	templateUrl: './row-click.component.html',
	styleUrls: ['./row-click.component.scss']
})
export class RowClickComponent implements OnInit {
	public data: Array<RowData> = [];
	public configObject: GtConfig<RowData>;

	@ViewChild(GenericTableComponent)
	private myTable: GenericTableComponent<RowData, RowClickExpandedComponent>;

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
			data: [
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
				},
				{
					id: 11,
					name: 'Norma',
					lucky_number: 73
				},
				{
					id: 12,
					name: 'Frank',
					lucky_number: 27
				},
				{
					id: 13,
					name: 'Kathryn',
					lucky_number: 93
				},
				{
					id: 14,
					name: 'Philip',
					lucky_number: 63
				},
				{
					id: 15,
					name: 'Ronald',
					lucky_number: 89
				},
				{
					id: 16,
					name: 'Joshua',
					lucky_number: 18
				},
				{
					id: 17,
					name: 'Phillip',
					lucky_number: 16
				},
				{
					id: 18,
					name: 'Susan',
					lucky_number: 6
				},
				{
					id: 19,
					name: 'Louise',
					lucky_number: 52
				},
				{
					id: 20,
					name: 'Gary',
					lucky_number: 18
				},
				{
					id: 21,
					name: 'Laura',
					lucky_number: 9
				},
				{
					id: 22,
					name: 'Tina',
					lucky_number: 70
				},
				{
					id: 23,
					name: 'Jesse',
					lucky_number: 2
				},
				{
					id: 24,
					name: 'Jessica',
					lucky_number: 15
				},
				{
					id: 25,
					name: 'Scott',
					lucky_number: 38
				},
				{
					id: 26,
					name: 'Michael',
					lucky_number: 23
				},
				{
					id: 27,
					name: 'Harold',
					lucky_number: 66
				},
				{
					id: 28,
					name: 'William',
					lucky_number: 57
				},
				{
					id: 29,
					name: 'Harry',
					lucky_number: 14
				},
				{
					id: 30,
					name: 'Dennis',
					lucky_number: 9
				},
				{
					id: 31,
					name: 'Sara',
					lucky_number: 9
				},
				{
					id: 32,
					name: 'David',
					lucky_number: 31
				},
				{
					id: 33,
					name: 'Antonio',
					lucky_number: 2
				},
				{
					id: 34,
					name: 'Anna',
					lucky_number: 85
				},
				{
					id: 35,
					name: 'Earl',
					lucky_number: 98
				},
				{
					id: 36,
					name: 'Melissa',
					lucky_number: 70
				},
				{
					id: 37,
					name: 'Eric',
					lucky_number: 94
				},
				{
					id: 38,
					name: 'Joe',
					lucky_number: 42
				},
				{
					id: 39,
					name: 'Andrea',
					lucky_number: 39
				},
				{
					id: 40,
					name: 'Michael',
					lucky_number: 44
				},
				{
					id: 41,
					name: 'Lillian',
					lucky_number: 10
				},
				{
					id: 42,
					name: 'Elizabeth',
					lucky_number: 24
				},
				{
					id: 43,
					name: 'Ryan',
					lucky_number: 78
				},
				{
					id: 44,
					name: 'Phillip',
					lucky_number: 86
				},
				{
					id: 45,
					name: 'Patrick',
					lucky_number: 64
				},
				{
					id: 46,
					name: 'Barbara',
					lucky_number: 54
				},
				{
					id: 47,
					name: 'Patricia',
					lucky_number: 9
				},
				{
					id: 48,
					name: 'Brenda',
					lucky_number: 18
				},
				{
					id: 49,
					name: 'Sara',
					lucky_number: 12
				},
				{
					id: 50,
					name: 'Steven',
					lucky_number: 50
				},
				{
					id: 51,
					name: 'Steven',
					lucky_number: 44
				},
				{
					id: 52,
					name: 'Paul',
					lucky_number: 88
				},
				{
					id: 53,
					name: 'Ann',
					lucky_number: 51
				},
				{
					id: 54,
					name: 'Frank',
					lucky_number: 3
				},
				{
					id: 55,
					name: 'Beverly',
					lucky_number: 10
				},
				{
					id: 56,
					name: 'Elizabeth',
					lucky_number: 52
				},
				{
					id: 57,
					name: 'Patrick',
					lucky_number: 96
				},
				{
					id: 58,
					name: 'Susan',
					lucky_number: 92
				},
				{
					id: 59,
					name: 'Lawrence',
					lucky_number: 53
				},
				{
					id: 60,
					name: 'Denise',
					lucky_number: 65
				},
				{
					id: 61,
					name: 'Carol',
					lucky_number: 33
				},
				{
					id: 62,
					name: 'Larry',
					lucky_number: 95
				},
				{
					id: 63,
					name: 'Martha',
					lucky_number: 32
				},
				{
					id: 64,
					name: 'Steve',
					lucky_number: 69
				},
				{
					id: 65,
					name: 'Timothy',
					lucky_number: 16
				},
				{
					id: 66,
					name: 'Jose',
					lucky_number: 16
				},
				{
					id: 67,
					name: 'Jennifer',
					lucky_number: 96
				},
				{
					id: 68,
					name: 'Benjamin',
					lucky_number: 20
				},
				{
					id: 69,
					name: 'Christine',
					lucky_number: 8
				},
				{
					id: 70,
					name: 'Timothy',
					lucky_number: 93
				},
				{
					id: 71,
					name: 'Patricia',
					lucky_number: 17
				},
				{
					id: 72,
					name: 'Craig',
					lucky_number: 48
				},
				{
					id: 73,
					name: 'Philip',
					lucky_number: 88
				},
				{
					id: 74,
					name: 'Lori',
					lucky_number: 56
				},
				{
					id: 75,
					name: 'Janet',
					lucky_number: 4
				},
				{
					id: 76,
					name: 'Denise',
					lucky_number: 30
				},
				{
					id: 77,
					name: 'Elizabeth',
					lucky_number: 44
				},
				{
					id: 78,
					name: 'Thomas',
					lucky_number: 95
				},
				{
					id: 79,
					name: 'Shirley',
					lucky_number: 24
				},
				{
					id: 80,
					name: 'Helen',
					lucky_number: 9
				},
				{
					id: 81,
					name: 'Wanda',
					lucky_number: 98
				},
				{
					id: 82,
					name: 'Ernest',
					lucky_number: 35
				},
				{
					id: 83,
					name: 'Steven',
					lucky_number: 9
				},
				{
					id: 84,
					name: 'Jose',
					lucky_number: 27
				},
				{
					id: 85,
					name: 'Kimberly',
					lucky_number: 52
				},
				{
					id: 86,
					name: 'Nancy',
					lucky_number: 48
				},
				{
					id: 87,
					name: 'Christopher',
					lucky_number: 44
				},
				{
					id: 88,
					name: 'Nancy',
					lucky_number: 40
				},
				{
					id: 89,
					name: 'Philip',
					lucky_number: 34
				},
				{
					id: 90,
					name: 'Bruce',
					lucky_number: 69
				},
				{
					id: 91,
					name: 'Jason',
					lucky_number: 60
				},
				{
					id: 92,
					name: 'Denise',
					lucky_number: 30
				},
				{
					id: 93,
					name: 'Jane',
					lucky_number: 66
				},
				{
					id: 94,
					name: 'Brian',
					lucky_number: 49
				},
				{
					id: 95,
					name: 'Eugene',
					lucky_number: 51
				},
				{
					id: 96,
					name: 'Jack',
					lucky_number: 97
				},
				{
					id: 97,
					name: 'Peter',
					lucky_number: 1
				},
				{
					id: 98,
					name: 'Virginia',
					lucky_number: 20
				},
				{
					id: 99,
					name: 'Walter',
					lucky_number: 63
				},
				{
					id: 100,
					name: 'Virginia',
					lucky_number: 14
				}
			]
		};
	}

	eventListener($event: GtEvent) {
		if ($event.name === 'gt-row-clicked') {
			console.log($event.value);
			this.myTable.toggleCollapse($event.value.row, {
				component: RowClickExpandedComponent
			});
		}
	}

	ngOnInit() {}
}
