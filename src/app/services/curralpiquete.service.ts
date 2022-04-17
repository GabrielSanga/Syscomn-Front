import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { CurralPiquete } from '../models/curralpiquete';

@Injectable({
  providedIn: 'root'
})
export class CurralpiqueteService {
  constructor(private http: HttpClient) { }

  findById(idCurralPiquete: any): Observable<CurralPiquete>{
    return this.http.get<CurralPiquete>(`${API_CONFIG.baseUrl}/curralpiquete/${idCurralPiquete}`);
  }

  findAll(): Observable<CurralPiquete[]>{
    return this.http.get<CurralPiquete[]>(`${API_CONFIG.baseUrl}/curralpiquete`);
  }

  create(curralpiquete: CurralPiquete): Observable<CurralPiquete>{
    return this.http.post<CurralPiquete>(`${API_CONFIG.baseUrl}/curralpiquete`, curralpiquete);
  }

  update(curralpiquete: CurralPiquete): Observable<CurralPiquete> {
    return this.http.put<CurralPiquete>(`${API_CONFIG.baseUrl}/curralpiquete/${curralpiquete.idCurralPiquete}`, curralpiquete);
  }

  delete(idCurralPiquete: any): Observable<CurralPiquete> {
    return this.http.delete<CurralPiquete>(`${API_CONFIG.baseUrl}/curralpiquete/${idCurralPiquete}`);
  }

}
