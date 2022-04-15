import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Formula } from '../models/formula';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  constructor(private http: HttpClient) { }

  findById(idFormula: any): Observable<Formula> {
    return this.http.get<Formula>(`${API_CONFIG.baseUrl}/formula/${idFormula}`);
  }

  findAll(): Observable<Formula[]> {
    return this.http.get<Formula[]>(`${API_CONFIG.baseUrl}/formula`);
  }

  create(formula: Formula): Observable<Formula> {
    return this.http.post<Formula>(`${API_CONFIG.baseUrl}/formula`, formula);
  }

  update(formula: Formula): Observable<Formula> {
    return this.http.put<Formula>(`${API_CONFIG.baseUrl}/formula/${formula.idFormula}`, formula);
  }

  delete(idFormula: any): Observable<Formula> {
    return this.http.delete<Formula>(`${API_CONFIG.baseUrl}/formula/${idFormula}`);
  }

}
