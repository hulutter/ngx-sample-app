import { NgxSampleAppPage } from './app.po';

describe('ngx-sample-app App', () => {
  let page: NgxSampleAppPage;

  beforeEach(() => {
    page = new NgxSampleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
