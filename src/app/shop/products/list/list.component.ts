import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { ProductRespository } from '../../../data/repositories/product.respository';
import { IProduct } from '../../../data/models';
/// TODO refactor login and registration

@Component({
  selector : 'app-list',
  templateUrl : './list.component.html',
  styleUrls : [ './list.component.css' ]
})
export class ListComponent implements OnInit, OnDestroy {
  Respository: ProductRespository;
  hidden = true;
  products: IProduct[];
  modalDetails: IProduct;
  @Input('productsToDisplay')
  set filteredproducts(value: any) {
    this.products = value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  public displayProduct(productItem: any) {
    if (productItem) {
      this.modalDetails = productItem;
      // Open the modal
    } else {
      // Dont open the modal
    }

  }

  showSearch() {
    this.hidden = false;
  }

  // getProductList() {
  //   return this.Respository.getProducts();
  // }

  ngOnDestroy(): void {
    // this.productRespository = undefined;
  }
}
