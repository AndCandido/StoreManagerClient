import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import Customer from "src/app/models/Customer";
import { CustomersService } from "src/app/services/customers.service";
import { EmitEventOptions } from "src/types/types";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  tabIndexSelected = 0;
  displayedColumns = ["id", "name", "nickname", "address", "phone"];
  customerSelected!: Customer;
  customers!: Customer[];

  constructor(
    private customersService: CustomersService,
    private snackBar: MatSnackBar
  )
  {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.customersService.getAllCustomers()
      .subscribe({
        next: (customers) => {
          this.customers = customers;
        },
        error(err) {
          console.error("Error: ", err);
        },
      });
  }

  eventOnRequest(event: EmitEventOptions) {
    this.openSnackBar(event.snackBarMessage);
    this.loadData();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "Ver", { duration: 3000 })
      .onAction()
      .subscribe(() => {
        this.tabIndexSelected = 0;
      });
  }

  setTabIndexSelected(num: number) {
    this.tabIndexSelected = num;
  }

  itemSelected(customer: Customer) {
    this.setTabIndexSelected(2);
    this.setCustomerSelected(customer);
  }

  setCustomerSelected(customer: Customer) {
    this.customerSelected = customer;
  }
}
