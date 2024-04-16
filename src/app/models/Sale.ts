import Customer from "./Customer";
import Installment from "./Installment";
import ProductSold from "./ProductSold";

export default class Sale {
  customer?: Customer;
  productsSold!: ProductSold[];
  installments!: Installment[];
  price!: number;
}
