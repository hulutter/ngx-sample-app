import {AppRoot} from '../page-objects/app.po';
import {browser} from 'protractor';

describe('ngx-sample-app App', () => {
  let page: AppRoot;

  beforeEach(() => {
    page = new AppRoot();
  });

  it('should display navbar with »Home« element', () => {
    page.navigateTo();
    expect(page.getBreadCrumbText()).toEqual('Home');
  });

  it('should redirect to default route /users', () => {
    const defaultRoute = '/users';

    page.navigateTo(); // navigates to '/'
    expect(browser.getCurrentUrl()).toContain(defaultRoute);
  });
});
