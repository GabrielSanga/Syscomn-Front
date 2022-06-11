import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Alimentacao } from '../models/alimentacao';

@Injectable({
  providedIn: 'root'
})
export class AlimentacaoService {

  constructor(private http: HttpClient) { }

  findById(idAlimentacao: any): Observable<Alimentacao>{
    return this.http.get<Alimentacao>(`${API_CONFIG.baseUrl}/alimentacao/${idAlimentacao}`);
  }

  findAll(): Observable<Alimentacao[]>{
    return this.http.get<Alimentacao[]>(`${API_CONFIG.baseUrl}/alimentacao`);
  }

  create(alimentacao: Alimentacao): Observable<Alimentacao>{
    return this.http.post<Alimentacao>(`${API_CONFIG.baseUrl}/alimentacao`, alimentacao);
  }

  update(alimentacao: Alimentacao): Observable<Alimentacao> {
    return this.http.put<Alimentacao>(`${API_CONFIG.baseUrl}/alimentacao/${alimentacao.idAlimentacao}`, alimentacao);
  }

  delete(idAlimentacao: any): Observable<Alimentacao> {
    return this.http.delete<Alimentacao>(`${API_CONFIG.baseUrl}/alimentacao/${idAlimentacao}`);
  }
}
