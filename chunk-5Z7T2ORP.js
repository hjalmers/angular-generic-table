import{a as O}from"./chunk-YRUNHQKL.js";import{a as L,b as E,c as F,e as G,h as w,i as M,k as $,l as q}from"./chunk-2AAM2UDC.js";import{a as T,b as x,d as N}from"./chunk-DY3R4EBK.js";import"./chunk-RI6AK356.js";import{a as I}from"./chunk-MQWK62O4.js";import{$a as l,G as b,Ha as S,I as v,K as C,T as u,Za as o,_a as g,a as r,ab as m,b as c,ha as a,hb as y,ic as _,j as f,lc as D,qb as P,ub as h,xa as s}from"./chunk-L56K3QBL.js";var z=[{name:"server-side-pagination.component.ts",code:`import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {
  CoreComponent,
  GtPageChangeEvent,
  GtPaginationInfo,
  GtSortEvent,
  GtSortOrder,
  PaginationComponent,
  TableConfig,
  sortOrderToParams,
} from '@angular-generic-table/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

interface LazyLoadingData {
  birthday: string;
  email: string;
  favorite_color: string;
  first_name: string;
  gender: string;
  id: number;
  last_name: string;
}

interface LazyLoadingResponse {
  data: Array<LazyLoadingData>;
  paging: GtPaginationInfo;
  sorting: GtSortOrder<LazyLoadingData>;
}

@Component({
  selector: 'docs-lazy-loading',
  templateUrl: './server-side-pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CoreComponent, PaginationComponent, ReactiveFormsModule, TabsComponent],
})
export class ServerSidePaginationComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  paginationForm = this.fb.group({ search: [''] });
  searchValue = signal<string | null>(null);

  loading = signal(true);
  data = signal<Array<LazyLoadingData>>([]);
  pagingInfo = signal<GtPaginationInfo | null>(null);
  sorting = signal<GtSortOrder<LazyLoadingData>>([]);
  tableConfig = signal<TableConfig<LazyLoadingData>>({});

  private requestParams$ = new BehaviorSubject({ page: 1, page_size: 10, sort_by: '+id' });

  SNIPPETS = SOURCE_TABS;

  ngOnInit(): void {
    this.paginationForm.get('search')?.valueChanges.subscribe((value) => {
      this.searchValue.set(value);
    });

    this.requestParams$
      .pipe(
        tap(() => this.loading.set(true)),
        switchMap((params) =>
          this.http.get<LazyLoadingResponse>('https://private-a6da3-generictableapi.apiary-mock.com/data', { params }),
        ),
        shareReplay(1),
      )
      .subscribe((res) => {
        this.data.set(res.data);
        this.pagingInfo.set(res.paging);
        this.sorting.set(res.sorting);
        this.loading.set(false);
      });

    this.tableConfig.set({
      class: 'table text-nowrap',
      columns: {
        id: { sortable: true },
        first_name: {},
        last_name: { sortable: true },
        gender: { sortable: true },
        birthday: {
          class: 'text-end justify-content-end',
          search: (row, column) => formatDate(row[column], 'longDate', 'en'),
          transform: { pipe: DatePipe, args: ['longDate'] },
        },
        favorite_color: { hidden: true },
        email: { hidden: true },
      },
      pagination: { length: 10 },
    });
  }

  onPageChange(event: GtPageChangeEvent): void {
    const current = { ...this.requestParams$.value };
    if (current.page !== event.index + 1) {
      this.requestParams$.next({ ...current, page: event.index + 1 });
    }
  }

  onSortOrderChange(event: GtSortEvent): void {
    const sort_by = sortOrderToParams([...event.currentSortOrder]);
    const current = { ...this.requestParams$.value };
    if (current.sort_by !== sort_by) {
      this.requestParams$.next({ ...current, page: 1, sort_by });
    }
  }
}
`,language:"typescript"},{name:"server-side-pagination.component.html",code:`<form [formGroup]="paginationForm">
  <div class="row gy-3">
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
    [pagingInfo]="pagingInfo()"
    [sortOrder]="sorting()"
    (pageChange)="onPageChange($event)"
    (columnSort)="onSortOrderChange($event)"
    #table
  >
    <div class="table-loading gt-skeleton-loader"></div>
    <div class="table-no-data alert alert-info mt-3">Table is empty</div>
  </angular-generic-table>
</div>
<angular-generic-table-pagination [table]="table"></angular-generic-table-pagination>
<docs-tabs [content]="SNIPPETS"></docs-tabs>`,language:"xml"}];var Z=(()=>{class i{constructor(){this.fb=u($),this.http=u(O),this.paginationForm=this.fb.group({search:[""]}),this.searchValue=a(null),this.loading=a(!0),this.data=a([]),this.pagingInfo=a(null),this.sorting=a([]),this.tableConfig=a({}),this.requestParams$=new f({page:1,page_size:10,sort_by:"+id"}),this.SNIPPETS=z}ngOnInit(){this.paginationForm.get("search")?.valueChanges.subscribe(e=>{this.searchValue.set(e)}),this.requestParams$.pipe(C(()=>this.loading.set(!0)),v(e=>this.http.get("https://private-a6da3-generictableapi.apiary-mock.com/data",{params:e})),b(1)).subscribe(e=>{this.data.set(e.data),this.pagingInfo.set(e.paging),this.sorting.set(e.sorting),this.loading.set(!1)}),this.tableConfig.set({class:"table text-nowrap",columns:{id:{sortable:!0},first_name:{},last_name:{sortable:!0},gender:{sortable:!0},birthday:{class:"text-end justify-content-end",search:(e,t)=>_(e[t],"longDate","en"),transform:{pipe:D,args:["longDate"]}},favorite_color:{hidden:!0},email:{hidden:!0}},pagination:{length:10}})}onPageChange(e){let t=r({},this.requestParams$.value);t.page!==e.index+1&&this.requestParams$.next(c(r({},t),{page:e.index+1}))}onSortOrderChange(e){let t=T([...e.currentSortOrder]),n=r({},this.requestParams$.value);n.sort_by!==t&&this.requestParams$.next(c(r({},n),{page:1,sort_by:t}))}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=S({type:i,selectors:[["docs-lazy-loading"]],decls:14,vars:9,consts:[["table",""],[3,"formGroup"],[1,"row","gy-3"],[1,"form-group","col-12","col-sm-auto"],["for","search_input"],["id","search_input","formControlName","search","type","text",1,"form-control"],[1,"mx-n3","mx-sm-0","my-3","overflow-auto"],[3,"pageChange","columnSort","data","config","search","loading","pagingInfo","sortOrder"],[1,"table-loading","gt-skeleton-loader"],[1,"table-no-data","alert","alert-info","mt-3"],[3,"table"],[3,"content"]],template:function(t,n){if(t&1&&(g(0,"form",1)(1,"div",2)(2,"div",3)(3,"label",4),h(4,"Search"),l(),m(5,"input",5),l()()(),g(6,"div",6)(7,"angular-generic-table",7,0),y("pageChange",function(d){return n.onPageChange(d)})("columnSort",function(d){return n.onSortOrderChange(d)}),m(9,"div",8),g(10,"div",9),h(11,"Table is empty"),l()()(),m(12,"angular-generic-table-pagination",10)(13,"docs-tabs",11)),t&2){let p=P(8);o("formGroup",n.paginationForm),s(7),o("data",n.data())("config",n.tableConfig())("search",n.searchValue())("loading",n.loading())("pagingInfo",n.pagingInfo())("sortOrder",n.sorting()),s(5),o("table",p),s(),o("content",n.SNIPPETS)}},dependencies:[x,N,q,G,L,E,F,M,w,I],encapsulation:2,changeDetection:0})}}return i})();export{Z as ServerSidePaginationComponent};
