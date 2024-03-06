import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule as NgFormsModules } from "@angular/forms";
import { ProductFormComponent } from "./product-form/product-form.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { CustomerFormComponent } from "./customer-form/customer-form.component";

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgFormsModules,
    CommonModule
  ],
  declarations: [
    ProductFormComponent,
    CustomerFormComponent
  ],
  exports: [
    ProductFormComponent,
    CustomerFormComponent
  ]
})
export class FormsModule { }
