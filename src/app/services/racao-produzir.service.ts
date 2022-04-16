import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { RacaoProduzir } from '../models/racaoProduzir';

@Injectable({
  providedIn: 'root'
})
export class RacaoProduzirService {

  constructor(private http: HttpClient) { }

  findById(idRacaoProduzir: any): Observable<RacaoProduzir> {
    return this.http.get<RacaoProduzir>(`${API_CONFIG.baseUrl}/racaoproduzir/${idRacaoProduzir}`);
  }

  findAll(): Observable<RacaoProduzir[]> {
    return this.http.get<RacaoProduzir[]>(`${API_CONFIG.baseUrl}/racaoproduzir`);
  }

  create(racaoProduzir: RacaoProduzir): Observable<RacaoProduzir> {
    return this.http.post<RacaoProduzir>(`${API_CONFIG.baseUrl}/racaoproduzir`, racaoProduzir);
  }

  update(racaoProduzir: RacaoProduzir): Observable<RacaoProduzir> {
    return this.http.put<RacaoProduzir>(`${API_CONFIG.baseUrl}/racaoproduzir/${racaoProduzir.idRacaoProduzir}`, racaoProduzir);
  }

  delete(idRacaoProduzir: any): Observable<RacaoProduzir> {
    return this.http.delete<RacaoProduzir>(`${API_CONFIG.baseUrl}/racaoproduzir/${idRacaoProduzir}`);
  }
}
