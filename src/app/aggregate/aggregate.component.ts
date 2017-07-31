import { Component, OnInit } from '@angular/core';
import {GtConfig} from "@angular-generic-table/core";
export interface rowData {
  id: number;
  name: string;
  sales: number;
  meetings: number;
}
@Component({
  selector: 'aggregate',
  templateUrl: './aggregate.component.html',
  styles: []
})
export class AggregateComponent {

  public data: Array<rowData> = [];
  public configObject: GtConfig<rowData>;

  constructor() {

    this.configObject = {
      settings: [{
        objectKey: 'id',
        sort: 'asc'
      }, {
        objectKey: 'name'
      }, {
        objectKey: 'meetings'
      }, {
        objectKey: 'sales'
      }],
      fields: [{
        name: 'Id',
        objectKey: 'id'
      }, {
        name: 'Name',
        objectKey: 'name'
      }, {
        name: 'Meetings',
        objectKey: 'meetings',
        classNames:'text-right',
        inlineEdit:true
      }, {
        name: 'Sales volume',
        objectKey: 'sales',
        classNames:'text-right'
      }],
      totals:[{
        name:'Total *',
        position:'footer',
        update: false,
        fields:{
          sales:(rows, objectKey)=>{
            return rows
              .map(row=>parseFloat(row[objectKey]))
              .reduce((sum, value)=>{ return sum + value}).toFixed(2)
          },
          name:'Men: 46, Women: 54',
          meetings:(rows, objectKey)=>{
            return rows
              .map(row=>parseFloat(row[objectKey] === "" ? 0:row[objectKey]))
              .reduce((sum, value)=>{ return sum + value})
          }
        }
      },{
        name:'Avg per employee',
        fields:{
          sales:(rows, objectKey)=>{
            return (rows
                .map(row=>parseFloat(row[objectKey]))
                .reduce((sum, value)=>{ return sum + value})/rows.length).toFixed(2);
          },
          meetings:(rows, objectKey)=>{
            return (rows
                .map(row=>parseFloat(row[objectKey] === "" ? 0:row[objectKey]))
                .reduce((sum, value)=>{ return sum + value})/rows.length).toFixed(1);
          }
        }
      },{
        name:'Avg per meeting',
        fields:{
          sales:(rows, objectKey)=>{
            let totalMeetings = rows
              .map(row=>parseFloat(row.meetings === "" ? 0:row.meetings))
              .reduce((sum, value)=>{
              return sum + value
            });

            let totalSales = rows
              .map(row=>parseFloat(row[objectKey]))
              .reduce((sum, value)=>{ return sum + value});

            return (totalSales/totalMeetings).toFixed(2);
          }
        }
      }],
      data: [{
        "id": 1,
        "name": "Pate",
        "sales": 38163,
        "meetings": 50
      }, {
        "id": 2,
        "name": "Zena",
        "sales": 32273,
        "meetings": 12
      }, {
        "id": 3,
        "name": "Ailbert",
        "sales": 98705,
        "meetings": 2
      }, {
        "id": 4,
        "name": "Fionna",
        "sales": 72268,
        "meetings": 10
      }, {
        "id": 5,
        "name": "Tressa",
        "sales": 92143,
        "meetings": 32
      }, {
        "id": 6,
        "name": "Vance",
        "sales": 30960,
        "meetings": 35
      }, {
        "id": 7,
        "name": "Donia",
        "sales": 19390,
        "meetings": 47
      }, {
        "id": 8,
        "name": "Fenelia",
        "sales": 23237,
        "meetings": 42
      }, {
        "id": 9,
        "name": "Hailee",
        "sales": 36071,
        "meetings": 17
      }, {
        "id": 10,
        "name": "Rayner",
        "sales": 56238,
        "meetings": 29
      }, {
        "id": 11,
        "name": "Bobbi",
        "sales": 94334,
        "meetings": 37
      }, {
        "id": 12,
        "name": "Hayward",
        "sales": 51204,
        "meetings": 11
      }, {
        "id": 13,
        "name": "Tab",
        "sales": 66636,
        "meetings": 41
      }, {
        "id": 14,
        "name": "Chloette",
        "sales": 44141,
        "meetings": 37
      }, {
        "id": 15,
        "name": "Sonny",
        "sales": 74672,
        "meetings": 46
      }, {
        "id": 16,
        "name": "Lorenzo",
        "sales": 52626,
        "meetings": 2
      }, {
        "id": 17,
        "name": "Bennie",
        "sales": 93559,
        "meetings": 29
      }, {
        "id": 18,
        "name": "Selma",
        "sales": 38568,
        "meetings": 47
      }, {
        "id": 19,
        "name": "Missy",
        "sales": 18688,
        "meetings": 12
      }, {
        "id": 20,
        "name": "Carree",
        "sales": 43477,
        "meetings": 48
      }, {
        "id": 21,
        "name": "Alison",
        "sales": 93392,
        "meetings": 42
      }, {
        "id": 22,
        "name": "Tate",
        "sales": 61999,
        "meetings": 21
      }, {
        "id": 23,
        "name": "Kelcey",
        "sales": 94450,
        "meetings": 5
      }, {
        "id": 24,
        "name": "Rochester",
        "sales": 12220,
        "meetings": 42
      }, {
        "id": 25,
        "name": "Eloise",
        "sales": 30843,
        "meetings": 6
      }, {
        "id": 26,
        "name": "Diarmid",
        "sales": 45267,
        "meetings": 2
      }, {
        "id": 27,
        "name": "Rica",
        "sales": 25748,
        "meetings": 1
      }, {
        "id": 28,
        "name": "Adriaens",
        "sales": 78366,
        "meetings": 39
      }, {
        "id": 29,
        "name": "Sarena",
        "sales": 19838,
        "meetings": 6
      }, {
        "id": 30,
        "name": "Anthe",
        "sales": 21687,
        "meetings": 47
      }, {
        "id": 31,
        "name": "Parry",
        "sales": 97603,
        "meetings": 35
      }, {
        "id": 32,
        "name": "Martynne",
        "sales": 91269,
        "meetings": 46
      }, {
        "id": 33,
        "name": "Therine",
        "sales": 90441,
        "meetings": 39
      }, {
        "id": 34,
        "name": "De witt",
        "sales": 46340,
        "meetings": 18
      }, {
        "id": 35,
        "name": "Henrieta",
        "sales": 59038,
        "meetings": 5
      }, {
        "id": 36,
        "name": "Estell",
        "sales": 90201,
        "meetings": 13
      }, {
        "id": 37,
        "name": "Lenard",
        "sales": 92033,
        "meetings": 13
      }, {
        "id": 38,
        "name": "Gypsy",
        "sales": 39536,
        "meetings": 48
      }, {
        "id": 39,
        "name": "Moira",
        "sales": 42601,
        "meetings": 33
      }, {
        "id": 40,
        "name": "Orly",
        "sales": 31429,
        "meetings": 19
      }, {
        "id": 41,
        "name": "Ogden",
        "sales": 90292,
        "meetings": 36
      }, {
        "id": 42,
        "name": "Kirsten",
        "sales": 65600,
        "meetings": 27
      }, {
        "id": 43,
        "name": "Nester",
        "sales": 53651,
        "meetings": 37
      }, {
        "id": 44,
        "name": "Roddie",
        "sales": 92812,
        "meetings": 23
      }, {
        "id": 45,
        "name": "Halie",
        "sales": 63683,
        "meetings": 42
      }, {
        "id": 46,
        "name": "Kimberlee",
        "sales": 25743,
        "meetings": 10
      }, {
        "id": 47,
        "name": "Alfonso",
        "sales": 49721,
        "meetings": 11
      }, {
        "id": 48,
        "name": "Adriana",
        "sales": 41201,
        "meetings": 22
      }, {
        "id": 49,
        "name": "Josefa",
        "sales": 90525,
        "meetings": 1
      }, {
        "id": 50,
        "name": "Domini",
        "sales": 60591,
        "meetings": 14
      }, {
        "id": 51,
        "name": "Filia",
        "sales": 70784,
        "meetings": 30
      }, {
        "id": 52,
        "name": "Nickolai",
        "sales": 31236,
        "meetings": 39
      }, {
        "id": 53,
        "name": "Alexis",
        "sales": 63095,
        "meetings": 43
      }, {
        "id": 54,
        "name": "Nikita",
        "sales": 28495,
        "meetings": 10
      }, {
        "id": 55,
        "name": "Loralie",
        "sales": 77561,
        "meetings": 45
      }, {
        "id": 56,
        "name": "Marthe",
        "sales": 83830,
        "meetings": 26
      }, {
        "id": 57,
        "name": "Alvis",
        "sales": 89067,
        "meetings": 35
      }, {
        "id": 58,
        "name": "Delmar",
        "sales": 97491,
        "meetings": 41
      }, {
        "id": 59,
        "name": "Cross",
        "sales": 34674,
        "meetings": 20
      }, {
        "id": 60,
        "name": "Reed",
        "sales": 17858,
        "meetings": 10
      }, {
        "id": 61,
        "name": "Dori",
        "sales": 17995,
        "meetings": 34
      }, {
        "id": 62,
        "name": "Dimitry",
        "sales": 31899,
        "meetings": 49
      }, {
        "id": 63,
        "name": "Anne",
        "sales": 86750,
        "meetings": 37
      }, {
        "id": 64,
        "name": "Emili",
        "sales": 28101,
        "meetings": 2
      }, {
        "id": 65,
        "name": "Laurella",
        "sales": 40531,
        "meetings": 38
      }, {
        "id": 66,
        "name": "Puff",
        "sales": 16958,
        "meetings": 44
      }, {
        "id": 67,
        "name": "Brett",
        "sales": 34165,
        "meetings": 44
      }, {
        "id": 68,
        "name": "Suzy",
        "sales": 96675,
        "meetings": 37
      }, {
        "id": 69,
        "name": "Murdoch",
        "sales": 94628,
        "meetings": 10
      }, {
        "id": 70,
        "name": "Garey",
        "sales": 39237,
        "meetings": 28
      }, {
        "id": 71,
        "name": "Piper",
        "sales": 50629,
        "meetings": 21
      }, {
        "id": 72,
        "name": "Perle",
        "sales": 84868,
        "meetings": 31
      }, {
        "id": 73,
        "name": "Rachele",
        "sales": 18526,
        "meetings": 39
      }, {
        "id": 74,
        "name": "Sibyl",
        "sales": 56675,
        "meetings": 40
      }, {
        "id": 75,
        "name": "Wilton",
        "sales": 38103,
        "meetings": 4
      }, {
        "id": 76,
        "name": "Brennen",
        "sales": 31274,
        "meetings": 6
      }, {
        "id": 77,
        "name": "Delcine",
        "sales": 10128,
        "meetings": 12
      }, {
        "id": 78,
        "name": "Dene",
        "sales": 56928,
        "meetings": 32
      }, {
        "id": 79,
        "name": "Hallie",
        "sales": 46480,
        "meetings": 35
      }, {
        "id": 80,
        "name": "Goran",
        "sales": 73266,
        "meetings": 44
      }, {
        "id": 81,
        "name": "Wat",
        "sales": 21856,
        "meetings": 11
      }, {
        "id": 82,
        "name": "Lotti",
        "sales": 77348,
        "meetings": 35
      }, {
        "id": 83,
        "name": "Charity",
        "sales": 64092,
        "meetings": 40
      }, {
        "id": 84,
        "name": "Maris",
        "sales": 97636,
        "meetings": 29
      }, {
        "id": 85,
        "name": "Thorsten",
        "sales": 20258,
        "meetings": 46
      }, {
        "id": 86,
        "name": "Corella",
        "sales": 47555,
        "meetings": 21
      }, {
        "id": 87,
        "name": "Berkeley",
        "sales": 22597,
        "meetings": 44
      }, {
        "id": 88,
        "name": "Ezekiel",
        "sales": 60014,
        "meetings": 4
      }, {
        "id": 89,
        "name": "Salomone",
        "sales": 61406,
        "meetings": 27
      }, {
        "id": 90,
        "name": "Rebeca",
        "sales": 60268,
        "meetings": 39
      }, {
        "id": 91,
        "name": "Biddy",
        "sales": 20856,
        "meetings": 18
      }, {
        "id": 92,
        "name": "Karlik",
        "sales": 65305,
        "meetings": 26
      }, {
        "id": 93,
        "name": "Sue",
        "sales": 40540,
        "meetings": 31
      }, {
        "id": 94,
        "name": "Patrizia",
        "sales": 48884,
        "meetings": 26
      }, {
        "id": 95,
        "name": "Chariot",
        "sales": 28795,
        "meetings": 12
      }, {
        "id": 96,
        "name": "Spenser",
        "sales": 59791,
        "meetings": 2
      }, {
        "id": 97,
        "name": "Delphine",
        "sales": 98330,
        "meetings": 42
      }, {
        "id": 98,
        "name": "Sonnnie",
        "sales": 89929,
        "meetings": 45
      }, {
        "id": 99,
        "name": "Annecorinne",
        "sales": 29895,
        "meetings": 7
      }, {
        "id": 100,
        "name": "Ferdinande",
        "sales": 73269,
        "meetings": 10
      }]
    };
  }

}
