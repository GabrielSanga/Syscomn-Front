import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { AnimalChip } from '../models/animalChip';

@Injectable({
  providedIn: 'root'
})
export class AnimalChipService {

  constructor(private http: HttpClient) { }

  findById(idAnimalChip: any): Observable<AnimalChip>{
    return this.http.get<AnimalChip>(`${API_CONFIG.baseUrl}/animalchip/${idAnimalChip}`);
  }
  
  findAll(): Observable<AnimalChip[]>{
    return this.http.get<AnimalChip[]>(`${API_CONFIG.baseUrl}/animalchip`);
  }

  findAllQtdMortosMes(): Observable<Object[]>{
    return this.http.get<Object[]>(`${API_CONFIG.baseUrl}/animalchip/mortos`);
  }

  create(animalChip: AnimalChip): Observable<AnimalChip>{
    return this.http.post<AnimalChip>(`${API_CONFIG.baseUrl}/animalchip`, animalChip);
  }

  update(animalChip: AnimalChip): Observable<AnimalChip> {
    return this.http.put<AnimalChip>(`${API_CONFIG.baseUrl}/animalchip/${animalChip.idAnimalChip}`, animalChip);
  }

  delete(idAnimalChip: any): Observable<AnimalChip> {
    return this.http.delete<AnimalChip>(`${API_CONFIG.baseUrl}/animalchip/${idAnimalChip}`);
  }

}
