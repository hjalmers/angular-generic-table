# angular2-generic-table

A generic table for Angular 2. This project is a re-write of [this](https://github.com/hjalmers/angular-generic-table) project for angular 2, the idea is to have support for the same features and that the configuration should be the same. Generic table uses standard markup for tables ie. table, tr and td elements etc. and has support for expanding rows, search (coming soon), filters, sorting, pagination, export to CSV (coming soon), column clicks, custom column rendering, custom export values. [View demo](https://hjalmers.github.io/angular2-generic-table/examples)

## Features
- Uses standard HTML tables (no divs etc.)
- Markup uses Twitter bootstrap class names
- Client and server-side pagination, sorting and filtering
- Lazy-loading of data from server
- Expanding rows with custom component
- Use custom functions for sorting, exporting and rendering of data
- Configure table using json object (add columns etc.)

## Installation and usage

Run `npm install --save angular2-generic-table`

Include generic table module in your project, for example if you want to add it to your app module:

**App Module**
```
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from ./app.component';
import { GenericTableModule } from 'angular2-generic-table/lib/angular2-generic-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GenericTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Configure the table in your component, in this case we're adding a basic example with static data to a component called StaticComponent.

**Static Component**
```
import { Component } from '@angular/core';
import { GtConfig } from 'angular2-generic-table/lib/src/generic-table/interfaces/gt-config';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html'
})
export class StaticComponent {

  public configObject:GtConfig;
  
  public data:Array<{
    id:number,
    name:string,
    lucky_number:number
  }> = [];

  constructor() {

    this.configObject = {
      settings:[{
        objectKey:'id',
        sort:'desc',
        columnOrder:0
      },{
        objectKey:'name',
        sort:'enable',
        columnOrder:1
      },{
        objectKey:'lucky_number',
        sort:'enable',
        columnOrder:2
      }],
      fields:[{
        name:'Id',
        objectKey:'id'
      },{
        name:'Name',
        objectKey:'name'
      },{
        name:'Lucky number',
        objectKey:'lucky_number'
      }],
      data:[{
        "id": 1,
        "name": "Anna",
        "lucky_number": 63
      }, {
        "id": 2,
        "name": "Julie",
        "lucky_number": 8
      }, {
        "id": 3,
        "name": "Lillian",
        "lucky_number": 30
      }, {
        "id": 4,
        "name": "Norma",
        "lucky_number": 13
      }, {
        "id": 5,
        "name": "Ralph",
        "lucky_number": 28
      }, {
        "id": 6,
        "name": "Benjamin",
        "lucky_number": 66
      }, {
        "id": 7,
        "name": "George",
        "lucky_number": 66
      }, {
        "id": 8,
        "name": "Ryan",
        "lucky_number": 65
      }, {
        "id": 9,
        "name": "Martha",
        "lucky_number": 57
      }, {
        "id": 10,
        "name": "Todd",
        "lucky_number": 65
      }]
    };
  }
}
```

**Markup**
```
<generic-table [gtSettings]="configObject.settings" [gtFields]="configObject.fields" [gtData]="configObject.data"></generic-table>
```


## Configuration

In order for generic tables to render the data in a table, we need to create a configuration object like this:
```
config = {
  settings:[],
  fields:[],
  data:[]
}
```

### Settings array
Each column must have it's own settings object that can have the following properties:

- **objectKey**: string // unique identifier used for mapping settings and fields to data 
- **visible**: boolean // should column be visible (OPTIONAL)
- **enabled**: boolean // should column be enabled (OPTIONAL)
- **sort**: string // default sorting: 'enabled', 'disabled', 'asc', 'desc' (OPTIONAL)
- **sortOrder**: number // default sort order (OPTIONAL)
- **columnOrder**: number // column order (OPTIONAL)
- ~~**export**: boolean // should column be exported to CSV (OPTIONAL)~~ (not implemented)

Basic example:

```
[{
    objectKey:"first_column"
  }, {
    objectKey:"second_column"
  }, {
  objectKey:"third_column"
}]
```

### Fields array
Each column must also have it's own field definition object that can have the following properties:

- **name**: string // name or label of the field, will be displayed as heading for column
- **objectKey**: string // unique identifier used for mapping settings and fields to data
- **classNames**: string // custom class names appended to the column (OPTIONAL)
- **render**: function // function(row,column){ return '<span>'+row[column]+'</span>';} // custom function for column presentation (OPTIONAL),
- **value**: function // function(row,column){ return row[column]/2;} // custom function for column value if no data exists for column in data array (OPTIONAL),
- **click**: function // function(){ return console.log('column clicked);} // click function for column (OPTIONAL),
- **expand**: boolean // expand (open/close) row when clicked (OPTIONAL),
- ~~**export**: function // function(row,column){ return parseFloat(row[column]);} // custom function for export presentation (OPTIONAL),~~ (not implemented)
- **sort**: function // function(row,column){ return parseFloat(row[column]);} // custom function for sorting (OPTIONAL),
- ~~**search**: boolean // should field be searchable, true or false, true by default (OPTIONAL)~~ (not implemented)

Basic example:

```
[{
    objectKey:"first_column",
    name:"First column"
  }, {
    objectKey:"second_column",
    name:"Second column"
  }, {
    objectKey:"third_column",
    name:"Third column"
}]
```

### Data array
The data for each row needs to be stored in an object where each key in the object should map against object keys specified in the settings and field arrays ex.

```
[{
  first_column:"first row",
  second_column:1,
  third_column:"third column"
}, {
  first_column:"second row",
  second_column:2,
  third_column:"third column"
}]
```

## Please note
As this component is still under development, please expect breaking changes.
