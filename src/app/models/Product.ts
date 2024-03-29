import ProductSold from "./ProductSold";

export default class {
  id: string = "";
  ref: number = 0;
  name: string = "";
  price: number = 0;
  stockQuantity: number = 0;
  productsSold?: ProductSold[];
  createdAt: string = "";
}
