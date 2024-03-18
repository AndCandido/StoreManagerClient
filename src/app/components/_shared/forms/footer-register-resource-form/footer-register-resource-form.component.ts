import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-footer-register-resource-form",
  templateUrl: "./footer-register-resource-form.component.html",
  styleUrls: ["./footer-register-resource-form.component.css"]
})
export class FooterRegisterResourceFormComponent {
  @Output("onSave") eventOnSaveEmitter = new EventEmitter();

  onSave() {
    this.eventOnSaveEmitter.emit();
  }
}
