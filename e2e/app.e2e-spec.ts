import { Angular2GenericTablePage } from './app.po';

describe('angular-generic-table App', function() {
	let page: Angular2GenericTablePage;
	page = new Angular2GenericTablePage();


	beforeAll(() => {
		page.eyesOpen();
	});

	afterAll(() => {
		page.eyesClose();
	});

	it('should open the basic example page', () => {
		page.navigateToBasicExample();
	});

	it('should grab a screenshot of the basic example', () => {
		page.eyesScreenshot("Basic");
	});

	it('should open the sort example page', () => {
		page.navigateToSortExample();
	});

	it('should grab a screenshot of the sort example', () => {
		page.eyesScreenshot("Sort");
	});

});
