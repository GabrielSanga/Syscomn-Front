import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Fornecedor } from '../models/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) { }

  findById(idFornecedor: any): Observable<Fornecedor>{
    return this.http.get<Fornecedor>(`${API_CONFIG.baseUrl}/fornecedor/${idFornecedor}`);
  }
  
  findAll(): Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>(`${API_CONFIG.baseUrl}/fornecedor`);
  }

  create(fornecedor: Fornecedor): Observable<Fornecedor>{
    return this.http.post<Fornecedor>(`${API_CONFIG.baseUrl}/fornecedor`, fornecedor);
  }

  update(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(`${API_CONFIG.baseUrl}/fornecedor/${fornecedor.idPessoa}`, fornecedor);
  }

  delete(idFornecedor: any): Observable<Fornecedor> {
    return this.http.delete<Fornecedor>(`${API_CONFIG.baseUrl}/fornecedor/${idFornecedor}`);
  }
  
}
