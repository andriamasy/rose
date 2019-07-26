import { BusinessDelegateModule } from './business-delegate.module';

describe('BusinessDelegateModule', () => {
  let businessDelegateModule: BusinessDelegateModule;

  beforeEach(() => {
    businessDelegateModule = new BusinessDelegateModule();
  });

  it('should create an instance', () => {
    expect(businessDelegateModule).toBeTruthy();
  });
});
