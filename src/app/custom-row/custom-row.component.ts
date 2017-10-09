import { Component, OnInit } from '@angular/core';
import {GtExpandedRow} from '@angular-generic-table/core';

@Component({
  selector: 'app-custom-row',
  templateUrl: './custom-row.component.html'
})
export class CustomRowComponent extends GtExpandedRow<any> implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

  public newRandomColor() {
    this.row.favorite_color = '#000'.replace(/0/g, f => '0369cf'[Math.random() * 6 | 0]); // generate new color and update favorite color
    this.$redraw(); // manually redraw table (since table uses on push and we're updating a object property)
  };

}
