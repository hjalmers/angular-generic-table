import { Angular2GenericTablePage } from './app.po';

describe('angular-generic-table App', function() {
	let page: Angular2GenericTablePage;

	beforeEach(() => {
		page = new Angular2GenericTablePage();
	});

	it('should display message saying app works', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('app works!');
	});
});
