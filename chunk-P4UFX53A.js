import{a as C}from"./chunk-MQ66XHXN.js";import{a as N,b as F,c as P,e as D,f as _,h as T,i as E,j as x,k as w,l as V}from"./chunk-PEJZT545.js";import{b as y,d as S}from"./chunk-3UXWR73U.js";import"./chunk-QFSOMC5Z.js";import{a as v}from"./chunk-AXENTG2G.js";import{$a as r,Ia as d,T as u,_a as i,a as p,ab as a,b as c,bb as l,ha as o,nc as b,qc as f,tb as h,xa as m,xb as g}from"./chunk-UFU3N23S.js";var M=[{name:"pagination.component.ts",code:`import { Component, OnInit, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe, formatDate } from '@angular/common';
import { CoreComponent, PaginationComponent as GtPaginationComponent, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-pagination',
  templateUrl: './pagination.component.html',
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
<docs-tabs [content]="SNIPPETS"></docs-tabs>`,language:"xml"}];var J=(()=>{class s{constructor(){this.fb=u(w),this.http=u(C),this.paginationForm=this.fb.group({length:[10],search:[""]}),this.loading=o(!0),this.searchValue=o(null),this.data=o([]),this.tableConfig=o({}),this.SNIPPETS=M}ngOnInit(){this.http.get("https://private-730c61-generictable.apiary-mock.com/data").subscribe(n=>{this.data.set(n.data),this.loading.set(!1)}),this.paginationForm.get("length")?.valueChanges.subscribe(n=>{this.tableConfig.set(c(p({},this.tableConfig()),{pagination:c(p({},this.tableConfig().pagination),{length:+(n||0)})}))}),this.paginationForm.get("search")?.valueChanges.subscribe(n=>{this.searchValue.set(n)}),this.tableConfig.set({class:"table text-nowrap",columns:{first_name:{sortable:!0},last_name:{sortable:!0},gender:{sortable:!0},birthday:{sortable:!0,class:"text-end justify-content-end",search:(n,t)=>b(n[t],"longDate","en"),transform:{pipe:f,args:["longDate"]}}},pagination:{length:this.paginationForm.get("length")?.value||0}})}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275cmp=d({type:s,selectors:[["docs-pagination"]],decls:18,vars:7,consts:[["table",""],[3,"formGroup"],[1,"row","gy-3"],[1,"form-group","col-12","col-sm-auto"],["for","length_input"],["id","length_input","formControlName","length","type","number","min","0",1,"form-control"],["for","search_input"],["id","search_input","formControlName","search","type","text",1,"form-control"],[1,"mx-n3","mx-sm-0","my-3","overflow-auto"],[3,"data","config","search","loading"],[1,"table-loading","gt-skeleton-loader"],[1,"table-no-data","alert","alert-info","mt-3"],[3,"table"],[3,"content"]],template:function(t,e){if(t&1&&(r(0,"form",1)(1,"div",2)(2,"div",3)(3,"label",4),g(4,"Number of rows"),a(),l(5,"input",5),a(),r(6,"div",3)(7,"label",6),g(8,"Search"),a(),l(9,"input",7),a()()(),r(10,"div",8)(11,"angular-generic-table",9,0),l(13,"div",10),r(14,"div",11),g(15,"Table is empty"),a()()(),l(16,"angular-generic-table-pagination",12)(17,"docs-tabs",13)),t&2){let G=h(12);i("formGroup",e.paginationForm),m(11),i("data",e.data())("config",e.tableConfig())("search",e.searchValue())("loading",e.loading()),m(5),i("table",G),m(),i("content",e.SNIPPETS)}},dependencies:[y,S,V,D,N,_,F,P,x,E,T,v],encapsulation:2})}}return s})();export{J as PaginationComponent};
