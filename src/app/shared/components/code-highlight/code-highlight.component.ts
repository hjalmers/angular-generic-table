import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	ViewChild
} from '@angular/core';
import { CodeHighlightService } from '../../services/code-highlight.service';

@Component({
	selector: 'app-code-highlight',
	template: `<pre class="py-3 m-0 language-{{ lang }}"><code #code class="language-{{ lang }}"></code></pre>`,
	styles: []
})
export class CodeHighlightComponent implements AfterViewInit {
	get code(): string {
		return this._code;
	}

	@Input()
	set code(value: string) {
		if (this._code) {
			this.highlight(value);
		}
		this._code = value;
	}
	@ViewChild('code') codeEl: ElementRef;

	private _code = '';
	@Input() lang = '';
	constructor(private _codeHighlight: CodeHighlightService) {}

	ngAfterViewInit() {
		this.highlight(this._code);
	}

	highlight(code: string) {
		this.codeEl.nativeElement.innerHTML = this._codeHighlight.highlight(
			code,
			this.lang
		);
	}
}
