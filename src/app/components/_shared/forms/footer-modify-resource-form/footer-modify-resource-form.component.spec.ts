import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FooterModifyResourceFormComponent } from "./footer-modify-resource-form.component";

describe("FooterModifyResourceFormComponent", () => {
  let component: FooterModifyResourceFormComponent;
  let fixture: ComponentFixture<FooterModifyResourceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterModifyResourceFormComponent]
    });
    fixture = TestBed.createComponent(FooterModifyResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
