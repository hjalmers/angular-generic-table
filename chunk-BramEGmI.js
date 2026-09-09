import{H as Qp,Lt as jE,Y as Ti,an as ru,r as Gt,sn as sD,st as Yp,z as QI}from"./main-SGD45EGE.js";import{t as Xn}from"./chunk-C11RZllr.js";var g=`// {project}/src/styles.scss
@use '@angular-generic-table/core/scss' as generic-table-styles;
@include generic-table-styles.styles(); // all styles

// Or include only the parts you need:
// @include generic-table-styles.search-style();     // search highlight
// @include generic-table-styles.mobile-style();     // mobile layout
// @include generic-table-styles.pagination-style(); // pagination
`;var u=`import { Component } from '@angular/core';
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
`;var S=(()=>{class a{constructor(){this.scssTabs=[{name:`styles.scss`,code:g,language:`scss`}],this.usageTabs=[{name:`people.component.ts`,code:u,language:`typescript`}]}static{this.ɵfac=function(i){return new(i||a)}}static{this.ɵcmp=jE({type:a,selectors:[[`docs-get-started`]],decls:39,vars:2,consts:[[1,`py-4`],[1,`mb-3`],[1,`lead`,`mb-4`],[1,`h5`,`mt-4`,`mb-2`],[1,`bg-body-tertiary`,`border`,`rounded`,`p-3`],[1,`h5`,`mt-5`,`mb-2`],[3,`content`],[1,`mt-5`],[`routerLink`,`/simple`]],template:function(i,r){i&1&&(Ti(0,`div`,0)(1,`h1`,1),QI(2,`Get started`),ru(),Ti(3,`p`,2),QI(4,`Install the package, pull in the styles, and drop the component into a template.`),ru(),Ti(5,`h2`,3),QI(6,`1. Install`),ru(),Ti(7,`p`),QI(8,`Add the library to your Angular project:`),ru(),Ti(9,`pre`,4)(10,`code`),QI(11,`npm install @angular-generic-table/core`),ru()(),Ti(12,`h2`,5),QI(13,`2. Add styles`),ru(),Ti(14,`p`),QI(15,` Import the SCSS in your global stylesheet. Override the exposed variables in the `),Ti(16,`code`),QI(17,`with(...)`),ru(),QI(18,` block if you want to theme it: `),ru(),Qp(19,`docs-tabs`,6),Ti(20,`h2`,5),QI(21,`3. Use the component`),ru(),Ti(22,`p`),QI(23,` Import `),Ti(24,`code`),QI(25,`CoreComponent`),ru(),QI(26,` in any standalone component and pass it a `),Ti(27,`code`),QI(28,`data`),ru(),QI(29,` array plus a `),Ti(30,`code`),QI(31,`config`),ru(),QI(32,` describing the columns: `),ru(),Qp(33,`docs-tabs`,6),Ti(34,`p`,7),QI(35,` Next: explore the `),Ti(36,`a`,8),QI(37,`examples`),ru(),QI(38,` to see sorting, pagination, custom templates, and more. `),ru()()),i&2&&(sD(19),Yp(`content`,r.scssTabs),sD(14),Yp(`content`,r.usageTabs))},dependencies:[Gt,Xn],encapsulation:2})}}return a})();export{S as GetStartedComponent};