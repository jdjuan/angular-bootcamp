import { SEEDPage } from './app.po';

describe('seed App', () => {
  let page: SEEDPage;

  beforeEach(() => {
    page = new SEEDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
