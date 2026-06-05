import {C as Cn,V as Vn,y as yn,G as Ge,U as Ut,m as mn,v as vn,Z as Zt,$ as $t}from'./chunk-DbKPbrK-.js';import {o as oi,f as fi,p as pi}from'./chunk-ugwy61Id.js';import {V as Vo,q,a as W$1,l as le,I as IE,m as mi,k as kI,Z as Zc,L as Lp,A as AD,f as $p,x as xp,g as cC,D as dI,F as Fp,E as Ev,h as kD,j as Wp,o as cI,p as uI,c as rI,b as HE,X as Xc,$ as $E,r as rh}from'./main-ZDTAVTQ2.js';import {X as Xn}from'./chunk-BSQMMumy.js';var U=[{name:"transpose.component.ts",code:`import { Component, OnInit, signal, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.Eager,
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
`,language:"typescript"}];var Y=["delta"],j=["deltaAbsolute"],z=["deltaIndex"],J=["combined"];function K(e,l){if(e&1&&Lp(0,"gt-delta",23),e&2){let t=l.index,a=l.data;Fp("index",t)("data",a);}}function W(e,l){if(e&1&&Lp(0,"gt-delta",24),e&2){let t=l.index,a=l.data;rI();let n=dI(38);Fp("index",t)("data",a)("deltaTemplate",n);}}function X(e,l){if(e&1&&Lp(0,"gt-delta",25),e&2){let t=l.index,a=l.data;Fp("index",t)("data",a)("baseIndex",0);}}function Z(e,l){if(e&1&&Lp(0,"gt-delta",23),e&2){let t=rI(),a=t.index,n=t.data;Fp("index",a)("data",n);}}function $(e,l){if(e&1&&(kI(0),HE(1,Z,1,2,"gt-delta",23)),e&2){let t=l.index,a=l.row;Xc(" ",a.value," "),Ev(),$E(t>0?1:-1);}}function ee(e,l){if(e&1&&(mi(0,"span"),kI(1),Zc()),e&2){let t=l.delta;Ev(),rh(t.absolute);}}var ue=(()=>{class e{constructor(t){this.fb=t,this.loading=Vo(false),this.searchValue=Vo(null),this.tableConfig=Vo({}),this.data=Vo([]),this.reactiveForm=this.fb.group({length:[10],search:[""]}),this.SNIPPETS=U;}ngOnInit(){this.transpose(),this.load(),this.reactiveForm.get("length")?.valueChanges.subscribe(t=>{this.tableConfig.set(q(W$1({},this.tableConfig()),{pagination:q(W$1({},this.tableConfig().pagination),{length:+(t||0)})}));}),this.reactiveForm.get("search")?.valueChanges.subscribe(t=>{this.searchValue.set(t);});}simulateLoad(){this.loading.set(true),setTimeout(()=>this.loading.set(false),2e3);}empty(){this.data.set([]);}load(){this.data.set([{year:"2010",value:15},{year:"2011",value:30},{year:"2012",value:25},{year:"2013",value:0},{year:"2014",value:40},{year:"2015",value:0},{year:"2016",value:-5},{year:"2018",value:75},{year:"2019",value:100},{year:"2020",value:250},{year:"2021",value:50},{year:"2022",value:60}]);}transpose(){this.tableConfig().columns?this.tableConfig.set({stickyHeaders:{row:true,column:true},rows:{year:{sortable:true,header:false,class:"text-end"},value:{class:"text-end"},delta:{header:"Delta %",templateRef:this.delta,class:"text-end"},deltaIndex:{header:"Since inception %",templateRef:this.deltaIndex,class:"text-end"},deltaAbsolute:{header:"Delta",templateRef:this.deltaAbsolute,class:"text-end"},combined:{header:"Value with change",templateRef:this.combined,class:"text-end text-nowrap"}}}):this.tableConfig.set({stickyHeaders:{row:true,column:true},columns:{year:{sortable:true},value:{class:"text-end"},delta:{header:"Delta %",templateRef:this.delta,class:"text-end"},deltaIndex:{header:"Since inception %",templateRef:this.deltaIndex,class:"text-end"},deltaAbsolute:{header:"Delta",templateRef:this.deltaAbsolute,class:"text-end"},combined:{header:"Value with change",templateRef:this.combined,class:"text-end text-nowrap"}},pagination:{length:this.reactiveForm.get("length")?.value||0}});}static{this.\u0275fac=function(a){return new(a||e)(le(Cn))};}static{this.\u0275cmp=IE({type:e,selectors:[["docs-transpose"]],viewQuery:function(a,n){if(a&1&&Wp(Y,7)(j,7)(z,7)(J,7),a&2){let i;cI(i=uI())&&(n.delta=i.first),cI(i=uI())&&(n.deltaAbsolute=i.first),cI(i=uI())&&(n.deltaIndex=i.first),cI(i=uI())&&(n.combined=i.first);}},decls:40,vars:7,consts:[["table",""],["delta",""],["deltaAbsolute",""],["deltaIndex",""],["combined",""],["deltaTemplate",""],[3,"formGroup"],[1,"row","gy-3","gx-3","align-items-end","mb-3"],[1,"form-group","col-6","col-sm-auto"],["for","length_input"],["id","length_input","formControlName","length","type","number",1,"form-control"],["for","search_input"],["id","search_input","formControlName","search","type","text",1,"form-control"],[1,"col-auto"],[1,"btn","btn-outline-primary","w-100",3,"click"],[1,"col","col-sm-auto"],[1,"btn","btn-outline-danger","w-100",3,"click"],[1,"overflow-auto"],[3,"data","config","loading","search"],[1,"table-loading","gt-skeleton-loader"],[1,"table-no-data","alert","alert-info","mt-3"],[3,"table"],[3,"content"],[3,"index","data"],[3,"index","data","deltaTemplate"],[3,"index","data","baseIndex"]],template:function(a,n){if(a&1&&(mi(0,"form",6)(1,"div",7)(2,"div",8)(3,"label",9),kI(4,"Number of rows"),Zc(),Lp(5,"input",10),AD(),Zc(),mi(6,"div",8)(7,"label",11),kI(8,"Search"),Zc(),Lp(9,"input",12),AD(),Zc(),mi(10,"div",13)(11,"button",14),$p("click",function(){return n.simulateLoad()}),kI(12,"Simulate load"),Zc()(),mi(13,"div",15)(14,"button",16),$p("click",function(){return n.empty()}),kI(15,"Empty"),Zc()(),mi(16,"div",15)(17,"button",14),$p("click",function(){return n.load()}),kI(18,"Reset"),Zc()(),mi(19,"div",15)(20,"button",14),$p("click",function(){return n.transpose()}),kI(21,"Transpose"),Zc()()(),mi(22,"div",17)(23,"angular-generic-table",18,0),Lp(25,"div",19),mi(26,"div",20),kI(27,"Table is empty"),Zc()()(),Lp(28,"angular-generic-table-pagination",21),xp(29,K,1,2,"ng-template",null,1,cC)(31,W,1,3,"ng-template",null,2,cC)(33,X,1,3,"ng-template",null,3,cC)(35,$,2,2,"ng-template",null,4,cC)(37,ee,2,1,"ng-template",null,5,cC),Lp(39,"docs-tabs",22),Zc()),a&2){let i=dI(24);Fp("formGroup",n.reactiveForm),Ev(5),kD(),Ev(4),kD(),Ev(14),Fp("data",n.data())("config",n.tableConfig())("loading",n.loading())("search",n.searchValue()),Ev(5),Fp("table",i),Ev(11),Fp("content",n.SNIPPETS);}},dependencies:[oi,fi,pi,Vn,yn,Ge,Ut,mn,vn,Zt,$t,Xn],encapsulation:2,changeDetection:1});}}return e})();export{ue as TransposeComponent};