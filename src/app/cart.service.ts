import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CartService {
  items = [];

  constructor(private http: HttpClient) {}

  addToCart(product){
    this.items.push(product);
  }

  clearCart(){
    this.items = [];
  }

  getItems(){
    return this.items;
  }
  
}
