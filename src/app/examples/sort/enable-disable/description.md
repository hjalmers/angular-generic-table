## Enable/disable sort

All columns are sortable by default, to disable sorting for a particular column set `sortEnabled` to `false`.

```ts
configObject = {
	settings: [
		{
			objectKey: 'id',
			sortEnabled: false
		},
		{
			objectKey: 'name'
		},
		{
			objectKey: 'lucky_number'
		}
	]
	...
};
```
