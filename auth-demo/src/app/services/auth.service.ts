import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {JwtHelper, tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthService {
  data: string = 'datadfd';
  constructor(private http: Http, private router: Router) {
    // router.events.subscribe(() => {
    //   console.info('hello');
    // });

    console.info(window);
    window.addEventListener("hashchange",(event) => {
      console.info('ddd');
    });
  }

  login(credentials) {
   return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
     .map(resp => {
       let result = resp.json();
       if (result && result.token) {
         localStorage.setItem('token', result.token);
         return true;
       }
       return false;
     })
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) return null;

    return new JwtHelper().decodeToken(token);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return tokenNotExpired();
  }
}
