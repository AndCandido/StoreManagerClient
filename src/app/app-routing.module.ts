import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./pages/resources/product/product.component";
import { CustomerComponent } from "./pages/resources/customer/customer.component";
import { SaleComponent } from "./pages/resources/sale/sale.component";

const routes: Routes = [
  { path: "", component: SaleComponent },
  { path: "products", component: ProductComponent },
  { path: "customers", component: CustomerComponent },
  { path: "sales", component: SaleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
