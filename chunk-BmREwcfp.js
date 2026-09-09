import{$t as q,A as MI,H as Qp,Lt as jE,N as Mw,Y as Ti,an as ru,dn as tg,en as qD,it as YD,n as Be,ot as Yo,sn as sD,st as Yp,tt as W,w as I$1,z as QI}from"./main-SGD45EGE.js";import{a as Lt,c as _n,d as yn,i as Et,l as bn,n as Be$1,o as Vn,r as Dn,s as Xt,t as $t}from"./chunk-GUGGWH4H.js";import{i as xi,n as ai}from"./chunk-EwprI_mx.js";import{t as Xn}from"./chunk-C11RZllr.js";var I=[{name:`pagination.component.ts`,code:`import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
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
`,language:`typescript`},{name:`pagination.component.html`,code:`<form [formGroup]="paginationForm">
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
<docs-tabs [content]="SNIPPETS"></docs-tabs>`,language:`xml`}];var Q=(()=>{class m{constructor(){this.fb=I$1(Dn),this.http=I$1(Be),this.paginationForm=this.fb.group({length:[10],search:[``]}),this.loading=Yo(!0),this.searchValue=Yo(null),this.data=Yo([]),this.tableConfig=Yo({}),this.SNIPPETS=I}ngOnInit(){this.http.get(`https://private-730c61-generictable.apiary-mock.com/data`).subscribe(n=>{this.data.set(n.data),this.loading.set(!1)}),this.paginationForm.get(`length`)?.valueChanges.subscribe(n=>{this.tableConfig.set(q(W({},this.tableConfig()),{pagination:q(W({},this.tableConfig().pagination),{length:+(n||0)})}))}),this.paginationForm.get(`search`)?.valueChanges.subscribe(n=>{this.searchValue.set(n)}),this.tableConfig.set({class:`table text-nowrap`,columns:{first_name:{sortable:!0},last_name:{sortable:!0},gender:{sortable:!0},birthday:{sortable:!0,class:`text-end justify-content-end`,search:(n,t)=>tg(n[t],`longDate`,`en`),transform:{pipe:Mw,args:[`longDate`]}}},pagination:{length:this.paginationForm.get(`length`)?.value||0}})}static{this.ɵfac=function(t){return new(t||m)}}static{this.ɵcmp=jE({type:m,selectors:[[`docs-pagination`]],decls:18,vars:7,consts:[[`table`,``],[3,`formGroup`],[1,`row`,`gy-3`],[1,`form-group`,`col-12`,`col-sm-auto`],[`for`,`length_input`],[`id`,`length_input`,`formControlName`,`length`,`type`,`number`,`min`,`0`,1,`form-control`],[`for`,`search_input`],[`id`,`search_input`,`formControlName`,`search`,`type`,`text`,1,`form-control`],[1,`mx-n3`,`mx-sm-0`,`my-3`,`overflow-auto`],[3,`data`,`config`,`search`,`loading`],[1,`table-loading`,`gt-skeleton-loader`],[1,`table-no-data`,`alert`,`alert-info`,`mt-3`],[3,`table`],[3,`content`]],template:function(t,e){if(t&1&&(Ti(0,`form`,1)(1,`div`,2)(2,`div`,3)(3,`label`,4),QI(4,`Number of rows`),ru(),Qp(5,`input`,5),qD(),ru(),Ti(6,`div`,3)(7,`label`,6),QI(8,`Search`),ru(),Qp(9,`input`,7),qD(),ru()()(),Ti(10,`div`,8)(11,`angular-generic-table`,9,0),Qp(13,`div`,10),Ti(14,`div`,11),QI(15,`Table is empty`),ru()()(),Qp(16,`angular-generic-table-pagination`,12)(17,`docs-tabs`,13)),t&2){let O=MI(12);Yp(`formGroup`,e.paginationForm),sD(5),YD(),sD(4),YD(),sD(2),Yp(`data`,e.data())(`config`,e.tableConfig())(`search`,e.searchValue())(`loading`,e.loading()),sD(5),Yp(`table`,O),sD(),Yp(`content`,e.SNIPPETS)}},dependencies:[ai,xi,bn,Vn,Be$1,$t,_n,yn,Et,Lt,Xt,Xn],encapsulation:2,changeDetection:1})}}return m})();export{Q as PaginationComponent};