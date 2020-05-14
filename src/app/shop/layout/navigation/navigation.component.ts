import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../data/providers/user.service';
import { AuthRepository } from '../../../data/repositories/auth.repository';

@Component({
  selector : 'app-navigation',
  templateUrl : './navigation.component.html',
  styleUrls : [ './navigation.component.css' ]
})
export class NavigationComponent implements OnInit {
  currentUser;

  constructor(private userService: UserService,
              private authRepository: AuthRepository,
              private router: Router) {
    this.currentUser = userService.currentUser;
    console.log( userService.currentUser);
    if (this.currentUser){
      console.log(this.currentUser);
    }
  }

  ngOnInit(): void {
  }

  logout() {
    this.authRepository.logout();
    this.router.navigate([ '' ]);
  }
}
