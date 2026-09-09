import{A as MI,H as Qp,Lt as jE,Ot as gI,Q as Ul,Y as Ti,a as $l,an as ru,ot as Yo,qt as nh,sn as sD,st as Yp,yt as cu,z as QI}from"./main-SGD45EGE.js";import{n as ai}from"./chunk-EwprI_mx.js";import{t as Xn}from"./chunk-C11RZllr.js";var h=[{name:`row-hover-click.component.ts`,code:`import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
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
`,language:`typescript`}];var D=(()=>{class o{constructor(){this.clicked=Yo(``),this.data=[{firstName:`Peter`,lastName:`Parker`,gender:`male`,favoriteFood:`Pasta`},{firstName:`Mary Jane`,lastName:`Watson`,gender:`female`,favoriteFood:`Pizza`}],this.config={columns:{firstName:{},lastName:{},gender:{},favoriteFood:{}},rowClick:!0,activateRowOnHover:!0},this.SNIPPETS=h}onRowClick(t){console.log(`row clicked`,t),this.clicked.set(`clicked row number: ${t.index}`)}onRowHover(t){console.log(`row hovered`,t)}static{this.ɵfac=function(i){return new(i||o)}}static{this.ɵcmp=jE({type:o,selectors:[[`docs-row-hover-click`]],decls:9,vars:4,consts:[[`tableRef`,``],[1,`overflow-auto`],[1,`btn`,`btn-outline-primary`,`me-3`,3,`click`],[1,`btn`,`btn-outline-primary`,3,`click`],[3,`rowClick`,`rowActive`,`data`,`config`],[3,`content`]],template:function(i,n){if(i&1){let w=gI();Ti(0,`div`,1)(1,`button`,2),nh(`click`,function(){$l(w);return Ul(MI(6).activateRow(1))}),QI(2,`Mark second row as active`),ru(),Ti(3,`button`,3),nh(`click`,function(){$l(w);return Ul(MI(6).activateRow(null))}),QI(4,`Remove active state`),ru(),Ti(5,`angular-generic-table`,4,0),nh(`rowClick`,function(e){return n.onRowClick(e)})(`rowActive`,function(e){return n.onRowHover(e)}),ru()(),QI(7),Qp(8,`docs-tabs`,5)}i&2&&(sD(5),Yp(`data`,n.data)(`config`,n.config),sD(2),cu(` `,n.clicked(),` `),sD(),Yp(`content`,n.SNIPPETS))},dependencies:[ai,Xn],styles:[`[_nghost-%COMP%]     .gt-active{--%NS%bs-table-bg-state: var(--%NS%bs-highlight-bg)}`],changeDetection:1})}}return o})();export{D as RowHoverClickComponent};