# angular-generic-table

A generic table for Angular 2+. This project is a re-write of [this](https://github.com/hjalmers/angularjs-generic-table) project for AngularJS, the idea is to have support for the same features and that the configuration should be the same. Generic table uses standard markup for tables ie. table, tr and td elements etc. and has support for expanding rows, search, filters, sorting, pagination, export to CSV, column clicks, custom column rendering, custom export values. [View demo](https://hjalmers.github.io/angular-generic-table/)

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

Run `npm install @angular-generic-table/core --save`

Include generic table module in your project, for example if you want to add it to your app module:

**App Module**
```TypeScript
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GenericTableModule } from '@angular-generic-table/core';

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
```TypeScript
import { Component } from '@angular/core';
import { GtConfig } from '@angular-generic-table/core';

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
```Html
<generic-table [gtSettings]="configObject.settings" [gtFields]="configObject.fields" [gtData]="configObject.data"></generic-table>
```
