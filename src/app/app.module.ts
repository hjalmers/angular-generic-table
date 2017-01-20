import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LazyComponent } from './lazy/lazy.component';
import { RestComponent } from './rest/rest.component';
import { GenericTableModule } from '../generic-table/generic-table.module';
import { CustomRowComponent } from './custom-row/custom-row.component';
import { StaticComponent } from './basic/basic.component';
import { ExamplesComponent } from './examples/examples.component';
import { AppRoutingModule } from './app-routing.module';
import { ExemplifyModule } from "angular-exemplify";
import {
  CustomColumnComponent,
  NameComponent,
  AgeComponent
} from './custom-column/custom-column.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyComponent,
    RestComponent,
    CustomRowComponent,
    CustomColumnComponent,
    NameComponent,
    AgeComponent,
    StaticComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GenericTableModule,
    AppRoutingModule,
    ExemplifyModule
  ],
  entryComponents: [
    CustomRowComponent,
    NameComponent,
    AgeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
