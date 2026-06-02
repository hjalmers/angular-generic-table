import{b as y}from"./chunk-DY3R4EBK.js";import"./chunk-RI6AK356.js";import{a as T}from"./chunk-MQWK62O4.js";import{$a as l,Ha as g,Ma as u,Ta as v,Tb as D,Ua as b,Za as c,_a as r,ab as p,ha as d,hb as f,nb as _,ob as h,pb as C,ub as o,xa as m}from"./chunk-L56K3QBL.js";var P=[{name:"nested-data.component.ts",code:`import { Component, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { CoreComponent, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

interface NestedData {
  name: { first: string; last: string };
  data: { details?: { gender: 'male' | 'female'; favoriteFood: 'Pasta' | 'Pizza' } };
}

interface Data {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  favoriteFood: 'Pasta' | 'Pizza';
  missing: string;
}

@Component({
  selector: 'nested-data',
  template: \`
    <div class="row gy-3">
      <div class="col col-sm-auto">
        <button class="btn btn-outline-primary mb-3" (click)="loadData()">Load other data</button>
      </div>
      <div class="col col-sm-auto">
        <button class="btn btn-outline-primary mb-3" (click)="resetData()">Reset</button>
      </div>
    </div>
    <div class="overflow-auto">
      <angular-generic-table [data]="data()" [config]="config()"></angular-generic-table>
    </div>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
    <ng-template #gender let-row="row" let-col="col">
      @switch (row[col.key]) {
        @case ('male') {
          \u2642\uFE0F
        }
        @case ('female') {
          \u2640\uFE0F
        }
      }
    </ng-template>
  \`,
  imports: [CoreComponent, TabsComponent],
})
export class NestedDataComponent implements OnInit {
  @ViewChild('gender', { static: true }) gender: TemplateRef<any> | undefined;
  config = signal<TableConfig<Data>>({});
  data = signal<Array<NestedData>>([]);

  ngOnInit(): void {
    this.resetData();
    this.config.set({
      columns: {
        firstName: { sortable: true, mapTo: { path: 'name.first' } },
        lastName: { sortable: true, mapTo: { path: 'name.last' } },
        gender: { mapTo: { path: 'data.details.gender' }, templateRef: this.gender },
        favoriteFood: { sortable: true, mapTo: { path: 'data.details.favoriteFood', missingValue: 'n/a' } },
        missing: { mapTo: { path: 'data.missingKey.noMatch', missingValue: 'n/a' } },
      },
    });
  }

  resetData() {
    this.data.set([
      { name: { first: 'Peter', last: 'Parker' }, data: { details: { gender: 'male', favoriteFood: 'Pasta' } } },
      { name: { first: 'Mary Jane', last: 'Watson' }, data: { details: { gender: 'female', favoriteFood: 'Pizza' } } },
    ]);
  }

  loadData(): void {
    this.data.set([
      { name: { first: 'John', last: 'Doe' }, data: { details: { gender: 'male', favoriteFood: 'Pasta' } } },
      { name: { first: 'Jane', last: 'Doe' }, data: { details: { gender: 'female', favoriteFood: 'Pizza' } } },
      { name: { first: 'Foo', last: 'Bar' }, data: {} },
    ]);
  }

  SNIPPETS = SOURCE_TABS;
}
`,language:"typescript"}];var N=["gender"];function F(e,i){e&1&&o(0," \u2642\uFE0F ")}function S(e,i){e&1&&o(0," \u2640\uFE0F ")}function w(e,i){if(e&1&&v(0,F,1,0)(1,S,1,0),e&2){let n,t=i.row,a=i.col;b((n=t[a.key])==="male"?0:n==="female"?1:-1)}}var B=(()=>{class e{constructor(){this.config=d({}),this.data=d([]),this.SNIPPETS=P}ngOnInit(){this.resetData(),this.config.set({columns:{firstName:{sortable:!0,mapTo:{path:"name.first"}},lastName:{sortable:!0,mapTo:{path:"name.last"}},gender:{mapTo:{path:"data.details.gender"},templateRef:this.gender},favoriteFood:{sortable:!0,mapTo:{path:"data.details.favoriteFood",missingValue:"n/a"}},missing:{mapTo:{path:"data.missingKey.noMatch",missingValue:"n/a"}}}})}resetData(){this.data.set([{name:{first:"Peter",last:"Parker"},data:{details:{gender:"male",favoriteFood:"Pasta"}}},{name:{first:"Mary Jane",last:"Watson"},data:{details:{gender:"female",favoriteFood:"Pizza"}}}])}loadData(){this.data.set([{name:{first:"John",last:"Doe"},data:{details:{gender:"male",favoriteFood:"Pasta"}}},{name:{first:"Jane",last:"Doe"},data:{details:{gender:"female",favoriteFood:"Pizza"}}},{name:{first:"Foo",last:"Bar"},data:{}}])}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=g({type:e,selectors:[["nested-data"]],viewQuery:function(t,a){if(t&1&&_(N,7),t&2){let s;h(s=C())&&(a.gender=s.first)}},decls:12,vars:3,consts:[["gender",""],[1,"row","gy-3"],[1,"col","col-sm-auto"],[1,"btn","btn-outline-primary","mb-3",3,"click"],[1,"overflow-auto"],[3,"data","config"],[3,"content"]],template:function(t,a){t&1&&(r(0,"div",1)(1,"div",2)(2,"button",3),f("click",function(){return a.loadData()}),o(3,"Load other data"),l()(),r(4,"div",2)(5,"button",3),f("click",function(){return a.resetData()}),o(6,"Reset"),l()()(),r(7,"div",4),p(8,"angular-generic-table",5),l(),p(9,"docs-tabs",6),u(10,w,2,1,"ng-template",null,0,D)),t&2&&(m(8),c("data",a.data())("config",a.config()),m(),c("content",a.SNIPPETS))},dependencies:[y,T],encapsulation:2})}}return e})();export{B as NestedDataComponent};
