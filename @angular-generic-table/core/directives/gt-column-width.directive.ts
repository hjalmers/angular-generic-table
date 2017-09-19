import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[gtColumnWidth]',
    host: {
        '(window:resize)': 'onResize($event)'
    }
})
export class GtColumnWidthDirective implements OnInit {

  @Input() objectKey: string;
  @Input() widths: string;
    constructor(private hostElement: ElementRef) { }
    ngOnInit() {
        this.checkSize();
    }

    onResize($event: any) {
        this.checkSize();
    }

    checkSize() {
        this.widths[this.objectKey] = window.getComputedStyle(this.hostElement.nativeElement, null).getPropertyValue('width');
        console.log(this.widths);
    }
}
