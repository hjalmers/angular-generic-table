// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
	allScriptsTimeout: 11000,
	specs: ['./e2e/app-saucelabs.e2e-spec.ts'],
	multiCapabilities: [
		{
			browserName: 'chrome',
			version: '67.0',
			platform: 'Windows 10'
		},
		{
			browserName: 'safari',
			version: '11.1',
			platform: 'macOS 10.13'
		}
	],
	directConnect: false,
	baseUrl: 'http://localhost:4200/',
	seleniumAddress:
		'http://sefndemo:6e246020-d9d1-4d26-8d08-bed89c92a7f0@ondemand.saucelabs.com:80/wd/hub',
	framework: 'jasmine',
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000,
		print: function() {}
	},
	beforeLaunch: function() {},
	onPrepare() {
		require('ts-node').register({
			project: 'e2e/tsconfig.e2e.json'
		});

		jasmine
			.getEnv()
			.addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
	}
};
