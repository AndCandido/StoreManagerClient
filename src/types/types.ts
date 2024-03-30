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
  dueDate: Date
  price: number
  isPaid: boolean
}
