import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { movimentacaoReport } from '../models/movimentacaoReport';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor(private http: HttpClient) { }

  dowloadRelatorio() {
    return this.http.get(`${API_CONFIG.baseUrl}/lote/relatorios`, {responseType: 'text'}).subscribe(data =>{
      document.querySelector('iframe').src = data;
    });
  }

  dowloadRelatorioParam(movimentacaoReport: movimentacaoReport) {

    return this.http.post(`${API_CONFIG.baseUrl}/lote/relatorios/`, movimentacaoReport, {responseType: 'text'}).subscribe(data =>{
      document.querySelector('iframe').src = data;
    });
  }


}
