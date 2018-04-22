// The values provided below are the defaults.
// If you don't specify one of these properties,
// the default value will be applied.
module.exports = {
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'none', // other options `es5` or `all`
	bracketSpacing: true,
	arrowParens: 'avoid', // other option 'always'
	parser: 'typescript',
	overrides: [
		{
			files: '**/*.json',
			options: {
				parser: 'json',
				singleQuote: false
			}
		},
		{
			files: '**/*.scss',
			options: {
				parser: 'css'
			}
		},
		{
			files: '**/*.md',
			options: {
				parser: 'markdown'
			}
		}
	]
};
