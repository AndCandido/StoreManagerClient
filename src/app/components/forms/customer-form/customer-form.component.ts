import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { maskInput } from "src/app/utils/appUtils";
import Customer from "src/app/models/Customer";

@Component({
  selector: "app-customer-form",
  templateUrl: "./customer-form.component.html",
  styleUrls: [
    "./customer-form.component.css",
    "../../../../assets/styles/forms-styles.css"
  ]
})
export class CustomerFormComponent implements OnInit {
  @Input({ required: true }) isRegisterForm!: boolean;
  @Input() fieldValues!: Customer;
  formGroup!: FormGroup;

  constructor (private formBuilder: FormBuilder)
  {}

  ngOnInit(): void {
    if(!this.fieldValues) {
      this.fieldValues = new Customer;
    }
    this.createFormGroup(new Customer);
  }

  createFormGroup(customer: Customer): FormGroup {
    return this.formGroup = this.formBuilder.group({
      id: customer.id,
      name: customer.name,
      nickname: customer.nickname,
      cpf: customer.cpf,
      address: customer.address,
      phone: customer.phone,
      createdAt: customer.createdAt
    });
  }

  onInputCpfChange(event: Event) {
    const charMaskPositions = new Map<number, string>();
    charMaskPositions.set(3, ".");
    charMaskPositions.set(7, ".");
    charMaskPositions.set(11, "-");

    maskInput(event, charMaskPositions);
  }

  onInputPhoneChange(event: Event) {
    const charMaskPositions = new Map<number, string>();
    charMaskPositions.set(0, "(");
    charMaskPositions.set(3, ")");
    charMaskPositions.set(4, " ");
    charMaskPositions.set(10, "-");

    maskInput(event, charMaskPositions);
  }
}
