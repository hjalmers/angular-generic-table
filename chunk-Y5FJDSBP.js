import{b as c}from"./chunk-DY3R4EBK.js";import"./chunk-RI6AK356.js";import{a as l}from"./chunk-MQWK62O4.js";import{$a as m,Ha as i,Za as o,_a as s,ab as r,xa as a}from"./chunk-L56K3QBL.js";var p=[{name:"simple.component.ts",code:`import { Component } from '@angular/core';
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
`,language:"typescript"}];var u=(()=>{class e{constructor(){this.data=[{firstName:"Peter",lastName:"Parker",gender:"male",favoriteFood:"Pasta"},{firstName:"Mary Jane",lastName:"Watson",gender:"female",favoriteFood:"Pizza"}],this.config={class:"table table-striped table-bordered",columns:{firstName:{},lastName:{},gender:{},favoriteFood:{}}},this.SNIPPETS=p}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=i({type:e,selectors:[["ng-component"]],decls:3,vars:3,consts:[[1,"overflow-auto"],[3,"data","config"],[3,"content"]],template:function(n,t){n&1&&(s(0,"div",0),r(1,"angular-generic-table",1),m(),r(2,"docs-tabs",2)),n&2&&(a(),o("data",t.data)("config",t.config),a(),o("content",t.SNIPPETS))},dependencies:[c,l],encapsulation:2})}}return e})();export{u as SimpleComponent};
