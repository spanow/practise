import { Component, OnInit } from "@angular/core";
import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() {}

  share() {
    window.alert("this product has been shared");
  }

  alert() {
    window.alert("hehe 700 bb");
  }

  ngOnInit() {}
}
