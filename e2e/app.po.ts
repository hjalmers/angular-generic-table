import { browser, by, element } from 'protractor';
const genericTable = element(by.css('[ng-reflect-klass="table"]'));

export class GenericTableE2eTestsPage {
  navigateTo(page) {
    return browser.get('https://hjalmers.github.io/angular-generic-table/' + page);
  }
  getSelectRows() {
    return element(by.id('rows'));
  }
  get25RowsSelected() {
    return element(by.css('[ng-reflect-value="25"]'));
  }
  getAllRows() {
    return genericTable.all(by.css('[ng-reflect-ng-class="[object Object]"]'));
  }
  getSearchBox() {
    return element.all(by.css('[class="form-control form-control-sm mb-2 mr-sm-2 mb-lg-0"]')).get(1);
  };
  getEntriesNames() {
    return element.all(by.css('[ng-reflect-ng-class="[object Object]"]')).all(by.tagName('td')).get(1);
  }
  getIdColumn() {
    return genericTable.all(by.css('[ng-reflect-ng-class="id-column clickable sort-numer"]')).first();
  }
  getEntriesId() {
    return genericTable.element(by.tagName('tbody')).all(by.tagName('tr'));
  }
  getAddDataButton() {
    return element(by.buttonText('Add data'));
  }
  getInfoRowAboveTable() {
    return element.all(by.css('[ng-reflect-generic-table="[object Object]"]')).first();
  }
  getNbrOfSelectedRows() {
    return element(by.tagName('small'));
  }
  getSelectAllEntriesButton() {
    return element(by.buttonText('Select all'));
  }
  getExpandRow() {
    return genericTable.all(by.css('[ng-reflect-ng-class="[object Object]"]')).all(by.tagName('span')).get(1);
  }
  getNewRandomColor() {
    return element(by.buttonText('New random color'));
  }
  getColorValue() {
    return element.all(by.css('[class="form-group col-sm-3"]')).get(3).element(by.tagName('div'));
  }
  getNextPage() {
    return element(by.css('[aria-label="Next page"]'));
  }
  getPreviousPage() {
    return element(by.css('[aria-label="Previous page"]'));
  }
  getExpandAll() {
    return element(by.buttonText('Expand all'));
  }
  getShowColumnSettingsButton() {
    return element(by.buttonText('Show column settings'));
  }
  getDisplayedColumnsInList() {
    return element.all(by.css('[class="gt-column-settings-item pr-0 pr-sm-4"]'));
  };
  getColumnsName() {
    return genericTable.element(by.tagName('thead')).element(by.tagName('tr')).all(by.tagName('th'));
  }
}
