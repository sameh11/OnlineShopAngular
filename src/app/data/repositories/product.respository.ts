import { Injectable } from '@angular/core';
import { productService } from '../providers/product.service';
import { IProduct } from '../models';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductRespository {
  products = new Array<IProduct>();
  private locator = (p: IProduct, id: string) => p.id === id;

  constructor(private productservice: productService) {
    this.productservice.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.filter(p => p.id === id);
  }

  saveProduct(product: IProduct) {
    if (!product.id) {
      return this.newProduct(product);
    } else {
      return this.editProduct(product);
    }
  }

  deleteProduct(id: string) {
    this.productservice.deleteProduct(id).subscribe(
      () => {
        const index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
          this.products.splice(index, 1);
        }
      });
  }

  editProduct(product: IProduct) {
    return this.productservice.updateProduct(product).subscribe(p => {
      const index = this.products
      .findIndex(item => this.locator(item, p.id));
      this.products.splice(index, 1, p);
    });
  }

  newProduct(product: IProduct) {
    return this.productservice.saveProduct(product)
    .subscribe(
      p => {
        console.log(JSON.stringify(p));
        // this.products.push(p);
      },
      err => console.log(`repository erro ${ JSON.stringify(err) }`),
      () => console.log('complete')
    );
  }
}

