import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { LoteProducao } from '../models/loteProducao';


@Injectable({
  providedIn: 'root'
})
export class LoteProducaoService {

  constructor(private http: HttpClient) { }

  findById(idLoteProducao: any): Observable<LoteProducao> {
    return this.http.get<LoteProducao>(`${API_CONFIG.baseUrl}/loteracao/${idLoteProducao}`);
  }

  findAll(): Observable<LoteProducao[]> {
    return this.http.get<LoteProducao[]>(`${API_CONFIG.baseUrl}/loteracao`);
  }

  findAllProducaoPorData(): Observable<Object[]> {
    return this.http.get<Object[]>(`${API_CONFIG.baseUrl}/loteracao/producaoData`);
  }

  create(loteProducao: LoteProducao): Observable<LoteProducao> {
    return this.http.post<LoteProducao>(`${API_CONFIG.baseUrl}/loteracao`, loteProducao);
  }

  update(loteProducao: LoteProducao): Observable<LoteProducao> {
    return this.http.put<LoteProducao>(`${API_CONFIG.baseUrl}/loteracao/${loteProducao.idLoteProducao}`, loteProducao);
  }

  delete(idLoteProducao: any): Observable<LoteProducao> {
    return this.http.delete<LoteProducao>(`${API_CONFIG.baseUrl}/loteracao/${idLoteProducao}`);
  }

}
