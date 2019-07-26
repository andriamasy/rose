import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonnelDto } from "../donnee/personnel";
import { environment } from "../../environments/environment";
import { URLSearchParams } from '@angular/Http';
const urlBase = `${environment.urlBase}`;
const token = localStorage.getItem('accessToken');
@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(
    private http: HttpClient
  ) { }

  getPersonnels(): Observable<any> {
    const httpHeader = this.httpHeader();
    const urlPersonnel = `${urlBase}/api/utilisateur/liste`;
    return this.http.get(urlPersonnel, httpHeader);
  }

  ajoutPersonnel(data): Observable<any> {
    const httpHeader = this.httpHeader();
    const urlPersonnel = `${urlBase}/api/register`;
    return this.http.post(urlPersonnel, data, httpHeader);
  }

  getDetail(id): Observable<any> {
    const header = this.header();
    const params = this.params(id);
    const urlPersonnel = `${urlBase}/api/utilisateur/afficher`;
    return this.http.get(urlPersonnel, {headers: header, params: params});
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

  header() {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return header;
  }

  params(id) {
    const params = new HttpParams({
      fromObject: {
        'id': id,
      }
    });

    return params
  }

}
