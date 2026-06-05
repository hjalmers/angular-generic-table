import {o as oi}from'./chunk-ugwy61Id.js';import {V as Vo,I as IE,m as mi,L as Lp,Z as Zc,x as xp,k as kI,E as Ev,F as Fp,X as Xc,j as Wp,o as cI,p as uI,a7 as VF,Y as Yc,Q as Qc,P as Pp,s as Qp,J as JE,f as $p,R as Rl,c as rI,t as kl,g as cC}from'./main-ZDTAVTQ2.js';import {X as Xn}from'./chunk-BSQMMumy.js';var E=[{name:"custom-templates.component.ts",code:`import { ChangeDetectionStrategy, Component, OnInit, signal, TemplateRef, ViewChild, input } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.Eager,
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
`,language:"typescript"}];var A=["actions"];function I(t,V){if(t&1){let o=JE();mi(0,"button",4),$p("click",function(){let n=Rl(o),i=n.row,O=n.col,F=n.index,R=rI();return kl(R.clickAction(i,O,F))}),kI(1," Click me! "),Zc();}}var q=(()=>{class t{constructor(){this.row=VF.required(),this.col=VF.required(),this.index=VF.required(),this.data=VF(),this.search=VF(null);}static{this.\u0275fac=function(e){return new(e||t)};}static{this.\u0275cmp=IE({type:t,selectors:[["docs-color-cell"]],inputs:{row:[1,"row"],col:[1,"col"],index:[1,"index"],data:[1,"data"],search:[1,"search"]},decls:1,vars:2,consts:[[2,"width","1.5rem","height","1.5rem","border-radius","50%"]],template:function(e,n){e&1&&Pp(0,"div",0),e&2&&Qp("background",n.row()[n.col().key]);},encapsulation:2});}}return t})(),B=(()=>{class t{constructor(){this.column=VF.required(),this.sortable=VF(false),this.sortOrder=VF([]),this.search=VF(null);}static{this.\u0275fac=function(e){return new(e||t)};}static{this.\u0275cmp=IE({type:t,selectors:[["docs-color-header"]],inputs:{column:[1,"column"],sortable:[1,"sortable"],sortOrder:[1,"sortOrder"],search:[1,"search"]},decls:2,vars:1,template:function(e,n){e&1&&(Yc(0,"span"),kI(1),Qc()),e&2&&(Ev(),Xc("\u{1F3A8} ",n.column().value.header||n.column().key));},encapsulation:2});}}return t})(),K=(()=>{class t{constructor(){this.clicked=Vo(""),this.data=[{firstName:"Peter",lastName:"Parker",gender:"male",favoriteColor:"#26BFAF",favoriteFood:"Pasta"},{firstName:"Mary Jane",lastName:"Watson",gender:"female",favoriteColor:"#0f0",favoriteFood:"Pizza"}],this.config=Vo({}),this.SNIPPETS=E;}ngOnInit(){this.config.set({columns:{firstName:{},lastName:{},gender:{},favoriteColor:{component:q,headerComponent:B,header:"Color"},favoriteFood:{},action:{templateRef:this.actions}}});}clickAction(o,e,n){console.log("clicked row:",o,"col:",e),this.clicked.set(`clicked row number: ${n}`);}static{this.\u0275fac=function(e){return new(e||t)};}static{this.\u0275cmp=IE({type:t,selectors:[["docs-custom-templates"]],viewQuery:function(e,n){if(e&1&&Wp(A,7),e&2){let i;cI(i=uI())&&(n.actions=i.first);}},decls:6,vars:4,consts:[["actions",""],[1,"overflow-auto"],[3,"data","config"],[3,"content"],[1,"btn","btn-outline-primary","btn-sm","my-sm-n3","text-nowrap",3,"click"]],template:function(e,n){e&1&&(mi(0,"div",1),Lp(1,"angular-generic-table",2),Zc(),xp(2,I,2,0,"ng-template",null,0,cC),kI(4),Lp(5,"docs-tabs",3)),e&2&&(Ev(),Fp("data",n.data)("config",n.config()),Ev(3),Xc(" ",n.clicked()," "),Ev(),Fp("content",n.SNIPPETS));},dependencies:[oi,Xn],encapsulation:2,changeDetection:1});}}return t})();export{q as ColorCellComponent,B as ColorHeaderComponent,K as CustomTemplatesComponent};