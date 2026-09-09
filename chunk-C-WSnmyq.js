import{$t as q,A as MI,H as Qp,Lt as jE,St as dh,T as IC,Y as Ti,an as ru,c as Aw,en as qD,h as DC,it as YD,n as Be,ot as Yo,qt as nh,sn as sD,st as Yp,tt as W,w as I,yt as cu,z as QI}from"./main-SGD45EGE.js";import{c as _n,f as zt,l as bn,n as Be$1,t as $t,u as j}from"./chunk-GUGGWH4H.js";import{i as xi,n as ai}from"./chunk-EwprI_mx.js";import{t as Xn}from"./chunk-C11RZllr.js";var M=[{name:`row-select.component.ts`,code:`import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
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
`,language:`typescript`},{name:`row-select.component.html`,code:`<div class="row gy-3 gy-sm-0 gx-2 align-items-center">
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
<docs-tabs [content]="SNIPPETS"></docs-tabs>`,language:`xml`}];var Q=(()=>{class p{constructor(){this.http=I(Be),this.activateOnRowHover=!0,this.activateOnNavigation=!0,this.loading=Yo(!0),this.activeRow=null,this.customClassNames={selectedRow:`table-active`},this.lengthCtrl=new j(15),this.data=Yo([]),this.config=Yo({}),this.selection={},this.SNIPPETS=M}ngOnInit(){this.http.get(`https://private-730c61-generictable.apiary-mock.com/data`).subscribe(t=>{this.data.set(t.data),this.loading.set(!1)}),this.lengthCtrl.valueChanges.subscribe(t=>{let n=t?t<0?0:t:0;this.config.set(q(W({},this.config()),{pagination:{length:n}}))}),this.config.set({columns:{id:{sortable:!0},first_name:{sortable:!0},last_name:{sortable:!0},gender:{sortable:!0},email:{sortable:!0}},pagination:{length:this.lengthCtrl.value||0},rowClick:!0,activateRowOnHover:this.activateOnRowHover,activateRowOnKeyboardNavigation:this.activateOnNavigation})}toggleRowHover(){this.activateOnRowHover=!this.activateOnRowHover,this.config.set(q(W({},this.config()),{activateRowOnHover:this.activateOnRowHover}))}toggleRowNavigation(){this.activateOnNavigation=!this.activateOnNavigation,this.config.set(q(W({},this.config()),{activateRowOnKeyboardNavigation:this.activateOnNavigation}))}setActiveRow(t){t.event&&t.event.type===`keydown`&&t.event.preventDefault(),this.activeRow=t.row}isSelected(t,n){return!!n[t.id]}selectRow(t){let n=W({},this.selection),e=t.row;e&&(n[e.id]?delete n[e.id]:n[e.id]=!0,this.selection=n)}get isAllSelected(){return Object.keys(this.selection).length>0}toggleAll(){if(this.isAllSelected){this.selection={};return}let t=W({},this.selection);this.data().forEach((n,e)=>{t[e]=!0}),this.selection=t}static{this.ɵfac=function(n){return new(n||p)}}static{this.ɵcmp=jE({type:p,selectors:[[`ng-component`]],decls:28,vars:28,consts:[[`tableRef`,``],[1,`row`,`gy-3`,`gy-sm-0`,`gx-2`,`align-items-center`],[1,`col-12`,`col-sm-auto`],[1,`btn`,`w-100`,3,`click`],[1,`row`,`gy-3`,`gy-sm-0`,`gx-2`,`align-items-center`,`mt-3`],[1,`form-group`,`col-12`,`col-sm-auto`,`d-flex`,`align-items-center`],[`for`,`length_input`,1,`text-nowrap`,`me-2`],[`id`,`length_input`,`type`,`number`,1,`form-control`,2,`max-width`,`60px`,3,`formControl`],[1,`mx-n3`,`mx-sm-0`,`my-3`,`overflow-auto`],[3,`rowClick`,`rowActive`,`rowSelect`,`data`,`config`,`loading`,`isRowSelectedFn`,`customClasses`,`selection`],[1,`table-loading`,`gt-skeleton-loader`],[1,`table-no-data`,`alert`,`alert-info`,`mt-3`],[3,`table`],[3,`content`]],template:function(n,e){if(n&1&&(Ti(0,`div`,1)(1,`div`,2)(2,`button`,3),nh(`click`,function(){return e.toggleRowHover()}),QI(3),ru()(),Ti(4,`div`,2)(5,`button`,3),nh(`click`,function(){return e.toggleRowNavigation()}),QI(6),ru()(),Ti(7,`div`,2)(8,`button`,3),nh(`click`,function(){return e.toggleAll()}),QI(9),ru()()(),Ti(10,`div`,4)(11,`div`,5)(12,`label`,6),QI(13,`Number of rows:`),ru(),Qp(14,`input`,7),qD(),ru(),Ti(15,`div`,2),QI(16),DC(17,`keyvalue`),ru(),Ti(18,`div`,2),QI(19),ru()(),Ti(20,`div`,8)(21,`angular-generic-table`,9,0),nh(`rowClick`,function(g){return e.selectRow(g)})(`rowActive`,function(g){return e.setActiveRow(g)})(`rowSelect`,function(g){return e.selectRow(g)}),Qp(23,`div`,10),Ti(24,`div`,11),QI(25,`Table is empty`),ru()(),Qp(26,`angular-generic-table-pagination`,12),ru(),Qp(27,`docs-tabs`,13)),n&2){let s=MI(22);sD(2),dh(`btn-outline-primary`,!e.activateOnRowHover)(`btn-primary`,e.activateOnRowHover),sD(),cu(` `,e.activateOnRowHover?`Disable on hover`:`Enable on hover`,` `),sD(2),dh(`btn-outline-primary`,!e.activateOnNavigation)(`btn-primary`,e.activateOnNavigation),sD(),cu(` `,e.activateOnNavigation?`Disable on keyboard navigation`:`Enable on keyboard navigation`,` `),sD(2),dh(`btn-outline-primary`,!e.isAllSelected)(`btn-primary`,e.isAllSelected),sD(),cu(` `,e.isAllSelected?`Deselect all`:`Select all`,` `),sD(5),Yp(`formControl`,e.lengthCtrl),YD(),sD(2),cu(` Selected rows: `,IC(17,26,e.selection).length,` `),sD(3),cu(` Active row id: `,e.activeRow?.id??`none`,` `),sD(2),Yp(`data`,e.data())(`config`,e.config())(`loading`,e.loading())(`isRowSelectedFn`,e.isSelected)(`customClasses`,e.customClassNames)(`selection`,e.selection),sD(5),Yp(`table`,s),sD(),Yp(`content`,e.SNIPPETS)}},dependencies:[ai,xi,bn,Be$1,$t,_n,zt,Xn,Aw],styles:[`[_nghost-%COMP%]     .gt-active{--%NS%bs-table-bg-state: var(--%NS%bs-highlight-bg)}[_nghost-%COMP%]     .table>tbody>tr{cursor:pointer}`]})}}return p})();export{Q as RowSelectComponent};