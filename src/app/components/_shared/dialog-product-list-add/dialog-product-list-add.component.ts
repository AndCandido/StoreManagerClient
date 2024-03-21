import { DialogRef } from "@angular/cdk/dialog";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Product from "src/app/models/Product";
import { ProductsService } from "src/app/services/products.service";

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
    private productService: ProductsService,
    private dialogRef: DialogRef
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
      stockQuantity: ""
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
        const productId = this.formGroup.get("id")?.value;
        this.formGroup.reset({ id: productId });
        console.error(err);
      },
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submitDialog() {
    if(!this.canSubmitDialog) return;
    this.dialogRef.close(this.formGroup.value);
  }
}
