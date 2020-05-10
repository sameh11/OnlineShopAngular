import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRepository } from '../../../data/repositories/auth.repository';

@Component({
  selector : 'app-navigation',
  templateUrl : './navigation.component.html',
  styleUrls : [ './navigation.component.css' ]
})
export class NavigationComponent implements OnInit {
  currentUser;

  constructor(private authRepository: AuthRepository,
              private router: Router) {
    this.currentUser = authRepository.isLoggedIn();
    if (this.currentUser){
    }
  }

  ngOnInit(): void {
  }

  logout() {
    this.authRepository.logout();
    this.router.navigate([ '' ]);
  }
}
