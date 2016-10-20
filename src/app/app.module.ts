import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing,
  appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import {Input} from "@angular/core";

import {Observable} from 'rxjs/Observable';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { RestComponent } from './rest/rest.component';
import {GenericTableModule} from '../generic-table/generic-table.module';
import { FinanceTestComponent } from './finance-test/finance-test.component';
import { MyCustomRowComponent } from './my-custom-row/my-custom-row.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadingComponent,
    RestComponent,
    FinanceTestComponent,
    MyCustomRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GenericTableModule,
    routing
  ],
  entryComponents: [ MyCustomRowComponent ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
