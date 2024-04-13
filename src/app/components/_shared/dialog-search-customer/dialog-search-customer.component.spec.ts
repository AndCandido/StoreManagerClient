import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogSearchCustomerComponent } from "./dialog-search-customer.component";

describe("DialogSearchCustomerComponent", () => {
  let component: DialogSearchCustomerComponent;
  let fixture: ComponentFixture<DialogSearchCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSearchCustomerComponent]
    });
    fixture = TestBed.createComponent(DialogSearchCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
