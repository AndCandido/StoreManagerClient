import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import Product from "src/app/models/Product";
import { ProductService } from "src/app/services/product.service";
import { EmitEventOptions } from "src/types/types";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  tabIndexSelected = 0;
  displayedColumns: string[] = ["id", "name", "price", "stockQuantity", "createdAt"];
  tableSource!: Product[];
  productSelected!: Product;

  constructor(
    private productsService: ProductService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadTableData();
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

  eventOnRequestHandler({ snackBarMessage }: EmitEventOptions) {
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
