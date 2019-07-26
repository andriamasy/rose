import { TestBed, inject } from '@angular/core/testing';
import { CourrierApplicatifService } from './courrier-applicatif.service';

describe('CourrierApplicatifService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CourrierApplicatifService]
        });
    });

    it('should be created', inject([CourrierApplicatifService], (service: CourrierApplicatifService) => {
        expect(service).toBeTruthy();
    }));
});
