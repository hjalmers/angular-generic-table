import {o as oi}from'./chunk-ugwy61Id.js';import {aC as pw,I as IE,m as mi,L as Lp,Z as Zc,x as xp,E as Ev,F as Fp,j as Wp,o as cI,p as uI,b as HE,$ as $E,k as kI,X as Xc,g as cC}from'./main-ZDTAVTQ2.js';import {X as Xn}from'./chunk-BSQMMumy.js';var O=[{name:"footer.component.ts",code:`import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`,language:"typescript"}];var R=["heightTmplRef"];function _(o,a){o&1&&kI(0),o&2&&Xc(" ",a," m ");}function x(o,a){if(o&1&&HE(0,_,1,1),o&2){let n,e=a.row,t=a.col;$E((n=e[t.key||t])?0:-1,n);}}var D=(()=>{class o{constructor(){this.data=[{firstName:"Peter",lastName:"Parker",gender:"male",favoriteFood:"Pasta",age:27,weight:85.457,height:1.85},{firstName:"Mary Jane",lastName:"Watson",gender:"female",favoriteFood:"Pizza",age:25,weight:60.123,height:1.65}],this.config={},this.SNIPPETS=O;}ngOnInit(){this.config={mobileLayout:true,columns:{firstName:{mobileHeader:true},lastName:{mobileHeader:true},gender:{mobileHeader:true},favoriteFood:{mobileHeader:true,class:"text-end flex-end"},age:{mobileHeader:true,class:"text-end"},weight:{mobileHeader:true,class:"text-end",transform:{pipe:pw,args:["1.0-2"]}},height:{mobileHeader:true,class:"text-end",templateRef:this.heightTmplRef}},footer:{headers:{sum:"Total",numberOfWomen:"Number of women",numberOfMen:"Number of men",min:true,max:true,avg:true,count:true,static:true,first:true},rowOrder:["first","numberOfWomen","numberOfMen","min","max","sum","avg","count"],columns:{firstName:{},lastName:{static:"n/a"},gender:{numberOfWomen:(n,e)=>{let t=0;for(let r=0;r<n.length;r++)n[r][e]==="female"&&t++;return t},numberOfMen:(n,e)=>{let t=0;for(let r=0;r<n.length;r++)n[r][e]==="male"&&t++;return t}},favoriteFood:{first:(n,e)=>n[0][e]},age:{sum:true,avg:true,count:true,max:true,min:true},weight:{sum:true,avg:true,min:true},height:{avg:true,min:true,max:true}}}};}static{this.\u0275fac=function(e){return new(e||o)};}static{this.\u0275cmp=IE({type:o,selectors:[["docs-footer"]],viewQuery:function(e,t){if(e&1&&Wp(R,7),e&2){let r;cI(r=uI())&&(t.heightTmplRef=r.first);}},decls:5,vars:3,consts:[["heightTmplRef",""],[1,"overflow-auto"],[3,"data","config"],[3,"content"]],template:function(e,t){e&1&&(mi(0,"div",1),Lp(1,"angular-generic-table",2),Zc(),Lp(2,"docs-tabs",3),xp(3,x,1,1,"ng-template",null,0,cC)),e&2&&(Ev(),Fp("data",t.data)("config",t.config),Ev(),Fp("content",t.SNIPPETS));},dependencies:[oi,Xn],encapsulation:2,changeDetection:1});}}return o})();export{D as FooterComponent};