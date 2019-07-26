import { PaositraModule } from './paositra.module';

describe('PaositraModule', () => {
  let paositraModule: PaositraModule;

  beforeEach(() => {
    paositraModule = new PaositraModule();
  });

  it('should create an instance', () => {
    expect(paositraModule).toBeTruthy();
  });
});
