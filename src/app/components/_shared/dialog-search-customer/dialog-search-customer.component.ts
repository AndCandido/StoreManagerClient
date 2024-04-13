import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import Customer from "src/app/models/Customer";
import { CustomersService } from "src/app/services/customers.service";

@Component({
  selector: "app-dialog-search-customer",
  templateUrl: "./dialog-search-customer.component.html",
  styleUrls: ["./dialog-search-customer.component.css"]
})
export class DialogSearchCustomerComponent {
  customersFound!: Customer[];
  displayedColumns!: string[];
  customerIdToSearch!: string;
  customerNameToSearch!: string;

  constructor(
    private customerService: CustomersService,
    private snackBar: MatSnackBar,
    private matDialogRef: MatDialogRef<DialogSearchCustomerComponent>
  ) {
    this.displayedColumns = ["id", "name", "nickname"];
  }

  onSearchById() {
    this.customerService.getCustomerById(this.customerIdToSearch).subscribe({
      next: (customer: Customer) => {
        this.customersFound = [customer];
        this.customerNameToSearch = customer.name;
      },
      error: (err) => {
        this.openSnackBar("Cliente não encontrado");
        console.error(err);
      },
    });
  }

  onSearchByName() {
    this.customerService.getByName(this.customerNameToSearch).subscribe({
      next: (customers: Customer[]) => {
        this.customersFound = customers;
      },
      error: (err) => {
        this.openSnackBar("Error ao buscar os clientes");
        console.error(err);
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "X", {duration: 3000});
  }

  onCustomerSelected(customer: Customer) {
    this.matDialogRef.close(customer);
  }
}
