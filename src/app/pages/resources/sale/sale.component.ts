import { ChangeDetectorRef, Component } from "@angular/core";
import { ProductToSold, SaleInfo } from "src/types/types";

@Component({
  selector: "app-sale",
  templateUrl: "./sale.component.html",
  styleUrls: ["./sale.component.css"]
})
export class SaleComponent {
  productsList!: ProductToSold[];
  saleInfo!: SaleInfo;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) {}

  onUpdateProductsListEvent(event: ProductToSold[]) {
    this.productsList = event;
    this.changeDetector.detectChanges();
  }

  onSaleInfoChange(event: SaleInfo) {
    this.saleInfo = event;
    this.changeDetector.detectChanges();
  }
}
