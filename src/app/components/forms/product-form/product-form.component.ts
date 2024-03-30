import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import Product from "src/app/models/Product";
import { ProductsService } from "src/app/services/products.service";
import { DialogData, EmitEventOptions } from "src/types/types";
import { DialogConfirmComponent } from "../../_shared/dialog-confirm/dialog-confirm.component";
import { Observer } from "rxjs";

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
      ref: product.ref,
      name: [product.name, [Validators.required, Validators.max(50)]],
      price: [product.price, [Validators.required, Validators.min(0)]],
      stockQuantity: [product.stockQuantity, [Validators.required, Validators.min(0)]],
      createdAt: product.createdAt
    });
  }

  searchProductById() {
    const id = this.formGroup.value["id"];
    if(!id) return;
    this.productService.getProductById(id).subscribe({
      next: (value: Product) => {
        this.formGroup.patchValue(value);
      },
      error: () => {
        this.setSnackBarMessage("Produto não encontrado");
        this.emitOnRequestEvent();
      }
    });
  }

  onSave() {
    if(!this.formGroup.valid) return;
    const product: Product = this.formGroup.value;
    this.saveProduct(product);
  }

  saveProduct(product: Product) {
    this.productService.saveProduct(product).subscribe(
      this.subscribeOptions(
        `${product.name} cadastrado`,
        `Erro ao cadastrar ${product.name}`,
        this.emitOnRequestEvent
      )
    );
  }

  onUpdate() {
    const dialogRef = this.openDialog({
      title: "Tem certeza que deseja atualizar esse produto?",
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      const product: Product = this.formGroup.value;
      if(result && this.formGroup.valid) this.updateProduct(product);
    });
  }

  updateProduct(product: Product) {
    if(!product.id) return;

    this.productService.updateProduct(product).subscribe(
      this.subscribeOptions(
        `${product.name} atualizado`,
        `Erro ao atualizar ${product.name}`,
        this.emitOnRequestEvent
      )
    );
  }

  onDelete() {
    const dialogRef =
      this.openDialog({
        title: "Tem certeza que deseja deletar esse produto?",
      });

    dialogRef.afterClosed().subscribe((canDelete: boolean) => {
      const product: Product = this.formGroup.value;
      if(canDelete) this.deleteProduct(product);
    });
  }

  deleteProduct(product: Product) {
    if(!product.id) return;

    this.productService.deleteProduct(product.id).subscribe(
      this.subscribeOptions(
        `${product.name} deletado`,
        `Erro ao deletar ${product.name}`,
        this.emitOnRequestEvent
      )
    );
  }

  subscribeOptions(successMessage: string, errorMessage: string, cb: () => void): Partial<Observer<Product>> {
    return {
      next: () => {
        this.setSnackBarMessage(successMessage);
      },
      error: (err) => {
        this.setSnackBarMessage(errorMessage);
        console.error(err);
      },
      complete: () => {
        cb.call(this);
      }
    };
  }

  setSnackBarMessage(message: string) {
    this.eventOnRequestOptions.snackBarMessage = message;
  }

  openDialog(dialogData: DialogData) {
    return this.dialog.open(DialogConfirmComponent, {
      data: dialogData
    });
  }

  emitOnRequestEvent() {
    this.eventOnRequest.emit(this.eventOnRequestOptions);
  }
}
