import {K as I$1,U as Ue,V as Vo,q,a as W,u as uw,M as $h,I as IE,m as mi,k as kI,Z as Zc,L as Lp,A as AD,D as dI,F as Fp,E as Ev,h as kD}from'./main-ZDTAVTQ2.js';import {C as Cn,V as Vn,y as yn,G as Ge,U as Ut,m as mn,v as vn,M as Mt,Z as Zt,$ as $t}from'./chunk-DbKPbrK-.js';import {o as oi,f as fi}from'./chunk-ugwy61Id.js';import {X as Xn}from'./chunk-BSQMMumy.js';var I=[{name:"pagination.component.ts",code:`import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe, formatDate } from '@angular/common';
import { CoreComponent, PaginationComponent as GtPaginationComponent, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CoreComponent, GtPaginationComponent, ReactiveFormsModule, TabsComponent],
})
export class PaginationComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  paginationForm = this.fb.group({
    length: [10],
    search: [''],
  });

  loading = signal(true);
  searchValue = signal<string | null>(null);
  data = signal<any[]>([]);
  tableConfig = signal<TableConfig>({});

  SNIPPETS = SOURCE_TABS;

  ngOnInit(): void {
    this.http.get<{ data: any[] }>('https://private-730c61-generictable.apiary-mock.com/data').subscribe((res) => {
      this.data.set(res.data);
      this.loading.set(false);
    });

    this.paginationForm.get('length')?.valueChanges.subscribe((length) => {
      this.tableConfig.set({
        ...this.tableConfig(),
        pagination: { ...this.tableConfig().pagination, length: +(length || 0) },
      });
    });
    this.paginationForm.get('search')?.valueChanges.subscribe((value) => {
      this.searchValue.set(value);
    });

    this.tableConfig.set({
      class: 'table text-nowrap',
      columns: {
        first_name: { sortable: true },
        last_name: { sortable: true },
        gender: { sortable: true },
        birthday: {
          sortable: true,
          class: 'text-end justify-content-end',
          search: (row, column) => formatDate(row[column], 'longDate', 'en'),
          transform: { pipe: DatePipe, args: ['longDate'] },
        },
      },
      pagination: { length: this.paginationForm.get('length')?.value || 0 },
    });
  }
}
`,language:"typescript"},{name:"pagination.component.html",code:`<form [formGroup]="paginationForm">
  <div class="row gy-3">
    <div class="form-group col-12 col-sm-auto">
      <label for="length_input">Number of rows</label>
      <input id="length_input" formControlName="length" type="number" class="form-control" min="0" />
    </div>
    <div class="form-group col-12 col-sm-auto">
      <label for="search_input">Search</label>
      <input id="search_input" formControlName="search" type="text" class="form-control" />
    </div>
  </div>
</form>
<div class="mx-n3 mx-sm-0 my-3 overflow-auto">
  <angular-generic-table
    [data]="data()"
    [config]="tableConfig()"
    [search]="searchValue()"
    [loading]="loading()"
    #table
  >
    <div class="table-loading gt-skeleton-loader"></div>
    <div class="table-no-data alert alert-info mt-3">Table is empty</div>
  </angular-generic-table>
</div>
<angular-generic-table-pagination [table]="table"></angular-generic-table-pagination>
<docs-tabs [content]="SNIPPETS"></docs-tabs>`,language:"xml"}];var Q=(()=>{class m{constructor(){this.fb=I$1(Cn),this.http=I$1(Ue),this.paginationForm=this.fb.group({length:[10],search:[""]}),this.loading=Vo(true),this.searchValue=Vo(null),this.data=Vo([]),this.tableConfig=Vo({}),this.SNIPPETS=I;}ngOnInit(){this.http.get("https://private-730c61-generictable.apiary-mock.com/data").subscribe(n=>{this.data.set(n.data),this.loading.set(false);}),this.paginationForm.get("length")?.valueChanges.subscribe(n=>{this.tableConfig.set(q(W({},this.tableConfig()),{pagination:q(W({},this.tableConfig().pagination),{length:+(n||0)})}));}),this.paginationForm.get("search")?.valueChanges.subscribe(n=>{this.searchValue.set(n);}),this.tableConfig.set({class:"table text-nowrap",columns:{first_name:{sortable:true},last_name:{sortable:true},gender:{sortable:true},birthday:{sortable:true,class:"text-end justify-content-end",search:(n,t)=>$h(n[t],"longDate","en"),transform:{pipe:uw,args:["longDate"]}}},pagination:{length:this.paginationForm.get("length")?.value||0}});}static{this.\u0275fac=function(t){return new(t||m)};}static{this.\u0275cmp=IE({type:m,selectors:[["docs-pagination"]],decls:18,vars:7,consts:[["table",""],[3,"formGroup"],[1,"row","gy-3"],[1,"form-group","col-12","col-sm-auto"],["for","length_input"],["id","length_input","formControlName","length","type","number","min","0",1,"form-control"],["for","search_input"],["id","search_input","formControlName","search","type","text",1,"form-control"],[1,"mx-n3","mx-sm-0","my-3","overflow-auto"],[3,"data","config","search","loading"],[1,"table-loading","gt-skeleton-loader"],[1,"table-no-data","alert","alert-info","mt-3"],[3,"table"],[3,"content"]],template:function(t,e){if(t&1&&(mi(0,"form",1)(1,"div",2)(2,"div",3)(3,"label",4),kI(4,"Number of rows"),Zc(),Lp(5,"input",5),AD(),Zc(),mi(6,"div",3)(7,"label",6),kI(8,"Search"),Zc(),Lp(9,"input",7),AD(),Zc()()(),mi(10,"div",8)(11,"angular-generic-table",9,0),Lp(13,"div",10),mi(14,"div",11),kI(15,"Table is empty"),Zc()()(),Lp(16,"angular-generic-table-pagination",12)(17,"docs-tabs",13)),t&2){let O=dI(12);Fp("formGroup",e.paginationForm),Ev(5),kD(),Ev(4),kD(),Ev(2),Fp("data",e.data())("config",e.tableConfig())("search",e.searchValue())("loading",e.loading()),Ev(5),Fp("table",O),Ev(),Fp("content",e.SNIPPETS);}},dependencies:[oi,fi,Vn,yn,Ge,Ut,mn,vn,Mt,Zt,$t,Xn],encapsulation:2,changeDetection:1});}}return m})();
export{Q as PaginationComponent};