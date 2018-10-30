import { PortofolioModule } from './portofolio.module';

describe('PortofolioModule', () => {
  let portofolioModule: PortofolioModule;

  beforeEach(() => {
    portofolioModule = new PortofolioModule();
  });

  it('should create an instance', () => {
    expect(portofolioModule).toBeTruthy();
  });
});
