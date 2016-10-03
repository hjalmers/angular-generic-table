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

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadingComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GenericTableModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
