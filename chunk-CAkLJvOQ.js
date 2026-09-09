import{Ft as iI,H as Qp,J as TI,Lt as jE,R as Ow,S as Gp,Y as Ti,Yt as oI,an as ru,dt as _I,q as TC,sn as sD,st as Yp,un as sh,yt as cu,z as QI}from"./main-SGD45EGE.js";import{n as ai}from"./chunk-EwprI_mx.js";import{t as Xn}from"./chunk-C11RZllr.js";var O=[{name:`footer.component.ts`,code:`import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CoreComponent, TableConfig, TableRow } from '@angular-generic-table/core';
import { DecimalPipe } from '@angular/common';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-footer',
  template: \`
    <div class="overflow-auto">
      <angular-generic-table [data]="data" [config]="config"></angular-generic-table>
    </div>
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
    <ng-template #heightTmplRef let-row="row" let-col="col">
      @if (row[col.key || col]; as height) {
        {{ height }} m
      }
    </ng-template>
  \`,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CoreComponent, TabsComponent],
})
export class FooterComponent implements OnInit {
  @ViewChild('heightTmplRef', { static: true }) heightTmplRef: TemplateRef<any> | undefined;
  data = [
    {
      firstName: 'Peter',
      lastName: 'Parker',
      gender: 'male',
      favoriteFood: 'Pasta',
      age: 27,
      weight: 85.457,
      height: 1.85,
    },
    {
      firstName: 'Mary Jane',
      lastName: 'Watson',
      gender: 'female',
      favoriteFood: 'Pizza',
      age: 25,
      weight: 60.123,
      height: 1.65,
    },
  ];
  config: TableConfig = {};

  ngOnInit() {
    this.config = {
      mobileLayout: true,
      columns: {
        firstName: { mobileHeader: true },
        lastName: { mobileHeader: true },
        gender: { mobileHeader: true },
        favoriteFood: { mobileHeader: true, class: 'text-end flex-end' },
        age: { mobileHeader: true, class: 'text-end' },
        weight: { mobileHeader: true, class: 'text-end', transform: { pipe: DecimalPipe, args: ['1.0-2'] } },
        height: { mobileHeader: true, class: 'text-end', templateRef: this.heightTmplRef },
      },
      footer: {
        headers: {
          sum: 'Total',
          numberOfWomen: 'Number of women',
          numberOfMen: 'Number of men',
          min: true,
          max: true,
          avg: true,
          count: true,
          static: true,
          first: true,
        },
        rowOrder: ['first', 'numberOfWomen', 'numberOfMen', 'min', 'max', 'sum', 'avg', 'count'],
        columns: {
          firstName: {},
          lastName: { static: 'n/a' },
          gender: {
            numberOfWomen: (data: Array<TableRow>, key) => {
              let count = 0;
              for (let i = 0; i < data.length; i++) {
                if (data[i][key] === 'female') count++;
              }
              return count;
            },
            numberOfMen: (data: Array<TableRow>, key) => {
              let count = 0;
              for (let i = 0; i < data.length; i++) {
                if (data[i][key] === 'male') count++;
              }
              return count;
            },
          },
          favoriteFood: { first: (data: Array<TableRow>, key) => data[0][key] },
          age: { sum: true, avg: true, count: true, max: true, min: true },
          weight: { sum: true, avg: true, min: true },
          height: { avg: true, min: true, max: true },
        },
      },
    };
  }

  SNIPPETS = SOURCE_TABS;
}
`,language:`typescript`}];var R=[`heightTmplRef`];function _(o,a){o&1&&QI(0),o&2&&cu(` `,a,` m `)}function x(o,a){if(o&1&&oI(0,_,1,1),o&2){let n,e=a.row,t=a.col;iI((n=e[t.key||t])?0:-1,n)}}var D=(()=>{class o{constructor(){this.data=[{firstName:`Peter`,lastName:`Parker`,gender:`male`,favoriteFood:`Pasta`,age:27,weight:85.457,height:1.85},{firstName:`Mary Jane`,lastName:`Watson`,gender:`female`,favoriteFood:`Pizza`,age:25,weight:60.123,height:1.65}],this.config={},this.SNIPPETS=O}ngOnInit(){this.config={mobileLayout:!0,columns:{firstName:{mobileHeader:!0},lastName:{mobileHeader:!0},gender:{mobileHeader:!0},favoriteFood:{mobileHeader:!0,class:`text-end flex-end`},age:{mobileHeader:!0,class:`text-end`},weight:{mobileHeader:!0,class:`text-end`,transform:{pipe:Ow,args:[`1.0-2`]}},height:{mobileHeader:!0,class:`text-end`,templateRef:this.heightTmplRef}},footer:{headers:{sum:`Total`,numberOfWomen:`Number of women`,numberOfMen:`Number of men`,min:!0,max:!0,avg:!0,count:!0,static:!0,first:!0},rowOrder:[`first`,`numberOfWomen`,`numberOfMen`,`min`,`max`,`sum`,`avg`,`count`],columns:{firstName:{},lastName:{static:`n/a`},gender:{numberOfWomen:(n,e)=>{let t=0;for(let r=0;r<n.length;r++)n[r][e]===`female`&&t++;return t},numberOfMen:(n,e)=>{let t=0;for(let r=0;r<n.length;r++)n[r][e]===`male`&&t++;return t}},favoriteFood:{first:(n,e)=>n[0][e]},age:{sum:!0,avg:!0,count:!0,max:!0,min:!0},weight:{sum:!0,avg:!0,min:!0},height:{avg:!0,min:!0,max:!0}}}}}static{this.ɵfac=function(e){return new(e||o)}}static{this.ɵcmp=jE({type:o,selectors:[[`docs-footer`]],viewQuery:function(e,t){if(e&1&&sh(R,7),e&2){let r;TI(r=_I())&&(t.heightTmplRef=r.first)}},decls:5,vars:3,consts:[[`heightTmplRef`,``],[1,`overflow-auto`],[3,`data`,`config`],[3,`content`]],template:function(e,t){e&1&&(Ti(0,`div`,1),Qp(1,`angular-generic-table`,2),ru(),Qp(2,`docs-tabs`,3),Gp(3,x,1,1,`ng-template`,null,0,TC)),e&2&&(sD(),Yp(`data`,t.data)(`config`,t.config),sD(),Yp(`content`,t.SNIPPETS))},dependencies:[ai,Xn],encapsulation:2,changeDetection:1})}}return o})();export{D as FooterComponent};