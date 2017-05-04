import {browser, by, element} from 'protractor';

export class AppRoot {
  navigateTo() {
    return browser.get('/');
  }

  getBreadCrumbText() {
    return element(by.css('.breadcrumb')).getText();
  }
}
