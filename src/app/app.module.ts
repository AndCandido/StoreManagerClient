import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MaterialModule } from "./material/material.module";
import { ProductComponent } from "./pages/resources/product/product.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CustomerComponent } from "./pages/resources/customer/customer.component";
import { SaleComponent } from "./pages/resources/sale/sale.component";
import { ResourcesModule } from "./pages/resources/resources.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SidebarComponent,
    CustomerComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MaterialModule,
    ResourcesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
