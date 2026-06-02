import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { marked } from 'marked';

interface Release {
  name: string | null;
  tag_name: string;
  html_url: string;
  published_at: string;
  body: string;
  bodyHtml: string;
}

const RELEASES_URL = 'https://api.github.com/repos/hjalmers/angular-generic-table/releases';
const RELEASES_PAGE = 'https://github.com/hjalmers/angular-generic-table/releases';

@Component({
  selector: 'docs-changelog',
  template: `
    <div class="py-4">
      <h1 class="mb-3">Changelog</h1>
      <p class="lead mb-4">
        Recent releases of <code>&#64;angular-generic-table/core</code>, fetched live from GitHub.
      </p>

      @if (releases() === null && !error()) {
        <p class="text-body-secondary">Loading releases&hellip;</p>
      }

      @if (error()) {
        <div class="alert alert-warning" role="alert">
          Couldn't load releases ({{ error() }}). View them on
          <a [href]="releasesPage" target="_blank" rel="noopener">GitHub</a>.
        </div>
      }

      @for (release of releases(); track release.tag_name) {
        <article class="card mb-3">
          <div class="card-body">
            <h2 class="h5 card-title mb-1">
              <a [href]="release.html_url" target="_blank" rel="noopener" class="text-decoration-none">
                {{ release.name || release.tag_name }}
              </a>
            </h2>
            <p class="text-body-secondary small mb-3">
              <code>{{ release.tag_name }}</code>
              &middot; {{ release.published_at | date: 'mediumDate' }}
            </p>
            @if (release.bodyHtml) {
              <div class="changelog-body" [innerHTML]="release.bodyHtml"></div>
            } @else {
              <p class="text-body-secondary mb-0">No release notes.</p>
            }
          </div>
        </article>
      }

      @if (releases()?.length) {
        <p class="mt-4">
          <a [href]="releasesPage" target="_blank" rel="noopener"> View all releases on GitHub &rarr; </a>
        </p>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  styles: [
    `
      .changelog-body :is(h1, h2, h3, h4, h5, h6) {
        font-size: 1rem;
        font-weight: 600;
        margin: 1rem 0 0.25rem;
      }
      .changelog-body :is(h1, h2, h3, h4, h5, h6):first-child {
        margin-top: 0;
      }
      .changelog-body ul {
        padding-left: 1.25rem;
        margin-bottom: 0.5rem;
      }
      .changelog-body p:last-child,
      .changelog-body ul:last-child {
        margin-bottom: 0;
      }
      .changelog-body code {
        background: var(--bs-secondary-bg);
        padding: 0.1em 0.35em;
        border-radius: 0.25rem;
        font-size: 0.875em;
      }
    `,
  ],
})
export class ChangelogComponent implements OnInit {
  readonly releases = signal<Release[] | null>(null);
  readonly error = signal<string | null>(null);
  readonly releasesPage = RELEASES_PAGE;

  async ngOnInit(): Promise<void> {
    try {
      const response = await fetch(RELEASES_URL, {
        headers: { Accept: 'application/vnd.github+json' },
      });
      if (!response.ok) {
        this.error.set(`${response.status} ${response.statusText}`);
        return;
      }
      const data: Release[] = await response.json();
      this.releases.set(
        data.map((r) => ({
          ...r,
          bodyHtml: r.body?.trim() ? (marked.parse(r.body, { gfm: true, breaks: false }) as string) : '',
        })),
      );
    } catch (err) {
      this.error.set(err instanceof Error ? err.message : 'network error');
    }
  }
}
