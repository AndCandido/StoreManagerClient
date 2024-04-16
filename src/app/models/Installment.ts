export default class Installment {
  id?: string;
  dueDate!: Date;
  price!: number;
  paymentMethod?: "money" | "debit card" | "credit card" | "pix" | "negotiated";
  isPaid!: boolean;
}
