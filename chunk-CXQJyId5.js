import {o as oi}from'./chunk-ugwy61Id.js';import {u as uw,I as IE,v as lw,J as JE,m as mi,w as ih,f as $p,Z as Zc,k as kI,n as nC,L as Lp,E as Ev,F as Fp,y as oh,r as rh,B as oC,R as Rl,C as BI,t as kl,D as dI}from'./main-ZDTAVTQ2.js';import {X as Xn}from'./chunk-BSQMMumy.js';var D=[{name:"sorting.component.ts",code:`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.Eager,
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
`,language:"typescript"}];var I=(()=>{class a{constructor(){this.initialSortOrder=[{key:"birthdate",order:"asc"},{key:"gender",order:"asc"},{key:"firstName",order:"desc"}],this.sortOrder=this.initialSortOrder,this.data=[{firstName:"John",lastName:"Doe",gender:"male",favoriteFood:"pizza",birthdate:9466848e5},{firstName:"Jane",lastName:"Smith",gender:"female",favoriteFood:"sushi",birthdate:8034048e5},{firstName:"Bob",lastName:"Johnson",gender:"male",favoriteFood:"burgers",birthdate:6493456e5},{firstName:"Emily",lastName:"Williams",gender:"female",favoriteFood:"chicken",birthdate:9466848e5},{firstName:"Michael",lastName:"Jones",gender:"male",favoriteFood:"steak",birthdate:8034048e5},{firstName:"Matthew",lastName:"Brown",gender:"male",favoriteFood:"seafood",birthdate:6493456e5},{firstName:"Jessica",lastName:"Miller",gender:"female",favoriteFood:"salad",birthdate:9466848e5},{firstName:"Jacob",lastName:"Moore",gender:"male",favoriteFood:"pasta",birthdate:8034048e5},{firstName:"Nicholas",lastName:"Taylor",gender:"male",favoriteFood:"soup",birthdate:6493456e5},{firstName:"Ashley",lastName:"Anderson",gender:"female",favoriteFood:"tacos",birthdate:9466848e5},{firstName:"Brandon",lastName:"Thomas",gender:"male",favoriteFood:"nachos",birthdate:8034048e5}],this.config={columns:{firstName:{sortable:true},lastName:{sortable:true},gender:{sortable:true},favoriteFood:{sortable:true},birthdate:{sortable:true,transform:{pipe:uw}}}},this.SNIPPETS=D;}logSortChange(l){console.log(l);}resetSort(){this.sortOrder=this.initialSortOrder;}static{this.\u0275fac=function(i){return new(i||a)};}static{this.\u0275cmp=IE({type:a,selectors:[["ng-component"]],decls:17,vars:7,consts:[["table",""],[1,"overflow-auto"],[3,"sortOrderChange","columnSort","data","config","sortOrder"],[1,"row","mb-3","gy-3"],[1,"col-12","col-sm-auto"],[1,"btn","btn-primary","w-100",3,"click"],[3,"content"]],template:function(i,e){if(i&1){let p=JE();mi(0,"div",1)(1,"angular-generic-table",2,0),ih("sortOrderChange",function(t){return Rl(p),BI(e.sortOrder,t)||(e.sortOrder=t),kl(t)}),$p("columnSort",function(t){return e.logSortChange(t)}),Zc()(),mi(3,"div",3)(4,"div",4)(5,"button",5),$p("click",function(t){Rl(p);let k=dI(2);return kl(k.sortByKey("firstName",t))}),kI(6,"Sort on first name"),Zc()(),mi(7,"div",4)(8,"button",5),$p("click",function(){return e.resetSort()}),kI(9,"Reset sorting"),Zc()()(),mi(10,"strong"),kI(11,"Current sort order"),Zc(),mi(12,"p")(13,"code"),kI(14),nC(15,"json"),Zc()(),Lp(16,"docs-tabs",6);}i&2&&(Ev(),Fp("data",e.data)("config",e.config),oh("sortOrder",e.sortOrder),Ev(13),rh(oC(15,5,e.sortOrder)),Ev(2),Fp("content",e.SNIPPETS));},dependencies:[oi,Xn,lw],encapsulation:2,changeDetection:1});}}return a})();export{I as SortingComponent};