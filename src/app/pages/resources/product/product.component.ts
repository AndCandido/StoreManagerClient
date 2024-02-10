import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import Product from "src/app/models/Product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  formProduct!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formProduct = this.createForm(new Product);

    console.log(this.formProduct);
  }

  createForm(product: Product): FormGroup {
    return this.formProduct = this.formBuilder.group({
      id: product.id,
      name: product.name,
      price: product.price,
      productsSold: product.productsSold,
      stockQuantity: product.stockQuantity,
      createdAt: product.createdAt
    });
  }
}
