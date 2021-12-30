import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericTableCoreModule } from '@angular-generic-table/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvancedComponent } from './examples/advanced/advanced.component';
import { SimpleComponent } from './examples/simple/simple.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CustomTemplatesComponent } from './examples/custom-templates/custom-templates.component';

@NgModule({
  declarations: [AppComponent, AdvancedComponent, SimpleComponent, TabsComponent, CustomTemplatesComponent],
  imports: [BrowserModule, AppRoutingModule, GenericTableCoreModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
