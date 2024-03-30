import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleInfoComponent } from './sale-info.component';

describe('SaleInfoComponent', () => {
  let component: SaleInfoComponent;
  let fixture: ComponentFixture<SaleInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleInfoComponent]
    });
    fixture = TestBed.createComponent(SaleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
