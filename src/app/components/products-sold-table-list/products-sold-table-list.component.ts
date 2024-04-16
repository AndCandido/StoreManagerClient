import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DialogProductListAddComponent } from "../_shared/dialog-product-list-add/dialog-product-list-add.component";
import { MatDialog } from "@angular/material/dialog";
import { ProductToSold } from "src/types/types";
import { DialogConfirmComponent } from "../_shared/dialog-confirm/dialog-confirm.component";
import { ProductService } from "src/app/services/product.service";
import Product from "src/app/models/Product";

@Component({
  selector: "app-products-sold-table-list",
  templateUrl: "./products-sold-table-list.component.html",
  styleUrls: ["./products-sold-table-list.component.css"]
})
export class ProductsSoldTableListComponent implements OnInit {
  @Input() productsList: ProductToSold[];
  @Output() productsListChange: EventEmitter<ProductToSold[]> = new EventEmitter;
  displayedColumns: string[];

  constructor(
    private matDialog: MatDialog,
    private productService: ProductService,
  )
  {
    this.productsList = [];
    this.displayedColumns = [ "id", "ref", "name", "price", "qtd", "actions"];
  }

  ngOnInit(): void {
    if(this.productsList)
      this.productsListChange.emit(this.productsList);

    ////
    this.productService.getProductById(1).subscribe({
      next: (value: Product) => {
        const pts:ProductToSold = { id: 1, name: value.name, price: value.price, quantitySold: 1, ref: value.ref.toFixed(1) };
        this.productsList = [pts];
        this.productsListChange.emit(this.productsList);
      },
      error: () => {
      }
    });

    ////
  }

  onAddProduct() {
    this.matDialog.open(DialogProductListAddComponent)
      .afterClosed().subscribe((result: ProductToSold) => {
        if(!result) return;
        this.productsList = [...this.productsList , result];

        this.productsListChange.emit(this.productsList);
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
        this.productsListChange.emit(this.productsList);
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
