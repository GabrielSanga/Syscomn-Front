import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { LocalArmazenamento } from '../models/localarmazenamento';

@Injectable({
  providedIn: 'root'
})
export class LocalarmazenamentoService {

  constructor(private http: HttpClient) { }

  findById(idLocalArmazenamento: any): Observable<LocalArmazenamento>{
    return this.http.get<LocalArmazenamento>(`${API_CONFIG.baseUrl}/localarmazenamento/${idLocalArmazenamento}`);
  }

  findAll(): Observable<LocalArmazenamento[]>{
    return this.http.get<LocalArmazenamento[]>(`${API_CONFIG.baseUrl}/localarmazenamento`);
  }

  create(localarmazenamento: LocalArmazenamento): Observable<LocalArmazenamento>{
    return this.http.post<LocalArmazenamento>(`${API_CONFIG.baseUrl}/localarmazenamento`, localarmazenamento);
    

  }

  update(localarmazenamento: LocalArmazenamento): Observable<LocalArmazenamento> {
    return this.http.put<LocalArmazenamento>(`${API_CONFIG.baseUrl}/localarmazenamento/${localarmazenamento.idLocalArmazenamento}`, localarmazenamento);
  }

  delete(idLocalArmazenamento: any): Observable<LocalArmazenamento> {
    return this.http.delete<LocalArmazenamento>(`${API_CONFIG.baseUrl}/localarmazenamento/${idLocalArmazenamento}`);
  }
  
}
