## Using REST API

Nulla in mauris convallis, auctor ligula a, scelerisque ex. Vivamus hendrerit semper orci, eget efficitur diam. Suspendisse enim leo, laoreet ac auctor eu, tempus eu erat. Morbi sed erat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

#### example.component.ts
```typescript
public markdown = "# Markdown";
```

#### example.component.html
```html
<textarea [(ngModel)]="markdown"></textarea>
<markdown [data]="markdown"></markdown>
```
