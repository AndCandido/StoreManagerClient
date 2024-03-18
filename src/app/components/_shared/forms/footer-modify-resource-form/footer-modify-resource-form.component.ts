import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-footer-modify-resource-form",
  templateUrl: "./footer-modify-resource-form.component.html",
  styleUrls: ["./footer-modify-resource-form.component.css"]
})
export class FooterModifyResourceFormComponent {
  @Output("onDelete") eventOnDeleteEmitter = new EventEmitter();
  @Output("onUpdate") eventOnUpdateEmitter = new EventEmitter();

  onDelete() {
    this.eventOnDeleteEmitter.emit();
  }

  onUpdate() {
    this.eventOnUpdateEmitter.emit();
  }
}
