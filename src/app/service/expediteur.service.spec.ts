import { TestBed } from '@angular/core/testing';

import { ExpediteurService } from './expediteur.service';

describe('ExpediteurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpediteurService = TestBed.get(ExpediteurService);
    expect(service).toBeTruthy();
  });
});
