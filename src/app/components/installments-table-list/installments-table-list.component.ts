import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { InstallmentSale } from "src/types/types";
import { DialogSearchCustomerComponent } from "../_shared/dialog-search-customer/dialog-search-customer.component";
import Customer from "src/app/models/Customer";
import { MatSnackBar } from "@angular/material/snack-bar";
import Installment from "src/app/models/Installment";

@Component({
  selector: "app-installments-table-list",
  templateUrl: "./installments-table-list.component.html",
  styleUrls: ["./installments-table-list.component.css"],
})
export class InstallmentsTableListComponent implements OnChanges, OnInit {
  @Input({ required: true }) totalPayable!: number;
  @Input() installmentsList!: Installment[];
  @Output() installmentsListChange: EventEmitter<Installment[]> = new EventEmitter();
  @Output() customerChange: EventEmitter<Customer> = new EventEmitter();

  installmentsCount!: number;
  displayedColumns!: string[];
  customer?: Customer;

  constructor (
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar
  ) {
    this.installmentsCount = 1;
    this.installmentsList = [];
    this.displayedColumns = ["isPaid", "dueDate", "paymentMethod", "price"];
  }

  ngOnInit(): void {
    this.setCashSaleForInstallmentsList();
    this.installmentsListChange.emit(this.installmentsList);
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
        this.customerChange.emit(this.customer);
      });
  }

  setCashSaleForInstallmentsList() {
    this.installmentsList = [{
      dueDate: new Date,
      isPaid: true,
      price: this.totalPayable,
    }];
  }

  ngOnChanges(): void {
    this.onUpdateTotalPayable();
    this.installmentsListChange.emit(this.installmentsList);
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

    this.installmentsList.forEach((installment: Installment) => {
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

    this.installmentsListChange.emit(this.installmentsList);
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
    this.customerChange.emit(this.customer);

    this.installmentsCount = 1;
    this.setCashSaleForInstallmentsList();
  }
}
