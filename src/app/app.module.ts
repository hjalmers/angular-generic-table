import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http} from '@angular/http';

// Example components
import { AppComponent } from './app.component';
import { LazyComponent } from './lazy/lazy.component';
import { RestComponent } from './rest/rest.component';
import { CustomRowComponent } from './custom-row/custom-row.component';
import { BasicComponent } from './basic/basic.component';
import { ExamplesComponent } from './examples/examples.component';
import { AppRoutingModule } from './app-routing.module';
import { ExemplifyModule } from "angular-exemplify";
import { LocalizationComponent} from './localization/localization.component';
import {
  CustomColumnComponent,
  NameComponent,
  AgeComponent
} from './custom-column/custom-column.component';

// Only needed when using ng2-translate
import { TranslateModule } from 'ng2-translate';
import { TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

// Import generic table module
import { GenericTableModule } from '../generic-table/generic-table.module';

@NgModule({
  declarations: [
    AppComponent,
    LazyComponent,
    RestComponent,
    CustomRowComponent,
    CustomColumnComponent,
    NameComponent,
    AgeComponent,
    BasicComponent,
    ExamplesComponent,
    LocalizationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GenericTableModule,
    AppRoutingModule,
    ExemplifyModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  entryComponents: [
    CustomRowComponent,
    NameComponent,
    AgeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
