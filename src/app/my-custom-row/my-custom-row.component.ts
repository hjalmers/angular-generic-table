import { Component, OnInit } from '@angular/core';
import {GtExpandedRow} from '../../generic-table/components/gt-expanding-row/gt-expanding-row.component';


@Component({
  selector: 'app-my-custom-row',
  templateUrl: './my-custom-row.component.html',
  styleUrls: ['./my-custom-row.component.scss']
})
export class MyCustomRowComponent extends GtExpandedRow implements OnInit {

  constructor() { super() }

  ngOnInit() {
  }

  public newRandomColor = function(){
    this.row.favorite_color = '#000'.replace(/0/g,f=>'0369cf'[Math.random()*6|0]);
  };

}
