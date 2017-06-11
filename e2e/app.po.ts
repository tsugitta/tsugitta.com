import { browser, by, element } from 'protractor';

export class TsugittaCorporatePage {
  navigateTo() {
    return browser.get('/');
  }

  getAuthorName() {
    return element(by.css('.author-container .author')).getText();
  }
}
