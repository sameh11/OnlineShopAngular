import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { IProduct } from '../models';
import { UserService } from '../providers/user.service';
import { productService } from '../providers/product.service';
import { ProductRespository } from './product.respository';

@Injectable({
  providedIn : 'root'
})
export class AuthRepository {

  constructor(private auth: UserService,
              private cookieService: CookieService,
              private productRespository: productService) {
  }

  product: IProduct;
  currentUser;
  private token: string;

  loginUser(loginform) {
    this.auth.login({username: loginform.username, password: loginform.password}).subscribe(
      (data) => {
        this.setUserInfo(data.user);
        this.saveToken(data.token);
        console.log(this.getUserDetails());
        console.log(this.getToken());
      },
      (error) => {
        console.log(`errrorrr :: ${JSON.stringify(error)}`);
      },
      () => {
        console.log('complete');
      }
    )
    ;
  }

  private saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('jwtToken');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('jwtToken');
  }

  public getUserDetails() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public setUserInfo(user) {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  getCookie(key: string) {
    return this.cookieService.getAll();
  }
}
