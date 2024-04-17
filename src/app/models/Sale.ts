import Installment from "./Installment";
import ProductSold from "./ProductSold";

export default class Sale {
  customerId?: string;
  productsSold!: ProductSold[];
  installments!: Installment[];
  price!: number;
}
