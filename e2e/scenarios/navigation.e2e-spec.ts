import {UsersPage} from '../page-objects/users.po';
import {AlbumsPage} from '../page-objects/albums.po';
import {PhotosPage} from '../page-objects/photos.po';
import {PhotoPage} from '../page-objects/photo.po';
import {AppRoot} from '../page-objects/app.po';
import {browser} from 'protractor';

describe('ngx-sample-app Navigation', () => {
  let appRoot: AppRoot;
  let usersPage: UsersPage;
  let albumsPage: AlbumsPage;
  let photosPage: PhotosPage;
  let photoPage: PhotoPage;

  beforeEach(() => {
    appRoot = new AppRoot();
    usersPage = new UsersPage();
    albumsPage = new AlbumsPage();
    photosPage = new PhotosPage();
    photoPage = new PhotoPage();
  });

  it('should route to Users page as the default page', () => {
    appRoot.navigateTo();
    expect(usersPage.getTitleText()).toEqual('Users');

    browser.get('/test1234');
    expect(usersPage.getTitleText()).toEqual('Users');
  });

  it('should route directly to Users page', () => {
    usersPage.navigateTo();
    expect(usersPage.getTitleText()).toEqual('Users');
  });

  it('should route directly to Albums page', () => {
    const userId = 0;

    albumsPage.navigateTo(userId);
    expect(albumsPage.getTitleText()).toEqual('Albums');
  });

  it('should route directly to Photos page', () => {
    const userId = 0;
    const albumId = 0;

    photosPage.navigateTo(userId, albumId);
    expect(photosPage.getTitleText()).toEqual('Photos');
  });

  it('should route directly to Photo page', () => {
    const userId = 0;
    const albumId = 0;
    const photoId = 0;

    photoPage.navigateTo(userId, albumId, photoId);
    expect(photoPage.getTitleText()).toEqual('Photo');
  });
});
