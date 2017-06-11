import { TsugittaCorporatePage } from './app.po';

describe('tsugitta-corporate App', () => {
  let page: TsugittaCorporatePage;

  beforeEach(() => {
    page = new TsugittaCorporatePage();
  });

  it('should display welcome title', done => {
    page.navigateTo();
    page.getAuthorName()
      .then(msg => expect(msg).toEqual('Toshinori Tsugita'))
      .then(done, done.fail);
  });
});
