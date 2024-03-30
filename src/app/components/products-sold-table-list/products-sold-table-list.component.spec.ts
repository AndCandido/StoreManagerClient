import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSoldTableListComponent } from './products-sold-table-list.component';

describe('ProductsSoldTableListComponent', () => {
  let component: ProductsSoldTableListComponent;
  let fixture: ComponentFixture<ProductsSoldTableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsSoldTableListComponent]
    });
    fixture = TestBed.createComponent(ProductsSoldTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
