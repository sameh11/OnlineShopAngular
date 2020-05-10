import { Component, KeyValueDiffers, OnInit } from '@angular/core';
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

  constructor() {
  }

  ngOnInit(): void {
  }
}
