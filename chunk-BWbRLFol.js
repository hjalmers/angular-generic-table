import{A as MI,G as SI,H as Qp,Ht as lh,Lt as jE,N as Mw,Qt as pL,Y as Ti,an as ru,b as Fv,dn as tg,en as qD,it as YD,j as Me,mt as ah,n as Be,ot as Yo,sn as sD,st as Yp,w as I$1,z as QI}from"./main-SGD45EGE.js";import{a as Lt,c as _n,d as yn,i as Et,l as bn,n as Be$1,o as Vn,r as Dn,s as Xt,t as $t}from"./chunk-GUGGWH4H.js";import{i as xi,n as ai}from"./chunk-EwprI_mx.js";import{t as Xn}from"./chunk-C11RZllr.js";var F=[{name:`auto-pagination.component.ts`,code:`import {
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  afterNextRender,
  inject,
  signal,
  viewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe, formatDate } from '@angular/common';
import { CoreComponent, PaginationComponent as GtPaginationComponent, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-auto-pagination',
  templateUrl: './auto-pagination.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CoreComponent, GtPaginationComponent, ReactiveFormsModule, TabsComponent],
})
export class AutoPaginationComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  // Container height drives how many rows the table shows in \`length: 'auto'\` mode.
  controls = this.fb.group({
    height: [420],
    search: [''],
  });

  loading = signal(true);
  searchValue = signal<string | null>(null);
  containerHeight = signal(420);
  data = signal<any[]>([]);
  tableConfig = signal<TableConfig>({});

  // Wrapper element so drag-resizes can be synced back to the height control.
  resizeBox = viewChild<ElementRef<HTMLElement>>('resizeBox');

  SNIPPETS = SOURCE_TABS;

  constructor() {
    // Keep the height control in sync when the user drags the resize handle.
    afterNextRender(() => {
      const el = this.resizeBox()?.nativeElement;
      if (!el || typeof ResizeObserver === 'undefined') {
        return;
      }
      const observer = new ResizeObserver(() => {
        const height = Math.round(el.getBoundingClientRect().height);
        if (height > 0 && height !== this.containerHeight()) {
          this.containerHeight.set(height);
          this.controls.get('height')?.setValue(height, { emitEvent: false });
        }
      });
      observer.observe(el);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  ngOnInit(): void {
    this.http.get<{ data: any[] }>('https://private-730c61-generictable.apiary-mock.com/data').subscribe((res) => {
      this.data.set(res.data);
      this.loading.set(false);
    });

    this.controls.get('height')?.valueChanges.subscribe((height) => {
      this.containerHeight.set(+(height || 0));
    });
    this.controls.get('search')?.valueChanges.subscribe((value) => {
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
      // 'auto' fits as many rows as the container height allows.
      pagination: { length: 'auto' },
    });
  }
}
`,language:`typescript`},{name:`auto-pagination.component.html`,code:`<form [formGroup]="controls">
  <div class="row gy-3">
    <div class="form-group col-12 col-sm-auto">
      <label for="height_input">Container height (px)</label>
      <input id="height_input" formControlName="height" type="number" class="form-control" min="120" step="20" />
    </div>
    <div class="form-group col-12 col-sm-auto">
      <label for="search_input">Search</label>
      <input id="search_input" formControlName="search" type="text" class="form-control" />
    </div>
  </div>
</form>
<p class="text-body-secondary small mt-3 mb-1">
  The table fills the height-constrained wrapper below \u2014 change the height (or drag the bottom-right handle to
  resize it like a text area) to see the number of rows adapt.
</p>
<div
  #resizeBox
  class="border rounded my-2 p-3 d-flex flex-column"
  style="resize: vertical; overflow: hidden; min-height: 200px"
  [style.height.px]="containerHeight()"
>
  <angular-generic-table
    class="flex-grow-1 overflow-hidden"
    style="min-height: 0"
    [data]="data()"
    [config]="tableConfig()"
    [search]="searchValue()"
    [loading]="loading()"
    #table
  >
    <div class="table-loading gt-skeleton-loader"></div>
    <div class="table-no-data alert alert-info mt-3">Table is empty</div>
  </angular-generic-table>
  <angular-generic-table-pagination [table]="table" class="border-top pt-2 mt-2"></angular-generic-table-pagination>
</div>
<docs-tabs [content]="SNIPPETS"></docs-tabs>
`,language:`xml`}];var I=[`resizeBox`];var $=(()=>{class c{constructor(){this.fb=I$1(Dn),this.http=I$1(Be),this.destroyRef=I$1(Me),this.controls=this.fb.group({height:[420],search:[``]}),this.loading=Yo(!0),this.searchValue=Yo(null),this.containerHeight=Yo(420),this.data=Yo([]),this.tableConfig=Yo({}),this.resizeBox=pL(`resizeBox`),this.SNIPPETS=F,Fv(()=>{let e=this.resizeBox()?.nativeElement;if(!e||typeof ResizeObserver>`u`)return;let n=new ResizeObserver(()=>{let t=Math.round(e.getBoundingClientRect().height);t>0&&t!==this.containerHeight()&&(this.containerHeight.set(t),this.controls.get(`height`)?.setValue(t,{emitEvent:!1}))});n.observe(e),this.destroyRef.onDestroy(()=>n.disconnect())})}ngOnInit(){this.http.get(`https://private-730c61-generictable.apiary-mock.com/data`).subscribe(e=>{this.data.set(e.data),this.loading.set(!1)}),this.controls.get(`height`)?.valueChanges.subscribe(e=>{this.containerHeight.set(+(e||0))}),this.controls.get(`search`)?.valueChanges.subscribe(e=>{this.searchValue.set(e)}),this.tableConfig.set({class:`table text-nowrap`,columns:{first_name:{sortable:!0},last_name:{sortable:!0},gender:{sortable:!0},birthday:{sortable:!0,class:`text-end justify-content-end`,search:(e,n)=>tg(e[n],`longDate`,`en`),transform:{pipe:Mw,args:[`longDate`]}}},pagination:{length:`auto`}})}static{this.ɵfac=function(n){return new(n||c)}}static{this.ɵcmp=jE({type:c,selectors:[[`docs-auto-pagination`]],viewQuery:function(n,t){n&1&&ah(t.resizeBox,I,5),n&2&&SI()},decls:21,vars:9,consts:[[`resizeBox`,``],[`table`,``],[3,`formGroup`],[1,`row`,`gy-3`],[1,`form-group`,`col-12`,`col-sm-auto`],[`for`,`height_input`],[`id`,`height_input`,`formControlName`,`height`,`type`,`number`,`min`,`120`,`step`,`20`,1,`form-control`],[`for`,`search_input`],[`id`,`search_input`,`formControlName`,`search`,`type`,`text`,1,`form-control`],[1,`text-body-secondary`,`small`,`mt-3`,`mb-1`],[1,`border`,`rounded`,`my-2`,`p-3`,`d-flex`,`flex-column`,2,`resize`,`vertical`,`overflow`,`hidden`,`min-height`,`200px`],[1,`flex-grow-1`,`overflow-hidden`,2,`min-height`,`0`,3,`data`,`config`,`search`,`loading`],[1,`table-loading`,`gt-skeleton-loader`],[1,`table-no-data`,`alert`,`alert-info`,`mt-3`],[1,`border-top`,`pt-2`,`mt-2`,3,`table`],[3,`content`]],template:function(n,t){if(n&1&&(Ti(0,`form`,2)(1,`div`,3)(2,`div`,4)(3,`label`,5),QI(4,`Container height (px)`),ru(),Qp(5,`input`,6),qD(),ru(),Ti(6,`div`,4)(7,`label`,7),QI(8,`Search`),ru(),Qp(9,`input`,8),qD(),ru()()(),Ti(10,`p`,9),QI(11,` The table fills the height-constrained wrapper below \u2014 change the height (or drag the bottom-right handle to resize it like a text area) to see the number of rows adapt.
`),ru(),Ti(12,`div`,10,0)(14,`angular-generic-table`,11,1),Qp(16,`div`,12),Ti(17,`div`,13),QI(18,`Table is empty`),ru()(),Qp(19,`angular-generic-table-pagination`,14),ru(),Qp(20,`docs-tabs`,15)),n&2){let G=MI(15);Yp(`formGroup`,t.controls),sD(5),YD(),sD(4),YD(),sD(3),lh(`height`,t.containerHeight(),`px`),sD(2),Yp(`data`,t.data())(`config`,t.tableConfig())(`search`,t.searchValue())(`loading`,t.loading()),sD(5),Yp(`table`,G),sD(),Yp(`content`,t.SNIPPETS)}},dependencies:[ai,xi,bn,Vn,Be$1,$t,_n,yn,Et,Lt,Xt,Xn],encapsulation:2,changeDetection:1})}}return c})();export{$ as AutoPaginationComponent};