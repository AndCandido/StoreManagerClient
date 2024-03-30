import { SaleInfo } from "src/types/types";

export function calcTotalPayablePerDiscount(saleInfo: SaleInfo): number {
  const totalPayableCalc = saleInfo.totalGross - (saleInfo.discount * saleInfo.totalGross) / 100;
  return parseFloat(totalPayableCalc.toFixed(2));
}


export function calcDiscountPerTotalPayable(saleInfo: SaleInfo): number {
  const discountCalc = 100 - ((saleInfo.totalPayable / saleInfo.totalGross) * 100);
  return parseFloat(discountCalc.toFixed(2));
}
