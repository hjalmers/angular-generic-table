# Angular Generic Table

Generic table version 5 has been rebuilt to be more efficient and to make it easier to customize and add new features. It still relies on native html tables for layout and rendering. Follow the instructions below to get started with the latest release candidate.


## Install

```
npm install @angular-generic-table/core@rc --save
```

## Import module
We recommend import `GenericTableCoreModule` into a shared module eg. `SharedModule` that can be imported into other, preferably lazy loaded modules when needed.
```ts
import { GenericTableCoreModule } from '@angular-generic-table/core';

@NgModule({
  declarations: [...],
  imports: [
    ...
    GenericTableCoreModule
  ],
  exports: [
    GenericTableCoreModule
  ]
})
export class SharedModule {}
```

## Import styling
We recommend setting up your Angular project to use scss (SASS) for css preprocessing.

Once configured to use scss, it's just a matter of including the scss to your main styles file, typically it would be `styles.scss` located at the root of the `src` folder unless you've changed it.

### Add scss
`{project}/src/styles.scss`

```scss
// import base styles from angular-generic-table/core
@use '~@angular-generic-table/core/scss' as generic-table-styles;
@include generic-table-styles.styles(); // all styles

// @include generic-table-styles.search-style(); // search (highlight) style
// @include generic-table-styles.mobile-style(); // mobile layout style
// @include generic-table-styles.pagination-style(); // pagination styles
```


### Override scss variables
It's possible to override the scss variables used by generic table by passing them when importing the scss.
`{project}/src/styles.scss`

```scss
// import base styles from angular-generic-table/core and override scss variables
@use '~@angular-generic-table/core/scss' as generic-table-styles with (
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

### Have other needs?
More examples and use cases coming soon! In the meantime create an [issue over at github](https://github.com/hjalmers/angular-generic-table/issues)

## Sponsored by

Angular Generic Table is sponsored by [Swimbird](https://www.swimbird.com/) - Portfolio Management.
