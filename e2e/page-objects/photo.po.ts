import {browser, element, by} from 'protractor';

export class PhotoPage {
  navigateTo(userId: number, albumId: number, photoId: number) {
    return browser.get(`/user/${userId}/album/${albumId}/photo/${photoId}`);
  }

  getTitleText() {
    return element(by.css('h2')).getText();
  }
}
