import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { RegimeEngorda } from '../models/regimeengorda';

@Injectable({
  providedIn: 'root'
})
export class RegimeengordaService {

  constructor(private http: HttpClient) { }

  findById(idRegimeEngorda: any): Observable<RegimeEngorda>{
    return this.http.get<RegimeEngorda>(`${API_CONFIG.baseUrl}/regimeengorda/${idRegimeEngorda}`);
  }

  findAll(): Observable<RegimeEngorda[]>{
    return this.http.get<RegimeEngorda[]>(`${API_CONFIG.baseUrl}/regimeengorda`);
  }

  create(regimeengorda: RegimeEngorda): Observable<RegimeEngorda>{
    return this.http.post<RegimeEngorda>(`${API_CONFIG.baseUrl}/regimeengorda`, regimeengorda);
    
  }

  update(regimeengorda: RegimeEngorda): Observable<RegimeEngorda> {
    return this.http.put<RegimeEngorda>(`${API_CONFIG.baseUrl}/regimeengorda/${regimeengorda.idRegimeEngorda}`, regimeengorda);
  }

  delete(idRegimeEngorda: any): Observable<RegimeEngorda> {
    return this.http.delete<RegimeEngorda>(`${API_CONFIG.baseUrl}/regimeengorda/${idRegimeEngorda}`);
  }

}
