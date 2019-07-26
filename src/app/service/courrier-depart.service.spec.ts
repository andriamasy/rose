import { TestBed } from '@angular/core/testing';

import { CourrierDepartService } from './courrier-depart.service';

describe('CourrierDepartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourrierDepartService = TestBed.get(CourrierDepartService);
    expect(service).toBeTruthy();
  });
});
