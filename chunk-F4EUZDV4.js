import{b as E}from"./chunk-DY3R4EBK.js";import"./chunk-RI6AK356.js";import{a as N}from"./chunk-MQWK62O4.js";import{$a as l,Ha as y,Ka as h,Ma as v,Tb as P,Y as f,Z as g,Za as d,_a as i,a as c,ab as b,b as m,fb as w,ha as u,hb as p,jb as C,nb as k,ob as x,pb as L,sb as S,ub as n,vb as T,wb as _,xa as r}from"./chunk-L56K3QBL.js";var R=[{name:"mobile-layout.component.ts",code:`import { Component, Pipe, PipeTransform, signal, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
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
`,language:"typescript"}];var z=["actions"];function A(o,I){if(o&1){let a=w();i(0,"button",6),p("click",function(){let e=f(a),s=e.row,M=e.col,H=e.index,V=C();return g(V.clickAction(s,M,H))}),n(1," Click me! "),l()}}var F=(()=>{class o{transform(a){return a==="male"?"\u{1F468}":"\u{1F469}"}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275pipe=h({name:"genderPipe",type:o,pure:!0})}}return o})(),W=(()=>{class o{constructor(){this.clicked=u(""),this.mobileLayout=u(!0),this.data=[{firstName:"Peter",lastName:"Parker",gender:"male",favoriteFood:"Pasta"},{firstName:"Mary Jane",lastName:"Watson",gender:"female",favoriteFood:"Pizza"}],this.config=u({mobileLayout:this.mobileLayout(),columns:{firstName:{mobileHeader:!0,sortable:!0},lastName:{mobileHeader:!0,sortable:!0},gender:{mobileHeader:!0,transform:{pipe:F}},favoriteFood:{mobileHeader:!0},action:{mobileHeader:!1,header:!1,templateRef:void 0}}}),this.SNIPPETS=R}toggleLayout(){this.mobileLayout.set(!this.mobileLayout()),this.config.set(m(c({},this.config()),{mobileLayout:this.mobileLayout(),columns:m(c({},this.config().columns),{action:m(c({},this.config().columns.action),{templateRef:this.actions})})}))}clickAction(a,t,e){console.log("clicked row:",a,"col:",t),this.clicked.set(`Clicked row number: ${e}`)}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=y({type:o,selectors:[["docs-mobile-layout"]],viewQuery:function(t,e){if(t&1&&k(z,7),t&2){let s;x(s=L())&&(e.actions=s.first)}},decls:22,vars:7,consts:[["actions",""],["role","alert",1,"alert","alert-info"],[1,"d-flex","justify-content-end","mb-1","align-items-center"],[1,"btn","btn-link",3,"click"],[3,"data","config"],[3,"content"],[1,"btn","btn-outline-primary","btn-sm","my-sm-n3","text-nowrap",3,"click"]],template:function(t,e){t&1&&(i(0,"div",1),n(1," The mobile layout kicks in via a media query \u2014 by default below "),i(2,"code"),n(3,"576px"),l(),n(4," wide. Resize your browser (or use device emulation in dev tools) to see it in action. The breakpoint can be customized by overriding "),i(5,"code"),n(6,"$mobile-style-max-width"),l(),n(7," in the library\u2019s SCSS. "),l(),i(8,"div",2),n(9),i(10,"button",3),p("click",function(){return e.toggleLayout()}),n(11," Toggle "),i(12,"code"),n(13,"mobileLayout"),l(),n(14," \u2014 currently "),i(15,"strong"),n(16),l()()(),i(17,"div"),b(18,"angular-generic-table",4),l(),v(19,A,2,0,"ng-template",null,0,P),b(21,"docs-tabs",5)),t&2&&(r(9),_(" ",e.clicked()," "),r(7),T(e.mobileLayout()?"on":"off"),r(),S("overflow-auto",!e.mobileLayout()),r(),d("data",e.data)("config",e.config()),r(3),d("content",e.SNIPPETS))},dependencies:[E,N],styles:[`.table th{white-space:nowrap}
`],encapsulation:2})}}return o})();export{F as GenderPipe,W as MobileLayoutComponent};
