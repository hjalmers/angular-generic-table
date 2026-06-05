import {o as oi,p as pi}from'./chunk-ugwy61Id.js';import {V as Vo,I as IE,m as mi,f as $p,k as kI,Z as Zc,L as Lp,x as xp,g as cC,E as Ev,F as Fp,j as Wp,o as cI,p as uI,b as HE,$ as $E}from'./main-ZDTAVTQ2.js';import {X as Xn}from'./chunk-BSQMMumy.js';var S=[{name:"horizontal-table.component.ts",code:`import { Component, OnInit, signal, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.Eager,
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
`,language:"typescript"}];var E=["feelings"],R=["delta"],I=["deltaIndex"];function w(e,a){e&1&&kI(0," \u{1F600} ");}function k(e,a){e&1&&kI(0," \u{1F642} ");}function z(e,a){e&1&&kI(0," \u{1F610} ");}function H(e,a){e&1&&kI(0," \u{1F62D} ");}function O(e,a){if(e&1&&HE(0,w,1,0)(1,k,1,0)(2,z,1,0)(3,H,1,0),e&2){let i,t=a.row,n=a.col;$E((i=t[n.key])==="thrilled"?0:i==="positive"?1:i==="neutral"?2:i==="negative"?3:-1);}}function P(e,a){if(e&1&&Lp(0,"gt-delta",10),e&2){let i=a.data,t=a.index;Fp("index",t)("data",i);}}function N(e,a){if(e&1&&Lp(0,"gt-delta",11),e&2){let i=a.data,t=a.index;Fp("index",t)("baseIndex",0)("data",i);}}var F=(()=>{class e{constructor(){this.loading=Vo(false),this.config=Vo({}),this.data=Vo([]),this.SNIPPETS=S;}ngOnInit(){this.config.set({stickyHeaders:{row:true},mobileLayout:true,rows:{year:{class:"text-end",header:false},value:{class:"text-end"},delta:{header:"Delta %",templateRef:this.delta,class:"text-end"},deltaIndex:{header:"Since inception %",templateRef:this.deltaIndex,class:"text-end"},feeling:{templateRef:this.feelings,class:"text-end"}}}),this.load();}simulateLoad(){this.loading.set(true),setTimeout(()=>this.loading.set(false),2e3);}empty(){this.data.set([]);}load(){this.data.set([{year:"2017",value:50,feeling:"neutral"},{year:"2018",value:75,feeling:"positive"},{year:"2019",value:100,feeling:"thrilled"},{year:"2020",value:250,feeling:"thrilled"},{year:"2021",value:50,feeling:"negative"}]);}static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275cmp=IE({type:e,selectors:[["docs-horizontal-table"]],viewQuery:function(t,n){if(t&1&&Wp(E,7)(R,7)(I,7),t&2){let l;cI(l=uI())&&(n.feelings=l.first),cI(l=uI())&&(n.delta=l.first),cI(l=uI())&&(n.deltaIndex=l.first);}},decls:18,vars:4,consts:[["feelings",""],["delta",""],["deltaIndex",""],[1,"btn","btn-outline-primary",3,"click"],[1,"btn","btn-outline-danger","mx-3",3,"click"],[1,"overflow-auto"],[3,"data","config","loading"],[1,"table-loading","gt-skeleton-loader"],[1,"table-no-data","alert","alert-info","mt-3"],[3,"content"],[3,"index","data"],[3,"index","baseIndex","data"]],template:function(t,n){t&1&&(mi(0,"button",3),$p("click",function(){return n.simulateLoad()}),kI(1,"Simulate load"),Zc(),mi(2,"button",4),$p("click",function(){return n.empty()}),kI(3,"Empty"),Zc(),mi(4,"button",3),$p("click",function(){return n.load()}),kI(5,"Reset"),Zc(),mi(6,"div",5)(7,"angular-generic-table",6),Lp(8,"div",7),mi(9,"div",8),kI(10,"Table is empty"),Zc()()(),xp(11,O,4,1,"ng-template",null,0,cC)(13,P,1,2,"ng-template",null,1,cC)(15,N,1,3,"ng-template",null,2,cC),Lp(17,"docs-tabs",9)),t&2&&(Ev(7),Fp("data",n.data())("config",n.config())("loading",n.loading()),Ev(10),Fp("content",n.SNIPPETS));},dependencies:[oi,pi,Xn],encapsulation:2,changeDetection:1});}}return e})();export{F as HorizontalTableComponent};