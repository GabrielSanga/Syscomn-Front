import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { TipoFornecedor } from '../models/tipofornecedor';

@Injectable({
  providedIn: 'root'
})
export class TipofornecedorService {

  constructor(private http: HttpClient) { }

  findById(idTipoFornecedor: any): Observable<TipoFornecedor> {
    return this.http.get<TipoFornecedor>(`${API_CONFIG.baseUrl}/tipofornecedor/${idTipoFornecedor}`);
  }

  findAll(): Observable<TipoFornecedor[]> {
    return this.http.get<TipoFornecedor[]>(`${API_CONFIG.baseUrl}/tipofornecedor`);
  }

  create(tipofornecedor: TipoFornecedor): Observable<TipoFornecedor> {
    return this.http.post<TipoFornecedor>(`${API_CONFIG.baseUrl}/tipofornecedor`, tipofornecedor);
  }

  update(tipofornecedor: TipoFornecedor): Observable<TipoFornecedor> {
    return this.http.put<TipoFornecedor>(`${API_CONFIG.baseUrl}/tipofornecedor/${tipofornecedor.idTipoFornecedor}`, tipofornecedor);
  }

  delete(idTipoFornecedor: any): Observable<TipoFornecedor> {
    return this.http.delete<TipoFornecedor>(`${API_CONFIG.baseUrl}/tipofornecedor/${idTipoFornecedor}`);
  }
  
}
