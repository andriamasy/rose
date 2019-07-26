import { ApplicatifModule } from './applicatif.module';

describe('ApplicatifModule', () => {
  let applicatifModule: ApplicatifModule;

  beforeEach(() => {
    applicatifModule = new ApplicatifModule();
  });

  it('should create an instance', () => {
    expect(applicatifModule).toBeTruthy();
  });
});
