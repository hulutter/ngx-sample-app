import {browser, element, by} from 'protractor';

export class PhotosPage {
  navigateTo(userId: number, albumId: number) {
    return browser.get(`/user/${userId}/album/${albumId}/photos`);
  }

  getTitleText() {
    return element(by.css('h2')).getText();
  }
}
