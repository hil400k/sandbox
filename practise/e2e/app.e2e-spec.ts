import { PractisePage } from './app.po';

describe('practise App', () => {
  let page: PractisePage;

  beforeEach(() => {
    page = new PractisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
