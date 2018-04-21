## In memory array

Table with static data in memory, sorting enabled (is enabled by default) and simple pagination.
### Markdown example
---
This is an **example** where we bind a variable to the `markdown` component that is also bind to a textarea.

#### example.component.ts
```typescript
public markdown = "# Markdown";
```

#### example.component.html
```html
<textarea [(ngModel)]="markdown"></textarea>
<markdown [data]="markdown"></markdown>
```
