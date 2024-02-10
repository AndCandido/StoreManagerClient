import { NgModule } from "@angular/core";

import { MatTabsModule } from "@angular/material/tabs";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    MatTabsModule
  ]
})
export class ResourcesModule { }
