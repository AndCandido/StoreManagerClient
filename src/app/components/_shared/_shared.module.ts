import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterRegisterResourceFormComponent } from "./forms/footer-register-resource-form/footer-register-resource-form.component";
import { AngularMaterialModule } from "src/app/angular-material/angular-material.module";
import { FooterModifyResourceFormComponent } from "./forms/footer-modify-resource-form/footer-modify-resource-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DialogProductListAddComponent } from "./dialog-product-list-add/dialog-product-list-add.component";
import { DialogConfirmComponent } from "./dialog-confirm/dialog-confirm.component";
import { DialogInstallmentListAddComponent } from "./dialog-installment-list-add/dialog-installment-list-add.component";
import { DialogSearchCustomerComponent } from "./dialog-search-customer/dialog-search-customer.component";

@NgModule({
  declarations: [
    FooterRegisterResourceFormComponent,
    FooterModifyResourceFormComponent,
    DialogProductListAddComponent,
    DialogConfirmComponent,
    DialogInstallmentListAddComponent,
    DialogSearchCustomerComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FooterRegisterResourceFormComponent,
    FooterModifyResourceFormComponent,
    DialogProductListAddComponent,
    DialogConfirmComponent
  ]
})
export class SharedModule { }
