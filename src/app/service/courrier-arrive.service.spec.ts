import { TestBed } from '@angular/core/testing';

import { CourrierArriveService } from './courrier-arrive.service';

describe('CourrierArriveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourrierArriveService = TestBed.get(CourrierArriveService);
    expect(service).toBeTruthy();
  });
});
