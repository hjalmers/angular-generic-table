import{Ft as iI,H as Qp,J as TI,Lt as jE,S as Gp,Y as Ti,Yt as oI,an as ru,dt as _I,ot as Yo,q as TC,qt as nh,sn as sD,st as Yp,un as sh,z as QI}from"./main-SGD45EGE.js";import{n as ai,r as ui}from"./chunk-EwprI_mx.js";import{t as Xn}from"./chunk-C11RZllr.js";var S=[{name:`horizontal-table.component.ts`,code:`import { Component, OnInit, signal, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CoreComponent, GtDeltaComponent, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-horizontal-table',
  template: \`
    <button class="btn btn-outline-primary" (click)="simulateLoad()">Simulate load</button>
    <button class="btn btn-outline-danger mx-3" (click)="empty()">Empty</button>
    <button class="btn btn-outline-primary" (click)="load()">Reset</button>
    <div class="overflow-auto">
      <angular-generic-table [data]="data()" [config]="config()" [loading]="loading()">
        <div class="table-loading gt-skeleton-loader"></div>
        <div class="table-no-data alert alert-info mt-3">Table is empty</div>
      </angular-generic-table>
    </div>
    <ng-template #feelings let-row="row" let-col="col">
      @switch (row[col.key]) {
        @case ('thrilled') {
          \u{1F600}
        }
        @case ('positive') {
          \u{1F642}
        }
        @case ('neutral') {
          \u{1F610}
        }
        @case ('negative') {
          \u{1F62D}
        }
      }
    </ng-template>
    <ng-template #delta let-data="data" let-index="index">
      <gt-delta [index]="index" [data]="data"></gt-delta>
    </ng-template>
    <ng-template #deltaIndex let-data="data" let-index="index">
      <gt-delta [index]="index" [baseIndex]="0" [data]="data"></gt-delta>
    </ng-template>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  \`,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CoreComponent, GtDeltaComponent, TabsComponent],
})
export class HorizontalTableComponent implements OnInit {
  @ViewChild('feelings', { static: true }) feelings: TemplateRef<any> | undefined;
  @ViewChild('delta', { static: true }) delta: TemplateRef<any> | undefined;
  @ViewChild('deltaIndex', { static: true }) deltaIndex: TemplateRef<any> | undefined;

  loading = signal(false);
  config = signal<TableConfig>({});
  data = signal<any>([]);

  ngOnInit(): void {
    this.config.set({
      stickyHeaders: { row: true },
      mobileLayout: true,
      rows: {
        year: { class: 'text-end', header: false },
        value: { class: 'text-end' },
        delta: { header: 'Delta %', templateRef: this.delta, class: 'text-end' },
        deltaIndex: { header: 'Since inception %', templateRef: this.deltaIndex, class: 'text-end' },
        feeling: { templateRef: this.feelings, class: 'text-end' },
      },
    });
    this.load();
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
      { year: '2017', value: 50, feeling: 'neutral' },
      { year: '2018', value: 75, feeling: 'positive' },
      { year: '2019', value: 100, feeling: 'thrilled' },
      { year: '2020', value: 250, feeling: 'thrilled' },
      { year: '2021', value: 50, feeling: 'negative' },
    ]);
  }

  SNIPPETS = SOURCE_TABS;
}
`,language:`typescript`}];var E=[`feelings`];var R=[`delta`];var I=[`deltaIndex`];function w(e,a){e&1&&QI(0,` 😀 `)}function k(e,a){e&1&&QI(0,` 🙂 `)}function z(e,a){e&1&&QI(0,` 😐 `)}function H(e,a){e&1&&QI(0,` 😭 `)}function O(e,a){if(e&1&&oI(0,w,1,0)(1,k,1,0)(2,z,1,0)(3,H,1,0),e&2){let i,t=a.row,n=a.col;iI((i=t[n.key])===`thrilled`?0:i===`positive`?1:i===`neutral`?2:i===`negative`?3:-1)}}function P(e,a){if(e&1&&Qp(0,`gt-delta`,10),e&2){let i=a.data,t=a.index;Yp(`index`,t)(`data`,i)}}function N(e,a){if(e&1&&Qp(0,`gt-delta`,11),e&2){let i=a.data,t=a.index;Yp(`index`,t)(`baseIndex`,0)(`data`,i)}}var F=(()=>{class e{constructor(){this.loading=Yo(!1),this.config=Yo({}),this.data=Yo([]),this.SNIPPETS=S}ngOnInit(){this.config.set({stickyHeaders:{row:!0},mobileLayout:!0,rows:{year:{class:`text-end`,header:!1},value:{class:`text-end`},delta:{header:`Delta %`,templateRef:this.delta,class:`text-end`},deltaIndex:{header:`Since inception %`,templateRef:this.deltaIndex,class:`text-end`},feeling:{templateRef:this.feelings,class:`text-end`}}}),this.load()}simulateLoad(){this.loading.set(!0),setTimeout(()=>this.loading.set(!1),2e3)}empty(){this.data.set([])}load(){this.data.set([{year:`2017`,value:50,feeling:`neutral`},{year:`2018`,value:75,feeling:`positive`},{year:`2019`,value:100,feeling:`thrilled`},{year:`2020`,value:250,feeling:`thrilled`},{year:`2021`,value:50,feeling:`negative`}])}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=jE({type:e,selectors:[[`docs-horizontal-table`]],viewQuery:function(t,n){if(t&1&&sh(E,7)(R,7)(I,7),t&2){let l;TI(l=_I())&&(n.feelings=l.first),TI(l=_I())&&(n.delta=l.first),TI(l=_I())&&(n.deltaIndex=l.first)}},decls:18,vars:4,consts:[[`feelings`,``],[`delta`,``],[`deltaIndex`,``],[1,`btn`,`btn-outline-primary`,3,`click`],[1,`btn`,`btn-outline-danger`,`mx-3`,3,`click`],[1,`overflow-auto`],[3,`data`,`config`,`loading`],[1,`table-loading`,`gt-skeleton-loader`],[1,`table-no-data`,`alert`,`alert-info`,`mt-3`],[3,`content`],[3,`index`,`data`],[3,`index`,`baseIndex`,`data`]],template:function(t,n){t&1&&(Ti(0,`button`,3),nh(`click`,function(){return n.simulateLoad()}),QI(1,`Simulate load`),ru(),Ti(2,`button`,4),nh(`click`,function(){return n.empty()}),QI(3,`Empty`),ru(),Ti(4,`button`,3),nh(`click`,function(){return n.load()}),QI(5,`Reset`),ru(),Ti(6,`div`,5)(7,`angular-generic-table`,6),Qp(8,`div`,7),Ti(9,`div`,8),QI(10,`Table is empty`),ru()()(),Gp(11,O,4,1,`ng-template`,null,0,TC)(13,P,1,2,`ng-template`,null,1,TC)(15,N,1,3,`ng-template`,null,2,TC),Qp(17,`docs-tabs`,9)),t&2&&(sD(7),Yp(`data`,n.data())(`config`,n.config())(`loading`,n.loading()),sD(10),Yp(`content`,n.SNIPPETS))},dependencies:[ai,ui,Xn],encapsulation:2,changeDetection:1})}}return e})();export{F as HorizontalTableComponent};