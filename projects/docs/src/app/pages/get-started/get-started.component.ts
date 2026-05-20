import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TabsComponent } from '../../components/tabs/tabs.component';

const STYLES_SNIPPET = `// {project}/src/styles.scss
@use '@angular-generic-table/core/scss' as generic-table-styles;
@include generic-table-styles.styles(); // all styles

// Or include only the parts you need:
// @include generic-table-styles.search-style();     // search highlight
// @include generic-table-styles.mobile-style();     // mobile layout
// @include generic-table-styles.pagination-style(); // pagination
`;

const USAGE_SNIPPET = `import { Component } from '@angular/core';
import { CoreComponent, TableConfig } from '@angular-generic-table/core';

interface Person {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-people',
  template: \`
    <angular-generic-table [data]="data" [config]="config"></angular-generic-table>
  \`,
  imports: [CoreComponent],
})
export class PeopleComponent {
  data: Array<Person> = [
    { firstName: 'Peter', lastName: 'Parker' },
    { firstName: 'Mary Jane', lastName: 'Watson' },
  ];
  config: TableConfig<Person> = {
    class: 'table table-striped',
    columns: {
      firstName: {},
      lastName: {},
    },
  };
}
`;

@Component({
  selector: 'docs-get-started',
  template: `
    <div class="py-4">
      <h1 class="mb-3">Get started</h1>
      <p class="lead mb-4">
        Install the package, pull in the styles, and drop the component into a template.
      </p>

      <h2 class="h5 mt-4 mb-2">1. Install</h2>
      <p>Add the library to your Angular project:</p>
      <pre class="bg-body-tertiary border rounded p-3"><code>npm install &#64;angular-generic-table/core</code></pre>

      <h2 class="h5 mt-5 mb-2">2. Add styles</h2>
      <p>
        Import the SCSS in your global stylesheet. Override the exposed variables
        in the <code>with(...)</code> block if you want to theme it:
      </p>
      <docs-tabs [content]="scssTabs"></docs-tabs>

      <h2 class="h5 mt-5 mb-2">3. Use the component</h2>
      <p>
        Import <code>CoreComponent</code> in any standalone component and pass it
        a <code>data</code> array plus a <code>config</code> describing the columns:
      </p>
      <docs-tabs [content]="usageTabs"></docs-tabs>

      <p class="mt-5">
        Next: explore the <a routerLink="/simple">examples</a> to see sorting,
        pagination, custom templates, and more.
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, TabsComponent],
})
export class GetStartedComponent {
  scssTabs = [{ name: 'styles.scss', code: STYLES_SNIPPET, language: 'scss' }];
  usageTabs = [{ name: 'people.component.ts', code: USAGE_SNIPPET, language: 'typescript' }];
}
