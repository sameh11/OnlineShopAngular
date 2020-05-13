import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IProduct } from '../models';
<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
import { Observable, Subject } from 'rxjs';
>>>>>>> Add To Cart Done
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const token: string = JSON.parse(localStorage.getItem('currentUser'))?.token;
const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json',
    Authorization : `Bearer ${ token }`,
  })
};


@Injectable()
// tslint:disable-next-line:class-name
export class productService {
<<<<<<< HEAD
  private rootUrl;
  products: IProduct[];

=======

  private rootUrl;
  products: IProduct[];

// tslint:disable-next-line: ban-types

private Products: IProduct[] = [];

addproduct(product: IProduct)
{
  this.Products.push(product);
  sessionStorage.setItem('MyProduct', JSON.stringify(this.Products));
}

>>>>>>> Add To Cart Done
  constructor(private http: HttpClient) {
    this.rootUrl = environment.rootUrl;
    this.products = [];
    this.getAllProducts();
  }

<<<<<<< HEAD
=======


>>>>>>> Add To Cart Done
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${ this.rootUrl }products`);
  }

  saveProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${ this.rootUrl }products/new`, JSON.stringify(product), httpOptions );
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${ this.rootUrl }/products/edit/${ product.id }`, JSON.stringify(product), httpOptions );
  }

  deleteProduct(id: string, httpOptionss?: any): Observable<IProduct> {
    return this.http.post<IProduct>(`${ this.rootUrl }/products/delete/${ id }`, httpOptionss, httpOptions );
  }

}
