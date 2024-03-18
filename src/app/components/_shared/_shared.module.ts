import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterRegisterResourceFormComponent } from "./forms/footer-register-resource-form/footer-register-resource-form.component";
import { AngularMaterialModule } from "src/app/angular-material/angular-material.module";
import { FooterModifyResourceFormComponent } from "./forms/footer-modify-resource-form/footer-modify-resource-form.component";

@NgModule({
  declarations: [
    FooterRegisterResourceFormComponent,
    FooterModifyResourceFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    FooterRegisterResourceFormComponent,
    FooterModifyResourceFormComponent
  ]
})
export class SharedModule { }
