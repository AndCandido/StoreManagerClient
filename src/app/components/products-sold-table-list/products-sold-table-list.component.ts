import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { DialogProductListAddComponent } from "../_shared/dialog-product-list-add/dialog-product-list-add.component";
import { MatDialog } from "@angular/material/dialog";
import { ProductToSold } from "src/types/types";
import { DialogConfirmComponent } from "../_shared/dialog-confirm/dialog-confirm.component";

@Component({
  selector: "app-products-sold-table-list",
  templateUrl: "./products-sold-table-list.component.html",
  styleUrls: ["./products-sold-table-list.component.css"]
})
export class ProductsSoldTableListComponent implements OnInit {
  @Output() updateProductsListEvent: EventEmitter<ProductToSold[]> = new EventEmitter;
  productsList: ProductToSold[];
  displayedColumns: string[];

  constructor(
    private matDialog: MatDialog
  )
  {
    this.productsList = [
      {
        id: 12,
        name: "Calça",
        price: 10.10,
        quantitySold: 4,
        ref: "4332432",

      },
      {
        id: 132,
        name: "Calça",
        price: 15.44,
        quantitySold: 4,
        ref: "4332432",

      },
      {
        id: 152,
        name: "Calça",
        price: 10,
        quantitySold: 4,
        ref: "4332432",
      }
    ];
    this.displayedColumns = [ "id", "ref", "name", "price", "qtd", "actions"];
  }

  ngOnInit(): void {
    if(this.productsList)
      this.updateProductsListEvent.emit(this.productsList);
  }

  onAddProduct() {
    this.matDialog.open(DialogProductListAddComponent)
      .afterClosed().subscribe((result: ProductToSold) => {
        if(!result) return;
        this.productsList = [...this.productsList , result];

        this.updateProductsListEvent.emit(this.productsList);
      });
  }

  onDeleteProductSoldToList(product: ProductToSold) {
    const dialogConfirmRef = this.matDialog.open(DialogConfirmComponent, {
      data: {
        title: "Deseja deletar esse produto da lista?"
      }
    });

    dialogConfirmRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteProductSoldToList(product);
        this.updateProductsListEvent.emit(this.productsList);
      }
    });
  }

  deleteProductSoldToList(product: ProductToSold) {
    if(!this.productsList) return;
    const productList = this.productsList;
    this.productsList.splice(productList.indexOf(product), 1);
    this.productsList = [...this.productsList];
  }
}
