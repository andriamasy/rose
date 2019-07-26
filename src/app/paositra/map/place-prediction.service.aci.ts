import { Observable } from 'rxjs';

export abstract class PlacePredictionServiceACI {
    public abstract getPlacePredictions(term: string): any;
}
