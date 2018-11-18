import {
	ChangeDetectorRef,
	Directive,
	ElementRef,
	HostListener,
	Input
} from '@angular/core';

@Directive({
	selector: '[gtColumnWidth]'
})
export class GtColumnWidthDirective {
	@Input() objectKey: string;
	@Input() widths: Object;
	@HostListener('window:resize', ['$event'])
	public onResize($event: any) {
		this.checkSize();
	}
	constructor(
		private hostElement: ElementRef,
		private cdRef: ChangeDetectorRef
	) {}
	ngOnInit() {
		this.checkSize();
	}

	checkSize() {
		this.widths[this.objectKey] = window
			.getComputedStyle(this.hostElement.nativeElement, null)
			.getPropertyValue('width');
		this.cdRef.detectChanges();
	}
}
