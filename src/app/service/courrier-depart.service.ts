import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

const urlBase = `${environment.urlBase}`;

const token = localStorage.getItem('accessToken');
@Injectable({
  providedIn: 'root'
})

export class CourrierDepartService {

  constructor(
    private http: HttpClient
  ) { }

  getCourrierDepart(): Observable<any> {
    const url = `${urlBase}/api/courrier/depart/liste`;
    const headers = this.httpHeader();
    return this.http.get(url, headers);
  }

  ajoutCourrierDepart(data): Observable<any> {
    const url = `${urlBase}/api/courrier/depart/ajout`;
    const headers = this.httpHeader();
    return this.http.post(url,data, headers);
  }

  httpHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'X-Content-Type-Options': 'nosniff'
      })
    };
    return httpOptions;
  }
}
