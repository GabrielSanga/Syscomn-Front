import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { OrdemProducao } from '../models/ordemProducao';

@Injectable({
  providedIn: 'root'
})
export class OrdemProducaoService {

  constructor(private http: HttpClient) { }

  findById(idOrdemProducaoRacao: any): Observable<OrdemProducao>{
    return this.http.get<OrdemProducao>(`${API_CONFIG.baseUrl}/ordemproducao/${idOrdemProducaoRacao}`);
  }

  findByData(): Observable<OrdemProducao[]> {
  return this.http.get<OrdemProducao[]>(`${API_CONFIG.baseUrl}/ordemproducao/data`);
  }
  
  findAll(): Observable<OrdemProducao[]>{
    return this.http.get<OrdemProducao[]>(`${API_CONFIG.baseUrl}/ordemproducao`);
  }

  create(ordemProducao: OrdemProducao): Observable<OrdemProducao>{
    return this.http.post<OrdemProducao>(`${API_CONFIG.baseUrl}/ordemproducao`, ordemProducao);
  }

  update(ordemProducao: OrdemProducao): Observable<OrdemProducao> {
    return this.http.put<OrdemProducao>(`${API_CONFIG.baseUrl}/ordemproducao/${ordemProducao.idOrdemProducaoRacao}`, ordemProducao);
  }

  delete(idOrdemProducaoRacao: any): Observable<OrdemProducao> {
    return this.http.delete<OrdemProducao>(`${API_CONFIG.baseUrl}/ordemproducao/${idOrdemProducaoRacao}`);
  }

}
