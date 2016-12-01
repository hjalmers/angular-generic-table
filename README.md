# angular2-generic-table

A generic table for Angular 2. This project is a re-write of [this](https://github.com/hjalmers/angular-generic-table) project for angular 2, the idea is to have support for the same features and that the configuration should be the same. Generic table uses standard markup for tables ie. table, tr and td elements etc. and has support for expanding rows, search, filters, sorting, pagination, export to CSV (coming soon), column clicks, custom column rendering, custom export values. [View demo](https://hjalmers.github.io/angular2-generic-table/examples)

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
import { GenericTableModule } from 'angular2-generic-table';

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
import { GtConfig } from 'angular2-generic-table';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html'
})
export class StaticComponent {

  public configObject: GtConfig<any>;
  
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

| Key         | Type    | Usage                                                                                             | Default        |            |
|-------------|---------|---------------------------------------------------------------------------------------------------|----------------|------------|
| objectKey   | string  | unique identifier for column, used for data mapping                                               |                |            |
| visible     | boolean | should column be visible                                                                          | true           | (OPTIONAL) |
| enabled     | boolean | should column be enabled, if not enabled a user shouldn't be able to toggle visibility for column | true           | (OPTIONAL) |
| sort        | string  | "enable", "asc" or "desc" use "disable" to disable sorting                                        | 'enable'       | (OPTIONAL) |
| sortOrder   | number  | initial sort order                                                                                | order in array | (OPTIONAL) |
| columnOrder | number  | initial column order                                                                              | order in array | (OPTIONAL) |
| export      | boolean | feature not available yet...                                                                      | true           | (OPTIONAL) |
| search      | boolean | should column be included when using global search                                                | true           | (OPTIONAL) |

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


| Key        | Type          | Usage                                                                                                                                                                                                                                                                             |            |
|:-----------|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
| name       | string        | heading for column                                                                                                                                                                                                                                                                |            |
| objectKey  | string        | unique identifier for column, used for data mapping                                                                                                                                                                                                                               |            |
| classNames | string        | class names to be applied to column                                                                                                                                                                                                                                               | (OPTIONAL) |
| render     | function(row) | custom function for data presentation, ex. display 1480579417501 as 2016-12-01 09:03:37                                                                                                                                                                                           | (OPTIONAL) |
| value      | function(row) | custom function for data manipulation/creation ex. combine first name and last name into a new column                                                                                                                                                                             | (OPTIONAL) |
| sort       | function(row) | custom function used when sorting column, i.e. you might want to sort a value as a number but display (render) it as a string                                                                                                                                                     | (OPTIONAL) |
| search     | function(row) | custom function used when searching column, i.e similar to render, you might want to match on something else than the raw data. If no search function is defined, generic table will look for a value function and if no value function is defined table will use raw data value. | (OPTIONAL) |
| export     | function(row) | feature not available yet...                                                                                                                                                                                                                                                      | (OPTIONAL) |
| click      | function(row) | execute function when column cell is clicked                                                                                                                                                                                                                                      | (OPTIONAL) |
| expand     | boolean       | if true row will expand and show a custom component passed using `gtRowComponent` (false by default)                                                                                                                                                                                | (OPTIONAL) |


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

## Table attributes/inputs
To pass data, settings and configuration to the table using the following inputs:

| Attribute         | Type      | Usage                                                                                  | Default |            |
|:------------------|:----------|:---------------------------------------------------------------------------------------|:--------|:-----------|
| gtSettings        | array     | used for passing settings                                                              |         |            |
| gtFields          | array     | used for passing field definitions                                                     |         |            |
| gtData            | array     | used for passing data                                                                  |         |            |
| gtClasses         | string    | used for adding classes to table element                                               |         | (OPTIONAL) |
| gtTexts           | object    | use to override default texts                                                          |         | (OPTIONAL) |
| gtHighlightSearch | boolean   | should table highlight matched search terms, style using .gt-highlight-search selector | false   | (OPTIONAL) |
| gtLazy            | boolean   | set to true if data is loaded using lazy loading                                       | false   | (OPTIONAL) |
| gtRowComponent    | component | used for passing expanding row component to table                                      |         | (OPTIONAL) |

Basic example:
```
<generic-table [gtClasses]="'table-hover'" [gtSettings]="configObject.settings" [gtFields]="configObject.fields" [(gtData)]="configObject.data" [gtRowComponent]="expandedRow" [gtHighlightSearch]="true"></generic-table>
```


## Table events
The table emits events using `gtEvent`, the events are passed in an object which looks like this:
```
{
  name:'gt-sorting-applied',
  value: passed data...
}
```
Currently the table emits the following events:

| Name                  | Trigger                                     | Data passed with event                                                  |
|-----------------------|---------------------------------------------|-------------------------------------------------------------------------|
| gt-sorting-applied    | sorting changed                             | new sort order in array ex. ["-firstColumn", "secondColumn"]                     |
| gt-row-length-changed | row length changed                          | new row length ex. 10                                                   |
| gt-page-changed       | page changed                                | current state ex. {page: current page, pageLength: current page length} |
| gt-page-changed-lazy  | page changed and no data exits for new page | current state ex. {page: current page, pageLength: current page length} |


Usage:

```
<generic-table ... (gtEvent)="trigger($event)"></generic-table>
```

```
public trigger = function($event){
    switch($event.name){
      case 'gt-sorting-applied':
            console.log($event.value);
            break;
    }
  };
```


## Please note
As this component is still under development, please expect breaking changes.
