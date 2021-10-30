import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Assinante } from '../models/assinante';

@Injectable({
  providedIn: 'root'
})
export class AssinanteService {

  constructor(private http: HttpClient) {}

  findById(idAssinante: any): Observable<Assinante>{
    return this.http.get<Assinante>(`${API_CONFIG.baseUrl}/assinante/${idAssinante}`);
  }
  
  findAll(): Observable<Assinante[]>{
    return this.http.get<Assinante[]>(`${API_CONFIG.baseUrl}/assinante`);
  }

  create(assinante: Assinante): Observable<Assinante>{
    return this.http.post<Assinante>(`${API_CONFIG.baseUrl}/assinante`, assinante);
  }

  update(assinante: Assinante): Observable<Assinante> {
    return this.http.put<Assinante>(`${API_CONFIG.baseUrl}/assinante/${assinante.idAssinante}`, assinante);
  }

  delete(idAssinante: any): Observable<Assinante> {
    return this.http.delete<Assinante>(`${API_CONFIG.baseUrl}/assinante/${idAssinante}`);
  }

}
