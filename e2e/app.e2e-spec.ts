import { TomasMenousekPage } from './app.po';

describe('tomas-menousek App', () => {
  let page: TomasMenousekPage;

  beforeEach(() => {
    page = new TomasMenousekPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
