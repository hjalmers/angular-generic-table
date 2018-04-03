import { Component, ViewChild } from '@angular/core';
import {GenericTableComponent, GtConfig, GtRow} from '@angular-generic-table/core';

export interface RowData extends GtRow {
  order: number;
  name: string;
  lucky_number: number;
}
@Component({
  selector: 'column-click',
  templateUrl: './column-click.component.html'
})
export class ColumnClickComponent {
  public data: Array<RowData> = [];
  public configObject: GtConfig<RowData>;

  @ViewChild(GenericTableComponent)
  private myTable: GenericTableComponent<any, any>;

  constructor() {

    this.configObject = {
      settings: [{
        objectKey: 'order',
        sort: 'asc',
        sortOrder: 0,
        visible: false
      }, {
        objectKey: 'name',
        sort: 'disable',
        columnOrder: 1
      }, {
        objectKey: 'lucky_number',
        sort: 'disable',
        columnOrder: 2
      }, {
        objectKey: 'move_up',
        sort: 'disable',
        columnOrder: 3
      }, {
        objectKey: 'move_down',
        sort: 'disable',
        columnOrder: 4
      }],
      fields: [{
        name: 'order',
        objectKey: 'order'
      }, {
        name: 'Name',
        objectKey: 'name'
      }, {
        name: 'Lucky number',
        objectKey: 'lucky_number'
      }, {
        name: '',
        columnClass: 'gt-button',
        objectKey: 'move_up',
        value: () => { return 'up'; },
        render: (row) => { return '<button class="btn btn-sm btn-primary ' + (row.order === 1 ? 'disabled' : '') + '"><i class="fa fa-arrow-up"></i></button>'; },
        click: (row) => { return this.move(row); }
      }, {
        name: '',
        columnClass: 'gt-button',
        objectKey: 'move_down',
        value: () => { return 'down'; },
        render: (row) => { return '<button class="btn btn-sm btn-primary ' + (row.order === this.configObject.data.length ? 'disabled' : '') + '"><i class="fa fa-arrow-down"></i></button>'; },
        click: (row) => { return this.move(row, false); }
      }],
      data: [{
        'order': 1,
        'name': 'Anna',
        'lucky_number': 63
      }, {
        'order': 2,
        'name': 'Julie',
        'lucky_number': 8
      }, {
        'order': 3,
        'name': 'Lillian',
        'lucky_number': 30
      }, {
        'order': 4,
        'name': 'Norma',
        'lucky_number': 13
      }, {
        'order': 5,
        'name': 'Ralph',
        'lucky_number': 28
      }, {
        'order': 6,
        'name': 'Benjamin',
        'lucky_number': 66
      }, {
        'order': 7,
        'name': 'George',
        'lucky_number': 66
      }, {
        'order': 8,
        'name': 'Ryan',
        'lucky_number': 65
      }, {
        'order': 9,
        'name': 'Martha',
        'lucky_number': 57
      }, {
        'order': 10,
        'name': 'Todd',
        'lucky_number': 65
      }, {
        'order': 11,
        'name': 'Norma',
        'lucky_number': 73
      }, {
        'order': 12,
        'name': 'Frank',
        'lucky_number': 27
      }, {
        'order': 13,
        'name': 'Kathryn',
        'lucky_number': 93
      }, {
        'order': 14,
        'name': 'Philip',
        'lucky_number': 63
      }, {
        'order': 15,
        'name': 'Ronald',
        'lucky_number': 89
      }, {
        'order': 16,
        'name': 'Joshua',
        'lucky_number': 18
      }, {
        'order': 17,
        'name': 'Phillip',
        'lucky_number': 16
      }, {
        'order': 18,
        'name': 'Susan',
        'lucky_number': 6
      }, {
        'order': 19,
        'name': 'Louise',
        'lucky_number': 52
      }, {
        'order': 20,
        'name': 'Gary',
        'lucky_number': 18
      }, {
        'order': 21,
        'name': 'Laura',
        'lucky_number': 9
      }, {
        'order': 22,
        'name': 'Tina',
        'lucky_number': 70
      }, {
        'order': 23,
        'name': 'Jesse',
        'lucky_number': 2
      }, {
        'order': 24,
        'name': 'Jessica',
        'lucky_number': 15
      }, {
        'order': 25,
        'name': 'Scott',
        'lucky_number': 38
      }, {
        'order': 26,
        'name': 'Michael',
        'lucky_number': 23
      }, {
        'order': 27,
        'name': 'Harold',
        'lucky_number': 66
      }, {
        'order': 28,
        'name': 'William',
        'lucky_number': 57
      }, {
        'order': 29,
        'name': 'Harry',
        'lucky_number': 14
      }, {
        'order': 30,
        'name': 'Dennis',
        'lucky_number': 9
      }]
    };
  }

  move(row: any, up: boolean = true) {
    if (up) {
      this.configObject.data[row.order - 2].order += 1; // update row above clicked row
      row.order -= 1; // update clicked row
    } else {
      this.configObject.data[row.order].order -= 1; // update row below clicked row
      row.order += 1; // update clicked row
    }
    this.myTable.redraw(); // update table order
  }

}
