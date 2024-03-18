import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule as NgFormsModules } from "@angular/forms";
import { ProductFormComponent } from "./product-form/product-form.component";
import { CustomerFormComponent } from "./customer-form/customer-form.component";
import { SharedModule } from "../_shared/_shared.module";
import { AngularMaterialModule } from "src/app/angular-material/angular-material.module";
import { NgxMaskDirective, provideNgxMask } from "ngx-mask";

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgFormsModules,
    SharedModule,
    CommonModule,
    AngularMaterialModule,
    NgxMaskDirective
  ],
  declarations: [
    ProductFormComponent,
    CustomerFormComponent
  ],
  exports: [
    ProductFormComponent,
    CustomerFormComponent
  ],
  providers: [
    provideNgxMask()
  ]
})
export class FormsModule { }
