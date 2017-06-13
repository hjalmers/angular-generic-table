import { GenericTableE2eTestsPage } from './app.po';
import { GenericTableE2eFunctionsPage } from './functions';
import {customMatchers} from './matchers/customMatchers';

describe('generic-table-e2e-tests App', () => {
  let page: GenericTableE2eTestsPage;
  let functions: GenericTableE2eFunctionsPage;
  beforeEach(() => {
    jasmine.addMatchers(customMatchers);
    page = new GenericTableE2eTestsPage();
    functions = new GenericTableE2eFunctionsPage();
  });
  describe('Core: Advanced example', () => {
    beforeEach(() => {
      page.navigateTo('advanced');
    });
    it('should select 25 rows as the number of rows visible in each page', () => {
      page.getSelectRows().click();
      page.get25RowsSelected().click();
      expect(page.getSelectRows().getAttribute('value')).toEqual(page.get25RowsSelected().getText());
      expect(page.getEntriesId().count()).toBe(25);
    });
    it('should search Alice', () => {
      page.getSearchBox().sendKeys('Alice');
      expect(page.getEntriesNames().getText()).toContain('Alice');
    });
    it('should select 10 rows as the number of rows visible in each page', () => {
      page.getIdColumn().click();
      expect(page.getEntriesId().count()).toBe(10);
    });
    it('should add data and check that the number of rows is added by one', () => {
      page.getInfoRowAboveTable().getText().then(function (arr) {
        const arr2a = arr.split(' ');
        const arr3a = parseFloat(arr2a[5]);
        page.getAddDataButton().click();
        const infoRow2 = functions.getInfoRowAboveTable(5);
        expect(infoRow2).toBe(arr3a + 1);
      });
    });
    it('should select and deselect a row and check that it is done', () => {
      const selectedNbr1 = functions.getNbrOfSelectedRows(1);
      page.getAllRows().first().click();
      const selectedNbr2 = functions.getNbrOfSelectedRows(1);
      expect(selectedNbr2).toBe(selectedNbr1);
      // deselect
      page.getAllRows().first().click();
      page.getNbrOfSelectedRows().getText().then(function (arr1b) {
        const arr2b = arr1b.split(':');
        const arr3b = parseFloat(arr2b[1]);
        expect(arr3b).toBe(0);
      });
    });
    it('should select all rows and show in the information row that the nbr of selected data is the same as the nbr of entries', () => {
      page.getSelectAllEntriesButton().click();
      const info1 = functions.getInfoRowAboveTable(5);
      const info2 = functions.getNbrOfSelectedRows(1);
      expect(info1).toEqual(info2);
    });
    it('should expand the first row in the table', () => {
      page.getExpandRow().click();
      expect(page.getAllRows().first().getAttribute('class')).toBe('row-selected row-open');
    });
    it('should expand and then collapse the first Id', () => {
      page.getExpandRow().click();
      page.getExpandRow().click();
      expect(page.getAllRows().first().getAttribute('class')).toBe('');
    });
    it('should expand the first row and then click on new random color and check that the color is changed', () => {
      page.getExpandRow().click();
      const color1 = page.getColorValue().getAttribute('style');
      page.getNewRandomColor().click();
      const color2 = page.getColorValue().getAttribute('style');
      expect(color1).not.toBe(color2);
    });
    it('should check that pagination works either to the next or to the previous page', () => {
      const infoRowBefore = page.getInfoRowAboveTable().getText();
      page.getNextPage().click();
      const infoRowAfter = page.getInfoRowAboveTable().getText();
      expect(infoRowAfter).not.toBe(infoRowBefore);
      page.getPreviousPage().click();
      const infoRowPreviousPage = page.getInfoRowAboveTable().getText();
      expect(infoRowPreviousPage).not.toBe(infoRowAfter);
    });
    it('should expand all the rows', () => {
      page.getExpandAll().click();
      functions.getAttributeOfAllRows('row-open');
    });
    it('should open "Show column settings" and check that the same columns are included in the table', () => {
      page.getShowColumnSettingsButton().click();
      functions.fetchColumnsInColumnsSettings(1);
    });
    it('should sort the table by Id and check that it is sorted accordingly', () => {
      functions.sortIdColumn(1);
    });
    it('should sort the table by Name and check that it is sorted accordingly', () => {
      functions.sortColumns(2);
    });
    it('should sort the table by email and check that it is sorted accordingly', () => {
      functions.sortColumns(3);
    });
    it('should sort the table by gender and check that it is sorted accordingly', () => {
      functions.sortColumns(4);
    });
  });
});
