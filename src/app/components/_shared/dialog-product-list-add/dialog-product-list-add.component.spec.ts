import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogProductListAddComponent } from "./dialog-product-list-add.component";

describe("DialogProductListAddComponent", () => {
  let component: DialogProductListAddComponent;
  let fixture: ComponentFixture<DialogProductListAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogProductListAddComponent]
    });
    fixture = TestBed.createComponent(DialogProductListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
