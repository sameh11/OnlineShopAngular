import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { IProduct, IResponseError } from '../models';
import { UserService } from '../providers/user.service';

@Injectable({
  providedIn : 'root'
})
export class AuthRepository {

  constructor(private auth: UserService,
              private router: Router) {
  }

  product: IProduct;
  currentUser;
  msg: IResponseError = null;

  loginUser(loginform) {
    this.auth.login({ username : loginform.username, password : loginform.password }).subscribe(
      (data) => {
        this.auth.currentUser = data;
      },
      (error) => {
        console.log(error.error);
      },
      () => {
        console.log('complete');
      }
    )
    ;
  }

  registerUser(loginform) {
    this.auth.login({
      username : loginform.username,
      email : loginform.email,
      gender : loginform.gender,
      age : loginform.age,
      password : loginform.password
    }).subscribe(
      () => {
        this.router.navigate([ 'login' ]);
      },
      (error) => {
        console.log(`error :: ${ JSON.stringify(error) }`);
      },
      () => {
        console.log('complete');
      }
    )
    ;
  }

  isLoggedIn() {
    return this.auth.isLoggedIn;
  }


  public logout(): void {
    this.auth.logout();
  }

}
