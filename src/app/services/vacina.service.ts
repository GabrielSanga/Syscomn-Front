import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Vacina } from '../models/vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  constructor(private http: HttpClient) { }

  findById(idVacina: any): Observable<Vacina> {
    return this.http.get<Vacina>(`${API_CONFIG.baseUrl}/vacina/${idVacina}`);
  }

  findAll(): Observable<Vacina[]> {
    return this.http.get<Vacina[]>(`${API_CONFIG.baseUrl}/vacina`);
  }

  create(vacina: Vacina): Observable<Vacina> {
    return this.http.post<Vacina>(`${API_CONFIG.baseUrl}/vacina`, vacina);
  }

  update(vacina: Vacina): Observable<Vacina> {
    return this.http.put<Vacina>(`${API_CONFIG.baseUrl}/vacina/${vacina.idVacina}`, vacina);
  }

  delete(idVacina: any): Observable<Vacina> {
    return this.http.delete<Vacina>(`${API_CONFIG.baseUrl}/vacina/${idVacina}`);
  }
  
}
