import { GenericTableE2eTestsPage } from './app.po';
import {browser} from 'protractor';

describe('generic-table-e2e-tests App', () => {
  let page: GenericTableE2eTestsPage;

  beforeEach(() => {
    page = new GenericTableE2eTestsPage();
  });

  xit('should display message saying app works', () => {
    page.navigateTo('advanced');
    expect(page.getParagraphText()).toEqual('app works!');
  });
  it('should get titles text', () => {
    page.navigateTo('advanced');
    page.getSelectRows().click();

    browser.sleep(2000);
    page.getChooseRow().click();
    browser.sleep(2000);
    page.getSearchBox().sendKeys('Alice');
    browser.sleep(2000);
    expect(page.getEntriesNames().getText()).toContain('Alice');
    expect(page.getSelectRows().getAttribute('value')).toEqual(page.getChooseRow().getText());
    expect(page.getNbrOfRows().count()).toEqual(2);
  });
  it('should search Alice', () => {
    page.navigateTo('advanced');
  });
});
