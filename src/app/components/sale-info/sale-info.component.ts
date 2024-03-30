import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { ProductToSold, SaleInfo } from "src/types/types";
import { calcDiscountPerTotalPayable, calcTotalPayablePerDiscount } from "src/utils/SaleInfoUtil";

@Component({
  selector: "app-sale-info",
  templateUrl: "./sale-info.component.html",
  styleUrls: ["./sale-info.component.css"]
})
export class SaleInfoComponent implements OnInit, OnChanges {
  @Input() productsList!: ProductToSold[];
  @Output() saleInfoChange: EventEmitter<SaleInfo> = new EventEmitter<SaleInfo>();
  saleInfo!: SaleInfo;

  ngOnInit(): void {
    const totalGross = parseFloat(this.calcTotalGross().toFixed(2));
    this.saleInfo = {
      totalGross: totalGross,
      discount: 0,
      totalPayable: totalGross
    };
    this.emitSaleInfoChange();
  }

  ngOnChanges(): void {
    if(this.saleInfo) {
      this.updateSaleInfo();
    }
  }

  updateSaleInfo() {
    this.saleInfo.totalGross = parseFloat(this.calcTotalGross().toFixed(2));
    this.calcSaleInfoTotalPayablePerDiscount();
  }

  calcSaleInfoTotalPayablePerDiscount() {
    if(!this.saleInfo.discount) {
      this.saleInfo.totalPayable = this.saleInfo.totalGross;
      return;
    }
    this.saleInfo.totalPayable = parseFloat(calcTotalPayablePerDiscount(this.saleInfo).toFixed(2));
  }

  calcSaleInfoDiscountPerTotalPayable() {
    if(!this.saleInfo.totalGross || !this.saleInfo.totalPayable) {
      this.saleInfo.discount = 100;
      return;
    }
    this.saleInfo.discount = parseFloat(calcDiscountPerTotalPayable(this.saleInfo).toFixed(2));
  }

  calcTotalGross() {
    if(!this.productsList) return 0;
    return this.productsList.reduce((acl, cur) => acl + (cur.price * cur.quantitySold) , 0);
  }

  emitSaleInfoChange() {
    this.saleInfoChange.emit(this.saleInfo);
  }
}
