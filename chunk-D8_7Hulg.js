import{H as Qp,Lt as jE,Y as Ti,an as ru,sn as sD,st as Yp}from"./main-SGD45EGE.js";import{n as ai}from"./chunk-EwprI_mx.js";import{t as Xn}from"./chunk-C11RZllr.js";var p=[{name:`simple.component.ts`,code:`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CoreComponent, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

interface BasicData {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  favoriteFood: string;
}

@Component({
  template: \`
    <div class="overflow-auto">
      <angular-generic-table [data]="data" [config]="config"></angular-generic-table>
    </div>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  \`,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CoreComponent, TabsComponent],
})
export class SimpleComponent {
  data: Array<BasicData> = [
    { firstName: 'Peter', lastName: 'Parker', gender: 'male', favoriteFood: 'Pasta' },
    { firstName: 'Mary Jane', lastName: 'Watson', gender: 'female', favoriteFood: 'Pizza' },
  ];
  config: TableConfig<BasicData> = {
    class: 'table table-striped table-bordered',
    columns: {
      firstName: {},
      lastName: {},
      gender: {},
      favoriteFood: {},
    },
  };
  SNIPPETS = SOURCE_TABS;
}
`,language:`typescript`}];var u=(()=>{class e{constructor(){this.data=[{firstName:`Peter`,lastName:`Parker`,gender:`male`,favoriteFood:`Pasta`},{firstName:`Mary Jane`,lastName:`Watson`,gender:`female`,favoriteFood:`Pizza`}],this.config={class:`table table-striped table-bordered`,columns:{firstName:{},lastName:{},gender:{},favoriteFood:{}}},this.SNIPPETS=p}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=jE({type:e,selectors:[[`ng-component`]],decls:3,vars:3,consts:[[1,`overflow-auto`],[3,`data`,`config`],[3,`content`]],template:function(n,t){n&1&&(Ti(0,`div`,0),Qp(1,`angular-generic-table`,1),ru(),Qp(2,`docs-tabs`,2)),n&2&&(sD(),Yp(`data`,t.data)(`config`,t.config),sD(),Yp(`content`,t.SNIPPETS))},dependencies:[ai,Xn],encapsulation:2,changeDetection:1})}}return e})();export{u as SimpleComponent};