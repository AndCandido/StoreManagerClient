import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FooterRegisterResourceFormComponent } from "./footer-register-resource-form.component";

describe("FooterRegisterResourceFormComponent", () => {
  let component: FooterRegisterResourceFormComponent;
  let fixture: ComponentFixture<FooterRegisterResourceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterRegisterResourceFormComponent]
    });
    fixture = TestBed.createComponent(FooterRegisterResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
