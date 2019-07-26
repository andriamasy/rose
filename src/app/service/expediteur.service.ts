import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { ExpediteurModel } from '../model/expediteurModel';

const urlBase = `${environment.urlBase}`;

const token = localStorage.getItem('accessToken');

@Injectable({
  providedIn: 'root'
})
export class ExpediteurService {

  constructor(private http: HttpClient) { }

  getExpediteurs(): Observable<ExpediteurModel> {
    const url = `${urlBase}/api/expediteurs`;
    const headers = this.httpHeader();
    return this.http.get<ExpediteurModel>(url, headers);
  }

  httpHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return httpOptions;
  }

}
