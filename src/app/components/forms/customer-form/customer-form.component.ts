import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Customer from "src/app/models/Customer";
import { DialogData, EmitEventOptions } from "src/types/types";
import { CustomerService } from "src/app/services/customer.service";
import { Observer } from "rxjs";
import { DialogConfirmComponent } from "../../_shared/dialog-confirm/dialog-confirm.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-customer-form",
  templateUrl: "./customer-form.component.html",
  styleUrls: [
    "./customer-form.component.css",
    "../../../../assets/styles/forms-styles.css"
  ]
})
export class CustomerFormComponent implements OnInit, OnChanges {
  @Input({ required: true }) formType!: "register" | "modify";
  @Input() fieldValues!: Customer;
  @Output() eventOnRequest: EventEmitter<EmitEventOptions> = new EventEmitter();

  eventOnRequestOptions: EmitEventOptions = { snackBarMessage: "" };
  formGroup!: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private dialog: MatDialog
  )
  {}

  ngOnInit(): void {
    if(!this.fieldValues) {
      this.fieldValues = new Customer;
    }
    this.createFormGroup(new Customer);
  }

  ngOnChanges(): void {
    if(!this.formGroup) return;
    this.formGroup.patchValue(this.fieldValues);
  }

  createFormGroup(customer: Customer): FormGroup {
    return this.formGroup = this.formBuilder.group({
      id: customer.id,
      name: [customer.name, [Validators.required, Validators.maxLength(70)]],
      nickname: customer.nickname,
      cpf: [customer.cpf, [Validators.required]],
      address: [customer.address, [Validators.required]],
      phone: customer.phone,
      createdAt: customer.createdAt
    });
  }

  searchCustomerById() {
    const customerId = this.formGroup.value["id"];
    if(!customerId) return;

    this.customerService.getCustomerById(customerId).subscribe({
      next: (value: Customer) => {
        this.formGroup.patchValue(value);
      },
      error: () => {
        this.setSnackBarMessage("Cliente não encontrado");
        this.emitOnRequestEvent();
      }
    });
  }

  onSave() {
    if(!this.formGroup.valid) return;

    const customer: Customer = this.formGroup.value;
    this.saveCustomer(customer);
  }

  saveCustomer(customer: Customer) {
    this.customerService.saveCustomer(customer).subscribe(
      this.subscribeOptions(
        `${customer.name} cadastrado`,
        `Erro ao cadastrar ${customer.name}`,
        this.emitOnRequestEvent
      )
    );
  }

  onUpdate() {
    const dialogRef = this.openDialog({
      title: "Tem certeza que deseja atualizar esse cliente?"
    });

    dialogRef.afterClosed().subscribe(result => {
      const customer: Customer = this.formGroup.value;
      if(result && this.formGroup.valid)
        this.updateCustomer(customer);
    });
  }

  updateCustomer(customer: Customer) {
    if(!customer.id) return;

    this.customerService.updateCustomer(customer).subscribe(
      this.subscribeOptions(
        `${customer.name} atualizado`,
        `Erro ao atualizar ${customer.name}`,
        this.emitOnRequestEvent
      )
    );
  }

  onDelete() {
    const dialogRef = this.openDialog({
      title: "Tem certeza que deseja deletar esse cliente?"
    });

    dialogRef.afterClosed().subscribe(result => {
      const customer: Customer = this.formGroup.value;
      if(result)
        this.deleteCustomer(customer);
    });
  }

  deleteCustomer(customer: Customer) {
    if(!customer.id) return;

    this.customerService.deleteCustomer(customer.id).subscribe(
      this.subscribeOptions(
        `${customer.name} deletado`,
        `Erro ao deletar ${customer.name}`,
        this.emitOnRequestEvent
      )
    );
  }

  openDialog(dialogData: DialogData) {
    return this.dialog.open(DialogConfirmComponent, {
      data: dialogData
    });
  }

  subscribeOptions(successMessage: string, errorMessage: string, cb: () => void): Partial<Observer<Customer>> {
    return {
      next: () => {
        this.setSnackBarMessage(successMessage);
      },
      error: (err) => {
        this.setSnackBarMessage(errorMessage);
        console.error(err);
      },
      complete: () => {
        cb.call(this);
      }
    };
  }

  setSnackBarMessage(message: string) {
    this.eventOnRequestOptions.snackBarMessage = message;
  }

  emitOnRequestEvent() {
    this.eventOnRequest.emit(this.eventOnRequestOptions);
  }
}
