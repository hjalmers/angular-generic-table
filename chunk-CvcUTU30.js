import{$t as q,A as MI,Et as fe,Ft as iI,H as Qp,J as TI,Lt as jE,S as Gp,Sn as yh,Y as Ti,Yt as oI,_ as EI,an as ru,dt as _I,en as qD,it as YD,ot as Yo,q as TC,qt as nh,sn as sD,st as Yp,tt as W$1,un as sh,yt as cu,z as QI}from"./main-SGD45EGE.js";import{a as Lt,c as _n,d as yn,l as bn,n as Be,o as Vn,r as Dn,s as Xt,t as $t}from"./chunk-GUGGWH4H.js";import{i as xi,n as ai,r as ui}from"./chunk-EwprI_mx.js";import{t as Xn}from"./chunk-C11RZllr.js";var U=[{name:`transpose.component.ts`,code:`import { Component, OnInit, signal, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CoreComponent, GtDeltaComponent, PaginationComponent, TableConfig } from '@angular-generic-table/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

interface RawData {
  year: string;
  value: number;
}
interface YearData extends RawData {
  delta: number;
  deltaIndex: number;
  combined: number;
  deltaAbsolute: number;
}

@Component({
  selector: 'docs-transpose',
  template: \`
    <form [formGroup]="reactiveForm">
      <div class="row gy-3 gx-3 align-items-end mb-3">
        <div class="form-group col-6 col-sm-auto">
          <label for="length_input">Number of rows</label>
          <input id="length_input" formControlName="length" type="number" class="form-control" />
        </div>
        <div class="form-group col-6 col-sm-auto">
          <label for="search_input">Search</label>
          <input id="search_input" formControlName="search" type="text" class="form-control" />
        </div>
        <div class="col-auto">
          <button class="btn btn-outline-primary w-100" (click)="simulateLoad()">Simulate load</button>
        </div>
        <div class="col col-sm-auto">
          <button class="btn btn-outline-danger w-100" (click)="empty()">Empty</button>
        </div>
        <div class="col col-sm-auto">
          <button class="btn btn-outline-primary w-100" (click)="load()">Reset</button>
        </div>
        <div class="col col-sm-auto">
          <button class="btn btn-outline-primary w-100" (click)="transpose()">Transpose</button>
        </div>
      </div>
      <div class="overflow-auto">
        <angular-generic-table
          #table
          [data]="data()"
          [config]="tableConfig()"
          [loading]="loading()"
          [search]="searchValue()"
        >
          <div class="table-loading gt-skeleton-loader"></div>
          <div class="table-no-data alert alert-info mt-3">Table is empty</div>
        </angular-generic-table>
      </div>
      <angular-generic-table-pagination [table]="table"></angular-generic-table-pagination>
      <ng-template #delta let-index="index" let-data="data">
        <gt-delta [index]="index" [data]="data"></gt-delta>
      </ng-template>
      <ng-template #deltaAbsolute let-index="index" let-data="data">
        <gt-delta [index]="index" [data]="data" [deltaTemplate]="deltaTemplate"></gt-delta>
      </ng-template>
      <ng-template #deltaIndex let-index="index" let-data="data">
        <gt-delta [index]="index" [data]="data" [baseIndex]="0"></gt-delta>
      </ng-template>
      <ng-template #combined let-index="index" let-data="data" let-row="row" let-col="col">
        {{ row.value }}
        @if (index > 0) {
          <gt-delta [index]="index" [data]="data"></gt-delta>
        }
      </ng-template>
      <ng-template #deltaTemplate let-delta="delta">
        <span>{{ delta.absolute }}</span>
      </ng-template>
      <docs-tabs [content]="SNIPPETS"></docs-tabs>
    </form>
  \`,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CoreComponent, PaginationComponent, GtDeltaComponent, ReactiveFormsModule, TabsComponent],
})
export class TransposeComponent implements OnInit {
  @ViewChild('delta', { static: true }) delta: TemplateRef<any> | undefined;
  @ViewChild('deltaAbsolute', { static: true }) deltaAbsolute: TemplateRef<any> | undefined;
  @ViewChild('deltaIndex', { static: true }) deltaIndex: TemplateRef<any> | undefined;
  @ViewChild('combined', { static: true }) combined: TemplateRef<any> | undefined;

  loading = signal(false);
  searchValue = signal<string | null>(null);
  tableConfig = signal<TableConfig<YearData>>({});
  data = signal<Array<RawData>>([]);

  reactiveForm = this.fb.group({
    length: [10],
    search: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transpose();
    this.load();
    this.reactiveForm.get('length')?.valueChanges.subscribe((length) => {
      this.tableConfig.set({
        ...this.tableConfig(),
        pagination: { ...this.tableConfig().pagination, length: +(length || 0) },
      });
    });
    this.reactiveForm.get('search')?.valueChanges.subscribe((value) => {
      this.searchValue.set(value);
    });
  }

  simulateLoad(): void {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 2000);
  }

  empty(): void {
    this.data.set([]);
  }

  load(): void {
    this.data.set([
      { year: '2010', value: 15 },
      { year: '2011', value: 30 },
      { year: '2012', value: 25 },
      { year: '2013', value: 0 },
      { year: '2014', value: 40 },
      { year: '2015', value: 0 },
      { year: '2016', value: -5 },
      { year: '2018', value: 75 },
      { year: '2019', value: 100 },
      { year: '2020', value: 250 },
      { year: '2021', value: 50 },
      { year: '2022', value: 60 },
    ]);
  }

  transpose(): void {
    if (this.tableConfig().columns) {
      this.tableConfig.set({
        stickyHeaders: { row: true, column: true },
        rows: {
          year: { sortable: true, header: false, class: 'text-end' },
          value: { class: 'text-end' },
          delta: { header: 'Delta %', templateRef: this.delta, class: 'text-end' },
          deltaIndex: { header: 'Since inception %', templateRef: this.deltaIndex, class: 'text-end' },
          deltaAbsolute: { header: 'Delta', templateRef: this.deltaAbsolute, class: 'text-end' },
          combined: { header: 'Value with change', templateRef: this.combined, class: 'text-end text-nowrap' },
        },
      });
    } else {
      this.tableConfig.set({
        stickyHeaders: { row: true, column: true },
        columns: {
          year: { sortable: true },
          value: { class: 'text-end' },
          delta: { header: 'Delta %', templateRef: this.delta, class: 'text-end' },
          deltaIndex: { header: 'Since inception %', templateRef: this.deltaIndex, class: 'text-end' },
          deltaAbsolute: { header: 'Delta', templateRef: this.deltaAbsolute, class: 'text-end' },
          combined: { header: 'Value with change', templateRef: this.combined, class: 'text-end text-nowrap' },
        },
        pagination: { length: this.reactiveForm.get('length')?.value || 0 },
      });
    }
  }

  SNIPPETS = SOURCE_TABS;
}
`,language:`typescript`}];var Y=[`delta`];var j=[`deltaAbsolute`];var z=[`deltaIndex`];var J=[`combined`];function K(e,l){if(e&1&&Qp(0,`gt-delta`,23),e&2){let t=l.index,a=l.data;Yp(`index`,t)(`data`,a)}}function W(e,l){if(e&1&&Qp(0,`gt-delta`,24),e&2){let t=l.index,a=l.data;EI();let n=MI(38);Yp(`index`,t)(`data`,a)(`deltaTemplate`,n)}}function X(e,l){if(e&1&&Qp(0,`gt-delta`,25),e&2){let t=l.index,a=l.data;Yp(`index`,t)(`data`,a)(`baseIndex`,0)}}function Z(e,l){if(e&1&&Qp(0,`gt-delta`,23),e&2){let t=EI(),a=t.index,n=t.data;Yp(`index`,a)(`data`,n)}}function $(e,l){if(e&1&&(QI(0),oI(1,Z,1,2,`gt-delta`,23)),e&2){let t=l.index,a=l.row;cu(` `,a.value,` `),sD(),iI(t>0?1:-1)}}function ee(e,l){if(e&1&&(Ti(0,`span`),QI(1),ru()),e&2){let t=l.delta;sD(),yh(t.absolute)}}var ue=(()=>{class e{constructor(t){this.fb=t,this.loading=Yo(!1),this.searchValue=Yo(null),this.tableConfig=Yo({}),this.data=Yo([]),this.reactiveForm=this.fb.group({length:[10],search:[``]}),this.SNIPPETS=U}ngOnInit(){this.transpose(),this.load(),this.reactiveForm.get(`length`)?.valueChanges.subscribe(t=>{this.tableConfig.set(q(W$1({},this.tableConfig()),{pagination:q(W$1({},this.tableConfig().pagination),{length:+(t||0)})}))}),this.reactiveForm.get(`search`)?.valueChanges.subscribe(t=>{this.searchValue.set(t)})}simulateLoad(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),2e3)}empty(){this.data.set([])}load(){this.data.set([{year:`2010`,value:15},{year:`2011`,value:30},{year:`2012`,value:25},{year:`2013`,value:0},{year:`2014`,value:40},{year:`2015`,value:0},{year:`2016`,value:-5},{year:`2018`,value:75},{year:`2019`,value:100},{year:`2020`,value:250},{year:`2021`,value:50},{year:`2022`,value:60}])}transpose(){this.tableConfig().columns?this.tableConfig.set({stickyHeaders:{row:!0,column:!0},rows:{year:{sortable:!0,header:!1,class:`text-end`},value:{class:`text-end`},delta:{header:`Delta %`,templateRef:this.delta,class:`text-end`},deltaIndex:{header:`Since inception %`,templateRef:this.deltaIndex,class:`text-end`},deltaAbsolute:{header:`Delta`,templateRef:this.deltaAbsolute,class:`text-end`},combined:{header:`Value with change`,templateRef:this.combined,class:`text-end text-nowrap`}}}):this.tableConfig.set({stickyHeaders:{row:!0,column:!0},columns:{year:{sortable:!0},value:{class:`text-end`},delta:{header:`Delta %`,templateRef:this.delta,class:`text-end`},deltaIndex:{header:`Since inception %`,templateRef:this.deltaIndex,class:`text-end`},deltaAbsolute:{header:`Delta`,templateRef:this.deltaAbsolute,class:`text-end`},combined:{header:`Value with change`,templateRef:this.combined,class:`text-end text-nowrap`}},pagination:{length:this.reactiveForm.get(`length`)?.value||0}})}static{this.ɵfac=function(a){return new(a||e)(fe(Dn))}}static{this.ɵcmp=jE({type:e,selectors:[[`docs-transpose`]],viewQuery:function(a,n){if(a&1&&sh(Y,7)(j,7)(z,7)(J,7),a&2){let i;TI(i=_I())&&(n.delta=i.first),TI(i=_I())&&(n.deltaAbsolute=i.first),TI(i=_I())&&(n.deltaIndex=i.first),TI(i=_I())&&(n.combined=i.first)}},decls:40,vars:7,consts:[[`table`,``],[`delta`,``],[`deltaAbsolute`,``],[`deltaIndex`,``],[`combined`,``],[`deltaTemplate`,``],[3,`formGroup`],[1,`row`,`gy-3`,`gx-3`,`align-items-end`,`mb-3`],[1,`form-group`,`col-6`,`col-sm-auto`],[`for`,`length_input`],[`id`,`length_input`,`formControlName`,`length`,`type`,`number`,1,`form-control`],[`for`,`search_input`],[`id`,`search_input`,`formControlName`,`search`,`type`,`text`,1,`form-control`],[1,`col-auto`],[1,`btn`,`btn-outline-primary`,`w-100`,3,`click`],[1,`col`,`col-sm-auto`],[1,`btn`,`btn-outline-danger`,`w-100`,3,`click`],[1,`overflow-auto`],[3,`data`,`config`,`loading`,`search`],[1,`table-loading`,`gt-skeleton-loader`],[1,`table-no-data`,`alert`,`alert-info`,`mt-3`],[3,`table`],[3,`content`],[3,`index`,`data`],[3,`index`,`data`,`deltaTemplate`],[3,`index`,`data`,`baseIndex`]],template:function(a,n){if(a&1&&(Ti(0,`form`,6)(1,`div`,7)(2,`div`,8)(3,`label`,9),QI(4,`Number of rows`),ru(),Qp(5,`input`,10),qD(),ru(),Ti(6,`div`,8)(7,`label`,11),QI(8,`Search`),ru(),Qp(9,`input`,12),qD(),ru(),Ti(10,`div`,13)(11,`button`,14),nh(`click`,function(){return n.simulateLoad()}),QI(12,`Simulate load`),ru()(),Ti(13,`div`,15)(14,`button`,16),nh(`click`,function(){return n.empty()}),QI(15,`Empty`),ru()(),Ti(16,`div`,15)(17,`button`,14),nh(`click`,function(){return n.load()}),QI(18,`Reset`),ru()(),Ti(19,`div`,15)(20,`button`,14),nh(`click`,function(){return n.transpose()}),QI(21,`Transpose`),ru()()(),Ti(22,`div`,17)(23,`angular-generic-table`,18,0),Qp(25,`div`,19),Ti(26,`div`,20),QI(27,`Table is empty`),ru()()(),Qp(28,`angular-generic-table-pagination`,21),Gp(29,K,1,2,`ng-template`,null,1,TC)(31,W,1,3,`ng-template`,null,2,TC)(33,X,1,3,`ng-template`,null,3,TC)(35,$,2,2,`ng-template`,null,4,TC)(37,ee,2,1,`ng-template`,null,5,TC),Qp(39,`docs-tabs`,22),ru()),a&2){let i=MI(24);Yp(`formGroup`,n.reactiveForm),sD(5),YD(),sD(4),YD(),sD(14),Yp(`data`,n.data())(`config`,n.tableConfig())(`loading`,n.loading())(`search`,n.searchValue()),sD(5),Yp(`table`,i),sD(11),Yp(`content`,n.SNIPPETS)}},dependencies:[ai,xi,ui,bn,Vn,Be,$t,_n,yn,Lt,Xt,Xn],encapsulation:2,changeDetection:1})}}return e})();export{ue as TransposeComponent};