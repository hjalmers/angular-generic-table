import{a as _}from"./chunk-YRUNHQKL.js";import{a as A,b as E,d as H,f as T,g as D,l as P}from"./chunk-2AAM2UDC.js";import{b as N,d as k}from"./chunk-DY3R4EBK.js";import"./chunk-RI6AK356.js";import{a as O}from"./chunk-MQWK62O4.js";import{$a as o,Ha as f,Ob as C,Pb as y,T as h,Za as v,_a as a,a as r,ab as m,b as p,ha as b,hb as d,nc as S,qb as R,sb as w,ub as l,wb as c,xa as i}from"./chunk-L56K3QBL.js";var I=[{name:"row-select.component.ts",code:`import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
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
<docs-tabs [content]="SNIPPETS"></docs-tabs>`,language:"xml"}];var J=(()=>{class u{constructor(){this.http=h(_),this.activateOnRowHover=!0,this.activateOnNavigation=!0,this.loading=b(!0),this.activeRow=null,this.customClassNames={selectedRow:"table-active"},this.lengthCtrl=new H(15),this.data=b([]),this.config=b({}),this.selection={},this.SNIPPETS=I}ngOnInit(){this.http.get("https://private-730c61-generictable.apiary-mock.com/data").subscribe(t=>{this.data.set(t.data),this.loading.set(!1)}),this.lengthCtrl.valueChanges.subscribe(t=>{let n=t?t<0?0:t:0;this.config.set(p(r({},this.config()),{pagination:{length:n}}))}),this.config.set({columns:{id:{sortable:!0},first_name:{sortable:!0},last_name:{sortable:!0},gender:{sortable:!0},email:{sortable:!0}},pagination:{length:this.lengthCtrl.value||0},rowClick:!0,activateRowOnHover:this.activateOnRowHover,activateRowOnKeyboardNavigation:this.activateOnNavigation})}toggleRowHover(){this.activateOnRowHover=!this.activateOnRowHover,this.config.set(p(r({},this.config()),{activateRowOnHover:this.activateOnRowHover}))}toggleRowNavigation(){this.activateOnNavigation=!this.activateOnNavigation,this.config.set(p(r({},this.config()),{activateRowOnKeyboardNavigation:this.activateOnNavigation}))}setActiveRow(t){t.event&&t.event.type==="keydown"&&t.event.preventDefault(),this.activeRow=t.row}isSelected(t,n){return!!n[t.id]}selectRow(t){let n=r({},this.selection),e=t.row;e&&(n[e.id]?delete n[e.id]:n[e.id]=!0,this.selection=n)}get isAllSelected(){return Object.keys(this.selection).length>0}toggleAll(){if(this.isAllSelected){this.selection={};return}let t=r({},this.selection);this.data().forEach((n,e)=>{t[e]=!0}),this.selection=t}static{this.\u0275fac=function(n){return new(n||u)}}static{this.\u0275cmp=f({type:u,selectors:[["ng-component"]],decls:28,vars:28,consts:[["tableRef",""],[1,"row","gy-3","gy-sm-0","gx-2","align-items-center"],[1,"col-12","col-sm-auto"],[1,"btn","w-100",3,"click"],[1,"row","gy-3","gy-sm-0","gx-2","align-items-center","mt-3"],[1,"form-group","col-12","col-sm-auto","d-flex","align-items-center"],["for","length_input",1,"text-nowrap","me-2"],["id","length_input","type","number",1,"form-control",2,"max-width","60px",3,"formControl"],[1,"mx-n3","mx-sm-0","my-3","overflow-auto"],[3,"rowClick","rowActive","rowSelect","data","config","loading","isRowSelectedFn","customClasses","selection"],[1,"table-loading","gt-skeleton-loader"],[1,"table-no-data","alert","alert-info","mt-3"],[3,"table"],[3,"content"]],template:function(n,e){if(n&1&&(a(0,"div",1)(1,"div",2)(2,"button",3),d("click",function(){return e.toggleRowHover()}),l(3),o()(),a(4,"div",2)(5,"button",3),d("click",function(){return e.toggleRowNavigation()}),l(6),o()(),a(7,"div",2)(8,"button",3),d("click",function(){return e.toggleAll()}),l(9),o()()(),a(10,"div",4)(11,"div",5)(12,"label",6),l(13,"Number of rows:"),o(),m(14,"input",7),o(),a(15,"div",2),l(16),C(17,"keyvalue"),o(),a(18,"div",2),l(19),o()(),a(20,"div",8)(21,"angular-generic-table",9,0),d("rowClick",function(g){return e.selectRow(g)})("rowActive",function(g){return e.setActiveRow(g)})("rowSelect",function(g){return e.selectRow(g)}),m(23,"div",10),a(24,"div",11),l(25,"Table is empty"),o()(),m(26,"angular-generic-table-pagination",12),o(),m(27,"docs-tabs",13)),n&2){let s=R(22);i(2),w("btn-outline-primary",!e.activateOnRowHover)("btn-primary",e.activateOnRowHover),i(),c(" ",e.activateOnRowHover?"Disable on hover":"Enable on hover"," "),i(2),w("btn-outline-primary",!e.activateOnNavigation)("btn-primary",e.activateOnNavigation),i(),c(" ",e.activateOnNavigation?"Disable on keyboard navigation":"Enable on keyboard navigation"," "),i(2),w("btn-outline-primary",!e.isAllSelected)("btn-primary",e.isAllSelected),i(),c(" ",e.isAllSelected?"Deselect all":"Select all"," "),i(5),v("formControl",e.lengthCtrl),i(2),c(" Selected rows: ",y(17,26,e.selection).length," "),i(3),c(" Active row id: ",(e.activeRow==null?null:e.activeRow.id)??"none"," "),i(2),v("data",e.data())("config",e.config())("loading",e.loading())("isRowSelectedFn",e.isSelected)("customClasses",e.customClassNames)("selection",e.selection),i(5),v("table",s),i(),v("content",e.SNIPPETS)}},dependencies:[N,k,P,A,T,E,D,O,S],styles:["[_nghost-%COMP%]     .gt-active{--bs-table-bg-state: var(--bs-highlight-bg)}[_nghost-%COMP%]     .table>tbody>tr{cursor:pointer}"],changeDetection:0})}}return u})();export{J as RowSelectComponent};
