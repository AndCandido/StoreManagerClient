import { NgModule } from "@angular/core";

import { MatSidenavModule } from "@angular/material/sidenav";

const modules = [
  MatSidenavModule,
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
