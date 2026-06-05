import {o as oi}from'./chunk-ugwy61Id.js';import {V as Vo,q,a as W,I as IE,m as mi,k as kI,Z as Zc,f as $p,L as Lp,x as xp,E as Ev,X as Xc,r as rh,a6 as Kp,F as Fp,j as Wp,o as cI,p as uI,aB as bt,J as JE,R as Rl,c as rI,t as kl,g as cC}from'./main-ZDTAVTQ2.js';import {X as Xn}from'./chunk-BSQMMumy.js';var R=[{name:"mobile-layout.component.ts",code:`import {
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
`,language:"typescript"}];var V=["actions"];function z(o,F){if(o&1){let a=JE();mi(0,"button",6),$p("click",function(){let e=Rl(a),c=e.row,M=e.col,D=e.index,H=rI();return kl(H.clickAction(c,M,D))}),kI(1," Click me! "),Zc();}}var A=(()=>{class o{transform(a){return a==="male"?"\u{1F468}":"\u{1F469}"}static{this.\u0275fac=function(t){return new(t||o)};}static{this.\u0275pipe=bt({name:"genderPipe",type:o,pure:true});}}return o})(),K=(()=>{class o{constructor(){this.clicked=Vo(""),this.mobileLayout=Vo(true),this.data=[{firstName:"Peter",lastName:"Parker",gender:"male",favoriteFood:"Pasta"},{firstName:"Mary Jane",lastName:"Watson",gender:"female",favoriteFood:"Pizza"}],this.config=Vo({mobileLayout:this.mobileLayout(),columns:{firstName:{mobileHeader:true,sortable:true},lastName:{mobileHeader:true,sortable:true},gender:{mobileHeader:true,transform:{pipe:A}},favoriteFood:{mobileHeader:true},action:{mobileHeader:false,header:false,templateRef:void 0}}}),this.SNIPPETS=R;}toggleLayout(){this.mobileLayout.set(!this.mobileLayout()),this.config.set(q(W({},this.config()),{mobileLayout:this.mobileLayout(),columns:q(W({},this.config().columns),{action:q(W({},this.config().columns.action),{templateRef:this.actions})})}));}clickAction(a,t,e){console.log("clicked row:",a,"col:",t),this.clicked.set(`Clicked row number: ${e}`);}static{this.\u0275fac=function(t){return new(t||o)};}static{this.\u0275cmp=IE({type:o,selectors:[["docs-mobile-layout"]],viewQuery:function(t,e){if(t&1&&Wp(V,7),t&2){let c;cI(c=uI())&&(e.actions=c.first);}},decls:22,vars:7,consts:[["actions",""],["role","alert",1,"alert","alert-info"],[1,"d-flex","justify-content-end","mb-1","align-items-center"],[1,"btn","btn-link",3,"click"],[3,"data","config"],[3,"content"],[1,"btn","btn-outline-primary","btn-sm","my-sm-n3","text-nowrap",3,"click"]],template:function(t,e){t&1&&(mi(0,"div",1),kI(1," The mobile layout kicks in via a media query \u2014 by default below "),mi(2,"code"),kI(3,"576px"),Zc(),kI(4," wide. Resize your browser (or use device emulation in dev tools) to see it in action. The breakpoint can be customized by overriding "),mi(5,"code"),kI(6,"$mobile-style-max-width"),Zc(),kI(7," in the library\u2019s SCSS. "),Zc(),mi(8,"div",2),kI(9),mi(10,"button",3),$p("click",function(){return e.toggleLayout()}),kI(11," Toggle "),mi(12,"code"),kI(13,"mobileLayout"),Zc(),kI(14," \u2014 currently "),mi(15,"strong"),kI(16),Zc()()(),mi(17,"div"),Lp(18,"angular-generic-table",4),Zc(),xp(19,z,2,0,"ng-template",null,0,cC),Lp(21,"docs-tabs",5)),t&2&&(Ev(9),Xc(" ",e.clicked()," "),Ev(7),rh(e.mobileLayout()?"on":"off"),Ev(),Kp("overflow-auto",!e.mobileLayout()),Ev(),Fp("data",e.data)("config",e.config()),Ev(3),Fp("content",e.SNIPPETS));},dependencies:[oi,Xn],styles:[`.table th{white-space:nowrap}
`],encapsulation:2,changeDetection:1});}}return o})();export{A as GenderPipe,K as MobileLayoutComponent};