import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Courrier } from '../../../../../donnee/courrier';
import { CourrierApplicatifServiceACI } from './courrier-applicatif.service.aci';
import { CourrierBusinessDelegateService} from '../../service-business-delegate/courrier/courrier-business-delegate.service';



@Injectable({
    providedIn: 'root'
})
export class CourrierApplicatifService implements CourrierApplicatifServiceACI {

    constructor(
        private CourrierBusinessDelegateService: CourrierBusinessDelegateService,
    ) { }
    CourrierList: BehaviorSubject<Array<Courrier>> = new BehaviorSubject<Array<Courrier>>(null);
    CourrierInvalideList: BehaviorSubject<Array<Courrier>> = new BehaviorSubject<Array<Courrier>>(null);

    public getCourrier() {
        return this.CourrierBusinessDelegateService.getCourrier().subscribe(data => {
            if (data) {
                this.setCourrierObs(data);
            }
        });
    }

    public setCourrierObs(transportPaths: Array<any>): void {
        this.CourrierList.next(transportPaths);
    }

    public getCourrierObj(): Observable<any> {
        return this.CourrierList.asObservable();
    }


}
