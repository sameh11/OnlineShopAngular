import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IProduct } from '../models';
import { Observable, Subject } from 'rxjs';
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
  private rootUrl;
  products: IProduct[];

// tslint:disable-next-line: ban-types

private Products: IProduct[] = [];

addproduct(product: IProduct)
{
  this.Products.push(product);
  sessionStorage.setItem('MyProduct', JSON.stringify(this.Products));
}

  constructor(private http: HttpClient) {
    this.rootUrl = environment.rootUrl;
    this.products = [];
    this.getAllProducts();
  }

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
