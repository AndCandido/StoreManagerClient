import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import Product from "src/app/models/Product";
import { ProductsService } from "src/app/services/products.service";
import { DialogData, EmitEventOptions } from "src/types/types";
import { DialogBoxComponent } from "../../dialog-box/dialog-box.component";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: [
    "./product-form.component.css",
    "../../../../assets/styles/forms-styles.css"
  ]
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() fieldValues!: Product;
  @Input({ required: true }) formType!: "register" | "modify";
  @Output() eventOnRequest: EventEmitter<EmitEventOptions> = new EventEmitter();

  eventOnRequestOptions: EmitEventOptions = { snackBarMessage: "" };
  isRegisterForm!: boolean;
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if(!this.fieldValues) {
      this.fieldValues = new Product();
    }
    this.isRegisterForm = this.formType == "register";
    this.formGroup = this.createFormGroup(this.fieldValues);
  }

  ngOnChanges(): void {
    this.updateFormControlValues();
  }

  updateFormControlValues() {
    if(!this.formGroup) return;
    this.formGroup.patchValue(this.fieldValues);
  }

  createFormGroup(product: Product): FormGroup{
    return this.formBuilder.group({
      id: product.id,
      name: [product.name, [Validators.required, Validators.max(50)]],
      price: [product.price, [Validators.required, Validators.min(0)]],
      stockQuantity: [product.stockQuantity, [Validators.required, Validators.min(0)]],
      createdAt: product.createdAt
    });
  }

  onSave() {
    if(!this.formGroup.valid) return;

    this.productService.saveProduct(this.formGroup.value).subscribe({
      next: (value: Product) => {
        this.eventOnRequestOptions.snackBarMessage = value.name + " cadastrado";
      },
      error: (err) => {
        this.eventOnRequestOptions.snackBarMessage = ("Error ao cadastrar o produto");
        console.error(err);
      },
      complete: () => {
        this.emitOnRequestEvent();
      }
    });
  }

  onUpdate() {
    const dialogRef = this.openDialog({
      title: "Tem certeza que deseja atualizar esse produto?",
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result) this.updateProduct();
    });
  }

  updateProduct() {
    const product = this.formGroup.value;
    if(!this.formGroup.valid || !product.id) return;

    this.productService.updateProduct(product).subscribe({
      next: (value: Product) => {
        this.eventOnRequestOptions.snackBarMessage = value.name + " atualizado";
      },
      error: (err) => {
        this.eventOnRequestOptions.snackBarMessage = "Error ao atualizar o produto";
        console.error(err);
      },
      complete: () => {
        this.emitOnRequestEvent();
      },
    });
  }

  async onDelete() {
    const dialogRef =
      this.openDialog({
        title: "Tem certeza que quer deletar esse produto?",
      });

    dialogRef.afterClosed().subscribe((canDelete: boolean) => {
      if(canDelete) this.deleteProduct();
    });
  }

  deleteProduct() {
    const product: Product = this.formGroup.value;
    this.productService.deleteProduct(product.id).subscribe({
      next: () => {
        this.eventOnRequestOptions.snackBarMessage = product.name + " deletado";
      },
      error: (error) => {
        this.eventOnRequestOptions.snackBarMessage = "Error ao deletar " + product.name;
        console.error(error);
      },
      complete: () => {
        this.emitOnRequestEvent();
      }
    });
  }

  openDialog(dialogData: DialogData) {
    return this.dialog.open(DialogBoxComponent, {
      data: dialogData
    });
  }

  emitOnRequestEvent() {
    this.eventOnRequest.emit(this.eventOnRequestOptions);
  }
}
