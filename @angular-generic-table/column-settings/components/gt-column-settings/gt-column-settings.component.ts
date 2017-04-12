import { Component, OnInit, Input } from '@angular/core';
import {GenericTableComponent} from '../../../core/components/generic-table.component';

@Component({
  selector: 'gt-column-settings',
  templateUrl: './gt-column-settings.component.html',
  styleUrls: ['./gt-column-settings.component.scss']
})
export class GtColumnSettingsComponent implements OnInit {

  @Input() genericTable:GenericTableComponent<any,any>;
  public show:boolean = false;
  public height:number = 3;
  constructor(private dragulaService: DragulaService) {
    /*dragulaService.drag.subscribe((value) => {
     console.log(`drag: ${value[0]}`);
     this.onDrag(value.slice(1));
     });*/
    dragulaService.drop.subscribe((value) => {
      //console.log(`drop: ${value[0]}`,value);
      this.onDrop(value.slice(1));
    });
    /*dragulaService.over.subscribe((value) => {
     console.log(`over: ${value[0]}`);
     this.onOver(value.slice(1));
     });
     dragulaService.out.subscribe((value) => {
     console.log(`out: ${value[0]}`);
     this.onOut(value.slice(1));
     });*/
  }


  private onDrop(args) {
    let [e, target] = args;
    const order = {};
    for(let i = 0;i < target.children.length;i++) {
      order[target.children[i].getAttribute('data-object-key')] = i;
    }
    for(let i = 0; i < this.genericTable.gtSettings.length; i++ ) {
      this.genericTable.gtSettings[i].columnOrder = order[this.genericTable.gtSettings[i].objectKey];
    }
    this.genericTable.redraw();
  }

  public toggleVisibility(column) {
    column.visible = !column.visible;
    this.genericTable.redraw();
  }

  ngOnInit() {
  }

}
import { Pipe, PipeTransform } from '@angular/core';
import {GtConfigSetting} from '../../../core/interfaces/gt-config-setting';
import {DragulaService} from "ng2-dragula";


@Pipe({
  name: 'gtColumn'
})
export class GtColumnPipe implements PipeTransform {

  // TODO: move to helper functions
  /** Sort by column order */
  private getColumnOrder = function(a,b) {
    if (a.columnOrder < b.columnOrder)
      return -1;
    if (a.columnOrder > b.columnOrder || typeof a.columnOrder === 'undefined')
      return 1;
    return 0;
  };

  transform(settings: Array<GtConfigSetting>, visible:boolean): Array<GtConfigSetting> {

    return settings.sort(this.getColumnOrder);
  }
}
