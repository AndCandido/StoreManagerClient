import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import Product from "src/app/models/Product";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: [
    "./product-form.component.css",
    "../../../../assets/styles/forms-styles.css"
  ]
})
export class ProductFormComponent implements OnInit {
  @Input() fieldValues!: Product;
  @Input({ required: true }) formType!: "register" | "modify";

  isRegisterForm!: boolean;
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder)
  { }

  ngOnInit(): void {
    if(!this.fieldValues) {
      this.fieldValues = new Product();
    }
    this.isRegisterForm = this.formType == "register";
    this.formGroup = this.createFormGroup(new Product);
  }

  createFormGroup(product: Product): FormGroup{
    return this.formBuilder.group({
      id: product.id,
      name: product.name,
      price: product.price,
      stockQuantity: product.stockQuantity,
      createdAt: product.createdAt
    });
  }
}
