import {I as IE,G as Gt,m as mi,k as kI,Z as Zc,L as Lp,E as Ev,F as Fp}from'./main-ZDTAVTQ2.js';import {X as Xn}from'./chunk-BSQMMumy.js';var g=`// {project}/src/styles.scss
@use '@angular-generic-table/core/scss' as generic-table-styles;
@include generic-table-styles.styles(); // all styles

// Or include only the parts you need:
// @include generic-table-styles.search-style();     // search highlight
// @include generic-table-styles.mobile-style();     // mobile layout
// @include generic-table-styles.pagination-style(); // pagination
`,u=`import { Component } from '@angular/core';
import { CoreComponent, TableConfig } from '@angular-generic-table/core';

interface Person {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-people',
  template: \`
    <angular-generic-table [data]="data" [config]="config"></angular-generic-table>
  \`,
  imports: [CoreComponent],
})
export class PeopleComponent {
  data: Array<Person> = [
    { firstName: 'Peter', lastName: 'Parker' },
    { firstName: 'Mary Jane', lastName: 'Watson' },
  ];
  config: TableConfig<Person> = {
    class: 'table table-striped',
    columns: {
      firstName: {},
      lastName: {},
    },
  };
}
`,S=(()=>{class a{constructor(){this.scssTabs=[{name:"styles.scss",code:g,language:"scss"}],this.usageTabs=[{name:"people.component.ts",code:u,language:"typescript"}];}static{this.\u0275fac=function(i){return new(i||a)};}static{this.\u0275cmp=IE({type:a,selectors:[["docs-get-started"]],decls:39,vars:2,consts:[[1,"py-4"],[1,"mb-3"],[1,"lead","mb-4"],[1,"h5","mt-4","mb-2"],[1,"bg-body-tertiary","border","rounded","p-3"],[1,"h5","mt-5","mb-2"],[3,"content"],[1,"mt-5"],["routerLink","/simple"]],template:function(i,r){i&1&&(mi(0,"div",0)(1,"h1",1),kI(2,"Get started"),Zc(),mi(3,"p",2),kI(4,"Install the package, pull in the styles, and drop the component into a template."),Zc(),mi(5,"h2",3),kI(6,"1. Install"),Zc(),mi(7,"p"),kI(8,"Add the library to your Angular project:"),Zc(),mi(9,"pre",4)(10,"code"),kI(11,"npm install @angular-generic-table/core"),Zc()(),mi(12,"h2",5),kI(13,"2. Add styles"),Zc(),mi(14,"p"),kI(15," Import the SCSS in your global stylesheet. Override the exposed variables in the "),mi(16,"code"),kI(17,"with(...)"),Zc(),kI(18," block if you want to theme it: "),Zc(),Lp(19,"docs-tabs",6),mi(20,"h2",5),kI(21,"3. Use the component"),Zc(),mi(22,"p"),kI(23," Import "),mi(24,"code"),kI(25,"CoreComponent"),Zc(),kI(26," in any standalone component and pass it a "),mi(27,"code"),kI(28,"data"),Zc(),kI(29," array plus a "),mi(30,"code"),kI(31,"config"),Zc(),kI(32," describing the columns: "),Zc(),Lp(33,"docs-tabs",6),mi(34,"p",7),kI(35," Next: explore the "),mi(36,"a",8),kI(37,"examples"),Zc(),kI(38," to see sorting, pagination, custom templates, and more. "),Zc()()),i&2&&(Ev(19),Fp("content",r.scssTabs),Ev(14),Fp("content",r.usageTabs));},dependencies:[Gt,Xn],encapsulation:2});}}return a})();export{S as GetStartedComponent};