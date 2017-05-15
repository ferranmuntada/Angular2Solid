import { SolidAngular2Page } from './app.po';

describe('solid-angular2 App', () => {
  let page: SolidAngular2Page;

  beforeEach(() => {
    page = new SolidAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
