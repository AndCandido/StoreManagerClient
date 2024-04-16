import { ChangeDetectorRef, Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import Customer from "src/app/models/Customer";
import Installment from "src/app/models/Installment";
import ProductSold from "src/app/models/ProductSold";
import Sale from "src/app/models/Sale";
import { SaleService } from "src/app/services/sale.service";
import { ProductToSold, SaleInfo } from "src/types/types";

@Component({
  selector: "app-sale",
  templateUrl: "./sale.component.html",
  styleUrls: ["./sale.component.css"]
})
export class SaleComponent {
  productsList!: ProductToSold[];
  saleInfo!: SaleInfo;
  installmentsList!: Installment[];
  customer!: Customer;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private saleService: SaleService,
    private snackBar: MatSnackBar
  ) {
    this.installmentsList = [];
  }

  onFinishSale() {
    const sale = this.makeSaleToRequest();
    this.saleService.saveSale(sale).subscribe({
      next: () => {
        this.openSnackBar("Venda realizada com sucesso");
      },
      error: (err) => {
        this.openSnackBar(err.error.errors);
        console.error(err);
      },
    });
  }

  onCustomerChange(customer: Customer) {
    this.customer = customer;
  }

  makeSaleToRequest(): Sale {
    const sale = new Sale;
    sale.price = this.saleInfo.totalPayable;
    sale.customer = this.customer;
    sale.productsSold = this.productsList.map((product: ProductToSold): ProductSold => {
      const producutSold = new ProductSold;
      producutSold.productId = product.id;
      producutSold.quantity = product.quantitySold;
      return producutSold;
    });
    sale.installments = this.installmentsList;
    return sale;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "X", { duration: 3000});
  }
}
