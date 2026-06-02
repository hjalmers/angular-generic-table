import{b as E}from"./chunk-DY3R4EBK.js";import"./chunk-RI6AK356.js";import{a as w}from"./chunk-MQWK62O4.js";import{$a as o,Ha as b,Ob as _,Pb as O,Y as c,Z as f,Za as g,_a as r,ab as h,fb as u,hb as m,lc as F,mc as T,qb as S,ub as n,vb as N,xa as s,xb as v,yb as C,zb as y}from"./chunk-L56K3QBL.js";var k=[{name:"sorting.component.ts",code:`import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CoreComponent, GtSortEvent, GtSortOrder, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

interface SortingData {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  favoriteFood: string;
  birthdate: number;
}

@Component({
  template: \`
    <div class="overflow-auto">
      <angular-generic-table
        #table
        [data]="data"
        [config]="config"
        [(sortOrder)]="sortOrder"
        (columnSort)="logSortChange($event)"
      ></angular-generic-table>
    </div>
    <div class="row mb-3 gy-3">
      <div class="col-12 col-sm-auto">
        <button class="btn btn-primary w-100" (click)="table.sortByKey('firstName', $event)">Sort on first name</button>
      </div>
      <div class="col-12 col-sm-auto">
        <button class="btn btn-primary w-100" (click)="resetSort()">Reset sorting</button>
      </div>
    </div>
    <strong>Current sort order</strong>
    <p>
      <code>{{ sortOrder | json }}</code>
    </p>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  \`,
  imports: [CoreComponent, TabsComponent, JsonPipe],
})
export class SortingComponent {
  initialSortOrder: GtSortOrder<SortingData> = [
    { key: 'birthdate', order: 'asc' },
    { key: 'gender', order: 'asc' },
    { key: 'firstName', order: 'desc' },
  ];
  sortOrder: GtSortOrder<SortingData> = this.initialSortOrder;
  data: Array<SortingData> = [
    { firstName: 'John', lastName: 'Doe', gender: 'male', favoriteFood: 'pizza', birthdate: 946684800000 },
    { firstName: 'Jane', lastName: 'Smith', gender: 'female', favoriteFood: 'sushi', birthdate: 803404800000 },
    { firstName: 'Bob', lastName: 'Johnson', gender: 'male', favoriteFood: 'burgers', birthdate: 649345600000 },
    { firstName: 'Emily', lastName: 'Williams', gender: 'female', favoriteFood: 'chicken', birthdate: 946684800000 },
    { firstName: 'Michael', lastName: 'Jones', gender: 'male', favoriteFood: 'steak', birthdate: 803404800000 },
    { firstName: 'Matthew', lastName: 'Brown', gender: 'male', favoriteFood: 'seafood', birthdate: 649345600000 },
    { firstName: 'Jessica', lastName: 'Miller', gender: 'female', favoriteFood: 'salad', birthdate: 946684800000 },
    { firstName: 'Jacob', lastName: 'Moore', gender: 'male', favoriteFood: 'pasta', birthdate: 803404800000 },
    { firstName: 'Nicholas', lastName: 'Taylor', gender: 'male', favoriteFood: 'soup', birthdate: 649345600000 },
    { firstName: 'Ashley', lastName: 'Anderson', gender: 'female', favoriteFood: 'tacos', birthdate: 946684800000 },
    { firstName: 'Brandon', lastName: 'Thomas', gender: 'male', favoriteFood: 'nachos', birthdate: 803404800000 },
  ];
  config: TableConfig<SortingData> = {
    columns: {
      firstName: { sortable: true },
      lastName: { sortable: true },
      gender: { sortable: true },
      favoriteFood: { sortable: true },
      birthdate: { sortable: true, transform: { pipe: DatePipe } },
    },
  };

  logSortChange(sortEvent: GtSortEvent<SortingData>) {
    console.log(sortEvent);
  }
  resetSort() {
    this.sortOrder = this.initialSortOrder;
  }

  SNIPPETS = SOURCE_TABS;
}
`,language:"typescript"}];var I=(()=>{class a{constructor(){this.initialSortOrder=[{key:"birthdate",order:"asc"},{key:"gender",order:"asc"},{key:"firstName",order:"desc"}],this.sortOrder=this.initialSortOrder,this.data=[{firstName:"John",lastName:"Doe",gender:"male",favoriteFood:"pizza",birthdate:9466848e5},{firstName:"Jane",lastName:"Smith",gender:"female",favoriteFood:"sushi",birthdate:8034048e5},{firstName:"Bob",lastName:"Johnson",gender:"male",favoriteFood:"burgers",birthdate:6493456e5},{firstName:"Emily",lastName:"Williams",gender:"female",favoriteFood:"chicken",birthdate:9466848e5},{firstName:"Michael",lastName:"Jones",gender:"male",favoriteFood:"steak",birthdate:8034048e5},{firstName:"Matthew",lastName:"Brown",gender:"male",favoriteFood:"seafood",birthdate:6493456e5},{firstName:"Jessica",lastName:"Miller",gender:"female",favoriteFood:"salad",birthdate:9466848e5},{firstName:"Jacob",lastName:"Moore",gender:"male",favoriteFood:"pasta",birthdate:8034048e5},{firstName:"Nicholas",lastName:"Taylor",gender:"male",favoriteFood:"soup",birthdate:6493456e5},{firstName:"Ashley",lastName:"Anderson",gender:"female",favoriteFood:"tacos",birthdate:9466848e5},{firstName:"Brandon",lastName:"Thomas",gender:"male",favoriteFood:"nachos",birthdate:8034048e5}],this.config={columns:{firstName:{sortable:!0},lastName:{sortable:!0},gender:{sortable:!0},favoriteFood:{sortable:!0},birthdate:{sortable:!0,transform:{pipe:F}}}},this.SNIPPETS=k}logSortChange(l){console.log(l)}resetSort(){this.sortOrder=this.initialSortOrder}static{this.\u0275fac=function(i){return new(i||a)}}static{this.\u0275cmp=b({type:a,selectors:[["ng-component"]],decls:17,vars:7,consts:[["table",""],[1,"overflow-auto"],[3,"sortOrderChange","columnSort","data","config","sortOrder"],[1,"row","mb-3","gy-3"],[1,"col-12","col-sm-auto"],[1,"btn","btn-primary","w-100",3,"click"],[3,"content"]],template:function(i,e){if(i&1){let p=u();r(0,"div",1)(1,"angular-generic-table",2,0),y("sortOrderChange",function(t){return c(p),C(e.sortOrder,t)||(e.sortOrder=t),f(t)}),m("columnSort",function(t){return e.logSortChange(t)}),o()(),r(3,"div",3)(4,"div",4)(5,"button",5),m("click",function(t){c(p);let J=S(2);return f(J.sortByKey("firstName",t))}),n(6,"Sort on first name"),o()(),r(7,"div",4)(8,"button",5),m("click",function(){return e.resetSort()}),n(9,"Reset sorting"),o()()(),r(10,"strong"),n(11,"Current sort order"),o(),r(12,"p")(13,"code"),n(14),_(15,"json"),o()(),h(16,"docs-tabs",6)}i&2&&(s(),g("data",e.data)("config",e.config),v("sortOrder",e.sortOrder),s(13),N(O(15,5,e.sortOrder)),s(2),g("content",e.SNIPPETS))},dependencies:[E,w,T],encapsulation:2})}}return a})();export{I as SortingComponent};
