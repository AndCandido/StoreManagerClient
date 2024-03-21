import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogProductListAddComponent } from "src/app/components/_shared/dialog-product-list-add/dialog-product-list-add.component";

@Component({
  selector: "app-sale",
  templateUrl: "./sale.component.html",
  styleUrls: ["./sale.component.css"]
})
export class SaleComponent implements OnInit {

  constructor(
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.onAddProduct();
  }

  onAddProduct() {
    this.matDialog.open(DialogProductListAddComponent);
  }
}
