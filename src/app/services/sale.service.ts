import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import environments from "src/environments/environments";
import Sale from "../models/Sale";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SaleService {
  private resourceUrl = environments.apiUrl + "/sales";
  private headers = new HttpHeaders()
    .append("Authorization", environments.basicAuth);

  constructor(private http: HttpClient) { }


  saveSale(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(this.resourceUrl, sale, { headers: this.headers });
  }
}
