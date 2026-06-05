import {K as I,U as Ue,V as Vo,q,a as W,I as IE,a5 as fw,m as mi,f as $p,k as kI,Z as Zc,L as Lp,A as AD,n as nC,D as dI,E as Ev,a6 as Kp,X as Xc,F as Fp,h as kD,B as oC}from'./main-ZDTAVTQ2.js';import {T,V as Vn,G as Ge,U as Ut,m as mn,W as Wt}from'./chunk-DbKPbrK-.js';import {o as oi,f as fi}from'./chunk-ugwy61Id.js';import {X as Xn}from'./chunk-BSQMMumy.js';var M=[{name:"row-select.component.ts",code:`import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { KeyValuePipe } from '@angular/common';
import {
  CoreComponent,
  GtRowSelectEvent,
  GtRowClickEvent,
  GtRowActiveEvent,
  PaginationComponent,
  TableConfig,
  TableRow,
} from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

interface RowData {
  birthday: string;
  email: string;
  favorite_color: string;
  first_name: string;
  gender: 'Female' | 'Male';
  id: number;
  last_name: string;
}

@Component({
  templateUrl: './row-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    \`
      :host ::ng-deep .gt-active {
        --bs-table-bg-state: var(--bs-highlight-bg);
      }
      :host ::ng-deep .table > tbody > tr {
        cursor: pointer;
      }
    \`,
  ],
  imports: [CoreComponent, PaginationComponent, ReactiveFormsModule, KeyValuePipe, TabsComponent],
})
export class RowSelectComponent implements OnInit {
  private http = inject(HttpClient);

  activateOnRowHover = true;
  activateOnNavigation = true;
  loading = signal(true);
  activeRow: RowData | null = null;
  customClassNames = { selectedRow: 'table-active' };
  lengthCtrl = new FormControl(15);
  data = signal<TableRow[]>([]);
  config = signal<TableConfig>({});
  selection: { [key: string]: boolean } = {};

  SNIPPETS = SOURCE_TABS;

  ngOnInit(): void {
    this.http.get<{ data: TableRow[] }>('https://private-730c61-generictable.apiary-mock.com/data').subscribe((res) => {
      this.data.set(res.data);
      this.loading.set(false);
    });

    this.lengthCtrl.valueChanges.subscribe((length) => {
      const len = length ? (length < 0 ? 0 : length) : 0;
      this.config.set({
        ...this.config(),
        pagination: { length: len },
      });
    });

    this.config.set({
      columns: {
        id: { sortable: true },
        first_name: { sortable: true },
        last_name: { sortable: true },
        gender: { sortable: true },
        email: { sortable: true },
      },
      pagination: { length: this.lengthCtrl.value || 0 },
      rowClick: true,
      activateRowOnHover: this.activateOnRowHover,
      activateRowOnKeyboardNavigation: this.activateOnNavigation,
    });
  }

  toggleRowHover(): void {
    this.activateOnRowHover = !this.activateOnRowHover;
    this.config.set({ ...this.config(), activateRowOnHover: this.activateOnRowHover });
  }

  toggleRowNavigation(): void {
    this.activateOnNavigation = !this.activateOnNavigation;
    this.config.set({ ...this.config(), activateRowOnKeyboardNavigation: this.activateOnNavigation });
  }

  setActiveRow(event: GtRowActiveEvent): void {
    if (event.event && event.event.type === 'keydown') {
      event.event.preventDefault();
    }
    this.activeRow = event.row as RowData | null;
  }

  isSelected(row: RowData, selection: typeof RowSelectComponent.prototype.selection): boolean {
    return !!selection[row.id];
  }

  selectRow(event: GtRowClickEvent | GtRowSelectEvent): void {
    const selection = { ...this.selection };
    const row = event.row;
    if (!row) return;
    if (!selection[row.id]) {
      selection[row.id] = true;
    } else {
      delete selection[row.id];
    }
    this.selection = selection;
  }

  get isAllSelected(): boolean {
    return Object.keys(this.selection).length > 0;
  }

  toggleAll(): void {
    if (this.isAllSelected) {
      this.selection = {};
      return;
    }
    const selection = { ...this.selection };
    this.data().forEach((row, index) => {
      selection[index] = true;
    });
    this.selection = selection;
  }
}
`,language:"typescript"},{name:"row-select.component.html",code:`<div class="row gy-3 gy-sm-0 gx-2 align-items-center">
  <div class="col-12 col-sm-auto">
    <button class="btn w-100" (click)="toggleRowHover()"
      [class.btn-outline-primary]="!activateOnRowHover"
      [class.btn-primary]="activateOnRowHover">
      {{ activateOnRowHover ? "Disable on hover" : "Enable on hover" }}
    </button>
  </div>
  <div class="col-12 col-sm-auto">
    <button class="btn w-100" (click)="toggleRowNavigation()"
      [class.btn-outline-primary]="!activateOnNavigation"
      [class.btn-primary]="activateOnNavigation">
      {{ activateOnNavigation ? "Disable on keyboard navigation" : "Enable on keyboard navigation" }}
    </button>
  </div>
  <div class="col-12 col-sm-auto">
    <button class="btn w-100" [class.btn-outline-primary]="!isAllSelected"
      [class.btn-primary]="isAllSelected" (click)="toggleAll()">
      {{ isAllSelected ? "Deselect all" : "Select all" }}
    </button>
  </div>
</div>
<div class="row gy-3 gy-sm-0 gx-2 align-items-center mt-3">
  <div class="form-group col-12 col-sm-auto d-flex align-items-center">
    <label for="length_input" class="text-nowrap me-2">Number of rows:</label>
    <input id="length_input" [formControl]="lengthCtrl" type="number" class="form-control" style="max-width: 60px" />
  </div>
  <div class="col-12 col-sm-auto">
    Selected rows: {{ (selection | keyvalue).length }}
  </div>
  <div class="col-12 col-sm-auto">
    Active row id: {{ activeRow?.id ?? "none" }}
  </div>
</div>
<div class="mx-n3 mx-sm-0 my-3 overflow-auto">
  <angular-generic-table
    [data]="data()"
    [config]="config()"
    [loading]="loading()"
    [isRowSelectedFn]="isSelected"
    [customClasses]="customClassNames"
    (rowClick)="selectRow($event)"
    (rowActive)="setActiveRow($event)"
    (rowSelect)="selectRow($event)"
    [selection]="selection"
    #tableRef
  >
    <div class="table-loading gt-skeleton-loader"></div>
    <div class="table-no-data alert alert-info mt-3">Table is empty</div>
  </angular-generic-table>
  <angular-generic-table-pagination [table]="tableRef"></angular-generic-table-pagination>
</div>
<docs-tabs [content]="SNIPPETS"></docs-tabs>`,language:"xml"}];var Q=(()=>{class p{constructor(){this.http=I(Ue),this.activateOnRowHover=true,this.activateOnNavigation=true,this.loading=Vo(true),this.activeRow=null,this.customClassNames={selectedRow:"table-active"},this.lengthCtrl=new T(15),this.data=Vo([]),this.config=Vo({}),this.selection={},this.SNIPPETS=M;}ngOnInit(){this.http.get("https://private-730c61-generictable.apiary-mock.com/data").subscribe(t=>{this.data.set(t.data),this.loading.set(false);}),this.lengthCtrl.valueChanges.subscribe(t=>{let n=t?t<0?0:t:0;this.config.set(q(W({},this.config()),{pagination:{length:n}}));}),this.config.set({columns:{id:{sortable:true},first_name:{sortable:true},last_name:{sortable:true},gender:{sortable:true},email:{sortable:true}},pagination:{length:this.lengthCtrl.value||0},rowClick:true,activateRowOnHover:this.activateOnRowHover,activateRowOnKeyboardNavigation:this.activateOnNavigation});}toggleRowHover(){this.activateOnRowHover=!this.activateOnRowHover,this.config.set(q(W({},this.config()),{activateRowOnHover:this.activateOnRowHover}));}toggleRowNavigation(){this.activateOnNavigation=!this.activateOnNavigation,this.config.set(q(W({},this.config()),{activateRowOnKeyboardNavigation:this.activateOnNavigation}));}setActiveRow(t){t.event&&t.event.type==="keydown"&&t.event.preventDefault(),this.activeRow=t.row;}isSelected(t,n){return !!n[t.id]}selectRow(t){let n=W({},this.selection),e=t.row;e&&(n[e.id]?delete n[e.id]:n[e.id]=true,this.selection=n);}get isAllSelected(){return Object.keys(this.selection).length>0}toggleAll(){if(this.isAllSelected){this.selection={};return}let t=W({},this.selection);this.data().forEach((n,e)=>{t[e]=true;}),this.selection=t;}static{this.\u0275fac=function(n){return new(n||p)};}static{this.\u0275cmp=IE({type:p,selectors:[["ng-component"]],decls:28,vars:28,consts:[["tableRef",""],[1,"row","gy-3","gy-sm-0","gx-2","align-items-center"],[1,"col-12","col-sm-auto"],[1,"btn","w-100",3,"click"],[1,"row","gy-3","gy-sm-0","gx-2","align-items-center","mt-3"],[1,"form-group","col-12","col-sm-auto","d-flex","align-items-center"],["for","length_input",1,"text-nowrap","me-2"],["id","length_input","type","number",1,"form-control",2,"max-width","60px",3,"formControl"],[1,"mx-n3","mx-sm-0","my-3","overflow-auto"],[3,"rowClick","rowActive","rowSelect","data","config","loading","isRowSelectedFn","customClasses","selection"],[1,"table-loading","gt-skeleton-loader"],[1,"table-no-data","alert","alert-info","mt-3"],[3,"table"],[3,"content"]],template:function(n,e){if(n&1&&(mi(0,"div",1)(1,"div",2)(2,"button",3),$p("click",function(){return e.toggleRowHover()}),kI(3),Zc()(),mi(4,"div",2)(5,"button",3),$p("click",function(){return e.toggleRowNavigation()}),kI(6),Zc()(),mi(7,"div",2)(8,"button",3),$p("click",function(){return e.toggleAll()}),kI(9),Zc()()(),mi(10,"div",4)(11,"div",5)(12,"label",6),kI(13,"Number of rows:"),Zc(),Lp(14,"input",7),AD(),Zc(),mi(15,"div",2),kI(16),nC(17,"keyvalue"),Zc(),mi(18,"div",2),kI(19),Zc()(),mi(20,"div",8)(21,"angular-generic-table",9,0),$p("rowClick",function(g){return e.selectRow(g)})("rowActive",function(g){return e.setActiveRow(g)})("rowSelect",function(g){return e.selectRow(g)}),Lp(23,"div",10),mi(24,"div",11),kI(25,"Table is empty"),Zc()(),Lp(26,"angular-generic-table-pagination",12),Zc(),Lp(27,"docs-tabs",13)),n&2){let s=dI(22);Ev(2),Kp("btn-outline-primary",!e.activateOnRowHover)("btn-primary",e.activateOnRowHover),Ev(),Xc(" ",e.activateOnRowHover?"Disable on hover":"Enable on hover"," "),Ev(2),Kp("btn-outline-primary",!e.activateOnNavigation)("btn-primary",e.activateOnNavigation),Ev(),Xc(" ",e.activateOnNavigation?"Disable on keyboard navigation":"Enable on keyboard navigation"," "),Ev(2),Kp("btn-outline-primary",!e.isAllSelected)("btn-primary",e.isAllSelected),Ev(),Xc(" ",e.isAllSelected?"Deselect all":"Select all"," "),Ev(5),Fp("formControl",e.lengthCtrl),kD(),Ev(2),Xc(" Selected rows: ",oC(17,26,e.selection).length," "),Ev(3),Xc(" Active row id: ",e.activeRow?.id??"none"," "),Ev(2),Fp("data",e.data())("config",e.config())("loading",e.loading())("isRowSelectedFn",e.isSelected)("customClasses",e.customClassNames)("selection",e.selection),Ev(5),Fp("table",s),Ev(),Fp("content",e.SNIPPETS);}},dependencies:[oi,fi,Vn,Ge,Ut,mn,Wt,Xn,fw],styles:["[_nghost-%COMP%]     .gt-active{--bs-table-bg-state: var(--bs-highlight-bg)}[_nghost-%COMP%]     .table>tbody>tr{cursor:pointer}"]});}}return p})();
export{Q as RowSelectComponent};