import {Routes, RouterModule}   from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {AppComponent} from './app.component';
import {LazyLoadingComponent} from './lazy-loading/lazy-loading.component';
import {RestComponent} from './rest/rest.component';
//import {FinanceTestComponent} from './finance-test/finance-test.component';


const routes: Routes = [
  { path: '', redirectTo: '/rest', pathMatch: 'full' },
  { path: 'rest', component: RestComponent },
  { path: 'lazy', component: LazyLoadingComponent }//,
  //{ path: 'finance', component: FinanceTestComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

