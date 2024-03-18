import { Injectable } from "@angular/core";
import Product from "../models/Product";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import environments from "src/environments/environments";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  private resourceUrl = environments.apiUrl + "/products";
  private headers = new HttpHeaders()
    .append("Authorization", environments.basicAuth);

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.resourceUrl, { headers: this.headers });
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.resourceUrl}/${id}`, {headers: this.headers});
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.resourceUrl, product, { headers: this.headers });
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.resourceUrl}/${product.id}`, product, { headers: this.headers });
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.resourceUrl}/${id}`, { headers: this.headers});
  }
}
