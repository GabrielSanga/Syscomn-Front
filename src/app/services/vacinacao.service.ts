import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Vacinacao } from '../models/vacinacao';

@Injectable({
  providedIn: 'root'
})
export class VacinacaoService {

  constructor(private http: HttpClient) { }

  findById(idVacinacao: any): Observable<Vacinacao>{
    return this.http.get<Vacinacao>(`${API_CONFIG.baseUrl}/vacinacao/${idVacinacao}`);
  }

  findAll(): Observable<Vacinacao[]>{
    return this.http.get<Vacinacao[]>(`${API_CONFIG.baseUrl}/vacinacao`);
  }

  create(vacinacao: Vacinacao): Observable<Vacinacao>{
    return this.http.post<Vacinacao>(`${API_CONFIG.baseUrl}/vacinacao`, vacinacao);
  }

  update(vacinacao: Vacinacao): Observable<Vacinacao> {
    return this.http.put<Vacinacao>(`${API_CONFIG.baseUrl}/vacinacao/${vacinacao.idVacinacao}`, vacinacao);
  }

  delete(idVacinacao: any): Observable<Vacinacao> {
    return this.http.delete<Vacinacao>(`${API_CONFIG.baseUrl}/vacinacao/${idVacinacao}`);
  }

}