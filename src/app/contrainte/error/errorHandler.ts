import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CatchErrorService {
    constructor() {

    }
    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }

    log(message: string) {
        //console.log('Erreur : ' + message);
    }
}
