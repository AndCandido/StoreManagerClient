import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
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
import {  } from "./components/_shared/dialog-confirm/dialog-confirm.component";
import { SharedModule } from "./components/_shared/_shared.module";
import ptBr from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { ProductsSoldTableListComponent } from "./components/products-sold-table-list/products-sold-table-list.component";
import { SaleInfoComponent } from './components/sale-info/sale-info.component';
import { InstallmentsTableListComponent } from './components/installments-table-list/installments-table-list.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SidebarComponent,
    CustomerComponent,
    SaleComponent,
    ProductsSoldTableListComponent,
    SaleInfoComponent,
    InstallmentsTableListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    ResourcesModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt" },
    { provide: DEFAULT_CURRENCY_CODE, useValue: "BRL" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
