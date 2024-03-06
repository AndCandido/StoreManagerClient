import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { ProductComponent } from "./pages/resources/product/product.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { CustomerComponent } from "./pages/resources/customer/customer.component";
import { SaleComponent } from "./pages/resources/sale/sale.component";
import { ResourcesModule } from "./pages/resources/resources.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SidebarComponent,
    CustomerComponent,
    SaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    ResourcesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
