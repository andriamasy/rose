import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
const urlBase = `${environment.urlBase}`;

const token = localStorage.getItem('accessToken');
@Injectable({
  providedIn: 'root'
})
export class CourrierArriveService {

  constructor(
    private http: HttpClient
  ) { }

  httpHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return httpOptions;
  }

  getCourrierArriver(): Observable<any> {
    const url = `${urlBase}/api/courrier/arriver/liste`;
    const headers = this.httpHeader();
    return this.http.get(url, headers);
  }
}
