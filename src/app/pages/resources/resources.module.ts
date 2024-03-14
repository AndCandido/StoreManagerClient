import { NgModule } from "@angular/core";

import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "src/app/components/forms/forms.module";

@NgModule({
  imports: [
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FormsModule
  ]
})
export class ResourcesModule { }
