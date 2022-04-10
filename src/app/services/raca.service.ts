import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Raca } from '../models/raca';

@Injectable({
  providedIn: 'root'
})
export class RacaService {

  constructor(private http: HttpClient) { }

  findById(idRaca: any): Observable<Raca> {
    return this.http.get<Raca>(`${API_CONFIG.baseUrl}/raca/${idRaca}`);
  }

  findAll(): Observable<Raca[]> {
    return this.http.get<Raca[]>(`${API_CONFIG.baseUrl}/raca`);
  }

  create(raca: Raca): Observable<Raca> {
    return this.http.post<Raca>(`${API_CONFIG.baseUrl}/raca`, raca);
  }

  update(raca: Raca): Observable<Raca> {
    return this.http.put<Raca>(`${API_CONFIG.baseUrl}/raca/${raca.idRaca}`, raca);
  }

  delete(idRaca: any): Observable<Raca> {
    return this.http.delete<Raca>(`${API_CONFIG.baseUrl}/raca/${idRaca}`);
  }
  
}
