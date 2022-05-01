import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Pesagem } from '../models/pesagem';

@Injectable({
  providedIn: 'root'
})
export class PesagemService {

  constructor(private http: HttpClient) { }

  findById(idPesagem: any): Observable<Pesagem>{
    return this.http.get<Pesagem>(`${API_CONFIG.baseUrl}/pesagem/${idPesagem}`);
  }

  findAll(): Observable<Pesagem[]>{
    return this.http.get<Pesagem[]>(`${API_CONFIG.baseUrl}/pesagem`);
  }

  create(pesagem: Pesagem): Observable<Pesagem>{
    return this.http.post<Pesagem>(`${API_CONFIG.baseUrl}/pesagem`, pesagem);
  }

  update(pesagem: Pesagem): Observable<Pesagem> {
    return this.http.put<Pesagem>(`${API_CONFIG.baseUrl}/pesagem/${pesagem.idPesagem}`, pesagem);
  }

  delete(idPesagem: any): Observable<Pesagem> {
    return this.http.delete<Pesagem>(`${API_CONFIG.baseUrl}/pesagem/${idPesagem}`);
  }

}
