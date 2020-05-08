import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class JwtService {

  constructor() {
  }

  private static get jwtToken() {
    // handles the undefined exception
    if (localStorage.getItem('currentUser')) {
      return JSON.parse(localStorage.getItem('currentUser')).token;
    } else {
      return null;
    }
  }

  static get jwtHeader(): HttpHeaders {
    return new HttpHeaders({  Authorization : 'Bearer ' + JwtService.jwtToken });
  }
}
