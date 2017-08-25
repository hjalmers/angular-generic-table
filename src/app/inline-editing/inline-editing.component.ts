import { Component } from '@angular/core';
import {GtConfig} from '@angular-generic-table/core';

export interface rowData {
  id: number;
  name: string;
  language?: string;
}

@Component({
  selector: 'inline-editing',
  templateUrl: './inline-editing.component.html'
})
export class InlineEditingComponent {

  public data: Array<rowData> = [];
  public configObject: GtConfig<rowData>;
  public languages: Array<string> = ['Albanian', 'Amharic', 'Aymara', 'Bulgarian', 'Dhivehi', 'Estonian', 'Indonesian', 'Kannada', 'Lao', 'Latvian', 'Marathi', 'Persian', 'Pisin', 'Punjabi', 'Somali', 'Tamil', 'Tok' , 'Tsonga', 'Tswana', 'Zulu'];

  updatedRow: {
    newValue: rowData,
    oldValue: rowData,
    originalValue: rowData
  };

  constructor() {

    this.configObject = {
      settings: [{
        objectKey: 'id',
        sort: 'asc',
        sortOrder: 1,
        columnOrder: 0
      }, {
        objectKey: 'name',
        sort: 'asc',
        sortOrder: 0,
        columnOrder: 1
      }, {
        objectKey: 'language',
        sort: 'enable',
        columnOrder: 3,
        visible: true
      }],
      fields: [{
        name: 'Id',
        objectKey: 'id'
      }, {
        name: 'Name',
        objectKey: 'name',
        inlineEdit: true,
          sort: (row) => {return row.name.substring(1, 5); }
      }, {
        name: 'Language',
        objectKey: 'language',
        inlineEdit: this.languages,
        value: () => {
          const langId = Math.floor(Math.random() * this.languages.length);
          return this.languages[langId];
        }
      }],
      data: [{
        'id': 1,
        'name': 'Anna'
      }, {
        'id': 2,
        'name': 'Julie'
      }, {
        'id': 3,
        'name': 'Lillian'
      }, {
        'id': 4,
        'name': 'Norma'
      }, {
        'id': 5,
        'name': 'Ralph'
      }, {
        'id': 6,
        'name': 'Benjamin'
      }, {
        'id': 7,
        'name': 'George'
      }, {
        'id': 8,
        'name': 'Ryan'
      }, {
        'id': 9,
        'name': 'Martha'
      }, {
        'id': 10,
        'name': 'Todd'
      }, {
        'id': 11,
        'name': 'Norma'
      }, {
        'id': 12,
        'name': 'Frank'
      }, {
        'id': 13,
        'name': 'Kathryn'
      }, {
        'id': 14,
        'name': 'Philip'
      }, {
        'id': 15,
        'name': 'Ronald'
      }, {
        'id': 16,
        'name': 'Joshua'
      }, {
        'id': 17,
        'name': 'Phillip'
      }, {
        'id': 18,
        'name': 'Susan'
      }, {
        'id': 19,
        'name': 'Louise'
      }, {
        'id': 20,
        'name': 'Gary'
      }, {
        'id': 21,
        'name': 'Laura'
      }, {
        'id': 22,
        'name': 'Tina'
      }, {
        'id': 23,
        'name': 'Jesse'
      }, {
        'id': 24,
        'name': 'Jessica'
      }, {
        'id': 25,
        'name': 'Scott'
      }, {
        'id': 26,
        'name': 'Michael'
      }, {
        'id': 27,
        'name': 'Harold'
      }, {
        'id': 28,
        'name': 'William'
      }, {
        'id': 29,
        'name': 'Harry'
      }, {
        'id': 30,
        'name': 'Dennis'
      }, {
        'id': 31,
        'name': 'Sara'
      }, {
        'id': 32,
        'name': 'David'
      }, {
        'id': 33,
        'name': 'Antonio'
      }, {
        'id': 34,
        'name': 'Anna'
      }, {
        'id': 35,
        'name': 'Earl'
      }, {
        'id': 36,
        'name': 'Melissa'
      }, {
        'id': 37,
        'name': 'Eric'
      }, {
        'id': 38,
        'name': 'Joe'
      }, {
        'id': 39,
        'name': 'Andrea'
      }, {
        'id': 40,
        'name': 'Michael'
      }, {
        'id': 41,
        'name': 'Lillian'
      }, {
        'id': 42,
        'name': 'Elizabeth'
      }, {
        'id': 43,
        'name': 'Ryan'
      }, {
        'id': 44,
        'name': 'Phillip'
      }, {
        'id': 45,
        'name': 'Patrick'
      }, {
        'id': 46,
        'name': 'Barbara'
      }, {
        'id': 47,
        'name': 'Patricia'
      }, {
        'id': 48,
        'name': 'Brenda'
      }, {
        'id': 49,
        'name': 'Sara'
      }, {
        'id': 50,
        'name': 'Steven'
      }, {
        'id': 51,
        'name': 'Steven'
      }, {
        'id': 52,
        'name': 'Paul'
      }, {
        'id': 53,
        'name': 'Ann'
      }, {
        'id': 54,
        'name': 'Frank'
      }, {
        'id': 55,
        'name': 'Beverly'
      }, {
        'id': 56,
        'name': 'Elizabeth'
      }, {
        'id': 57,
        'name': 'Patrick'
      }, {
        'id': 58,
        'name': 'Susan'
      }, {
        'id': 59,
        'name': 'Lawrence'
      }, {
        'id': 60,
        'name': 'Denise'
      }, {
        'id': 61,
        'name': 'Carol'
      }, {
        'id': 62,
        'name': 'Larry'
      }, {
        'id': 63,
        'name': 'Martha'
      }, {
        'id': 64,
        'name': 'Steve'
      }, {
        'id': 65,
        'name': 'Timothy'
      }, {
        'id': 66,
        'name': 'Jose'
      }, {
        'id': 67,
        'name': 'Jennifer'
      }, {
        'id': 68,
        'name': 'Benjamin'
      }, {
        'id': 69,
        'name': 'Christine'
      }, {
        'id': 70,
        'name': 'Timothy'
      }, {
        'id': 71,
        'name': 'Patricia'
      }, {
        'id': 72,
        'name': 'Craig'
      }, {
        'id': 73,
        'name': 'Philip'
      }, {
        'id': 74,
        'name': 'Lori'
      }, {
        'id': 75,
        'name': 'Janet'
      }, {
        'id': 76,
        'name': 'Denise'
      }, {
        'id': 77,
        'name': 'Elizabeth'
      }, {
        'id': 78,
        'name': 'Thomas'
      }, {
        'id': 79,
        'name': 'Shirley'
      }, {
        'id': 80,
        'name': 'Helen'
      }, {
        'id': 81,
        'name': 'Wanda'
      }, {
        'id': 82,
        'name': 'Ernest'
      }, {
        'id': 83,
        'name': 'Steven'
      }, {
        'id': 84,
        'name': 'Jose'
      }, {
        'id': 85,
        'name': 'Kimberly'
      }, {
        'id': 86,
        'name': 'Nancy'
      }, {
        'id': 87,
        'name': 'Christopher'
      }, {
        'id': 88,
        'name': 'Nancy'
      }, {
        'id': 89,
        'name': 'Philip'
      }, {
        'id': 90,
        'name': 'Bruce'
      }, {
        'id': 91,
        'name': 'Jason'
      }, {
        'id': 92,
        'name': 'Denise'
      }, {
        'id': 93,
        'name': 'Jane'
      }, {
        'id': 94,
        'name': 'Brian'
      }, {
        'id': 95,
        'name': 'Eugene'
      }, {
        'id': 96,
        'name': 'Jack'
      }, {
        'id': 97,
        'name': 'Peter'
      }, {
        'id': 98,
        'name': 'Virginia'
      }, {
        'id': 99,
        'name': 'Walter'
      }, {
        'id': 100,
        'name': 'Virginia'
      }]
    };
  }
  logData() {
    console.log(this.configObject.data);
  }

  /** Listen for events
   * */
  public trigger = function($event){
    console.log($event);


    if ($event.value && $event.name === 'gt-row-updated') {
      this.updatedRow = $event.value;
    }
  };


}
