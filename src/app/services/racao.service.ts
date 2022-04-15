import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Racao } from '../models/racao';

@Injectable({
  providedIn: 'root'
})
export class RacaoService {

  constructor(private http: HttpClient) { }

  findById(idRacao: any): Observable<Racao> {
    return this.http.get<Racao>(`${API_CONFIG.baseUrl}/racao/${idRacao}`);
  }

  findAll(): Observable<Racao[]> {
    return this.http.get<Racao[]>(`${API_CONFIG.baseUrl}/racao`);
  }

  create(racao: Racao): Observable<Racao> {
    return this.http.post<Racao>(`${API_CONFIG.baseUrl}/racao`, racao);
  }

  update(racao: Racao): Observable<Racao> {
    return this.http.put<Racao>(`${API_CONFIG.baseUrl}/racao/${racao.idRacao}`, racao);
  }

  delete(idRacao: any): Observable<Racao> {
    return this.http.delete<Racao>(`${API_CONFIG.baseUrl}/racao/${idRacao}`);
  }
  
}
