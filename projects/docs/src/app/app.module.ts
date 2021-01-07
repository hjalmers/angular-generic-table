import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericTableCoreModule } from '../../../core/src/lib/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GenericTableCoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
