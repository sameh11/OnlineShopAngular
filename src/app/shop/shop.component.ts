import { Component, Input, KeyValueDiffer, KeyValueDiffers, OnInit } from '@angular/core';
import { productService } from '../data/providers/product.service';
import { AuthRepository } from '../data/repositories/auth.repository';
import { ProductRespository } from '../data/repositories/product.respository';
import { IProduct } from '../data/models';

@Component({
  selector : 'app-shop',
  templateUrl : './shop.component.html',
  styleUrls : [ './shop.component.css' ]
})
export class ShopComponent implements OnInit {

  constructor(private productservice: productService,
              private keyValueDiffers: KeyValueDiffers,
              private productRespository: ProductRespository,
              private authRepo: AuthRepository) {
  }

  @Input() searchTerm: string;
  products: IProduct[];
  searchterm: string;
  filteredProducts: IProduct[];
  filteredCategories: string[];
  maxPrice = 0;
  minPrice = 0;
  private differ: KeyValueDiffer<any, any>;
  product: IProduct;

  ngOnInit(): void {
    this.initializeProduct();
  }

  SetSearch(value) {
    this.searchterm = value;
    this.filteredProducts = this.searchProduct(value);
    this.getCategories();
  }

  searchProduct(term) {
    return this.products.filter(p => p.name.includes(term));
  }

  setCategory(category) {
    if (category === undefined) {
      this.initializeProduct();
      this.getCategories();
    }
    this.filteredProducts = this.products.filter(p => p.category === category);
    return this.filteredCategories = [ category ];
  }

  getCategories() {
    if (this.differ.diff(this.filteredProducts) != null) {
      this.filteredCategories = this.filteredProducts
      .map(p => p.category)
      .filter((category, index, array) => array.indexOf(category) === index);
    }
  }

  initializeProduct() {
    this.productservice.getAllProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
      this.differ = this.keyValueDiffers
      .find(this.filteredProducts)
      .create();
      this.getCategories();
      this.setMaxPrice();
      this.setMinPrice();
    });
  }

  setMaxPrice() {
    this.maxPrice = Math.max.apply(this.maxPrice, this.filteredProducts.map(o => {
      return o.price;
    }));
  }

  setMinPrice() {
    this.minPrice = Math.min.apply(this.minPrice, this.filteredProducts.map(o => {
      return o.price;
    }));
  }
}
