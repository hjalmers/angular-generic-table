import {o as oi}from'./chunk-ugwy61Id.js';import {I as IE,m as mi,L as Lp,Z as Zc,E as Ev,F as Fp}from'./main-ZDTAVTQ2.js';import {X as Xn}from'./chunk-BSQMMumy.js';var p=[{name:"simple.component.ts",code:`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`,language:"typescript"}];var u=(()=>{class e{constructor(){this.data=[{firstName:"Peter",lastName:"Parker",gender:"male",favoriteFood:"Pasta"},{firstName:"Mary Jane",lastName:"Watson",gender:"female",favoriteFood:"Pizza"}],this.config={class:"table table-striped table-bordered",columns:{firstName:{},lastName:{},gender:{},favoriteFood:{}}},this.SNIPPETS=p;}static{this.\u0275fac=function(n){return new(n||e)};}static{this.\u0275cmp=IE({type:e,selectors:[["ng-component"]],decls:3,vars:3,consts:[[1,"overflow-auto"],[3,"data","config"],[3,"content"]],template:function(n,t){n&1&&(mi(0,"div",0),Lp(1,"angular-generic-table",1),Zc(),Lp(2,"docs-tabs",2)),n&2&&(Ev(),Fp("data",t.data)("config",t.config),Ev(),Fp("content",t.SNIPPETS));},dependencies:[oi,Xn],encapsulation:2,changeDetection:1});}}return e})();export{u as SimpleComponent};