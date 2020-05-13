<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { productService } from 'src/app/data/providers/product.service';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/data/models';
>>>>>>> Add To Cart Done

@Component({
  selector : 'app-cart',
  templateUrl : './cart.component.html',
  styleUrls : [ './cart.component.css' ]
})
<<<<<<< HEAD
export class CartComponent implements OnInit {

  constructor() {
  }


  ngOnInit(): void {
  }

=======
export class CartComponent implements OnInit{



  constructor(private ProductService: productService) {
  }

  ProductsSub: Subscription;
  Products: IProduct[] = [];
  TotalPrice: any;
  Quantity: number;
  total: any;

  ngOnInit(): void {
    var prods = JSON.parse(sessionStorage.getItem('MyProduct'));
    this.Products = prods;
  }

  myFunction(val , price ,inp)
  {
    this.Quantity = val.target.value;
    this.TotalPrice = this.Quantity * price;
    inp.value = this.TotalPrice;

  }


>>>>>>> Add To Cart Done
}
