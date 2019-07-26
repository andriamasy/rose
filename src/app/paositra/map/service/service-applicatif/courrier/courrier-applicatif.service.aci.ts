import { Observable } from 'rxjs';

export abstract class CourrierApplicatifServiceACI {
    public abstract getCourrier(): any;
    public abstract setCourrierObs(transportPaths: Array<any>): void;
    public abstract getCourrierObj(): Observable<any>;
}
