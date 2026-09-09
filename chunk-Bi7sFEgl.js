import{$t as q$1,Et as fe,Ft as iI,H as Qp,Ht as lh,J as TI,Lt as jE,Ot as gI,Q as Ul,S as Gp,Sn as yh,Y as Ti,Yt as oI,_ as EI,a as $l,an as ru,dt as _I,en as qD,it as YD,ot as Yo,q as TC,qt as nh,sn as sD,st as Yp,tt as W$1,un as sh,yt as cu,z as QI}from"./main-SGD45EGE.js";import{a as Lt,c as _n,d as yn,l as bn,n as Be,o as Vn,r as Dn,s as Xt,t as $t}from"./chunk-GUGGWH4H.js";import{n as ai}from"./chunk-EwprI_mx.js";import{t as Xn}from"./chunk-C11RZllr.js";var U=[{name:`advanced.component.ts`,code:`import { Component, OnInit, signal, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CoreComponent, TableConfig, TableRow, TableColumn } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-advanced',
  templateUrl: './advanced.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CoreComponent, ReactiveFormsModule, TabsComponent],
})
export class AdvancedComponent implements OnInit {
  @ViewChild('actions', { static: true }) actions: TemplateRef<any> | undefined;
  @ViewChild('color', { static: true }) color: TemplateRef<any> | undefined;

  paginationForm = this.fb.group({
    length: [10],
    search: [''],
  });

  loading = signal(true);
  currentPage = signal(0);
  searchValue = signal<string | null>(null);
  data = signal<Array<TableRow>>([
    {
      index: 1,
      firstName: 'Peter',
      lastName: 'Parker',
      gender: 'male',
      favoriteColor: '#26BFAF',
      favoriteFood: 'Pasta',
    },
    {
      index: 2,
      firstName: 'Mary Jane',
      lastName: 'Watson',
      gender: 'female',
      favoriteColor: '#0f0',
      favoriteFood: 'Pizza',
    },
  ]);
  tableConfig = signal<TableConfig>({});

  clicked = signal('');
  maleFirstNames = ['Peter', 'Clark', 'Ruben', 'John', 'Jack', 'Roscoe'];
  femaleFirstNames = ['Mary Jane', 'Kim', 'Sarah', 'Michelle', 'Ann'];
  lastNames = ['Andersson', 'Smith', 'Parker', 'Kent', 'Rogers', 'Lane', 'Jackson'];
  foods = ['Pizza', 'Pasta', 'Hamburger', 'Pancakes', 'Tacos', 'Lasagna', 'Meatloaf'];
  colors = ['#33d60b', '#dcafff', '#3fc9ff', '#ff1600', '#5238b1', '#fff'];

  SNIPPETS = SOURCE_TABS;

  constructor(private fb: FormBuilder) {}

  addData(): void {
    this.data.set([...this.data(), this.randomRecord()]);
  }

  removeData(): void {
    this.data.set([]);
  }

  simulateLoad(): void {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 2000);
  }

  clickAction(row: TableRow, column: { key: string; value: TableColumn }, index: number): void {
    console.log('clicked row:', row, 'col:', column);
    this.clicked.set(\`clicked row number: \${index}\`);
  }

  randomRecord(): TableRow {
    const random = Math.floor(Math.random() * 2);
    return {
      index: this.data().length + 1,
      firstName: random
        ? this.maleFirstNames[Math.floor(Math.random() * this.maleFirstNames.length)]
        : this.femaleFirstNames[Math.floor(Math.random() * this.femaleFirstNames.length)],
      lastName: random ? null : this.lastNames[Math.floor(Math.random() * this.lastNames.length)],
      gender: random ? 'male' : 'female',
      favoriteColor: this.colors[Math.floor(Math.random() * this.colors.length)],
      favoriteFood: this.foods[Math.floor(Math.random() * this.foods.length)],
    };
  }

  next = () => {
    this.currentPage.set(this.currentPage() + 1);
  };
  prev = () => {
    this.currentPage.set(this.currentPage() - 1);
  };

  ngOnInit(): void {
    this.simulateLoad();
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
      class: 'table text-nowrap mb-0',
      mobileLayout: true,
      columns: {
        index: { sortable: true },
        firstName: { header: 'First name', mobileHeader: true, sortable: true, order: 0 },
        lastName: { header: 'Last name', mobileHeader: true, hidden: false, sortable: true },
        gender: { mobileHeader: 'Sex', sortable: true, order: 1 },
        favoriteColor: {
          header: 'Favorite color',
          mobileHeader: true,
          templateRef: this.color,
          sortable: false,
          order: 2,
          search: false,
          class: 'custom-class',
        },
        favoriteFood: { mobileHeader: true, header: 'Favorite food', hidden: false, sortable: true, order: 0 },
        action: { mobileHeader: false, header: false, templateRef: this.actions, order: 6, class: 'py-1 text-end' },
      },
      pagination: { length: this.paginationForm.get('length')?.value || 0 },
      footer: {
        columns: {
          gender: {
            count: (data, key) => {
              let men = 0,
                women = 0;
              for (let i = 0; i < data.length; i++) {
                if (data[i][key] === 'female') women++;
                else if (data[i][key] === 'male') men++;
              }
              return \`\u2642 \${men} \u2640 \${women}\`;
            },
          },
          favoriteColor: {},
          action: { count: (data, key) => \`Total: \${data.length}\` },
        },
      },
    });
  }
}
`,language:`typescript`},{name:`advanced.component.html`,code:`<div class="row mb-3 gy-3 gx-2">
  <div class="col-12 col-sm-auto">
    <button class="btn btn-primary w-100" (click)="addData()">Add random data</button>
  </div>
  <div class="col-12 col-sm-auto">
    <button class="btn btn-danger w-100" (click)="removeData()">Remove data</button>
  </div>
  <div class="col-12 col-sm-auto">
    <button class="btn btn-secondary w-100" (click)="simulateLoad()">Load</button>
  </div>
</div>
<form [formGroup]="paginationForm">
  <div class="row gy-3">
    <div class="form-group col-6 col-sm-auto">
      <label for="length_input">Length</label>
      <input id="length_input" formControlName="length" type="number" class="form-control" />
    </div>
    <div class="form-group col-6 col-sm-auto">
      <label for="search_input">Search</label>
      <input id="search_input" formControlName="search" type="text" class="form-control" />
    </div>
  </div>
</form>
<div class="overflow-scroll mt-3 pb-3">
  <angular-generic-table
    [data]="data()"
    [config]="tableConfig()"
    [paginationIndex]="currentPage()"
    [search]="searchValue()"
    [loading]="loading()"
    #table
  >
    <div class="table-loading gt-skeleton-loader"></div>
    <div class="table-no-data alert alert-info mt-3">Table is empty</div>
  </angular-generic-table>
</div>
<div class="row justify-content-center align-items-center gy-3">
  <div class="col-6 col-sm-auto">
    <button class="btn btn-primary w-100" (click)="prev()" [disabled]="currentPage() === 0">Prev</button>
  </div>
  <div class="col-6 col-sm-auto">
    <button class="btn btn-primary w-100" (click)="next()">Next</button>
  </div>
  <div class="col-auto">Current page: {{ currentPage() + 1 }}</div>
  <div class="col-auto">Records: {{ data().length }}</div>
  <div class="col-auto">{{ clicked() }}</div>
</div>
<ng-template #actions let-row="row" let-col="col" let-index="index">
  @if (index !== undefined) {
    <button class="btn btn-outline-primary btn-sm" (click)="clickAction(row, col, index)">Click me!</button>
  }
</ng-template>
<ng-template #color let-row="row" let-col="col">
  <div [style.background]="row[col.key]" style="width: 1.5rem; height: 1.5rem; border-radius: 50%"></div>
</ng-template>
<docs-tabs [content]="SNIPPETS"></docs-tabs>`,language:`xml`}];var q=[`actions`];var W=[`color`];function X(l,g){if(l&1){let t=gI();Ti(0,`button`,25),nh(`click`,function(){$l(t);let e=EI(),o=e.row,m=e.col,K=e.index;return Ul(EI().clickAction(o,m,K))}),QI(1,`Click me!`),ru()}}function Y(l,g){if(l&1&&oI(0,X,2,0,`button`,24),l&2){let t=g.index;iI(t!==void 0?0:-1)}}function Z(l,g){if(l&1&&Qp(0,`div`,26),l&2){let t=g.row,n=g.col;lh(`background`,t[n.key])}}var me=(()=>{class l{constructor(t){this.fb=t,this.paginationForm=this.fb.group({length:[10],search:[``]}),this.loading=Yo(!0),this.currentPage=Yo(0),this.searchValue=Yo(null),this.data=Yo([{index:1,firstName:`Peter`,lastName:`Parker`,gender:`male`,favoriteColor:`#26BFAF`,favoriteFood:`Pasta`},{index:2,firstName:`Mary Jane`,lastName:`Watson`,gender:`female`,favoriteColor:`#0f0`,favoriteFood:`Pizza`}]),this.tableConfig=Yo({}),this.clicked=Yo(``),this.maleFirstNames=[`Peter`,`Clark`,`Ruben`,`John`,`Jack`,`Roscoe`],this.femaleFirstNames=[`Mary Jane`,`Kim`,`Sarah`,`Michelle`,`Ann`],this.lastNames=[`Andersson`,`Smith`,`Parker`,`Kent`,`Rogers`,`Lane`,`Jackson`],this.foods=[`Pizza`,`Pasta`,`Hamburger`,`Pancakes`,`Tacos`,`Lasagna`,`Meatloaf`],this.colors=[`#33d60b`,`#dcafff`,`#3fc9ff`,`#ff1600`,`#5238b1`,`#fff`],this.SNIPPETS=U,this.next=()=>{this.currentPage.set(this.currentPage()+1)},this.prev=()=>{this.currentPage.set(this.currentPage()-1)}}addData(){this.data.set([...this.data(),this.randomRecord()])}removeData(){this.data.set([])}simulateLoad(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),2e3)}clickAction(t,n,e){console.log(`clicked row:`,t,`col:`,n),this.clicked.set(`clicked row number: ${e}`)}randomRecord(){let t=Math.floor(Math.random()*2);return{index:this.data().length+1,firstName:t?this.maleFirstNames[Math.floor(Math.random()*this.maleFirstNames.length)]:this.femaleFirstNames[Math.floor(Math.random()*this.femaleFirstNames.length)],lastName:t?null:this.lastNames[Math.floor(Math.random()*this.lastNames.length)],gender:t?`male`:`female`,favoriteColor:this.colors[Math.floor(Math.random()*this.colors.length)],favoriteFood:this.foods[Math.floor(Math.random()*this.foods.length)]}}ngOnInit(){this.simulateLoad(),this.paginationForm.get(`length`)?.valueChanges.subscribe(t=>{this.tableConfig.set(q$1(W$1({},this.tableConfig()),{pagination:q$1(W$1({},this.tableConfig().pagination),{length:+(t||0)})}))}),this.paginationForm.get(`search`)?.valueChanges.subscribe(t=>{this.searchValue.set(t)}),this.tableConfig.set({class:`table text-nowrap mb-0`,mobileLayout:!0,columns:{index:{sortable:!0},firstName:{header:`First name`,mobileHeader:!0,sortable:!0,order:0},lastName:{header:`Last name`,mobileHeader:!0,hidden:!1,sortable:!0},gender:{mobileHeader:`Sex`,sortable:!0,order:1},favoriteColor:{header:`Favorite color`,mobileHeader:!0,templateRef:this.color,sortable:!1,order:2,search:!1,class:`custom-class`},favoriteFood:{mobileHeader:!0,header:`Favorite food`,hidden:!1,sortable:!0,order:0},action:{mobileHeader:!1,header:!1,templateRef:this.actions,order:6,class:`py-1 text-end`}},pagination:{length:this.paginationForm.get(`length`)?.value||0},footer:{columns:{gender:{count:(t,n)=>{let e=0,o=0;for(let m=0;m<t.length;m++)t[m][n]===`female`?o++:t[m][n]===`male`&&e++;return`\u2642 ${e} \u2640 ${o}`}},favoriteColor:{},action:{count:(t,n)=>`Total: ${t.length}`}}}})}static{this.ɵfac=function(n){return new(n||l)(fe(Dn))}}static{this.ɵcmp=jE({type:l,selectors:[[`docs-advanced`]],viewQuery:function(n,e){if(n&1&&sh(q,7)(W,7),n&2){let o;TI(o=_I())&&(e.actions=o.first),TI(o=_I())&&(e.color=o.first)}},decls:44,vars:11,consts:[[`table`,``],[`actions`,``],[`color`,``],[1,`row`,`mb-3`,`gy-3`,`gx-2`],[1,`col-12`,`col-sm-auto`],[1,`btn`,`btn-primary`,`w-100`,3,`click`],[1,`btn`,`btn-danger`,`w-100`,3,`click`],[1,`btn`,`btn-secondary`,`w-100`,3,`click`],[3,`formGroup`],[1,`row`,`gy-3`],[1,`form-group`,`col-6`,`col-sm-auto`],[`for`,`length_input`],[`id`,`length_input`,`formControlName`,`length`,`type`,`number`,1,`form-control`],[`for`,`search_input`],[`id`,`search_input`,`formControlName`,`search`,`type`,`text`,1,`form-control`],[1,`overflow-scroll`,`mt-3`,`pb-3`],[3,`data`,`config`,`paginationIndex`,`search`,`loading`],[1,`table-loading`,`gt-skeleton-loader`],[1,`table-no-data`,`alert`,`alert-info`,`mt-3`],[1,`row`,`justify-content-center`,`align-items-center`,`gy-3`],[1,`col-6`,`col-sm-auto`],[1,`btn`,`btn-primary`,`w-100`,3,`click`,`disabled`],[1,`col-auto`],[3,`content`],[1,`btn`,`btn-outline-primary`,`btn-sm`],[1,`btn`,`btn-outline-primary`,`btn-sm`,3,`click`],[2,`width`,`1.5rem`,`height`,`1.5rem`,`border-radius`,`50%`]],template:function(n,e){n&1&&(Ti(0,`div`,3)(1,`div`,4)(2,`button`,5),nh(`click`,function(){return e.addData()}),QI(3,`Add random data`),ru()(),Ti(4,`div`,4)(5,`button`,6),nh(`click`,function(){return e.removeData()}),QI(6,`Remove data`),ru()(),Ti(7,`div`,4)(8,`button`,7),nh(`click`,function(){return e.simulateLoad()}),QI(9,`Load`),ru()()(),Ti(10,`form`,8)(11,`div`,9)(12,`div`,10)(13,`label`,11),QI(14,`Length`),ru(),Qp(15,`input`,12),qD(),ru(),Ti(16,`div`,10)(17,`label`,13),QI(18,`Search`),ru(),Qp(19,`input`,14),qD(),ru()()(),Ti(20,`div`,15)(21,`angular-generic-table`,16,0),Qp(23,`div`,17),Ti(24,`div`,18),QI(25,`Table is empty`),ru()()(),Ti(26,`div`,19)(27,`div`,20)(28,`button`,21),nh(`click`,function(){return e.prev()}),QI(29,`Prev`),ru()(),Ti(30,`div`,20)(31,`button`,5),nh(`click`,function(){return e.next()}),QI(32,`Next`),ru()(),Ti(33,`div`,22),QI(34),ru(),Ti(35,`div`,22),QI(36),ru(),Ti(37,`div`,22),QI(38),ru()(),Gp(39,Y,1,1,`ng-template`,null,1,TC)(41,Z,1,2,`ng-template`,null,2,TC),Qp(43,`docs-tabs`,23)),n&2&&(sD(10),Yp(`formGroup`,e.paginationForm),sD(5),YD(),sD(4),YD(),sD(2),Yp(`data`,e.data())(`config`,e.tableConfig())(`paginationIndex`,e.currentPage())(`search`,e.searchValue())(`loading`,e.loading()),sD(7),Yp(`disabled`,e.currentPage()===0),sD(6),cu(`Current page: `,e.currentPage()+1),sD(2),cu(`Records: `,e.data().length),sD(2),yh(e.clicked()),sD(5),Yp(`content`,e.SNIPPETS))},dependencies:[ai,bn,Vn,Be,$t,_n,yn,Lt,Xt,Xn],encapsulation:2,changeDetection:1})}}return l})();export{me as AdvancedComponent};