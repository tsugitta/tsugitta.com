import { TsugittaCorporatePage } from './app.po';

describe('tsugitta-corporate App', () => {
  let page: TsugittaCorporatePage;

  beforeEach(() => {
    page = new TsugittaCorporatePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
