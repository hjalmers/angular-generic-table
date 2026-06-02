import{f as c}from"./chunk-MCKWPBYB.js";import"./chunk-YRUNHQKL.js";import{a as p}from"./chunk-MQWK62O4.js";import{$a as n,Ha as m,Za as s,_a as t,ab as l,ub as e,xa as o}from"./chunk-L56K3QBL.js";var g=`// {project}/src/styles.scss
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
`,S=(()=>{class a{constructor(){this.scssTabs=[{name:"styles.scss",code:g,language:"scss"}],this.usageTabs=[{name:"people.component.ts",code:u,language:"typescript"}]}static{this.\u0275fac=function(i){return new(i||a)}}static{this.\u0275cmp=m({type:a,selectors:[["docs-get-started"]],decls:39,vars:2,consts:[[1,"py-4"],[1,"mb-3"],[1,"lead","mb-4"],[1,"h5","mt-4","mb-2"],[1,"bg-body-tertiary","border","rounded","p-3"],[1,"h5","mt-5","mb-2"],[3,"content"],[1,"mt-5"],["routerLink","/simple"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"h1",1),e(2,"Get started"),n(),t(3,"p",2),e(4,"Install the package, pull in the styles, and drop the component into a template."),n(),t(5,"h2",3),e(6,"1. Install"),n(),t(7,"p"),e(8,"Add the library to your Angular project:"),n(),t(9,"pre",4)(10,"code"),e(11,"npm install @angular-generic-table/core"),n()(),t(12,"h2",5),e(13,"2. Add styles"),n(),t(14,"p"),e(15," Import the SCSS in your global stylesheet. Override the exposed variables in the "),t(16,"code"),e(17,"with(...)"),n(),e(18," block if you want to theme it: "),n(),l(19,"docs-tabs",6),t(20,"h2",5),e(21,"3. Use the component"),n(),t(22,"p"),e(23," Import "),t(24,"code"),e(25,"CoreComponent"),n(),e(26," in any standalone component and pass it a "),t(27,"code"),e(28,"data"),n(),e(29," array plus a "),t(30,"code"),e(31,"config"),n(),e(32," describing the columns: "),n(),l(33,"docs-tabs",6),t(34,"p",7),e(35," Next: explore the "),t(36,"a",8),e(37,"examples"),n(),e(38," to see sorting, pagination, custom templates, and more. "),n()()),i&2&&(o(19),s("content",r.scssTabs),o(14),s("content",r.usageTabs))},dependencies:[c,p],encapsulation:2,changeDetection:0})}}return a})();export{S as GetStartedComponent};
