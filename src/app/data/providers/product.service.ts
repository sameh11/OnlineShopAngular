import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IProduct } from '../models';
import { Observable } from 'rxjs';

@Injectable()
// tslint:disable-next-line:class-name
export class productService {
  private rootUrl;
  products: IProduct[];

  constructor(private http: HttpClient) {
    this.rootUrl = environment.rootUrl;
    this.products = [];
    this.getAllProducts();
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${ this.rootUrl }products`);
  }

  saveProduct(product: IProduct, httpOptions?: any): any {
    return this.http.post(`${ this.rootUrl }products/new`, product, httpOptions);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${ this.rootUrl }/products/edit/${ product.id }`, product);
  }

  deleteProduct(id: string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${ this.rootUrl }/products/delete/${ id }`);
  }

}
