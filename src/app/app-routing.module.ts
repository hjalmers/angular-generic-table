import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExamplesComponent } from "./examples/examples.component";
import { LazyComponent } from "./lazy/lazy.component";
import { RestComponent } from "./rest/rest.component";
import { StaticComponent } from "./static/static.component";
import { CustomColumnComponent } from "./custom-column/custom-column.component";

const routes: Routes = [
  { path: '', redirectTo: 'custom-column', pathMatch: 'full' },
  { path: 'examples', component: ExamplesComponent },
  { path: 'lazy', component: LazyComponent },
  { path: 'rest', component: RestComponent },
  { path: 'static', component: StaticComponent },
  { path: 'custom-column', component: CustomColumnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
