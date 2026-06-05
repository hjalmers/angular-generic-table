import{b as P}from"./chunk-3UXWR73U.js";import"./chunk-QFSOMC5Z.js";import{a as M}from"./chunk-AXENTG2G.js";import{$a as d,Ia as l,Na as h,Wb as S,Y as f,Z as C,_a as m,ab as u,bb as p,bc as a,cb as v,db as b,eb as y,gb as w,ha as s,ib as k,kb as T,ob as x,pb as D,qb as N,ub as _,xa as r,xb as c,zb as g}from"./chunk-UFU3N23S.js";var E=[{name:"custom-templates.component.ts",code:`import { ChangeDetectionStrategy, Component, OnInit, signal, TemplateRef, ViewChild, input } from '@angular/core';
import { CoreComponent, TableConfig, TableRow, TableColumn } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-color-cell',
  template: \`
    <div [style.background]="row()[col().key]" style="width: 1.5rem; height: 1.5rem; border-radius: 50%"></div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorCellComponent {
  readonly row = input.required<any>();
  readonly col = input.required<{ key: string; value: TableColumn }>();
  readonly index = input.required<number>();
  readonly data = input<any[]>();
  readonly search = input<string | null>(null);
}

@Component({
  selector: 'docs-color-header',
  template: \`<span>&#127912; {{ column().value.header || column().key }}</span>\`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorHeaderComponent {
  readonly column = input.required<{ key: string; value: TableColumn }>();
  readonly sortable = input(false);
  readonly sortOrder = input<any[]>([]);
  readonly search = input<string | null>(null);
}

@Component({
  selector: 'docs-custom-templates',
  template: \`
    <div class="overflow-auto">
      <angular-generic-table [data]="data" [config]="config()"></angular-generic-table>
    </div>
    <ng-template #actions let-row="row" let-col="col" let-index="index">
      <button class="btn btn-outline-primary btn-sm my-sm-n3 text-nowrap" (click)="clickAction(row, col, index)">
        Click me!
      </button>
    </ng-template>
    {{ clicked() }}
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  \`,
  imports: [CoreComponent, TabsComponent],
})
export class CustomTemplatesComponent implements OnInit {
  @ViewChild('actions', { static: true }) actions: TemplateRef<any> | undefined;
  clicked = signal('');

  data = [
    { firstName: 'Peter', lastName: 'Parker', gender: 'male', favoriteColor: '#26BFAF', favoriteFood: 'Pasta' },
    { firstName: 'Mary Jane', lastName: 'Watson', gender: 'female', favoriteColor: '#0f0', favoriteFood: 'Pizza' },
  ];
  config = signal<TableConfig>({});

  SNIPPETS = SOURCE_TABS;

  ngOnInit(): void {
    this.config.set({
      columns: {
        firstName: {},
        lastName: {},
        gender: {},
        favoriteColor: { component: ColorCellComponent, headerComponent: ColorHeaderComponent, header: 'Color' },
        favoriteFood: {},
        action: { templateRef: this.actions },
      },
    });
  }

  clickAction(row: TableRow, column: { key: string; value: TableColumn }, index: number): void {
    console.log('clicked row:', row, 'col:', column);
    this.clicked.set(\`clicked row number: \${index}\`);
  }
}
`,language:"typescript"}];var A=["actions"];function I(t,V){if(t&1){let o=w();d(0,"button",4),k("click",function(){let n=f(o),i=n.row,O=n.col,F=n.index,R=T();return C(R.clickAction(i,O,F))}),c(1," Click me! "),u()}}var q=(()=>{class t{constructor(){this.row=a.required(),this.col=a.required(),this.index=a.required(),this.data=a(),this.search=a(null)}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=l({type:t,selectors:[["docs-color-cell"]],inputs:{row:[1,"row"],col:[1,"col"],index:[1,"index"],data:[1,"data"],search:[1,"search"]},decls:1,vars:2,consts:[[2,"width","1.5rem","height","1.5rem","border-radius","50%"]],template:function(e,n){e&1&&y(0,"div",0),e&2&&_("background",n.row()[n.col().key])},encapsulation:2,changeDetection:0})}}return t})(),B=(()=>{class t{constructor(){this.column=a.required(),this.sortable=a(!1),this.sortOrder=a([]),this.search=a(null)}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=l({type:t,selectors:[["docs-color-header"]],inputs:{column:[1,"column"],sortable:[1,"sortable"],sortOrder:[1,"sortOrder"],search:[1,"search"]},decls:2,vars:1,template:function(e,n){e&1&&(v(0,"span"),c(1),b()),e&2&&(r(),g("\u{1F3A8} ",n.column().value.header||n.column().key))},encapsulation:2,changeDetection:0})}}return t})(),K=(()=>{class t{constructor(){this.clicked=s(""),this.data=[{firstName:"Peter",lastName:"Parker",gender:"male",favoriteColor:"#26BFAF",favoriteFood:"Pasta"},{firstName:"Mary Jane",lastName:"Watson",gender:"female",favoriteColor:"#0f0",favoriteFood:"Pizza"}],this.config=s({}),this.SNIPPETS=E}ngOnInit(){this.config.set({columns:{firstName:{},lastName:{},gender:{},favoriteColor:{component:q,headerComponent:B,header:"Color"},favoriteFood:{},action:{templateRef:this.actions}}})}clickAction(o,e,n){console.log("clicked row:",o,"col:",e),this.clicked.set(`clicked row number: ${n}`)}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=l({type:t,selectors:[["docs-custom-templates"]],viewQuery:function(e,n){if(e&1&&x(A,7),e&2){let i;D(i=N())&&(n.actions=i.first)}},decls:6,vars:4,consts:[["actions",""],[1,"overflow-auto"],[3,"data","config"],[3,"content"],[1,"btn","btn-outline-primary","btn-sm","my-sm-n3","text-nowrap",3,"click"]],template:function(e,n){e&1&&(d(0,"div",1),p(1,"angular-generic-table",2),u(),h(2,I,2,0,"ng-template",null,0,S),c(4),p(5,"docs-tabs",3)),e&2&&(r(),m("data",n.data)("config",n.config()),r(3),g(" ",n.clicked()," "),r(),m("content",n.SNIPPETS))},dependencies:[P,M],encapsulation:2})}}return t})();export{q as ColorCellComponent,B as ColorHeaderComponent,K as CustomTemplatesComponent};
