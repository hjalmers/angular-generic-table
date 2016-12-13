# angular2-generic-table

A generic table for Angular 2. This project is a re-write of [this](https://github.com/hjalmers/angular-generic-table) project for angular 1, the idea is to have support for the same features and that the configuration should be the same. Generic table uses standard markup for tables ie. table, tr and td elements etc. and has support for expanding rows, search, filters, sorting, pagination, export to CSV, column clicks, custom column rendering, custom export values. [View demo](https://hjalmers.github.io/angular2-generic-table/examples)

## Features
- Uses standard HTML tables (no divs etc.)
- Markup uses Twitter bootstrap class names
- Client and server-side pagination, sorting and filtering
- Lazy-loading of data from server
- Expanding rows with custom component
- Use custom functions for sorting, exporting and rendering of data
- Configure table using json object (add columns etc.)
- Toggle column visibility
- Export to CSV

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

**Usage**
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
|:------------|:--------|:--------------------------------------------------------------------------------------------------|:---------------|:-----------|
| objectKey   | string  | unique identifier for column, used for data mapping                                               |                |            |
| visible     | boolean | should column be visible                                                                          | true           | (OPTIONAL) |
| enabled     | boolean | should column be enabled, if not enabled a user shouldn't be able to toggle visibility for column | true           | (OPTIONAL) |
| sort        | string  | "enable", "asc" or "desc" use "disable" to disable sorting                                        | 'enable'       | (OPTIONAL) |
| sortOrder   | number  | initial sort order                                                                                | order in array | (OPTIONAL) |
| columnOrder | number  | initial column order                                                                              | order in array | (OPTIONAL) |
| export      | boolean | should column be included when exporting to CSV                                                   | true           | (OPTIONAL) |
| search      | boolean | should column be included when using global search                                                | true           | (OPTIONAL) |

**Usage:**

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


**Usage:**

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
| gtLazy            | boolean   | set to true if data is loaded using lazy loading, don't forget to pass gtInfo          | false   | (OPTIONAL) |
| gtInfo            | object    | used for passing record info to table (lazy loading only)                              |         | (OPTIONAL) |
| gtRowComponent    | component | used for passing expanding row component to table                                      |         | (OPTIONAL) |

**Usage:**
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

| Name                  | Trigger                                                | Data passed with event                                                             |
|:----------------------|:-------------------------------------------------------|:-----------------------------------------------------------------------------------|
| gt-sorting-applied    | sorting changed                                        | new sort order in array ex. ["-firstColumn", "secondColumn"]                       |
| gt-row-length-changed | record length changed                                  | new record length ex. 10                                                           |
| gt-page-changed       | page changed                                           | current state ex. {pageCurrent: current page, recordLength: current record length} |
| gt-page-changed-lazy  | page changed and no data exits for new page            | current state ex. {pageCurrent: current page, recordLength: current record length} |
| gt-info               | table info has changed (not emitted when lazy loading) | current state ex. {pageCurrent: current page, recordLength: current record length} |
| gt-exported-csv       | table has exported data to csv file                    | file name                                                                          |


**Usage:**

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

## Texts

Override texts by passing a new object using `gtTexts` attribute.

**Available texts:**

| Key                     | Description                                                                            | Default                                                                                                         |
|:------------------------|:---------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------|
| loading                 | Text displayed when table rows are loading data (lazy loading only)                    | Loading...                                                                                                      |
| noData                  | Text displayed when table contains no data                                             | No data                                                                                                         |
| noMatchingData          | Text displayed when table search/filter has no matches                                 | No data matching results found                                                                                  |
| noVisibleColumnsHeading | Table heading displayed when no columns are visible                                    | No visible columns                                                                                              |
| noVisibleColumns        | Table content displayed when no columns are visible                                    | Please select at least one column to be visible.                                                                |
| tableInfo               | Text displayed in table info component when neither search nor filter has been applied | Showing #recordFrom to #recordTo of #recordsAfterSearch entries.                                                |
| tableInfoAfterSearch    | Text displayed in table info component when search or filter has been applied          | Showing,#recordFrom to #recordTo of #recordsAfterSearch entries (filtered from a total of #recordsAll entries). |
| csvDownload             | File name for CSV export (.csv is added by default)                                    | download                                                                                                        |

## Global table search and highlight

Search and filter table using global search. Separate multiple search terms with a space [ ] or match whole phrase by putting them within quotes ["].

Define custom search value for individual columns by declaring a custom search function in the fields array, ie. you might want the search to match one value but display/render another in the table ex. search for 100000 and display 1 000 000,00 in the table.

Turn of search for individual columns by setting column setting property `search` to `false`.

**Usage:** 

Call generic tables search function and pass your search term(s)

```
myTable.gtSearch(searchString);
```

**Usage (when lazy loading):**

Return search terms in your server response.
 
```
this.configObject.info:GtInformation = {
  pageCurrent: 1,
  pageNext: 2,
  pagePrevious: null,
  pageTotal: 10,
  recordLength: 10,
  recordsAll: 100,
  recordsAfterFilter: 100,
  recordsAfterSearch: 13,
  searchTerms: "foo bar"
}
```

[see demo](https://hjalmers.github.io/angular2-generic-table/examples) for full implementation and examples

## Column visibility

You can implement your own control for toggling column visibility, either bind directly to the settings array and alter the visibility property directly or create an object to hold the values until your ready to update. Don't forget to call 'redraw()' when you want the table to update ie. `(click)="myTable.redraw()"`

## Export to CSV

Export table data to CSV and optionally pass a file name. Please note that the table exports data after sort order, filters and global search have been applied. In case you use the lazy load feature you'll have to implement the export server-side.

Define custom export value for individual columns by declaring a custom export function in the fields array, ie. you might want the export one value but display/render another in the table ex. export 100000 as a number but display it as a string 1 000 000,00 in the table.

Turn of export for individual columns by setting column setting property `export` to `false`.

**Usage:**
`(click)="myTable.exportCSV('custom-file-name')"`

## Pagination

Display pagination for your table, uses bootstrap default markup.

**Usage:**

```
<gt-pagination [genericTable]="myTable"></gt-pagination>
```

**Options:**

| Attribute         | Type           | Usage                                                               |            |
|:------------------|:---------------|:--------------------------------------------------------------------|:-----------|
| genericTable      | table instance | used for linking pagination component to table                      |            |
| gtClasses         | string         | used for adding classes to pagination element, ex. pagination-sm    | (OPTIONAL) |

## Table information

Display information about your table, ie. number of records, filtered records, record length etc. 

**Usage:**

```
<gt-table-info [genericTable]="myTable"></gt-table-info>
```

**Options:**

| Attribute         | Type           | Usage                                                                                                    |            |
|:------------------|:---------------|:---------------------------------------------------------------------------------------------------------|:-----------|
| genericTable      | table instance | used for linking table info component to table                                                           |            |
| customText        | string         | override default text provided by generic table component, useful when you want to split up the display  | (OPTIONAL) |

Available information:
Use the key in the text passed, either to the table component using `gtTexts` attribute or to the individual table info component using `customText` attribute.
Ex. `Showing #recordFrom to #recordTo.` will be rendered as `Showing 1 to 10.`

| Name               | Key                 | Description                                                                 |
|:-------------------|:--------------------|:----------------------------------------------------------------------------|
| pageCurrent        | #pageCurrent        | Displays current page number                                                |
| pageNext           | #pageNext           | Displays next page number                                                   |
| pagePrevious       | #pagePrevious       | Displays previous page number                                               |
| pageTotal          | #pageTotal          | Displays total number of pages                                              |
| recordFrom         | #recordFrom         | Displays visible record number from                                         |
| recordTo           | #recordTo           | Displays visible record number to                                           |
| recordLength       | #recordLength       | Displays number of records shown                                            |
| recordsAll         | #recordsAll         | Displays total number of records                                            |
| recordsAfterFilter | #recordsAfterFilter | Displays total number of records after filters have been applied            |
| recordsAfterSearch | #recordsAfterSearch | Displays total number of records after filters and search have been applied |


## Please note
As this component is still under development, please expect breaking changes.
