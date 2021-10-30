import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { MateriaPrima } from '../models/materiaprima';

@Injectable({
  providedIn: 'root'
})
export class MateriaprimaService {

  constructor(private http: HttpClient) { }

  findById(idMateriaPrima: any): Observable<MateriaPrima>{
    return this.http.get<MateriaPrima>(`${API_CONFIG.baseUrl}/materiaprima/${idMateriaPrima}`);
  }
  
  findAll(): Observable<MateriaPrima[]>{
    return this.http.get<MateriaPrima[]>(`${API_CONFIG.baseUrl}/materiaprima`);
  }

  create(materiaprima: MateriaPrima): Observable<MateriaPrima>{
    return this.http.post<MateriaPrima>(`${API_CONFIG.baseUrl}/materiaprima`, materiaprima);
  }

  update(materiaprima: MateriaPrima): Observable<MateriaPrima> {
    return this.http.put<MateriaPrima>(`${API_CONFIG.baseUrl}/materiaprima/${materiaprima.idMateriaPrima}`, materiaprima);
  }

  delete(idMateriaPrima: any): Observable<MateriaPrima> {
    return this.http.delete<MateriaPrima>(`${API_CONFIG.baseUrl}/materiaprima/${idMateriaPrima}`);
  }
  
}
