import{b as _}from"./chunk-3UXWR73U.js";import"./chunk-QFSOMC5Z.js";import{a as R}from"./chunk-AXENTG2G.js";import{$a as a,Ia as b,Y as v,Z as d,_a as p,ab as c,bb as u,gb as C,ha as f,ib as l,tb as g,xa as r,xb as s,zb as k}from"./chunk-UFU3N23S.js";var h=[{name:"row-hover-click.component.ts",code:`import { Component, signal } from '@angular/core';
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
`,language:"typescript"}];var A=(()=>{class o{constructor(){this.clicked=f(""),this.data=[{firstName:"Peter",lastName:"Parker",gender:"male",favoriteFood:"Pasta"},{firstName:"Mary Jane",lastName:"Watson",gender:"female",favoriteFood:"Pizza"}],this.config={columns:{firstName:{},lastName:{},gender:{},favoriteFood:{}},rowClick:!0,activateRowOnHover:!0},this.SNIPPETS=h}onRowClick(t){console.log("row clicked",t),this.clicked.set(`clicked row number: ${t.index}`)}onRowHover(t){console.log("row hovered",t)}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=b({type:o,selectors:[["docs-row-hover-click"]],decls:9,vars:4,consts:[["tableRef",""],[1,"overflow-auto"],[1,"btn","btn-outline-primary","me-3",3,"click"],[1,"btn","btn-outline-primary",3,"click"],[3,"rowClick","rowActive","data","config"],[3,"content"]],template:function(i,n){if(i&1){let w=C();a(0,"div",1)(1,"button",2),l("click",function(){v(w);let e=g(6);return d(e.activateRow(1))}),s(2,"Mark second row as active"),c(),a(3,"button",3),l("click",function(){v(w);let e=g(6);return d(e.activateRow(null))}),s(4,"Remove active state"),c(),a(5,"angular-generic-table",4,0),l("rowClick",function(e){return n.onRowClick(e)})("rowActive",function(e){return n.onRowHover(e)}),c()(),s(7),u(8,"docs-tabs",5)}i&2&&(r(5),p("data",n.data)("config",n.config),r(2),k(" ",n.clicked()," "),r(),p("content",n.SNIPPETS))},dependencies:[_,R],styles:["[_nghost-%COMP%]     .gt-active{--bs-table-bg-state: var(--bs-highlight-bg)}"]})}}return o})();export{A as RowHoverClickComponent};
