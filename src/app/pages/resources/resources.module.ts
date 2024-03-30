import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule as MyFormsModule} from "src/app/components/forms/forms.module";
import { AngularMaterialModule } from "src/app/angular-material/angular-material.module";
import { SharedModule } from "src/app/components/_shared/_shared.module";
import { NgxMaskDirective, provideNgxMask } from "ngx-mask";

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    NgxMaskDirective,
  ],
  exports: [
    ReactiveFormsModule,
    AngularMaterialModule,
    MyFormsModule
  ],
  providers: [
    provideNgxMask()
  ]
})
export class ResourcesModule { }
