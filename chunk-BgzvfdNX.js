import{$t as q,A as MI,H as Qp,Lt as jE,N as Mw,Y as Ti,an as ru,dn as tg,en as qD,it as YD,k as Lg,n as Be,ot as Yo,qt as nh,sn as sD,st as Yp,tn as qn,tt as W,w as I,y as Fg,z as QI,zt as kg}from"./main-SGD45EGE.js";import{a as Lt,c as _n,d as yn,l as bn,n as Be$1,o as Vn,r as Dn,s as Xt}from"./chunk-GUGGWH4H.js";import{i as xi,n as ai,t as Vn$1}from"./chunk-EwprI_mx.js";import{t as Xn}from"./chunk-C11RZllr.js";var j=[{name:`server-side-pagination.component.ts`,code:`import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
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
`,language:`typescript`},{name:`server-side-pagination.component.html`,code:`<form [formGroup]="paginationForm">
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
<docs-tabs [content]="SNIPPETS"></docs-tabs>`,language:`xml`}];var ne=(()=>{class s{constructor(){this.fb=I(Dn),this.http=I(Be),this.paginationForm=this.fb.group({search:[``]}),this.searchValue=Yo(null),this.loading=Yo(!0),this.data=Yo([]),this.pagingInfo=Yo(null),this.sorting=Yo([]),this.tableConfig=Yo({}),this.requestParams$=new qn({page:1,page_size:10,sort_by:`+id`}),this.SNIPPETS=j}ngOnInit(){this.paginationForm.get(`search`)?.valueChanges.subscribe(e=>{this.searchValue.set(e)}),this.requestParams$.pipe(Lg(()=>this.loading.set(!0)),Fg(e=>this.http.get(`https://private-a6da3-generictableapi.apiary-mock.com/data`,{params:e})),kg(1)).subscribe(e=>{this.data.set(e.data),this.pagingInfo.set(e.paging),this.sorting.set(e.sorting),this.loading.set(!1)}),this.tableConfig.set({class:`table text-nowrap`,columns:{id:{sortable:!0},first_name:{},last_name:{sortable:!0},gender:{sortable:!0},birthday:{class:`text-end justify-content-end`,search:(e,t)=>tg(e[t],`longDate`,`en`),transform:{pipe:Mw,args:[`longDate`]}},favorite_color:{hidden:!0},email:{hidden:!0}},pagination:{length:10}})}onPageChange(e){let t=W({},this.requestParams$.value);t.page!==e.index+1&&this.requestParams$.next(q(W({},t),{page:e.index+1}))}onSortOrderChange(e){let t=Vn$1([...e.currentSortOrder]),n=W({},this.requestParams$.value);n.sort_by!==t&&this.requestParams$.next(q(W({},n),{page:1,sort_by:t}))}static{this.ɵfac=function(t){return new(t||s)}}static{this.ɵcmp=jE({type:s,selectors:[[`docs-lazy-loading`]],decls:14,vars:9,consts:[[`table`,``],[3,`formGroup`],[1,`row`,`gy-3`],[1,`form-group`,`col-12`,`col-sm-auto`],[`for`,`search_input`],[`id`,`search_input`,`formControlName`,`search`,`type`,`text`,1,`form-control`],[1,`mx-n3`,`mx-sm-0`,`my-3`,`overflow-auto`],[3,`pageChange`,`columnSort`,`data`,`config`,`search`,`loading`,`pagingInfo`,`sortOrder`],[1,`table-loading`,`gt-skeleton-loader`],[1,`table-no-data`,`alert`,`alert-info`,`mt-3`],[3,`table`],[3,`content`]],template:function(t,n){if(t&1&&(Ti(0,`form`,1)(1,`div`,2)(2,`div`,3)(3,`label`,4),QI(4,`Search`),ru(),Qp(5,`input`,5),qD(),ru()()(),Ti(6,`div`,6)(7,`angular-generic-table`,7,0),nh(`pageChange`,function(d){return n.onPageChange(d)})(`columnSort`,function(d){return n.onSortOrderChange(d)}),Qp(9,`div`,8),Ti(10,`div`,9),QI(11,`Table is empty`),ru()()(),Qp(12,`angular-generic-table-pagination`,10)(13,`docs-tabs`,11)),t&2){let p=MI(8);Yp(`formGroup`,n.paginationForm),sD(5),YD(),sD(2),Yp(`data`,n.data())(`config`,n.tableConfig())(`search`,n.searchValue())(`loading`,n.loading())(`pagingInfo`,n.pagingInfo())(`sortOrder`,n.sorting()),sD(5),Yp(`table`,p),sD(),Yp(`content`,n.SNIPPETS)}},dependencies:[ai,xi,bn,Vn,Be$1,_n,yn,Lt,Xt,Xn],encapsulation:2})}}return s})();export{ne as ServerSidePaginationComponent};