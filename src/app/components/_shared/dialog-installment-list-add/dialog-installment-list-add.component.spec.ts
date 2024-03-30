import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInstallmentListAddComponent } from './dialog-installment-list-add.component';

describe('DialogInstallmentListAddComponent', () => {
  let component: DialogInstallmentListAddComponent;
  let fixture: ComponentFixture<DialogInstallmentListAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogInstallmentListAddComponent]
    });
    fixture = TestBed.createComponent(DialogInstallmentListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
