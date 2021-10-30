import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { SexoAnimal } from '../models/sexoanimal';

@Injectable({
  providedIn: 'root'
})
export class SexoanimalService {

  constructor(private http: HttpClient) { }

  findById(idSexoAnimal: any): Observable<SexoAnimal>{
    return this.http.get<SexoAnimal>(`${API_CONFIG.baseUrl}/sexoanimal/${idSexoAnimal}`);
  }

  findAll(): Observable<SexoAnimal[]>{
    return this.http.get<SexoAnimal[]>(`${API_CONFIG.baseUrl}/sexoanimal`);
  }

  create(sexoanimal: SexoAnimal): Observable<SexoAnimal>{
    return this.http.post<SexoAnimal>(`${API_CONFIG.baseUrl}/sexoanimal`, sexoanimal);
    
  }

  update(sexoanimal: SexoAnimal): Observable<SexoAnimal> {
    return this.http.put<SexoAnimal>(`${API_CONFIG.baseUrl}/sexoanimal/${sexoanimal.idSexoAnimal}`, sexoanimal);
  }

  delete(idSexoAnimal: any): Observable<SexoAnimal> {
    return this.http.delete<SexoAnimal>(`${API_CONFIG.baseUrl}/sexoanimal/${idSexoAnimal}`);
  }

}
