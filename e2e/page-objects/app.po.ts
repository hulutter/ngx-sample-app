import {browser, by, element} from 'protractor';

export class AppRoot {
  navigateTo() {
    return browser.get('/');
  }

  getBreadCrumbText() {
    return element(by.css('.breadcrumb')).getText();
  }

  clickHomeLink() {
    const linkToClick = element(by.css('a.breadcrumb'));
    linkToClick.click();
  }
}
