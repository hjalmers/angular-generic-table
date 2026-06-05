import{b as T,c as S}from"./chunk-3UXWR73U.js";import"./chunk-QFSOMC5Z.js";import{a as C}from"./chunk-AXENTG2G.js";import{$a as d,Ia as b,Na as y,Ua as h,Va as x,Wb as f,_a as s,ab as r,bb as m,ha as c,ib as p,ob as v,pb as u,qb as g,xa as _,xb as o}from"./chunk-UFU3N23S.js";var D=[{name:"horizontal-table.component.ts",code:`import { Component, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { CoreComponent, GtDeltaComponent, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-horizontal-table',
  template: \`
    <button class="btn btn-outline-primary" (click)="simulateLoad()">Simulate load</button>
    <button class="btn btn-outline-danger mx-3" (click)="empty()">Empty</button>
    <button class="btn btn-outline-primary" (click)="load()">Reset</button>
    <div class="overflow-auto">
      <angular-generic-table [data]="data()" [config]="config()" [loading]="loading()">
        <div class="table-loading gt-skeleton-loader"></div>
        <div class="table-no-data alert alert-info mt-3">Table is empty</div>
      </angular-generic-table>
    </div>
    <ng-template #feelings let-row="row" let-col="col">
      @switch (row[col.key]) {
        @case ('thrilled') {
          \u{1F600}
        }
        @case ('positive') {
          \u{1F642}
        }
        @case ('neutral') {
          \u{1F610}
        }
        @case ('negative') {
          \u{1F62D}
        }
      }
    </ng-template>
    <ng-template #delta let-data="data" let-index="index">
      <gt-delta [index]="index" [data]="data"></gt-delta>
    </ng-template>
    <ng-template #deltaIndex let-data="data" let-index="index">
      <gt-delta [index]="index" [baseIndex]="0" [data]="data"></gt-delta>
    </ng-template>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  \`,
  imports: [CoreComponent, GtDeltaComponent, TabsComponent],
})
export class HorizontalTableComponent implements OnInit {
  @ViewChild('feelings', { static: true }) feelings: TemplateRef<any> | undefined;
  @ViewChild('delta', { static: true }) delta: TemplateRef<any> | undefined;
  @ViewChild('deltaIndex', { static: true }) deltaIndex: TemplateRef<any> | undefined;

  loading = signal(false);
  config = signal<TableConfig>({});
  data = signal<any>([]);

  ngOnInit(): void {
    this.config.set({
      stickyHeaders: { row: true },
      mobileLayout: true,
      rows: {
        year: { class: 'text-end', header: false },
        value: { class: 'text-end' },
        delta: { header: 'Delta %', templateRef: this.delta, class: 'text-end' },
        deltaIndex: { header: 'Since inception %', templateRef: this.deltaIndex, class: 'text-end' },
        feeling: { templateRef: this.feelings, class: 'text-end' },
      },
    });
    this.load();
  }

  simulateLoad(): void {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 2000);
  }

  empty(): void {
    this.data.set([]);
  }

  load(): void {
    this.data.set([
      { year: '2017', value: 50, feeling: 'neutral' },
      { year: '2018', value: 75, feeling: 'positive' },
      { year: '2019', value: 100, feeling: 'thrilled' },
      { year: '2020', value: 250, feeling: 'thrilled' },
      { year: '2021', value: 50, feeling: 'negative' },
    ]);
  }

  SNIPPETS = SOURCE_TABS;
}
`,language:"typescript"}];var R=["feelings"],E=["delta"],I=["deltaIndex"];function w(e,a){e&1&&o(0," \u{1F600} ")}function k(e,a){e&1&&o(0," \u{1F642} ")}function z(e,a){e&1&&o(0," \u{1F610} ")}function H(e,a){e&1&&o(0," \u{1F62D} ")}function O(e,a){if(e&1&&h(0,w,1,0)(1,k,1,0)(2,z,1,0)(3,H,1,0),e&2){let l,t=a.row,n=a.col;x((l=t[n.key])==="thrilled"?0:l==="positive"?1:l==="neutral"?2:l==="negative"?3:-1)}}function P(e,a){if(e&1&&m(0,"gt-delta",10),e&2){let l=a.data,t=a.index;s("index",t)("data",l)}}function N(e,a){if(e&1&&m(0,"gt-delta",11),e&2){let l=a.data,t=a.index;s("index",t)("baseIndex",0)("data",l)}}var G=(()=>{class e{constructor(){this.loading=c(!1),this.config=c({}),this.data=c([]),this.SNIPPETS=D}ngOnInit(){this.config.set({stickyHeaders:{row:!0},mobileLayout:!0,rows:{year:{class:"text-end",header:!1},value:{class:"text-end"},delta:{header:"Delta %",templateRef:this.delta,class:"text-end"},deltaIndex:{header:"Since inception %",templateRef:this.deltaIndex,class:"text-end"},feeling:{templateRef:this.feelings,class:"text-end"}}}),this.load()}simulateLoad(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),2e3)}empty(){this.data.set([])}load(){this.data.set([{year:"2017",value:50,feeling:"neutral"},{year:"2018",value:75,feeling:"positive"},{year:"2019",value:100,feeling:"thrilled"},{year:"2020",value:250,feeling:"thrilled"},{year:"2021",value:50,feeling:"negative"}])}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=b({type:e,selectors:[["docs-horizontal-table"]],viewQuery:function(t,n){if(t&1&&v(R,7)(E,7)(I,7),t&2){let i;u(i=g())&&(n.feelings=i.first),u(i=g())&&(n.delta=i.first),u(i=g())&&(n.deltaIndex=i.first)}},decls:18,vars:4,consts:[["feelings",""],["delta",""],["deltaIndex",""],[1,"btn","btn-outline-primary",3,"click"],[1,"btn","btn-outline-danger","mx-3",3,"click"],[1,"overflow-auto"],[3,"data","config","loading"],[1,"table-loading","gt-skeleton-loader"],[1,"table-no-data","alert","alert-info","mt-3"],[3,"content"],[3,"index","data"],[3,"index","baseIndex","data"]],template:function(t,n){t&1&&(d(0,"button",3),p("click",function(){return n.simulateLoad()}),o(1,"Simulate load"),r(),d(2,"button",4),p("click",function(){return n.empty()}),o(3,"Empty"),r(),d(4,"button",3),p("click",function(){return n.load()}),o(5,"Reset"),r(),d(6,"div",5)(7,"angular-generic-table",6),m(8,"div",7),d(9,"div",8),o(10,"Table is empty"),r()()(),y(11,O,4,1,"ng-template",null,0,f)(13,P,1,2,"ng-template",null,1,f)(15,N,1,3,"ng-template",null,2,f),m(17,"docs-tabs",9)),t&2&&(_(7),s("data",n.data())("config",n.config())("loading",n.loading()),_(10),s("content",n.SNIPPETS))},dependencies:[T,S,C],encapsulation:2})}}return e})();export{G as HorizontalTableComponent};
