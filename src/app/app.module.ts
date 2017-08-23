import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


/** Components used in example */
import { AppComponent } from './app.component';
import { LazyComponent } from './lazy/lazy.component';
import { RestComponent } from './rest/rest.component';
import { CustomRowComponent } from './custom-row/custom-row.component';
import { BasicComponent } from './basic/basic.component';
import {
  AddRemoveEditComponent,
  RequiredNameComponent,
  RequiredNumberComponent,
  EditSaveButtonComponent,
  DeleteDiscardButtonComponent,
  SelectedCheckboxComponent
} from './add-remove-edit/add-remove-edit.component';
import { ExamplesComponent } from './examples/examples.component';
import { AppRoutingModule } from './app-routing.module';
import { ExemplifyModule } from 'angular-exemplify';
import { LocalizationComponent} from './localization/localization.component';
import { CustomColumnComponent, NameComponent, AgeComponent } from './custom-column/custom-column.component';

/** Only needed when using ng2-translate */
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/** Import generic table module */
import { GenericTableModule } from '@angular-generic-table/core';
import { ColumnSettingsModule } from '@angular-generic-table/column-settings';

/** Example components */
import { ChangeColumnSettingsComponent } from './change-column-settings/change-column-settings.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { InlineEditingComponent } from './inline-editing/inline-editing.component';
import { ColumnClickComponent } from './column-click/column-click.component';
import { AggregateComponent } from './aggregate/aggregate.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyComponent,
    RestComponent,
    CustomRowComponent,
    CustomColumnComponent,
    NameComponent,
    AgeComponent,
    RequiredNameComponent,
    RequiredNumberComponent,
    EditSaveButtonComponent,
    DeleteDiscardButtonComponent,
    SelectedCheckboxComponent,
    BasicComponent,
    ExamplesComponent,
    LocalizationComponent,
    ChangeColumnSettingsComponent,
    HomeComponent,
    MenuComponent,
    InlineEditingComponent,
    ColumnClickComponent,
    AggregateComponent,
    AddRemoveEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    GenericTableModule, /** ADD THIS LINE TO YOUR APP MODULE! */
    ColumnSettingsModule, /** ADD THIS LINE TO INCLUDE COLUMN SETTINGS MODULE (OPTIONAL) */
    AppRoutingModule, /** holds routes used in examples */
    ExemplifyModule, /** used for generating examples */
    /** translate module only needed for localization when using ngx */
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  /** add components used by your table i.e. for expanding rows etc. as entry components */
  entryComponents: [
    CustomRowComponent,
    NameComponent,
    AgeComponent,
    RequiredNameComponent,
    RequiredNumberComponent,
    EditSaveButtonComponent,
    DeleteDiscardButtonComponent,
    SelectedCheckboxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
