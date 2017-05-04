import {browser, element, by} from 'protractor';

export class AlbumsPage {
  navigateTo(userId: number) {
    return browser.get(`/user/${userId}/albums`);
  }

  getTitleText() {
    return element(by.css('h2')).getText();
  }
}
