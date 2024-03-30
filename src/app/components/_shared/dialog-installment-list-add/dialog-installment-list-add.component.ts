import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-dialog-installment-list-add",
  templateUrl: "./dialog-installment-list-add.component.html",
  styleUrls: ["./dialog-installment-list-add.component.css"]
})
export class DialogInstallmentListAddComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      price: "",
      dueDate: "",
      isPaid: false
    });
  }
}
