import ProductSold from "./ProductSold";

export default class {
  id?: string;
  name!: string;
  productsSold?: ProductSold[];
  price!: number;
  stockQuantity!: number;
  createdAt?: Date;
}
