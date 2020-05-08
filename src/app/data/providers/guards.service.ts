import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

/**
 * checks if user is logged in and redirects him to login if not
 */
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {
  }

  canActivate() {
    if (this.userService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }

}

/**
 * same as AuthGuard but for child routes
 */
@Injectable()
export class ChildAuthGuard implements CanActivateChild {

  constructor(private router: Router, private userService: UserService) {
  }

  canActivateChild() {
    if (this.userService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
  }

}

/**
 * Redirects user to dashboard if the user is already logged in
 */
@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {
  }

  canActivate() {
    if (this.userService.isLoggedIn) {
      this.router.navigate(['/cart']);
    } else {
      return true;
    }
  }

}
