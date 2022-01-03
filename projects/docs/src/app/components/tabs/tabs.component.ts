import { Component, Input, OnInit } from '@angular/core';
import { Story } from '@storybook/angular/types-6-0';
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
    <ul class="nav nav-tabs mt-4">
      <li class="nav-item" *ngFor="let item of content; let i = index">
        <button class="nav-link btn-link" [class.active]="activeIndex === i" (click)="view(i)">
          {{ item.name }}
        </button>
      </li>
    </ul>
    <ng-container *ngIf="activeContent">
      <pre><code [innerHTML]="activeContent?.value" class="{{'language-' + activeContent?.language}}"></code></pre>
    </ng-container>
  `,
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  get content(): any {
    return this._content;
  }

  @Input() set content(value: any) {
    this._content = value;
  }
  constructor() {}
  activeIndex = 0;
  activeContent: HighlightResult | undefined;

  private _content: Array<{}> = [];
  ngOnInit(): void {
    this.activeContent = hljs.highlight(this.content[this.activeIndex].code, {
      language: this.content[this.activeIndex].language,
    });
  }

  view(index: number): void {
    this.activeIndex = index;
    this.activeContent = hljs.highlight(this.content[index].code, { language: this.content[index].language });
  }
}

export const Tabs: Story<TabsComponent> = (args: TabsComponent) => ({
  props: args,
  component: TabsComponent,
});
