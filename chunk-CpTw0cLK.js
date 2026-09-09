import{H as Qp,Ht as lh,It as iu,J as TI,Lt as jE,O as Kp,Ot as gI,Q as Ul,S as Gp,Tt as fL,Xt as ou,Y as Ti,_ as EI,a as $l,an as ru,dt as _I,ot as Yo,q as TC,qt as nh,sn as sD,st as Yp,un as sh,yt as cu,z as QI}from"./main-SGD45EGE.js";import{n as ai}from"./chunk-EwprI_mx.js";import{t as Xn}from"./chunk-C11RZllr.js";var E=[{name:`custom-templates.component.ts`,code:`import { ChangeDetectionStrategy, Component, OnInit, signal, TemplateRef, ViewChild, input } from '@angular/core';
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
`,language:`typescript`}];var A=[`actions`];function I(t,V){if(t&1){let o=gI();Ti(0,`button`,4),nh(`click`,function(){let n=$l(o),i=n.row,O=n.col,F=n.index;return Ul(EI().clickAction(i,O,F))}),QI(1,` Click me! `),ru()}}var q=(()=>{class t{constructor(){this.row=fL.required(),this.col=fL.required(),this.index=fL.required(),this.data=fL(),this.search=fL(null)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=jE({type:t,selectors:[[`docs-color-cell`]],inputs:{row:[1,`row`],col:[1,`col`],index:[1,`index`],data:[1,`data`],search:[1,`search`]},decls:1,vars:2,consts:[[2,`width`,`1.5rem`,`height`,`1.5rem`,`border-radius`,`50%`]],template:function(e,n){e&1&&Kp(0,`div`,0),e&2&&lh(`background`,n.row()[n.col().key])},encapsulation:2})}}return t})();var B=(()=>{class t{constructor(){this.column=fL.required(),this.sortable=fL(!1),this.sortOrder=fL([]),this.search=fL(null)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=jE({type:t,selectors:[[`docs-color-header`]],inputs:{column:[1,`column`],sortable:[1,`sortable`],sortOrder:[1,`sortOrder`],search:[1,`search`]},decls:2,vars:1,template:function(e,n){e&1&&(ou(0,`span`),QI(1),iu()),e&2&&(sD(),cu(`🎨 `,n.column().value.header||n.column().key))},encapsulation:2})}}return t})();var K=(()=>{class t{constructor(){this.clicked=Yo(``),this.data=[{firstName:`Peter`,lastName:`Parker`,gender:`male`,favoriteColor:`#26BFAF`,favoriteFood:`Pasta`},{firstName:`Mary Jane`,lastName:`Watson`,gender:`female`,favoriteColor:`#0f0`,favoriteFood:`Pizza`}],this.config=Yo({}),this.SNIPPETS=E}ngOnInit(){this.config.set({columns:{firstName:{},lastName:{},gender:{},favoriteColor:{component:q,headerComponent:B,header:`Color`},favoriteFood:{},action:{templateRef:this.actions}}})}clickAction(o,e,n){console.log(`clicked row:`,o,`col:`,e),this.clicked.set(`clicked row number: ${n}`)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=jE({type:t,selectors:[[`docs-custom-templates`]],viewQuery:function(e,n){if(e&1&&sh(A,7),e&2){let i;TI(i=_I())&&(n.actions=i.first)}},decls:6,vars:4,consts:[[`actions`,``],[1,`overflow-auto`],[3,`data`,`config`],[3,`content`],[1,`btn`,`btn-outline-primary`,`btn-sm`,`my-sm-n3`,`text-nowrap`,3,`click`]],template:function(e,n){e&1&&(Ti(0,`div`,1),Qp(1,`angular-generic-table`,2),ru(),Gp(2,I,2,0,`ng-template`,null,0,TC),QI(4),Qp(5,`docs-tabs`,3)),e&2&&(sD(),Yp(`data`,n.data)(`config`,n.config()),sD(3),cu(` `,n.clicked(),` `),sD(),Yp(`content`,n.SNIPPETS))},dependencies:[ai,Xn],encapsulation:2,changeDetection:1})}}return t})();export{K as CustomTemplatesComponent};