import { Component, OnInit } from "@angular/core";
import { FormBuilder,  FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import Product from "src/app/models/Product";
import { ProductsService } from "src/app/services/products.service";
import { EmitEventOptions } from "src/types/types";

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
    private productsService: ProductsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadTableData();
    this.formProduct = this.createForm(new Product);
    this.productSelected = new Product();
  }

  loadTableData() {
    this.productsService.getAllProducts().subscribe({
      next: (value) => {
        this.tableSource = value;
      },
      error(error) {
        console.error(error);
      }
    });
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

  eventOnRequestHandler({ snackBarMessage }: EmitEventOptions) {
    console.log("Snack MSG", snackBarMessage);
    this.snackBar.open(snackBarMessage, "Ver", { duration: 3000 })
      .onAction()
      .subscribe({
        next: () => {
          this.tabIndexSelected = 0;
        }
      });
    this.reloadData();
  }

  reloadData() {
    this.loadTableData();
  }

  productClicked(row: Product) {
    this.setTabIndexSelected(2);
    this.productSelected = row;
  }

  setTabIndexSelected(num: number) {
    this.tabIndexSelected = num;
  }
}
