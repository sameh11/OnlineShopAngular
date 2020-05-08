import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthRepository } from '../../data/repositories/auth.repository';

@Component({
  selector : 'app-login',
  templateUrl : './login.component.html',
  styleUrls : [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username: string;
  password: string;
  error = { type : String, massege : String };

  constructor(formBuilder: FormBuilder,
              private authRepository: AuthRepository) {
    this.loginForm = formBuilder.group({
      username : new FormControl( '', Validators.required ),
      password : new FormControl( '', Validators.required )
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.loginForm.valid) {
      this.authRepository.loginUser(this.loginForm.value);
    }
    else {
      console.log(console.log('not valid'));
    }
  }
}
