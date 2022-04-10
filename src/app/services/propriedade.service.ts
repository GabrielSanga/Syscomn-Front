import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Propriedade } from '../models/propriedade';

@Injectable({
  providedIn: 'root'
})
export class PropriedadeService {

  constructor(private http: HttpClient) { }

  findById(idPropriedade: any): Observable<Propriedade>{
    return this.http.get<Propriedade>(`${API_CONFIG.baseUrl}/propriedade/${idPropriedade}`);
  }

  findAll(): Observable<Propriedade[]>{
    return this.http.get<Propriedade[]>(`${API_CONFIG.baseUrl}/propriedade`);
  }

  create(propriedade: Propriedade): Observable<Propriedade>{
    return this.http.post<Propriedade>(`${API_CONFIG.baseUrl}/propriedade`, propriedade);
  }

  update(propriedade: Propriedade): Observable<Propriedade> {
    return this.http.put<Propriedade>(`${API_CONFIG.baseUrl}/propriedade/${propriedade.idPropriedade}`, propriedade);
  }

  delete(idPropriedade: any): Observable<Propriedade> {
    return this.http.delete<Propriedade>(`${API_CONFIG.baseUrl}/propriedade/${idPropriedade}`);
  }
  
}
