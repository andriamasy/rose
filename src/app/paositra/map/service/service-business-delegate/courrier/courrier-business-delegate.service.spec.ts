import { TestBed, inject } from '@angular/core/testing';
import { CourrierBusinessDelegateService } from './courrier-business-delegate.service';


describe('CourrierBusinessDelegateService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CourrierBusinessDelegateService]
        });
    });

    it('should be created', inject([CourrierBusinessDelegateService], (service: CourrierBusinessDelegateService) => {
        expect(service).toBeTruthy();
    }));
});
