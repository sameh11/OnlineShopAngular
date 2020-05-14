import { Component, OnInit, OnDestroy } from '@angular/core';
import { productService } from 'src/app/data/providers/product.service';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/data/models';

@Component({
  selector : 'app-cart',
  templateUrl : './cart.component.html',
  styleUrls : [ './cart.component.css' ]
})
export class CartComponent implements OnInit{



  constructor(private ProductService: productService) {
  }

  ProductsSub: Subscription;
  Products: IProduct[] = [];
  TotalPrice: any;
  Quantity: number;
  total: any;

  ngOnInit(): void {
    const prods = JSON.parse(sessionStorage.getItem('MyProduct'));
    this.Products = prods;
  }

  myFunction(val , price , inp)
  {
    this.Quantity = val.target.value;
    this.TotalPrice = this.Quantity * price;
    inp.value = this.TotalPrice;

  }
}
