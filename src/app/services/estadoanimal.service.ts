import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { EstadoAnimal } from '../models/estadoanimal';


@Injectable({
  providedIn: 'root'
})
export class EstadoanimalService {

  constructor(private http: HttpClient) { }

  findById(idEstadoAnimal: any): Observable<EstadoAnimal>{
    return this.http.get<EstadoAnimal>(`${API_CONFIG.baseUrl}/estadoanimal/${idEstadoAnimal}`);
  }

  findAll(): Observable<EstadoAnimal[]>{
    return this.http.get<EstadoAnimal[]>(`${API_CONFIG.baseUrl}/estadoanimal`);
  }

  create(estadoanimal: EstadoAnimal): Observable<EstadoAnimal>{
    return this.http.post<EstadoAnimal>(`${API_CONFIG.baseUrl}/estadoanimal`, estadoanimal);
  }

  update(estadoanimal: EstadoAnimal): Observable<EstadoAnimal> {
    return this.http.put<EstadoAnimal>(`${API_CONFIG.baseUrl}/estadoanimal/${estadoanimal.idEstadoAnimal}`, estadoanimal);
  }

  delete(idEstadoAnimal: any): Observable<EstadoAnimal> {
    return this.http.delete<EstadoAnimal>(`${API_CONFIG.baseUrl}/estadoanimal/${idEstadoAnimal}`);
  }
  
}

