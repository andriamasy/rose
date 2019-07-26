import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { JwtHelperService } from '@auth0/angular-jwt';

const urlBase = `${environment.urlBase}`;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 

  constructor(private http: HttpClient,
    public jwtHelper: JwtHelperService
    ) { }

  /* login(username: string, password: string) {
    return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
  } */

  login(data): Observable<any> {
    const url = `${urlBase}/login`;
    return this.http.post(url, data, httpOptions);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  
  
}
