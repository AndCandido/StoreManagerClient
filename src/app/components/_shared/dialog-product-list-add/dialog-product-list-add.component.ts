import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import Product from "src/app/models/Product";
import { ProductService } from "src/app/services/product.service";
import { ProductToSold } from "src/types/types";

@Component({
  selector: "app-dialog-product-list-add",
  templateUrl: "./dialog-product-list-add.component.html",
  styleUrls: [
    "./dialog-product-list-add.component.css",
    "../../../../assets/styles/forms-styles.css"
  ]
})
export class DialogProductListAddComponent {
  canSubmitDialog = false;
  errorMessage: string = "";
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private dialogRef: MatDialogRef<ProductToSold>
  )
  {}

  ngOnInit(): void {
    this.buildFormGroup();
  }

  buildFormGroup() {
    this.formGroup = this.formBuilder.group({
      id: ["", [Validators.min(0)]],
      ref: ["", [Validators.min(0)]],
      name: "",
      price:"",
      stockQuantity: "",
      quantitySold: [1, [Validators.required]]
    });
  }

  clearErrorMessage() {
    this.errorMessage = "";
  }

  searchProduct() {
    const productId = this.formGroup.value["id"];
    if(!productId) return;

    this.productService.getProductById(productId).subscribe({
      next: (value: Product) => {
        this.formGroup.patchValue(value);
        this.canSubmitDialog = true;
      },
      error: (err) => {
        this.canSubmitDialog = true;
        this.errorMessage = "Produto não encontrado";
        console.error(err);
        this.resetFormGroup();
      },
    });
  }

  resetFormGroup() {
    const productId = this.formGroup.get("id")?.value;
    const quantitySold = this.formGroup.get("quantitySold")?.value;
    this.formGroup.reset({ id: productId, quantitySold });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  closeDialogWithResult() {
    if(!this.canSubmitDialog || !this.formGroup.valid) return;
    this.dialogRef.close(this.formGroup.value);
  }
}
