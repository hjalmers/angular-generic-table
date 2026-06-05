import{b as N}from"./chunk-3UXWR73U.js";import"./chunk-QFSOMC5Z.js";import{a as y}from"./chunk-AXENTG2G.js";import{$a as g,Ia as u,Na as s,Ua as f,Va as c,Wb as C,_a as m,ab as d,bb as l,ob as p,pb as h,qb as b,tc as w,xa as i,xb as T,zb as v}from"./chunk-UFU3N23S.js";var O=[{name:"footer.component.ts",code:`import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
`,language:"typescript"}];var R=["heightTmplRef"];function _(o,a){o&1&&T(0),o&2&&v(" ",a," m ")}function x(o,a){if(o&1&&f(0,_,1,1),o&2){let n,e=a.row,t=a.col;c((n=e[t.key||t])?0:-1,n)}}var M=(()=>{class o{constructor(){this.data=[{firstName:"Peter",lastName:"Parker",gender:"male",favoriteFood:"Pasta",age:27,weight:85.457,height:1.85},{firstName:"Mary Jane",lastName:"Watson",gender:"female",favoriteFood:"Pizza",age:25,weight:60.123,height:1.65}],this.config={},this.SNIPPETS=O}ngOnInit(){this.config={mobileLayout:!0,columns:{firstName:{mobileHeader:!0},lastName:{mobileHeader:!0},gender:{mobileHeader:!0},favoriteFood:{mobileHeader:!0,class:"text-end flex-end"},age:{mobileHeader:!0,class:"text-end"},weight:{mobileHeader:!0,class:"text-end",transform:{pipe:w,args:["1.0-2"]}},height:{mobileHeader:!0,class:"text-end",templateRef:this.heightTmplRef}},footer:{headers:{sum:"Total",numberOfWomen:"Number of women",numberOfMen:"Number of men",min:!0,max:!0,avg:!0,count:!0,static:!0,first:!0},rowOrder:["first","numberOfWomen","numberOfMen","min","max","sum","avg","count"],columns:{firstName:{},lastName:{static:"n/a"},gender:{numberOfWomen:(n,e)=>{let t=0;for(let r=0;r<n.length;r++)n[r][e]==="female"&&t++;return t},numberOfMen:(n,e)=>{let t=0;for(let r=0;r<n.length;r++)n[r][e]==="male"&&t++;return t}},favoriteFood:{first:(n,e)=>n[0][e]},age:{sum:!0,avg:!0,count:!0,max:!0,min:!0},weight:{sum:!0,avg:!0,min:!0},height:{avg:!0,min:!0,max:!0}}}}}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=u({type:o,selectors:[["docs-footer"]],viewQuery:function(e,t){if(e&1&&p(R,7),e&2){let r;h(r=b())&&(t.heightTmplRef=r.first)}},decls:5,vars:3,consts:[["heightTmplRef",""],[1,"overflow-auto"],[3,"data","config"],[3,"content"]],template:function(e,t){e&1&&(g(0,"div",1),l(1,"angular-generic-table",2),d(),l(2,"docs-tabs",3),s(3,x,1,1,"ng-template",null,0,C)),e&2&&(i(),m("data",t.data)("config",t.config),i(),m("content",t.SNIPPETS))},dependencies:[N,y],encapsulation:2})}}return o})();export{M as FooterComponent};
