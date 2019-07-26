import { TestBed, inject } from '@angular/core/testing';
import { PlacePredictionService } from './place-prediction.service';

describe('PlacePredictionService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PlacePredictionService]
        });
    });

    it('should be created', inject([PlacePredictionService], (service: PlacePredictionService) => {
        expect(service).toBeTruthy();
    }));
});
