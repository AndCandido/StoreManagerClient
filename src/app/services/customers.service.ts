import { Injectable } from "@angular/core";
import Customer from "../models/Customer";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import environments from "src/environments/environments";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomersService {
  private resourceUrl = environments.apiUrl + "/customers";
  private headers = new HttpHeaders()
    .append("Authorization", "Basic " + btoa("and:123"));

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.resourceUrl, { headers: this.headers });
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.resourceUrl, customer,{ headers: this.headers });
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.resourceUrl}/${customer.id}`, customer,{ headers: this.headers });
  }

  deleteCustomer(customerId: string): Observable<Customer> {
    return this.http.delete<Customer>(`${this.resourceUrl}/${customerId}`, { headers: this.headers });
  }
}

// return [
//   { id:"2387fda-83i4adc-34329fdaf93", name: "Junior Lima de Souza", nickname: "Adriano", phone: "(93) 9819092", address: "Rua. Bairro. Cidade", cpf: "999.999.999-99", createdAt: "20-09-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Junior Lima de Souza", nickname: "Adriano", phone: "(93) 9819092", address: "Rua. A, Bairro X, Cidade Y", cpf: "111.111.111-11", createdAt: "20-09-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Ana Paula Oliveira", nickname: "Paulinha", phone: "(93) 9819093", address: "Av. Z, Bairro W, Cidade V", cpf: "222.222.222-22", createdAt: "21-09-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Carlos Alberto Silva", nickname: "Carlão", phone: "(93) 9819094", address: "Rua C, Bairro B, Cidade A", cpf: "333.333.333-33", createdAt: "22-09-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Maria José Santos", nickname: "Zezé", phone: "(93) 9819095", address: "Av. D, Bairro E, Cidade F", cpf: "444.444.444-44", createdAt: "23-09-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Fernando Oliveira", nickname: "Fer", phone: "(93) 9819096", address: "Rua G, Bairro H, Cidade I", cpf: "555.555.555-55", createdAt: "24-09-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Luciana Silva", nickname: "Lu", phone: "(93) 9819097", address: "Av. J, Bairro K, Cidade L", cpf: "666.666.666-66", createdAt: "25-09-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Rafael Souza", nickname: "Rafa", phone: "(93) 9819098", address: "Rua M, Bairro N, Cidade O", cpf: "777.777.777-77", createdAt: "26-09-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Luisa Oliveira", nickname: "Lulu", phone: "(93) 9819099", address: "Av. P, Bairro Q, Cidade R", cpf: "888.888.888-88", createdAt: "27-09-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Paulo Roberto Silva", nickname: "Paulinho", phone: "(93) 9819100", address: "Rua S, Bairro T, Cidade U", cpf: "999.999.999-99", createdAt: "28-09-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Camila Souza", nickname: "Cami", phone: "(93) 9819101", address: "Av. V, Bairro W, Cidade X", cpf: "000.000.000-00", createdAt: "29-09-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Daniel Oliveira", nickname: "Dan", phone: "(93) 9819102", address: "Rua Y, Bairro Z, Cidade A", cpf: "111.111.111-11", createdAt: "30-09-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Juliana Silva", nickname: "Juh", phone: "(93) 9819103", address: "Av. B, Bairro C, Cidade D", cpf: "222.222.222-22", createdAt: "01-10-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Roberto Souza", nickname: "Beto", phone: "(93) 9819104", address: "Rua E, Bairro F, Cidade G", cpf: "333.333.333-33", createdAt: "02-10-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Carla Oliveira", nickname: "Cacá", phone: "(93) 9819105", address: "Av. H, Bairro I, Cidade J", cpf: "444.444.444-44", createdAt: "03-10-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Fernanda Silva", nickname: "Nanda", phone: "(93) 9819106", address: "Rua K, Bairro L, Cidade M", cpf: "555.555.555-55", createdAt: "04-10-2023"},
//   { id: "2387fda-83i4adc-34329fdaf93", name: "Rodrigo Souza", nickname: "Rodri", phone: "(93) 9819107", address: "Av. N, Bairro O, Cidade P", cpf: "666.666.666-66", createdAt: "05-10-2023"},
// ]
