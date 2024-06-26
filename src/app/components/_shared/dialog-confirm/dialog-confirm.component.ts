import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "src/types/types";

@Component({
  selector: "app-dialog-confirm",
  templateUrl: "./dialog-confirm.component.html",
  styleUrls: ["./dialog-confirm.component.css"],
})
export class DialogConfirmComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
