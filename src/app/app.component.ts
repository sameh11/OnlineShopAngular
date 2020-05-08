import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { IUser } from './data/models';
import { productService } from './data/providers/product.service';
import { AuthRepository } from './data/repositories/auth.repository';
import { ProductRespository } from './data/repositories/product.respository';

@Component({
  selector : 'app-root',
  templateUrl : './app.component.html',
  styleUrls : [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'Ang';

  constructor(private productservice: productService,
              private keyValueDiffers: KeyValueDiffers,
              private productrespository: ProductRespository,
              private authRepo: AuthRepository) {
  }

  User: IUser = {
    _id : 'a',
    username : 'heheee1',
    email : 'heheee1@baba.com',
    password : '1111'
  };

  loginUser() {
    this.authRepo.loginUser(this.User);
  }

  ngOnInit(): void {
    this.loginUser();
  }
}
