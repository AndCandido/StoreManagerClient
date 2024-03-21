import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "src/app/components/forms/forms.module";
import { AngularMaterialModule } from "src/app/angular-material/angular-material.module";
import { SharedModule } from "src/app/components/_shared/_shared.module";

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ReactiveFormsModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class ResourcesModule { }
