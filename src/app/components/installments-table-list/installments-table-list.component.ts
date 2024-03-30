import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { InstallmentSale } from "src/types/types";

@Component({
  selector: "app-installments-table-list",
  templateUrl: "./installments-table-list.component.html",
  styleUrls: ["./installments-table-list.component.css"]
})
export class InstallmentsTableListComponent implements OnChanges, OnInit {
  @Input({ required: true }) totalPayable!: number;
  installmentsCount!: number;
  installmentsList!: InstallmentSale[];
  displayedColumns!: string[];

  constructor (
  ) {
    this.installmentsCount = 1;
    this.displayedColumns = ["isPaid", "dueDate", "price", "actions"];
  }

  ngOnInit(): void {
    this.setCashSaleForInstallmentsList();
  }

  setCashSaleForInstallmentsList() {
    this.installmentsList = [{
      dueDate: new Date,
      isPaid: true,
      price: this.totalPayable
    }];
  }

  ngOnChanges(): void {
    if(this.totalPayable && this.installmentsList)
      this.updateInstallmentsPrice();
  }

  updateInstallmentsPrice() {
    const priceForInstallments = this.totalPayable / this.installmentsCount;

    this.installmentsList.forEach((installment: InstallmentSale) => {
      installment.price = priceForInstallments;
    });
  }

  updateInstallmentsCount() {
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
}
