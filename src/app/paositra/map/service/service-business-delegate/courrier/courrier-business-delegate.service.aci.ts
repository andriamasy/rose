import { Observable } from "rxjs";

export abstract class CourrierBusinessDelegateServiceACI {
    public abstract getCourrier(): Observable<any>;
}
