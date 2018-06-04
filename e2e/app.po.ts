import { browser, element, by } from 'protractor';
var Eyes = require("eyes.selenium").Eyes;
var eyes = new Eyes();
eyes.setApiKey("Vo23SJi4d1X7ngU8gYmdF2DoEwBbub2tVXSYBkspysE110");

// obtain the ID from the environment variables - the name should be specified as null
var batchName =  null;
var batchId   = process.env.APPLITOOLS_BATCH_ID;

//  set the batch
eyes.setBatch(batchName,batchId,0);

export class Angular2GenericTablePage {
	navigateToBasicExample() {
		return browser.get('http://localhost:4200/example-usage#basic');
	}

	navigateToSortExample() {
		return browser.get('http://localhost:4200/sort#enableDisableSort');
	}

	getParagraphText() {
		return element(by.css('app-root h1')).getText();
	}

	eyesOpen() {
        eyes.open(browser, "Angular Generic Table", "Demo time!");
	}

	eyesScreenshot(name: string) {
		eyes.checkWindow(name);
	}

	eyesClose() {
		eyes.close();
	}

}
