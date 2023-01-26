import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  GenericTableCoreModule,
  GenericTablePaginationModule,
} from '@angular-generic-table/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvancedComponent } from './examples/advanced/advanced.component';
import { SimpleComponent } from './examples/simple/simple.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CustomTemplatesComponent } from './examples/custom-templates/custom-templates.component';
import { PaginationComponent } from './examples/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HorizontalTableComponent } from './examples/horizontal-table/horizontal-table.component';
import { MobileLayoutComponent } from './examples/mobile-layout/mobile-layout.component';
import { NestedDataComponent } from './examples/nested-data/nested-data.component';
import { TransposeComponent } from './examples/transpose/transpose.component';
import { RowHoverClickComponent } from './examples/row-hover-click/row-hover-click.component';
import { FooterComponent } from './examples/footer/footer.component';
import { SortingComponent } from './examples/sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvancedComponent,
    SimpleComponent,
    HorizontalTableComponent,
    PaginationComponent,
    TabsComponent,
    CustomTemplatesComponent,
    MobileLayoutComponent,
    NestedDataComponent,
    TransposeComponent,
    RowHoverClickComponent,
    FooterComponent,
    SortingComponent,
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
