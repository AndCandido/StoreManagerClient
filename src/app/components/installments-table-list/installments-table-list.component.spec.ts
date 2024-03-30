import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InstallmentsTableListComponent } from "./installments-table-list.component";

describe("InstallmentsTableListComponent", () => {
  let component: InstallmentsTableListComponent;
  let fixture: ComponentFixture<InstallmentsTableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallmentsTableListComponent]
    });
    fixture = TestBed.createComponent(InstallmentsTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
