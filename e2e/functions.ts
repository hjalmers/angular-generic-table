import {protractor} from 'protractor/built/ptor';
import {GenericTableE2eTestsPage} from './app.po';
import { browser, by, element } from 'protractor';
/**
 * Created by S89629 on 6/5/2017.
 */
let page: GenericTableE2eTestsPage;
page = new GenericTableE2eTestsPage();
const deferred = protractor.promise.defer();
export class GenericTableE2eFunctionsPage {
  getInfoRowAboveTable = function (arrNbr) {
    page.getInfoRowAboveTable().getText().then(function (arr1) {
      const arr2 = arr1.split(' ');
      const arr3 = parseFloat(arr2[arrNbr]);
      deferred.fulfill(arr3);
    });
    return deferred.promise;
  };
  getNbrOfSelectedRows = function (arrNbr) {
    page.getNbrOfSelectedRows().getText().then(function (arr1b) {
      const arr2b = arr1b.split(':');
      const arr3b = parseFloat(arr2b[arrNbr]);
      deferred.fulfill(arr3b);
    });
    return deferred.promise;
  };
  getAttributeOfAllRows = function (className) {
    page.getAllRows().each(function (eachRow) {
      eachRow.getAttribute('class').then(function (classAttribute) {
        deferred.fulfill(classAttribute);
        expect(classAttribute).toBe(className);
      });
    });
    return deferred.promise;
  };
  fetchColumnsInColumnsSettings = function (arrNbr) {
    const meat = page.getDisplayedColumnsInList().getText().then(function (ss) {
      const tableColumnTitles = page.getColumnsName().getText().then(function (cc) {
        const idT = cc[1];
        const ids = ss[0].split(' ');
        expect(ids[arrNbr]).toBe(idT);
        const names = ss[1].split(' ');
        expect(names[arrNbr]).toBe(cc[2]);
        const emails = ss[2].split(' ');
        expect(emails[arrNbr]).toBe(cc[3]);
        const genders = ss[3].split(' ');
        expect(genders[arrNbr]).toBe(cc[4]);
        const favoriteColor = ss[4].split(' ');
        expect(cc[5]).toContain(favoriteColor[arrNbr]);
      });
    });
    return deferred.promise;
  };
  sortIdColumn = function (columns) {
    page.getColumnsName().then(function (headers) {
      headers[columns].click();
      browser.sleep(9000);
      page.getAllRows().then(function (rows) {
        const nbrOfElements = rows.length;
        for (let i = 0; i < nbrOfElements - 1 ; i++) {
          rows[i].all(by.css('[class="gt-row-content"]')).then(function (columns1) {
            rows[i + 1].all(by.css('[class="gt-row-content"]')).then(function (columns2) {
              const rowElem1 = columns1[columns - 1].getText().then(function (columnsInfo1) {
                const firstElem = columnsInfo1[0];
                const rowElem2 = columns2[columns - 1].getText().then(function (columnsInfo2) {
                  const secondElem = columnsInfo2[0];
                  expect(parseFloat(columnsInfo2)).toBeGreaterThanOrEqual(parseFloat(columnsInfo1));
                });
              });
            });
          });
        }
      });
    });
  };
  sortColumns = function (columns) {
    page.getColumnsName().then(function (headers) {
      headers[columns].click();
      browser.sleep(9000);
      page.getAllRows().then(function (rows) {
        const nbrOfElements = rows.length;
        for (let i = 0; i < nbrOfElements - 1 ; i++) {
          rows[i].all(by.css('[class="gt-row-content"]')).then(function (columns1) {
            rows[i + 1].all(by.css('[class="gt-row-content"]')).then(function (columns2) {
              const rowElem1 = columns1[columns - 1].getText().then(function (columnsInfo1) {
                const firstElem = columnsInfo1[0];
                const rowElem2 = columns2[columns - 1].getText().then(function (columnsInfo2) {
                  const secondElem = columnsInfo2[0];
                  expect(columnsInfo2).toBeGreaterThanOrEqual(columnsInfo1);
                });
              });
            });
          });
        }
      });
    });
  };
}
