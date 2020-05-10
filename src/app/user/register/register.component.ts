import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IResponseError } from '../../data/models';
import { UserService } from '../../data/providers/user.service';
import { AuthRepository } from '../../data/repositories/auth.repository';

@Component({
  selector : 'app-register',
  templateUrl : './register.component.html',
  styleUrls : [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  error: IResponseError = null;

  constructor(formBuilder: FormBuilder,
              private authRepository: AuthRepository,
              private auth: UserService,
              private router: Router) {
    this.registerForm = formBuilder.group({
      username : new FormControl('', [Validators.required, Validators.minLength(4)]),
      email : new FormControl('', [ Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$') ]),
      gender : new FormControl('', Validators.required),
      age : new FormControl(null, minValue(14)),
      password : new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get password() {
    return this.registerForm.get('password');
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.registerForm.valid) {
      this.auth.register({
        username : this.username.value,
        email : this.email.value,
        gender : this.gender.value,
        age : this.age.value,
        password : this.password.value
      }).subscribe(
        (data) => {
          this.auth.currentUser = data;
          this.router.navigate(['shop']);
          console.log(this.auth.currentUser);
        },
        (error) => {
          if (error.error.code === 11000){
            this.error = {message : 'Username aleardy exists'};
          }
          console.log(error.error.code);
        },
        () => {
          console.log('complete');
        }
      );
    } else {
      console.log(console.log('not valid'));
    }
  }

}


export function minValue(min: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    // tslint:disable-next-line:one-variable-per-declaration
    const input = control.value,
      isValid = input < min;
    if (isValid) {
      return { minValue : { min } };
    }
    else {
      return null;
    }
  };
}
