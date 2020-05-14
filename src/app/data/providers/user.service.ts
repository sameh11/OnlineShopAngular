import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IAuth } from '../models';

@Injectable()
export class UserService {

  private rootUrl = environment.rootUrl;
  private token: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  get currentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  set currentUser(value) {
    localStorage.setItem('currentUser', JSON.stringify(value));
  }

  get isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
  }

  get keepLoggedIn() {
    return this.currentUser ? JSON.parse(localStorage.getItem('currentUser')).resume : null;
  }

  checkKeepLoggedIn() {
    if (!this.keepLoggedIn) {
      localStorage.clear();
      this.router.navigate([ '' ]);
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate([ '' ]);
  }

  login(form: any): Observable<IAuth> {
    return this.http.post<IAuth>(`${ this.rootUrl }users/auth/login`, form);
  }

  register(form: any): Observable<IAuth> {
    console.log('from reg service');
    return this.http.post<IAuth>(`${ this.rootUrl }users/auth/register`, form);
    // .map((response: Response) => response.json());
  }
}
