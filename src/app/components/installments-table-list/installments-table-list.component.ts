import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { InstallmentSale } from "src/types/types";
import { DialogSearchCustomerComponent } from "../_shared/dialog-search-customer/dialog-search-customer.component";
import Customer from "src/app/models/Customer";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-installments-table-list",
  templateUrl: "./installments-table-list.component.html",
  styleUrls: ["./installments-table-list.component.css"],
})
export class InstallmentsTableListComponent implements OnChanges, OnInit {
  @Input({ required: true }) totalPayable!: number;
  installmentsCount!: number;
  installmentsList!: InstallmentSale[];
  displayedColumns!: string[];
  customer?: Customer;

  constructor (
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar
  ) {
    this.installmentsCount = 1;
    this.installmentsList = [];
    this.displayedColumns = ["isPaid", "dueDate", "price"];
  }

  ngOnInit(): void {
    this.setCashSaleForInstallmentsList();
  }

  onSearchCustomer() {
    this.openSearchCustomerDialog();
  }

  openSearchCustomerDialog() {
    this.matDialog.open(DialogSearchCustomerComponent)
      .afterClosed()
      .subscribe(result => {
        if(!result) return;
        this.customer = result;
      });
  }

  setCashSaleForInstallmentsList() {
    this.installmentsList = [{
      dueDate: new Date,
      isPaid: true,
      price: this.totalPayable
    }];
  }

  ngOnChanges(): void {
    this.onUpdateTotalPayable();
  }

  onUpdateTotalPayable() {
    if(!this.totalPayable) {
      this.installmentsList = [];
      return;
    }

    this.updateInstallmentsPrice();
  }

  updateInstallmentsPrice() {
    const priceForInstallments = this.totalPayable / this.installmentsCount;

    this.installmentsList.forEach((installment: InstallmentSale) => {
      installment.price = parseFloat(priceForInstallments.toFixed(2));
    });
  }

  updateInstallmentsCount() {
    if(this.installmentsCount > 1 && !this.customer) {
      this.openSnackBar("Mais de uma parcela apenas se houver um cliente");
      setTimeout(() => this.installmentsCount = 1, 0);
      return;
    }

    if(this.installmentsCount == 1) {
      this.setCashSaleForInstallmentsList();
      return;
    }

    this.installmentsList = [];
    const priceForInstallments = parseFloat((this.totalPayable / this.installmentsCount).toFixed(2));

    for(let i = 0; i < this.installmentsCount; i++) {
      const dueDate = new Date();
      dueDate.setMonth(dueDate.getMonth() + i);
      this.installmentsList[i] = {
        dueDate,
        isPaid: false,
        price: priceForInstallments
      };
    }
  }

  onDeleteInstallmentToList(installment: InstallmentSale) {
    console.log(installment);
  }

  onPaidInputChanged(event: Event) {
    const input = event.target as HTMLInputElement;

    if(!this.customer && !input.checked) {
      input.checked = true;
      this.openSnackBar("Somente deve ter parcelas não pagas contendo um cliente");
    }
  }

  openSnackBar(message: string) {
    this.matSnackBar.open(message, "X", { duration: 5000});
  }

  clearCustomer() {
    this.customer = undefined;

    this.installmentsCount = 1;
    this.setCashSaleForInstallmentsList();
  }
}
