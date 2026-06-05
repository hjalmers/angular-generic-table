import{a as V,b as F,c as P,e as M,f as G,h as O,i as B,k as Q,l as q}from"./chunk-PEJZT545.js";import{b as A,c as k,d as N}from"./chunk-3UXWR73U.js";import"./chunk-QFSOMC5Z.js";import{a as D}from"./chunk-AXENTG2G.js";import{$a as r,Ea as _,Ia as C,Na as T,Ua as w,Va as R,Wb as u,_a as m,a as h,ab as o,b as v,bb as s,ha as p,ib as g,kb as x,ob as S,pb as b,qb as f,tb as y,xa as c,xb as d,yb as I,zb as E}from"./chunk-UFU3N23S.js";var H=[{name:"transpose.component.ts",code:`import { Component, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { CoreComponent, GtDeltaComponent, PaginationComponent, TableConfig } from '@angular-generic-table/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

interface RawData {
  year: string;
  value: number;
}
interface YearData extends RawData {
  delta: number;
  deltaIndex: number;
  combined: number;
  deltaAbsolute: number;
}

@Component({
  selector: 'docs-transpose',
  template: \`
    <form [formGroup]="reactiveForm">
      <div class="row gy-3 gx-3 align-items-end mb-3">
        <div class="form-group col-6 col-sm-auto">
          <label for="length_input">Number of rows</label>
          <input id="length_input" formControlName="length" type="number" class="form-control" />
        </div>
        <div class="form-group col-6 col-sm-auto">
          <label for="search_input">Search</label>
          <input id="search_input" formControlName="search" type="text" class="form-control" />
        </div>
        <div class="col-auto">
          <button class="btn btn-outline-primary w-100" (click)="simulateLoad()">Simulate load</button>
        </div>
        <div class="col col-sm-auto">
          <button class="btn btn-outline-danger w-100" (click)="empty()">Empty</button>
        </div>
        <div class="col col-sm-auto">
          <button class="btn btn-outline-primary w-100" (click)="load()">Reset</button>
        </div>
        <div class="col col-sm-auto">
          <button class="btn btn-outline-primary w-100" (click)="transpose()">Transpose</button>
        </div>
      </div>
      <div class="overflow-auto">
        <angular-generic-table
          #table
          [data]="data()"
          [config]="tableConfig()"
          [loading]="loading()"
          [search]="searchValue()"
        >
          <div class="table-loading gt-skeleton-loader"></div>
          <div class="table-no-data alert alert-info mt-3">Table is empty</div>
        </angular-generic-table>
      </div>
      <angular-generic-table-pagination [table]="table"></angular-generic-table-pagination>
      <ng-template #delta let-index="index" let-data="data">
        <gt-delta [index]="index" [data]="data"></gt-delta>
      </ng-template>
      <ng-template #deltaAbsolute let-index="index" let-data="data">
        <gt-delta [index]="index" [data]="data" [deltaTemplate]="deltaTemplate"></gt-delta>
      </ng-template>
      <ng-template #deltaIndex let-index="index" let-data="data">
        <gt-delta [index]="index" [data]="data" [baseIndex]="0"></gt-delta>
      </ng-template>
      <ng-template #combined let-index="index" let-data="data" let-row="row" let-col="col">
        {{ row.value }}
        @if (index > 0) {
          <gt-delta [index]="index" [data]="data"></gt-delta>
        }
      </ng-template>
      <ng-template #deltaTemplate let-delta="delta">
        <span>{{ delta.absolute }}</span>
      </ng-template>
      <docs-tabs [content]="SNIPPETS"></docs-tabs>
    </form>
  \`,
  imports: [CoreComponent, PaginationComponent, GtDeltaComponent, ReactiveFormsModule, TabsComponent],
})
export class TransposeComponent implements OnInit {
  @ViewChild('delta', { static: true }) delta: TemplateRef<any> | undefined;
  @ViewChild('deltaAbsolute', { static: true }) deltaAbsolute: TemplateRef<any> | undefined;
  @ViewChild('deltaIndex', { static: true }) deltaIndex: TemplateRef<any> | undefined;
  @ViewChild('combined', { static: true }) combined: TemplateRef<any> | undefined;

  loading = signal(false);
  searchValue = signal<string | null>(null);
  tableConfig = signal<TableConfig<YearData>>({});
  data = signal<Array<RawData>>([]);

  reactiveForm = this.fb.group({
    length: [10],
    search: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transpose();
    this.load();
    this.reactiveForm.get('length')?.valueChanges.subscribe((length) => {
      this.tableConfig.set({
        ...this.tableConfig(),
        pagination: { ...this.tableConfig().pagination, length: +(length || 0) },
      });
    });
    this.reactiveForm.get('search')?.valueChanges.subscribe((value) => {
      this.searchValue.set(value);
    });
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
      { year: '2010', value: 15 },
      { year: '2011', value: 30 },
      { year: '2012', value: 25 },
      { year: '2013', value: 0 },
      { year: '2014', value: 40 },
      { year: '2015', value: 0 },
      { year: '2016', value: -5 },
      { year: '2018', value: 75 },
      { year: '2019', value: 100 },
      { year: '2020', value: 250 },
      { year: '2021', value: 50 },
      { year: '2022', value: 60 },
    ]);
  }

  transpose(): void {
    if (this.tableConfig().columns) {
      this.tableConfig.set({
        stickyHeaders: { row: true, column: true },
        rows: {
          year: { sortable: true, header: false, class: 'text-end' },
          value: { class: 'text-end' },
          delta: { header: 'Delta %', templateRef: this.delta, class: 'text-end' },
          deltaIndex: { header: 'Since inception %', templateRef: this.deltaIndex, class: 'text-end' },
          deltaAbsolute: { header: 'Delta', templateRef: this.deltaAbsolute, class: 'text-end' },
          combined: { header: 'Value with change', templateRef: this.combined, class: 'text-end text-nowrap' },
        },
      });
    } else {
      this.tableConfig.set({
        stickyHeaders: { row: true, column: true },
        columns: {
          year: { sortable: true },
          value: { class: 'text-end' },
          delta: { header: 'Delta %', templateRef: this.delta, class: 'text-end' },
          deltaIndex: { header: 'Since inception %', templateRef: this.deltaIndex, class: 'text-end' },
          deltaAbsolute: { header: 'Delta', templateRef: this.deltaAbsolute, class: 'text-end' },
          combined: { header: 'Value with change', templateRef: this.combined, class: 'text-end text-nowrap' },
        },
        pagination: { length: this.reactiveForm.get('length')?.value || 0 },
      });
    }
  }

  SNIPPETS = SOURCE_TABS;
}
`,language:"typescript"}];var L=["delta"],U=["deltaAbsolute"],Y=["deltaIndex"],j=["combined"];function z(e,l){if(e&1&&s(0,"gt-delta",23),e&2){let t=l.index,a=l.data;m("index",t)("data",a)}}function J(e,l){if(e&1&&s(0,"gt-delta",24),e&2){let t=l.index,a=l.data;x();let n=y(38);m("index",t)("data",a)("deltaTemplate",n)}}function K(e,l){if(e&1&&s(0,"gt-delta",25),e&2){let t=l.index,a=l.data;m("index",t)("data",a)("baseIndex",0)}}function W(e,l){if(e&1&&s(0,"gt-delta",23),e&2){let t=x(),a=t.index,n=t.data;m("index",a)("data",n)}}function X(e,l){if(e&1&&(d(0),w(1,W,1,2,"gt-delta",23)),e&2){let t=l.index,a=l.row;E(" ",a.value," "),c(),R(t>0?1:-1)}}function Z(e,l){if(e&1&&(r(0,"span"),d(1),o()),e&2){let t=l.delta;c(),I(t.absolute)}}var de=(()=>{class e{constructor(t){this.fb=t,this.loading=p(!1),this.searchValue=p(null),this.tableConfig=p({}),this.data=p([]),this.reactiveForm=this.fb.group({length:[10],search:[""]}),this.SNIPPETS=H}ngOnInit(){this.transpose(),this.load(),this.reactiveForm.get("length")?.valueChanges.subscribe(t=>{this.tableConfig.set(v(h({},this.tableConfig()),{pagination:v(h({},this.tableConfig().pagination),{length:+(t||0)})}))}),this.reactiveForm.get("search")?.valueChanges.subscribe(t=>{this.searchValue.set(t)})}simulateLoad(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),2e3)}empty(){this.data.set([])}load(){this.data.set([{year:"2010",value:15},{year:"2011",value:30},{year:"2012",value:25},{year:"2013",value:0},{year:"2014",value:40},{year:"2015",value:0},{year:"2016",value:-5},{year:"2018",value:75},{year:"2019",value:100},{year:"2020",value:250},{year:"2021",value:50},{year:"2022",value:60}])}transpose(){this.tableConfig().columns?this.tableConfig.set({stickyHeaders:{row:!0,column:!0},rows:{year:{sortable:!0,header:!1,class:"text-end"},value:{class:"text-end"},delta:{header:"Delta %",templateRef:this.delta,class:"text-end"},deltaIndex:{header:"Since inception %",templateRef:this.deltaIndex,class:"text-end"},deltaAbsolute:{header:"Delta",templateRef:this.deltaAbsolute,class:"text-end"},combined:{header:"Value with change",templateRef:this.combined,class:"text-end text-nowrap"}}}):this.tableConfig.set({stickyHeaders:{row:!0,column:!0},columns:{year:{sortable:!0},value:{class:"text-end"},delta:{header:"Delta %",templateRef:this.delta,class:"text-end"},deltaIndex:{header:"Since inception %",templateRef:this.deltaIndex,class:"text-end"},deltaAbsolute:{header:"Delta",templateRef:this.deltaAbsolute,class:"text-end"},combined:{header:"Value with change",templateRef:this.combined,class:"text-end text-nowrap"}},pagination:{length:this.reactiveForm.get("length")?.value||0}})}static{this.\u0275fac=function(a){return new(a||e)(_(Q))}}static{this.\u0275cmp=C({type:e,selectors:[["docs-transpose"]],viewQuery:function(a,n){if(a&1&&S(L,7)(U,7)(Y,7)(j,7),a&2){let i;b(i=f())&&(n.delta=i.first),b(i=f())&&(n.deltaAbsolute=i.first),b(i=f())&&(n.deltaIndex=i.first),b(i=f())&&(n.combined=i.first)}},decls:40,vars:7,consts:[["table",""],["delta",""],["deltaAbsolute",""],["deltaIndex",""],["combined",""],["deltaTemplate",""],[3,"formGroup"],[1,"row","gy-3","gx-3","align-items-end","mb-3"],[1,"form-group","col-6","col-sm-auto"],["for","length_input"],["id","length_input","formControlName","length","type","number",1,"form-control"],["for","search_input"],["id","search_input","formControlName","search","type","text",1,"form-control"],[1,"col-auto"],[1,"btn","btn-outline-primary","w-100",3,"click"],[1,"col","col-sm-auto"],[1,"btn","btn-outline-danger","w-100",3,"click"],[1,"overflow-auto"],[3,"data","config","loading","search"],[1,"table-loading","gt-skeleton-loader"],[1,"table-no-data","alert","alert-info","mt-3"],[3,"table"],[3,"content"],[3,"index","data"],[3,"index","data","deltaTemplate"],[3,"index","data","baseIndex"]],template:function(a,n){if(a&1&&(r(0,"form",6)(1,"div",7)(2,"div",8)(3,"label",9),d(4,"Number of rows"),o(),s(5,"input",10),o(),r(6,"div",8)(7,"label",11),d(8,"Search"),o(),s(9,"input",12),o(),r(10,"div",13)(11,"button",14),g("click",function(){return n.simulateLoad()}),d(12,"Simulate load"),o()(),r(13,"div",15)(14,"button",16),g("click",function(){return n.empty()}),d(15,"Empty"),o()(),r(16,"div",15)(17,"button",14),g("click",function(){return n.load()}),d(18,"Reset"),o()(),r(19,"div",15)(20,"button",14),g("click",function(){return n.transpose()}),d(21,"Transpose"),o()()(),r(22,"div",17)(23,"angular-generic-table",18,0),s(25,"div",19),r(26,"div",20),d(27,"Table is empty"),o()()(),s(28,"angular-generic-table-pagination",21),T(29,z,1,2,"ng-template",null,1,u)(31,J,1,3,"ng-template",null,2,u)(33,K,1,3,"ng-template",null,3,u)(35,X,2,2,"ng-template",null,4,u)(37,Z,2,1,"ng-template",null,5,u),s(39,"docs-tabs",22),o()),a&2){let i=y(24);m("formGroup",n.reactiveForm),c(23),m("data",n.data())("config",n.tableConfig())("loading",n.loading())("search",n.searchValue()),c(5),m("table",i),c(11),m("content",n.SNIPPETS)}},dependencies:[A,N,k,q,M,V,G,F,P,B,O,D],encapsulation:2})}}return e})();export{de as TransposeComponent};
