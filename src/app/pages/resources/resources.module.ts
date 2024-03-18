import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "src/app/components/forms/forms.module";
import { AngularMaterialModule } from "src/app/angular-material/angular-material.module";

@NgModule({
  imports: [
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class ResourcesModule { }
