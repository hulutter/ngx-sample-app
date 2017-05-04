import {browser, element, by} from 'protractor';

export class UsersPage {
  navigateTo() {
    return browser.get('/users');
  }

  getTitleText() {
    return element(by.css('h2')).getText();
  }

  clickAlbumsButton() {
    const buttonToClick = element(by.css('button'));
    buttonToClick.click();
  }
}
