// Helper component to add dynamic components
import {
  ViewContainerRef, ViewChild, Component, ComponentFactoryResolver, Input, ComponentRef,
  Output,EventEmitter
} from '@angular/core';
@Component({
  selector: 'gt-expanding-row',
  template: `<div #expandingRow></div>`
})
export class GtExpandingRowComponent {
  @ViewChild('expandingRow', {read: ViewContainerRef}) target: ViewContainerRef;
  @Input() type: any;
  @Input() row: {
    isOpen:boolean
  };
  @Output() redrawEvent = new EventEmitter();

  private cmpRef: ComponentRef<Component>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
    this.cmpRef = this.target.createComponent(factory);
    const instance = <GtExpandedRow>this.cmpRef.instance;
    instance.row = this.row;
    instance.redrawEvent = this.redrawEvent;
  }


  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}

@Component({})
export class GtExpandedRow {

  @Input() row;
  @Input() column;
  @Output() redrawEvent = new EventEmitter();

  constructor() {}

  protected $hide(): void {
    this.row.isOpen = false;
  }

  protected $redraw():void {
    this.redrawEvent.emit(this.row)
  }

}
