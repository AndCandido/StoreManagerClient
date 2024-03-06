import { Component, OnInit } from "@angular/core";
import Customer from "src/app/models/Customer";
import { CustomersService } from "src/app/services/customers.service";

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

  constructor(private customersService: CustomersService)
  {}

  ngOnInit(): void {
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

  setTabIndexSelected(num: number) {
    this.tabIndexSelected = num;
  }

  itemSelected(customer: Customer) {
    this.setTabIndexSelected(2);
    console.log(customer);
    this.setCustomerSelected(customer);
  }

  setCustomerSelected(customer: Customer) {
    this.customerSelected = customer;
  }
}
