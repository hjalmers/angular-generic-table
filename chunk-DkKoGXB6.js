import {o as oi}from'./chunk-ugwy61Id.js';import {V as Vo,I as IE,J as JE,m as mi,f as $p,k as kI,Z as Zc,L as Lp,E as Ev,F as Fp,X as Xc,R as Rl,D as dI,t as kl}from'./main-ZDTAVTQ2.js';import {X as Xn}from'./chunk-BSQMMumy.js';var h=[{name:"row-hover-click.component.ts",code:`import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CoreComponent, GtRowClickEvent, GtRowActiveEvent, TableConfig } from '@angular-generic-table/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SOURCE_TABS } from './_source';

@Component({
  selector: 'docs-row-hover-click',
  template: \`
    <div class="overflow-auto">
      <button class="btn btn-outline-primary me-3" (click)="tableRef.activateRow(1)">Mark second row as active</button>
      <button class="btn btn-outline-primary" (click)="tableRef.activateRow(null)">Remove active state</button>
      <angular-generic-table
        [data]="data"
        [config]="config"
        (rowClick)="onRowClick($event)"
        (rowActive)="onRowHover($event)"
        #tableRef
      ></angular-generic-table>
    </div>
    {{ clicked() }}
    <docs-tabs [content]="SNIPPETS"></docs-tabs>
  \`,
  styles: [
    \`
      :host ::ng-deep .gt-active {
        --bs-table-bg-state: var(--bs-highlight-bg);
      }
    \`,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CoreComponent, TabsComponent],
})
export class RowHoverClickComponent {
  clicked = signal('');
  data = [
    { firstName: 'Peter', lastName: 'Parker', gender: 'male', favoriteFood: 'Pasta' },
    { firstName: 'Mary Jane', lastName: 'Watson', gender: 'female', favoriteFood: 'Pizza' },
  ];
  config: TableConfig = {
    columns: { firstName: {}, lastName: {}, gender: {}, favoriteFood: {} },
    rowClick: true,
    activateRowOnHover: true,
  };

  onRowClick(event: GtRowClickEvent) {
    console.log('row clicked', event);
    this.clicked.set(\`clicked row number: \${event.index}\`);
  }
  onRowHover(event: GtRowActiveEvent) {
    console.log('row hovered', event);
  }

  SNIPPETS = SOURCE_TABS;
}
`,language:"typescript"}];var D=(()=>{class o{constructor(){this.clicked=Vo(""),this.data=[{firstName:"Peter",lastName:"Parker",gender:"male",favoriteFood:"Pasta"},{firstName:"Mary Jane",lastName:"Watson",gender:"female",favoriteFood:"Pizza"}],this.config={columns:{firstName:{},lastName:{},gender:{},favoriteFood:{}},rowClick:true,activateRowOnHover:true},this.SNIPPETS=h;}onRowClick(t){console.log("row clicked",t),this.clicked.set(`clicked row number: ${t.index}`);}onRowHover(t){console.log("row hovered",t);}static{this.\u0275fac=function(i){return new(i||o)};}static{this.\u0275cmp=IE({type:o,selectors:[["docs-row-hover-click"]],decls:9,vars:4,consts:[["tableRef",""],[1,"overflow-auto"],[1,"btn","btn-outline-primary","me-3",3,"click"],[1,"btn","btn-outline-primary",3,"click"],[3,"rowClick","rowActive","data","config"],[3,"content"]],template:function(i,n){if(i&1){let w=JE();mi(0,"div",1)(1,"button",2),$p("click",function(){Rl(w);let e=dI(6);return kl(e.activateRow(1))}),kI(2,"Mark second row as active"),Zc(),mi(3,"button",3),$p("click",function(){Rl(w);let e=dI(6);return kl(e.activateRow(null))}),kI(4,"Remove active state"),Zc(),mi(5,"angular-generic-table",4,0),$p("rowClick",function(e){return n.onRowClick(e)})("rowActive",function(e){return n.onRowHover(e)}),Zc()(),kI(7),Lp(8,"docs-tabs",5);}i&2&&(Ev(5),Fp("data",n.data)("config",n.config),Ev(2),Xc(" ",n.clicked()," "),Ev(),Fp("content",n.SNIPPETS));},dependencies:[oi,Xn],styles:["[_nghost-%COMP%]     .gt-active{--bs-table-bg-state: var(--bs-highlight-bg)}"],changeDetection:1});}}return o})();export{D as RowHoverClickComponent};