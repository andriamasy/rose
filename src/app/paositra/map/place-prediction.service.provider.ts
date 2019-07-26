import { PlacePredictionService } from "./place-prediction.service";
import { PlacePredictionServiceACI } from "./place-prediction.service.aci";

export let PlacePredictionServiceProvider = [
    { provide: PlacePredictionServiceACI, useClass: PlacePredictionService }
]