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
  public productsPerPage = 15;
  public selectedPage = 1;

  @Input('productsToDisplay')
  set filteredproducts(value: any) {
    this.products = value;
    // tslint:disable-next-line:no-unused-expression
    this.productsPaginated;
  }

  constructor() {
  }

  get productsPaginated(): IProduct[] {
    const pageIndex = ( this.selectedPage - 1 ) * this.productsPerPage;
    return this.products.slice(pageIndex, pageIndex + this.productsPerPage);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.products.length / this.productsPerPage))
    .fill(0).map((x, i) => i + 1);
  }


  // TODO Fucture implementation
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
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
