import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  findById(idFuncionario: any): Observable<Funcionario>{
    return this.http.get<Funcionario>(`${API_CONFIG.baseUrl}/funcionario/${idFuncionario}`);
  }
  
  findAll(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${API_CONFIG.baseUrl}/funcionario`);
  }

  create(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(`${API_CONFIG.baseUrl}/funcionario`, funcionario);
  }

  update(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${API_CONFIG.baseUrl}/funcionario/${funcionario.idPessoa}`, funcionario);
  }

  delete(idFuncionario: any): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${API_CONFIG.baseUrl}/funcionario/${idFuncionario}`);
  }
  
}
