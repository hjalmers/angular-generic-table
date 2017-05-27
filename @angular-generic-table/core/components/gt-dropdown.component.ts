import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'gt-dropdown',
  template: `
    <div class="dropdown gt-dropdown" [ngClass]="{'show':active}">
      <div class="dropdown-toggle" (click)="toggleDropdown()" [attr.aria-expanded]="active">{{selected}}</div>
      <div class="dropdown-menu" *ngIf="active">
        <div *ngFor="let option of options;" class="dropdown-item" (click)="select(option)" [ngClass]="{'active':option === selected}">{{option}}</div>
      </div>
    </div>
  `,
  styles: [`
    .gt-dropdown .dropdown-toggle {
      cursor: pointer;
    }
    .gt-dropdown .dropdown-toggle::after {
      transition: opacity 0.4s ease-in-out;
      opacity: 0;
    }
    .gt-dropdown .dropdown-toggle:hover::after {
      opacity: 1;
    }
    .gt-dropdown .dropdown-menu {
      max-height: 320px;
      overflow: auto;
    }`]
})
export class GtDropdownComponent implements OnInit, OnDestroy {

  get selected() {
    return this._selected;
  }

  _selected:any;
  @Input() set selected(selection) {
    this._selected = selection;
  }
  @Input() options:Array<any>;
  @Output() selectedChange:EventEmitter<any> = new EventEmitter();

  active:boolean = false; // is dropdown active or not
  state:Subject<boolean> = new Subject(); // current state of dropdown

  constructor(private renderer:Renderer2) { }

  select(option) {
    this.active = false;
    this.state.next(this.active);
    if(this._selected !== option) {
      this.selectedChange.emit(option);
    }
  }

  clickListener:Function;
  keyupListener:Function;

  toggleDropdown() {
    this.active = !this.active;
    setTimeout(()=>{this.state.next(this.active)},0);
  }

  ngOnInit() {
    this.state.subscribe((state)=> {
      if(state) {

        // set up click listener and listen for click outside dropdown
        this.clickListener = this.renderer.listen('document', 'click', (event:MouseEvent) => {
          this.active = false;
          this.state.next(this.active);
        });

        // set up keyboard listener and listen for escape key up
        this.keyupListener = this.renderer.listen('document', 'keyup', (event:KeyboardEvent) => {
          switch(event.key) {
            case 'Escape':
              this.active = false;
              this.state.next(this.active);
              break;
          }
        });
      } else {
        this.removeListeners();
      }
    });
  }

  ngOnDestroy(){
    this.removeListeners();
  }

  removeListeners() {
    if(this.clickListener) {
      this.clickListener();
    }
    if(this.keyupListener) {
      this.keyupListener();
    }
  }

}
