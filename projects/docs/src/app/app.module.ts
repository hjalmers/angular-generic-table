import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericTableCoreModule, GenericTablePaginationModule } from '@angular-generic-table/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvancedComponent } from './examples/advanced/advanced.component';
import { SimpleComponent } from './examples/simple/simple.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CustomTemplatesComponent } from './examples/custom-templates/custom-templates.component';
import { PaginationComponent } from './examples/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransposeComponent } from './examples/transpose/transpose.component';
import { MobileLayoutComponent } from './examples/mobile-layout/mobile-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvancedComponent,
    SimpleComponent,
    TransposeComponent,
    PaginationComponent,
    TabsComponent,
    CustomTemplatesComponent,
    MobileLayoutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    GenericTableCoreModule,
    GenericTablePaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
