## Change sort behavior

By default sorting goes through the following sort cycle:

1.  Unsorted (initial order)
2.  Sorted ascending
3.  Sorted descending
4.  Unsorted (initial order)
5.  And so on...

You can change this behavior and prevent the table from going back to an unsorted state once sorted by setting `allowUnsorted` to `false`.

```ts
options: GtOptions = {
	allowUnsorted: false
};
```

With `allowUnsorted` set to `false` sorting will behave as follows:

1.  Unsorted (initial order)
2.  Sorted ascending
3.  Sorted descending
4.  Sorted ascending
5.  Sorted descending
6.  And so on...
