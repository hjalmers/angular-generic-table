# Angular Generic Table

A lightweight, configurable table component for Angular. It renders native HTML
tables and supports sorting, pagination, search with highlighting, row
selection, keyboard navigation, custom cell/header templates and components, and
footer calculations.

Built for modern Angular — standalone components, signals, and `OnPush` change
detection throughout. Compatible with Angular 17 through 22.

## Install

```bash
npm install @angular-generic-table/core --save
```

## Usage

`CoreComponent` is a standalone component (selector: `angular-generic-table`).
Import it directly into the component where you need it:

```ts
import { Component } from '@angular/core';
import { CoreComponent, TableConfig } from '@angular-generic-table/core';

interface Person {
  firstName: string;
  lastName: string;
  favoriteFood: string;
}

@Component({
  selector: 'app-people',
  imports: [CoreComponent],
  template: `<angular-generic-table [data]="data" [config]="config" />`,
})
export class PeopleComponent {
  data: Array<Person> = [
    { firstName: 'Peter', lastName: 'Parker', favoriteFood: 'Pasta' },
    { firstName: 'Mary Jane', lastName: 'Watson', favoriteFood: 'Pizza' },
  ];

  config: TableConfig<Person> = {
    class: 'table table-striped table-bordered',
    columns: {
      firstName: {},
      lastName: {},
      favoriteFood: {},
    },
  };
}
```

> **Using NgModules?** A backward-compatibility `GenericTableCoreModule` is still
> exported. Add it to a module's `imports` (e.g. a shared module) to use the
> table in NgModule-based apps. New apps should prefer importing the standalone
> `CoreComponent` directly.

## Import styling

We recommend setting up your Angular project to use scss (SASS) for css
preprocessing.

Once configured to use scss, include the library styles in your main styles
file — typically `styles.scss` at the root of the `src` folder.

### Add scss

`{project}/src/styles.scss`

```scss
// import base styles from @angular-generic-table/core
@use '@angular-generic-table/core/scss' as generic-table-styles;
@include generic-table-styles.styles(); // all styles

// @include generic-table-styles.search-style();     // search (highlight) style
// @include generic-table-styles.mobile-style();      // mobile layout style
// @include generic-table-styles.pagination-style();  // pagination styles
```

> **Note:** The webpack-era `~` import prefix is no longer required (or
> supported) with Angular's current build system — import the package path
> directly as shown above.

### Override scss variables

It's possible to override the scss variables used by generic table by passing
them when importing the scss.
`{project}/src/styles.scss`

```scss
// import base styles from @angular-generic-table/core and override scss variables
@use '@angular-generic-table/core/scss' as generic-table-styles with (
    $highlight-background-color: purple,
    $mobile-style-max-width: 375px
);
@include generic-table-styles.styles();
```

**SCSS Variables**

|Name|Default value|
|:--|:--|
|$highlight-background-color: | #ffdd00; |
|$mobile-style-selector: | 'table.table-mobile'; |
|$mobile-style-max-width: | 576px; |
|$mobile-style-header-font-weight: | 500; |
|$mobile-style-header-background-color: | #fff; |
|$mobile-style-button-selector: | '.btn-sm'; |
|$mobile-style-border-bottom: | solid 1px #dedede; |
|$mobile-style-button-font-size: | 1rem; |
|$mobile-style-button-padding: | 0.5625rem 1rem; |
|$pagination-ellipsis-content: | '...'; |
|$pagination-active-color: | #000; |
|$pagination-justify-content: | center; |

## Examples

The repo ships a docs app with runnable examples (simple, sorting, pagination,
custom templates, mobile layout, transpose, footers, and more). Run it locally
with `ng serve docs`, or browse the source under `projects/docs/src/app/examples`.

## Have other needs?

Found a bug or have a feature request? Create an
[issue over at github](https://github.com/hjalmers/angular-generic-table/issues).

## Sponsored by

Angular Generic Table is sponsored by [Swimbird](https://www.swimbird.com/) - Portfolio Management.
