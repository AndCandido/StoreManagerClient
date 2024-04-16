import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import environments from "src/environments/environments";
import Customer from "../models/Customer";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  private resourceUrl = environments.apiUrl + "/customers";
  private headers = new HttpHeaders()
    .append("Authorization", "Basic " + btoa("and:123"));

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.resourceUrl, { headers: this.headers });
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.resourceUrl}/${id}`, { headers: this.headers });
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.resourceUrl, customer,{ headers: this.headers });
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.resourceUrl}/${customer.id}`, customer,{ headers: this.headers });
  }

  deleteCustomer(id: string): Observable<Customer> {
    return this.http.delete<Customer>(`${this.resourceUrl}/${id}`, { headers: this.headers });
  }

  getByName(name: string): Observable<Customer[]> {
    const params = new HttpParams().set("customerName", name);
    return this.http.get<Customer[]>(this.resourceUrl, { headers: this.headers, params });
  }
}
