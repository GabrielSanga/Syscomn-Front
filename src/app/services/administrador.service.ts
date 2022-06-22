import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Administrador } from '../models/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  findById(idPessoa: any): Observable<Administrador>{
    return this.http.get<Administrador>(`${API_CONFIG.baseUrl}/administrador/${idPessoa}`);
  }

  findAll(): Observable<Administrador[]>{
    return this.http.get<Administrador[]>(`${API_CONFIG.baseUrl}/administrador`);
  }

  create(administrador: Administrador): Observable<Administrador>{
    return this.http.post<Administrador>(`${API_CONFIG.baseUrl}/administrador`, administrador);
  }

  update(administrador: Administrador): Observable<Administrador> {
    return this.http.put<Administrador>(`${API_CONFIG.baseUrl}/administrador/${administrador.idPessoa}`, administrador);
  }

}
