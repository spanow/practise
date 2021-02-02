import { Component, OnInit } from "@angular/core";
import { Input,Output,EventEmitter } from "@angular/core";
@Component({
  selector: "app-product-alert",
  templateUrl: "./product-alert.component.html",
  styleUrls: ["./product-alert.component.css"]
})
export class ProductAlertComponent implements OnInit {
  @Input() productq;
  @Output() alert = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
