import{a as L,b as V,c as I,e as H,f as J,h as B,i as z,k as O,l as $}from"./chunk-2AAM2UDC.js";import{b as D}from"./chunk-DY3R4EBK.js";import"./chunk-RI6AK356.js";import{a as E}from"./chunk-MQWK62O4.js";import{$a as a,Da as w,Ha as F,Ma as x,Ta as P,Tb as k,Ua as M,Y as y,Z as N,Za as h,_a as i,a as f,ab as u,b,fb as T,ha as d,hb as c,jb as p,nb as S,ob as v,pb as C,rb as R,ub as r,vb as A,wb as _,xa as s}from"./chunk-L56K3QBL.js";var G=[{name:"advanced.component.ts",code:`import { Component, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CoreComponent, TableConfig, TableRow, TableColumn } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-advanced',
  templateUrl: './advanced.component.html',
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
`,language:"typescript"},{name:"advanced.component.html",code:`<div class="row mb-3 gy-3 gx-2">
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
<docs-tabs [content]="SNIPPETS"></docs-tabs>`,language:"xml"}];var K=["actions"],j=["color"];function q(l,g){if(l&1){let t=T();i(0,"button",25),c("click",function(){y(t);let e=p(),o=e.row,m=e.col,Q=e.index,U=p();return N(U.clickAction(o,m,Q))}),r(1,"Click me!"),a()}}function W(l,g){if(l&1&&P(0,q,2,0,"button",24),l&2){let t=g.index;M(t!==void 0?0:-1)}}function X(l,g){if(l&1&&u(0,"div",26),l&2){let t=g.row,n=g.col;R("background",t[n.key])}}var se=(()=>{class l{constructor(t){this.fb=t,this.paginationForm=this.fb.group({length:[10],search:[""]}),this.loading=d(!0),this.currentPage=d(0),this.searchValue=d(null),this.data=d([{index:1,firstName:"Peter",lastName:"Parker",gender:"male",favoriteColor:"#26BFAF",favoriteFood:"Pasta"},{index:2,firstName:"Mary Jane",lastName:"Watson",gender:"female",favoriteColor:"#0f0",favoriteFood:"Pizza"}]),this.tableConfig=d({}),this.clicked=d(""),this.maleFirstNames=["Peter","Clark","Ruben","John","Jack","Roscoe"],this.femaleFirstNames=["Mary Jane","Kim","Sarah","Michelle","Ann"],this.lastNames=["Andersson","Smith","Parker","Kent","Rogers","Lane","Jackson"],this.foods=["Pizza","Pasta","Hamburger","Pancakes","Tacos","Lasagna","Meatloaf"],this.colors=["#33d60b","#dcafff","#3fc9ff","#ff1600","#5238b1","#fff"],this.SNIPPETS=G,this.next=()=>{this.currentPage.set(this.currentPage()+1)},this.prev=()=>{this.currentPage.set(this.currentPage()-1)}}addData(){this.data.set([...this.data(),this.randomRecord()])}removeData(){this.data.set([])}simulateLoad(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),2e3)}clickAction(t,n,e){console.log("clicked row:",t,"col:",n),this.clicked.set(`clicked row number: ${e}`)}randomRecord(){let t=Math.floor(Math.random()*2);return{index:this.data().length+1,firstName:t?this.maleFirstNames[Math.floor(Math.random()*this.maleFirstNames.length)]:this.femaleFirstNames[Math.floor(Math.random()*this.femaleFirstNames.length)],lastName:t?null:this.lastNames[Math.floor(Math.random()*this.lastNames.length)],gender:t?"male":"female",favoriteColor:this.colors[Math.floor(Math.random()*this.colors.length)],favoriteFood:this.foods[Math.floor(Math.random()*this.foods.length)]}}ngOnInit(){this.simulateLoad(),this.paginationForm.get("length")?.valueChanges.subscribe(t=>{this.tableConfig.set(b(f({},this.tableConfig()),{pagination:b(f({},this.tableConfig().pagination),{length:+(t||0)})}))}),this.paginationForm.get("search")?.valueChanges.subscribe(t=>{this.searchValue.set(t)}),this.tableConfig.set({class:"table text-nowrap mb-0",mobileLayout:!0,columns:{index:{sortable:!0},firstName:{header:"First name",mobileHeader:!0,sortable:!0,order:0},lastName:{header:"Last name",mobileHeader:!0,hidden:!1,sortable:!0},gender:{mobileHeader:"Sex",sortable:!0,order:1},favoriteColor:{header:"Favorite color",mobileHeader:!0,templateRef:this.color,sortable:!1,order:2,search:!1,class:"custom-class"},favoriteFood:{mobileHeader:!0,header:"Favorite food",hidden:!1,sortable:!0,order:0},action:{mobileHeader:!1,header:!1,templateRef:this.actions,order:6,class:"py-1 text-end"}},pagination:{length:this.paginationForm.get("length")?.value||0},footer:{columns:{gender:{count:(t,n)=>{let e=0,o=0;for(let m=0;m<t.length;m++)t[m][n]==="female"?o++:t[m][n]==="male"&&e++;return`\u2642 ${e} \u2640 ${o}`}},favoriteColor:{},action:{count:(t,n)=>`Total: ${t.length}`}}}})}static{this.\u0275fac=function(n){return new(n||l)(w(O))}}static{this.\u0275cmp=F({type:l,selectors:[["docs-advanced"]],viewQuery:function(n,e){if(n&1&&S(K,7)(j,7),n&2){let o;v(o=C())&&(e.actions=o.first),v(o=C())&&(e.color=o.first)}},decls:44,vars:11,consts:[["table",""],["actions",""],["color",""],[1,"row","mb-3","gy-3","gx-2"],[1,"col-12","col-sm-auto"],[1,"btn","btn-primary","w-100",3,"click"],[1,"btn","btn-danger","w-100",3,"click"],[1,"btn","btn-secondary","w-100",3,"click"],[3,"formGroup"],[1,"row","gy-3"],[1,"form-group","col-6","col-sm-auto"],["for","length_input"],["id","length_input","formControlName","length","type","number",1,"form-control"],["for","search_input"],["id","search_input","formControlName","search","type","text",1,"form-control"],[1,"overflow-scroll","mt-3","pb-3"],[3,"data","config","paginationIndex","search","loading"],[1,"table-loading","gt-skeleton-loader"],[1,"table-no-data","alert","alert-info","mt-3"],[1,"row","justify-content-center","align-items-center","gy-3"],[1,"col-6","col-sm-auto"],[1,"btn","btn-primary","w-100",3,"click","disabled"],[1,"col-auto"],[3,"content"],[1,"btn","btn-outline-primary","btn-sm"],[1,"btn","btn-outline-primary","btn-sm",3,"click"],[2,"width","1.5rem","height","1.5rem","border-radius","50%"]],template:function(n,e){n&1&&(i(0,"div",3)(1,"div",4)(2,"button",5),c("click",function(){return e.addData()}),r(3,"Add random data"),a()(),i(4,"div",4)(5,"button",6),c("click",function(){return e.removeData()}),r(6,"Remove data"),a()(),i(7,"div",4)(8,"button",7),c("click",function(){return e.simulateLoad()}),r(9,"Load"),a()()(),i(10,"form",8)(11,"div",9)(12,"div",10)(13,"label",11),r(14,"Length"),a(),u(15,"input",12),a(),i(16,"div",10)(17,"label",13),r(18,"Search"),a(),u(19,"input",14),a()()(),i(20,"div",15)(21,"angular-generic-table",16,0),u(23,"div",17),i(24,"div",18),r(25,"Table is empty"),a()()(),i(26,"div",19)(27,"div",20)(28,"button",21),c("click",function(){return e.prev()}),r(29,"Prev"),a()(),i(30,"div",20)(31,"button",5),c("click",function(){return e.next()}),r(32,"Next"),a()(),i(33,"div",22),r(34),a(),i(35,"div",22),r(36),a(),i(37,"div",22),r(38),a()(),x(39,W,1,1,"ng-template",null,1,k)(41,X,1,2,"ng-template",null,2,k),u(43,"docs-tabs",23)),n&2&&(s(10),h("formGroup",e.paginationForm),s(11),h("data",e.data())("config",e.tableConfig())("paginationIndex",e.currentPage())("search",e.searchValue())("loading",e.loading()),s(7),h("disabled",e.currentPage()===0),s(6),_("Current page: ",e.currentPage()+1),s(2),_("Records: ",e.data().length),s(2),A(e.clicked()),s(5),h("content",e.SNIPPETS))},dependencies:[D,$,H,L,J,V,I,z,B,E],encapsulation:2})}}return l})();export{se as AdvancedComponent};
