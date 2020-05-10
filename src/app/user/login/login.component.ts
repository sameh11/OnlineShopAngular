import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IResponseError } from '../../data/models';
import { UserService } from '../../data/providers/user.service';
import { AuthRepository } from '../../data/repositories/auth.repository';

@Component({
  selector : 'app-login',
  templateUrl : './login.component.html',
  styleUrls : [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: IResponseError = null;

  constructor(formBuilder: FormBuilder,
              private authRepository: AuthRepository,
              private auth: UserService,
              private router: Router) {
    this.loginForm = formBuilder.group({
      username : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.loginForm.valid) {
      this.auth.login({ username : this.username.value, password : this.password.value }).subscribe(
        (data) => {
          this.auth.currentUser = data;
          this.router.navigate(['shop']);
          window.location.reload();
        },
        (error) => {
          this.error = error.error;
        },
        () => {
          console.log('complete');
        }
      )
      ;
    } else {
      console.log('not valid');
    }
  }
}
