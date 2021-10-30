import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { TipoMorte } from '../models/tipomorte';

@Injectable({
  providedIn: 'root'
})
export class TipomorteService {

  constructor(private http: HttpClient) { }

  findById(idTipoMorte: any): Observable<TipoMorte>{
    return this.http.get<TipoMorte>(`${API_CONFIG.baseUrl}/tipomorte/${idTipoMorte}`);
  }

  findAll(): Observable<TipoMorte[]>{
    return this.http.get<TipoMorte[]>(`${API_CONFIG.baseUrl}/tipomorte`);
  }

  create(tipomorte: TipoMorte): Observable<TipoMorte>{
    return this.http.post<TipoMorte>(`${API_CONFIG.baseUrl}/tipomorte`, tipomorte);
    

  }

  update(tipomorte: TipoMorte): Observable<TipoMorte> {
    return this.http.put<TipoMorte>(`${API_CONFIG.baseUrl}/tipomorte/${tipomorte.idTipoMorte}`, tipomorte);
  }

  delete(idTipoMorte: any): Observable<TipoMorte> {
    return this.http.delete<TipoMorte>(`${API_CONFIG.baseUrl}/tipomorte/${idTipoMorte}`);
  }
  
}
