import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Movimentacao } from '../models/movimentacao';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http: HttpClient) { }

  findById(idMovimentacao: any): Observable<Movimentacao>{
    return this.http.get<Movimentacao>(`${API_CONFIG.baseUrl}/movimentacao/${idMovimentacao}`);
  }
  
  findAll(): Observable<Movimentacao[]>{
    return this.http.get<Movimentacao[]>(`${API_CONFIG.baseUrl}/movimentacao`);
  }

  create(movimentacao: Movimentacao): Observable<Movimentacao>{
    return this.http.post<Movimentacao>(`${API_CONFIG.baseUrl}/movimentacao`, movimentacao);
  }

  update(movimentacao: Movimentacao): Observable<Movimentacao> {
    return this.http.put<Movimentacao>(`${API_CONFIG.baseUrl}/movimentacao/${movimentacao.idMovimentacao}`, movimentacao);
  }

  delete(idMovimentacao: any): Observable<Movimentacao> {
    return this.http.delete<Movimentacao>(`${API_CONFIG.baseUrl}/movimentacao/${idMovimentacao}`);
  }
  
}
