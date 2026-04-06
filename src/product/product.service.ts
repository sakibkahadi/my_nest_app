import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  // ja banabo privte mane just ei class a e access korta prbo. private diye bujay
  private products = [
    { id: 1, name: 'Mobile', price: 20000 },
    { id: 2, name: 'laptop', price: 50000 },
    { id: 3, name: 'tablet', price: 30000 },
  ];
  // this is method
  getAllProducts() {
    // this bujhay ei class er bhitroe products return korbe
    return this.products;
  }
  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
