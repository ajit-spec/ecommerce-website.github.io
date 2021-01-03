import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  key = `AIzaSyDFS_1B9rD3QUveNC_RCd0qLxWTn4NKu1A`;
  url = `https://project6-da810-default-rtdb.firebaseio.com/`;
  http: HttpClient;

  loginurl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.key}`;
  signupurl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.key}`;

  prop2: string;


  prop1(): Observable<any> {

    return this.http.get(`${this.url}/gifts/gifts.json`);

  }

  login(email: string, password: string): Observable<any> {

    return this.http.post(this.loginurl, {
      email,
      password,
      returnSecureToken: true
    });

  }

  signup(email: string, password: string): Observable<any> {

    return this.http.post(this.signupurl, {
      email,
      password,
      returnSecureToken: true
    });

  }

  isauthenticated(): boolean {
    return localStorage.getItem('loggedinuser') === null ? false : true;
  }

  constructor(param1: HttpClient) {
    this.http = param1;
  }
}
