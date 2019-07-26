import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

const urlBase = `${environment.urlBase}`;
const token = localStorage.getItem('accessToken');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${token}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class CourrierService {

  constructor(
    private http: HttpClient
  ) { }

  ajoutCourrier(data): Observable<any> {
    const url = `${urlBase}/api/courrier/ajout`;
    return this.http.post(url,data, httpOptions);
  }

  getListe() : Observable<any> {
    const url = `${urlBase}/api/courrier/liste`;
    return this.http.get(url, httpOptions)
  }
}
