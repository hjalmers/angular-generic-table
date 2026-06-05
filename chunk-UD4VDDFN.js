import{a as w}from"./chunk-MQ66XHXN.js";import{a as N,b as E,c as z,e as P,f as B,h as _,i as T,j as H,k as M,l as V}from"./chunk-PEJZT545.js";import{b as D,d as R}from"./chunk-3UXWR73U.js";import"./chunk-QFSOMC5Z.js";import{a as S}from"./chunk-AXENTG2G.js";import{$a as a,Ba as d,Ia as p,T as c,_a as l,ab as o,ba as m,bb as r,cc as C,ha as i,nc as y,qc as x,rb as u,sb as f,tb as b,ub as v,xa as s,xb as h}from"./chunk-UFU3N23S.js";var O=[{name:"auto-pagination.component.ts",code:`import {
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  afterNextRender,
  inject,
  signal,
  viewChild,
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
`,language:"typescript"},{name:"auto-pagination.component.html",code:`<form [formGroup]="controls">
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
`,language:"xml"}];var F=["resizeBox"],X=(()=>{class g{constructor(){this.fb=c(M),this.http=c(w),this.destroyRef=c(m),this.controls=this.fb.group({height:[420],search:[""]}),this.loading=i(!0),this.searchValue=i(null),this.containerHeight=i(420),this.data=i([]),this.tableConfig=i({}),this.resizeBox=C("resizeBox"),this.SNIPPETS=O,d(()=>{let e=this.resizeBox()?.nativeElement;if(!e||typeof ResizeObserver>"u")return;let n=new ResizeObserver(()=>{let t=Math.round(e.getBoundingClientRect().height);t>0&&t!==this.containerHeight()&&(this.containerHeight.set(t),this.controls.get("height")?.setValue(t,{emitEvent:!1}))});n.observe(e),this.destroyRef.onDestroy(()=>n.disconnect())})}ngOnInit(){this.http.get("https://private-730c61-generictable.apiary-mock.com/data").subscribe(e=>{this.data.set(e.data),this.loading.set(!1)}),this.controls.get("height")?.valueChanges.subscribe(e=>{this.containerHeight.set(+(e||0))}),this.controls.get("search")?.valueChanges.subscribe(e=>{this.searchValue.set(e)}),this.tableConfig.set({class:"table text-nowrap",columns:{first_name:{sortable:!0},last_name:{sortable:!0},gender:{sortable:!0},birthday:{sortable:!0,class:"text-end justify-content-end",search:(e,n)=>y(e[n],"longDate","en"),transform:{pipe:x,args:["longDate"]}}},pagination:{length:"auto"}})}static{this.\u0275fac=function(n){return new(n||g)}}static{this.\u0275cmp=p({type:g,selectors:[["docs-auto-pagination"]],viewQuery:function(n,t){n&1&&u(t.resizeBox,F,5),n&2&&f()},decls:21,vars:9,consts:[["resizeBox",""],["table",""],[3,"formGroup"],[1,"row","gy-3"],[1,"form-group","col-12","col-sm-auto"],["for","height_input"],["id","height_input","formControlName","height","type","number","min","120","step","20",1,"form-control"],["for","search_input"],["id","search_input","formControlName","search","type","text",1,"form-control"],[1,"text-body-secondary","small","mt-3","mb-1"],[1,"border","rounded","my-2","p-3","d-flex","flex-column",2,"resize","vertical","overflow","hidden","min-height","200px"],[1,"flex-grow-1","overflow-hidden",2,"min-height","0",3,"data","config","search","loading"],[1,"table-loading","gt-skeleton-loader"],[1,"table-no-data","alert","alert-info","mt-3"],[1,"border-top","pt-2","mt-2",3,"table"],[3,"content"]],template:function(n,t){if(n&1&&(a(0,"form",2)(1,"div",3)(2,"div",4)(3,"label",5),h(4,"Container height (px)"),o(),r(5,"input",6),o(),a(6,"div",4)(7,"label",7),h(8,"Search"),o(),r(9,"input",8),o()()(),a(10,"p",9),h(11,` The table fills the height-constrained wrapper below \u2014 change the height (or drag the bottom-right handle to resize it like a text area) to see the number of rows adapt.
`),o(),a(12,"div",10,0)(14,"angular-generic-table",11,1),r(16,"div",12),a(17,"div",13),h(18,"Table is empty"),o()(),r(19,"angular-generic-table-pagination",14),o(),r(20,"docs-tabs",15)),n&2){let A=b(15);l("formGroup",t.controls),s(12),v("height",t.containerHeight(),"px"),s(2),l("data",t.data())("config",t.tableConfig())("search",t.searchValue())("loading",t.loading()),s(5),l("table",A),s(),l("content",t.SNIPPETS)}},dependencies:[D,R,V,P,N,B,E,z,H,T,_,S],encapsulation:2})}}return g})();export{X as AutoPaginationComponent};
