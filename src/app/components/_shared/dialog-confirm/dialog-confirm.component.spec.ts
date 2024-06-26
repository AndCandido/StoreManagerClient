import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogBoxComponent } from "./dialog-confirm.component";

describe("DialogBoxComponent", () => {
  let component: DialogBoxComponent;
  let fixture: ComponentFixture<DialogBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogBoxComponent]
    });
    fixture = TestBed.createComponent(DialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
