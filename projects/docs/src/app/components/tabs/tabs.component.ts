import { Component, Input, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/core';
import { HighlightResult } from 'highlight.js';

import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('xml', xml);

@Component({
  selector: 'docs-tabs',
  template: `
    <ul class="nav nav-tabs mt-4 flex-nowrap text-nowrap overflow-auto">
      @for (item of content; track $index; let i = $index) {
        <li class="nav-item">
          <button
            class="nav-link btn-link"
            [class.active]="activeIndex === i"
            (click)="view(i)"
          >
            {{ item.name }}
          </button>
        </li>
      }
    </ul>
    @if (activeContent) {
      <pre><code [innerHTML]="activeContent.value" class="{{'language-' + activeContent.language}}"></code></pre>
    }
  `,
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() content: Array<{ name: string; code: string; language: string }> = [];
  activeIndex = 0;
  activeContent: HighlightResult | undefined;

  ngOnInit(): void {
    this.activeContent = hljs.highlight(this.content[this.activeIndex].code, {
      language: this.content[this.activeIndex].language,
    });
  }

  view(index: number): void {
    this.activeIndex = index;
    this.activeContent = hljs.highlight(this.content[index].code, {
      language: this.content[index].language,
    });
  }
}