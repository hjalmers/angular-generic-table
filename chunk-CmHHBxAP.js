import{$t as q,H as Qp,J as TI,K as St,Lt as jE,Ot as gI,Q as Ul,S as Gp,Sn as yh,St as dh,Y as Ti,_ as EI,a as $l,an as ru,dt as _I,ot as Yo,q as TC,qt as nh,sn as sD,st as Yp,tt as W,un as sh,yt as cu,z as QI}from"./main-SGD45EGE.js";import{n as ai}from"./chunk-EwprI_mx.js";import{t as Xn}from"./chunk-C11RZllr.js";var R=[{name:`mobile-layout.component.ts`,code:`import {
  Component,
  Pipe,
  PipeTransform,
  signal,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CoreComponent, TableColumn, TableConfig, TableRow } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Pipe({ name: 'genderPipe' })
export class GenderPipe implements PipeTransform {
  transform(gender: 'male' | 'female'): string {
    return gender === 'male' ? '\u{1F468}' : '\u{1F469}';
  }
}

@Component({
  selector: 'docs-mobile-layout',
  template: \`
    <div class="alert alert-info" role="alert">
      The mobile layout kicks in via a media query &mdash; by default below
      <code>576px</code> wide. Resize your browser (or use device emulation in dev tools) to see it in action. The
      breakpoint can be customized by overriding <code>$mobile-style-max-width</code> in the library&rsquo;s SCSS.
    </div>
    <div class="d-flex justify-content-end mb-1 align-items-center">
      {{ clicked() }}
      <button class="btn btn-link" (click)="toggleLayout()">
        Toggle <code>mobileLayout</code> &mdash; currently
        <strong>{{ mobileLayout() ? 'on' : 'off' }}</strong>
      </button>
    </div>
    <div [class.overflow-auto]="!mobileLayout()">
      <angular-generic-table [data]="data" [config]="config()"></angular-generic-table>
    </div>
    <ng-template #actions let-row="row" let-col="col" let-index="index">
      <button class="btn btn-outline-primary btn-sm my-sm-n3 text-nowrap" (click)="clickAction(row, col, index)">
        Click me!
      </button>
    </ng-template>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  \`,
  styles: [
    \`
      .table th {
        white-space: nowrap;
      }
    \`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CoreComponent, TabsComponent],
})
export class MobileLayoutComponent {
  @ViewChild('actions', { static: true }) actions: TemplateRef<any> | undefined;
  clicked = signal('');
  mobileLayout = signal(true);

  data = [
    { firstName: 'Peter', lastName: 'Parker', gender: 'male', favoriteFood: 'Pasta' },
    { firstName: 'Mary Jane', lastName: 'Watson', gender: 'female', favoriteFood: 'Pizza' },
  ];

  config = signal<TableConfig>({
    mobileLayout: this.mobileLayout(),
    columns: {
      firstName: { mobileHeader: true, sortable: true },
      lastName: { mobileHeader: true, sortable: true },
      gender: { mobileHeader: true, transform: { pipe: GenderPipe } },
      favoriteFood: { mobileHeader: true },
      action: { mobileHeader: false, header: false, templateRef: undefined },
    },
  });

  SNIPPETS = SOURCE_TABS;

  toggleLayout(): void {
    this.mobileLayout.set(!this.mobileLayout());
    this.config.set({
      ...this.config(),
      mobileLayout: this.mobileLayout(),
      columns: {
        ...this.config().columns,
        action: { ...this.config().columns!['action'], templateRef: this.actions },
      },
    });
  }

  clickAction(row: TableRow, column: { key: string; value: TableColumn }, index: number): void {
    console.log('clicked row:', row, 'col:', column);
    this.clicked.set(\`Clicked row number: \${index}\`);
  }
}
`,language:`typescript`}];var V=[`actions`];function z(o,F){if(o&1){let a=gI();Ti(0,`button`,6),nh(`click`,function(){let e=$l(a),c=e.row,M=e.col,D=e.index;return Ul(EI().clickAction(c,M,D))}),QI(1,` Click me! `),ru()}}var A=(()=>{class o{transform(a){return a===`male`?`👨`:`👩`}static{this.ɵfac=function(t){return new(t||o)}}static{this.ɵpipe=St({name:`genderPipe`,type:o,pure:!0})}}return o})();var K=(()=>{class o{constructor(){this.clicked=Yo(``),this.mobileLayout=Yo(!0),this.data=[{firstName:`Peter`,lastName:`Parker`,gender:`male`,favoriteFood:`Pasta`},{firstName:`Mary Jane`,lastName:`Watson`,gender:`female`,favoriteFood:`Pizza`}],this.config=Yo({mobileLayout:this.mobileLayout(),columns:{firstName:{mobileHeader:!0,sortable:!0},lastName:{mobileHeader:!0,sortable:!0},gender:{mobileHeader:!0,transform:{pipe:A}},favoriteFood:{mobileHeader:!0},action:{mobileHeader:!1,header:!1,templateRef:void 0}}}),this.SNIPPETS=R}toggleLayout(){this.mobileLayout.set(!this.mobileLayout()),this.config.set(q(W({},this.config()),{mobileLayout:this.mobileLayout(),columns:q(W({},this.config().columns),{action:q(W({},this.config().columns.action),{templateRef:this.actions})})}))}clickAction(a,t,e){console.log(`clicked row:`,a,`col:`,t),this.clicked.set(`Clicked row number: ${e}`)}static{this.ɵfac=function(t){return new(t||o)}}static{this.ɵcmp=jE({type:o,selectors:[[`docs-mobile-layout`]],viewQuery:function(t,e){if(t&1&&sh(V,7),t&2){let c;TI(c=_I())&&(e.actions=c.first)}},decls:22,vars:7,consts:[[`actions`,``],[`role`,`alert`,1,`alert`,`alert-info`],[1,`d-flex`,`justify-content-end`,`mb-1`,`align-items-center`],[1,`btn`,`btn-link`,3,`click`],[3,`data`,`config`],[3,`content`],[1,`btn`,`btn-outline-primary`,`btn-sm`,`my-sm-n3`,`text-nowrap`,3,`click`]],template:function(t,e){t&1&&(Ti(0,`div`,1),QI(1,` The mobile layout kicks in via a media query — by default below `),Ti(2,`code`),QI(3,`576px`),ru(),QI(4,` wide. Resize your browser (or use device emulation in dev tools) to see it in action. The breakpoint can be customized by overriding `),Ti(5,`code`),QI(6,`$mobile-style-max-width`),ru(),QI(7,` in the library’s SCSS. `),ru(),Ti(8,`div`,2),QI(9),Ti(10,`button`,3),nh(`click`,function(){return e.toggleLayout()}),QI(11,` Toggle `),Ti(12,`code`),QI(13,`mobileLayout`),ru(),QI(14,` — currently `),Ti(15,`strong`),QI(16),ru()()(),Ti(17,`div`),Qp(18,`angular-generic-table`,4),ru(),Gp(19,z,2,0,`ng-template`,null,0,TC),Qp(21,`docs-tabs`,5)),t&2&&(sD(9),cu(` `,e.clicked(),` `),sD(7),yh(e.mobileLayout()?`on`:`off`),sD(),dh(`overflow-auto`,!e.mobileLayout()),sD(),Yp(`data`,e.data)(`config`,e.config()),sD(3),Yp(`content`,e.SNIPPETS))},dependencies:[ai,Xn],styles:[`.table th{white-space:nowrap}
`],encapsulation:2,changeDetection:1})}}return o})();export{K as MobileLayoutComponent};