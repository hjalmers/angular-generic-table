import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'docs-intro',
  template: `
    <div class="py-4">
      <h1 class="display-5 fw-semibold mb-3">Angular Generic Table</h1>
      <p class="lead mb-4">
        A configurable Angular table component built on native HTML tables. Rebuilt from the ground up for Angular's
        modern signals-based reactivity — fast by default, easy to customize, and just a few lines of code to drop in.
      </p>

      <h2 class="h5 mt-5 mb-3">Features</h2>
      <ul class="mb-4">
        <li>Sorting (single or multiple columns) with accessible ARIA semantics</li>
        <li>Client-side or server-side pagination</li>
        <li>Global search with match highlighting</li>
        <li>Row selection and keyboard navigation</li>
        <li>Footer rows with built-in calculations</li>
        <li>Custom cell and header rendering via templates or components</li>
        <li>Mobile layout, horizontal layout, and transpose for nested data</li>
      </ul>

      <h2 class="h5 mt-5 mb-3">Version compatibility</h2>
      <p>Pick the library version that matches your Angular version:</p>
      <div class="table-responsive mb-4">
        <table class="table table-sm table-bordered align-middle mb-0">
          <thead>
            <tr>
              <th scope="col">Library version</th>
              <th scope="col">Angular versions</th>
            </tr>
          </thead>
          <tbody>
            @for (row of compatibility; track row.version) {
              <tr>
                <th scope="row">
                  <code>{{ row.version }}</code>
                </th>
                <td>{{ row.angular }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <a routerLink="/get-started" class="btn btn-primary">Get started &rarr;</a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class IntroComponent {
  compatibility = [
    { version: '5.x', angular: '17 – 21' },
    { version: '5.0.0-rc', angular: '12 – 15' },
    { version: '5.0.0-alpha', angular: '7 – 11' },
    { version: '4.x', angular: '4 – 11' },
  ];
}
