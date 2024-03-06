import { Component, OnInit } from "@angular/core";
import { FormBuilder,  FormGroup } from "@angular/forms";
import Product from "src/app/models/Product";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  tabIndexSelected = 0;
  formProduct!: FormGroup;
  displayedColumns: string[] = ["id", "name", "price", "stockQuantity", "createdAt"];
  tableSource!: Product[];
  productSelected!: Product;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next: (value) => {
        this.tableSource = value;
      },
      error(error) {
        console.error(error);
      }
    });
    this.formProduct = this.createForm(new Product);
    this.productSelected = new Product();
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

  productClicked(row: Product) {
    this.setTabIndexSelected(2);
    this.productSelected = row;
  }

  setTabIndexSelected(num: number) {
    this.tabIndexSelected = num;
  }
}
