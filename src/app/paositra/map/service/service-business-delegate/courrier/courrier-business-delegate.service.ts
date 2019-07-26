import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { CatchErrorService } from '../../../../../contrainte/error/errorHandler';
import { CourrierBusinessDelegateServiceACI } from './courrier-business-delegate.service.aci';



@Injectable({
    providedIn: 'root'
})
export class CourrierBusinessDelegateService implements CourrierBusinessDelegateServiceACI {
    CourrierUrl: string;

    constructor(private http: HttpClient, private catchErrorService: CatchErrorService) { }


    public getCourrier() {
        // this.CourrierUrl = 'assets/json/lot11.json';
        this.CourrierUrl = 'assets/json/courrier.json';
        return this.http.get(this.CourrierUrl).pipe(
            tap(_ => this.catchErrorService.log(`Recuperer le Courrier`)),
            catchError(this.catchErrorService.handleError<any>('getCourrier', []))
        );
    }
}
