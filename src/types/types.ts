import Customer from "src/app/models/Customer";
import Installment from "src/app/models/Installment";

export type EmitEventOptions = {
  snackBarMessage: string
};

export type DialogData = {
  title: string;
}

export type ProductToSold = {
  id: number;
  ref: string;
  name: string,
  price: number,
  quantitySold: number
}

export type SaleInfo = {
  totalGross: number
  discount: number
  totalPayable: number
}

export type InstallmentSale = {
  customer: Customer;
  installments: Installment[]
}
