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

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    const headers = new HttpHeaders()
      .append("Authorization", "Basic " + btoa("and:123"));

    return this.http.get<Product[]>(this.resourceUrl, { headers });

    // return [
    //   { id: "32189-4329fdaf93", name: "Calça Fem Inf", price: 49.99, stockQuantity: 5, createdAt: "20-01-2023" },
    //   { id: "32189-4329fdaf93", name: "Berm Masc G", price: 74.90, stockQuantity: 1, createdAt: "20-01-2023" },
    //   { id: "32189-4329fdaf93", name: "Calça Fem Inf", price: 59.99, stockQuantity: 8, createdAt: "15-02-2023" },
    //   { id: "32189-4329fdaf93", name: "Berm Fem P", price: 39.90, stockQuantity: 3, createdAt: "10-03-2023" },
    //   { id: "32189-4329fdaf93", name: "Calça Masc Inf", price: 54.99, stockQuantity: 6, createdAt: "05-04-2023" },
    //   { id: "32189-4329fdaf93", name: "Berm Masc G", price: 79.90, stockQuantity: 2, createdAt: "25-04-2023" },
    //   { id: "32189-4329fdaf93", name: "Calça Fem G", price: 69.99, stockQuantity: 4, createdAt: "30-05-2023" },
    //   { id: "32189-4329fdaf93", name: "Berm Fem P", price: 49.90, stockQuantity: 5, createdAt: "15-06-2023" },
    //   { id: "32189-4329fdaf93", name: "Calça Masc G", price: 59.99, stockQuantity: 7, createdAt: "20-07-2023" },
    //   { id: "32189-4329fdaf93", name: "Berm Masc Inf", price: 64.90, stockQuantity: 3, createdAt: "10-08-2023" },
    //   { id: "32189-4329fdaf93", name: "Calça Fem Inf", price: 44.99, stockQuantity: 2, createdAt: "05-09-2023" },
    //   { id: "32189-4329fdaf93", name: "Berm Masc G", price: 84.90, stockQuantity: 1, createdAt: "20-09-2023" },
    //   { id: "32189-4329fdaf93", name: "Calça Fem G", price: 74.99, stockQuantity: 6, createdAt: "30-10-2023" },
    //   { id: "32189-4329fdaf93", name: "Berm Fem P", price: 59.90, stockQuantity: 4, createdAt: "15-11-2023" },
    //   { id: "32189-4329fdaf93", name: "Calça Masc Inf", price: 69.99, stockQuantity: 3, createdAt: "20-12-2023" }
    // ];
  }
}
