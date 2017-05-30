import { browser, by, element } from 'protractor';

export class GenericTableE2eTestsPage {
  navigateTo(page) {
     return browser.get('/');
    // return browser.get('https://hjalmers.github.io/angular-generic-table/' + page);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getSelectRows() {
    return element(by.id('rows'));
  }
  getChooseRow() {
    return element(by.css('[ng-reflect-value="25"]'));
  }
  getNbrOfRows() {
    return element.all(by.css('[ng-reflect-ng-class="[object Object]"]'));
  }
  getSearchBox() {
    return element.all(by.css('[class="form-control form-control-sm mb-2 mr-sm-2 mb-lg-0"]')).get(1);
  };
  getEntriesNames() {
    return element.all(by.css('[ng-reflect-ng-class="[object Object]"]')).all(by.tagName('td')).get(1);
  }
}
