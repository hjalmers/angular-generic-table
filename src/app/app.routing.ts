import {Routes, RouterModule}   from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {AppComponent} from './app.component';
import {LazyComponent} from './lazy/lazy.component';
import {RestComponent} from './rest/rest.component';
import {ExamplesComponent} from './examples/examples.component';
//import {FinanceTestComponent} from './finance-test/finance-test.component';


const routes: Routes = [
  { path: '', redirectTo: '/examples', pathMatch: 'full' },
  { path: 'rest', component: RestComponent },
  { path: 'lazy', component: LazyComponent },
  { path: 'examples', component: ExamplesComponent }//,
  //{ path: 'finance', component: FinanceTestComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

