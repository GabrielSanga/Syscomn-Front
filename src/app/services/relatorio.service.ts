import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { movimentacaoReport } from '../models/movimentacaoReport';
import { animalReport } from 'src/app/models/animalReport';
import { loteReport } from 'src/app/models/loteReport';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor(private http: HttpClient) { }

  dowloadRelatorioMovimentacao() {
    return this.http.get(`${API_CONFIG.baseUrl}/lote/relatorios`, {responseType: 'text'}).subscribe(data =>{
      document.querySelector('iframe').src = data;
    });
  }

  dowloadRelatorioMovimentacaoParam(movimentacaoReport: movimentacaoReport) {

    return this.http.post(`${API_CONFIG.baseUrl}/lote/relatorios/`, movimentacaoReport, {responseType: 'text'}).subscribe(data =>{
      document.querySelector('iframe').src = data;
    });
  }

  dowloadRelatorioAnimal(animalReport: animalReport) {

    return this.http.post(`${API_CONFIG.baseUrl}/animalchip/relatorios/`, animalReport, {responseType: 'text'}).subscribe(data =>{
      document.querySelector('iframe').src = data;
    });
  }

  dowloadRelatorioLote(loteReport: loteReport) {

    return this.http.post(`${API_CONFIG.baseUrl}/lote/relatorioLote/`, loteReport, {responseType: 'text'}).subscribe(data =>{
      document.querySelector('iframe').src = data;
    });
  }

  dowloadRelatorioLoteSem() {
    return this.http.get(`${API_CONFIG.baseUrl}/lote/relatorioLoteSem`, {responseType: 'text'}).subscribe(data =>{
      document.querySelector('iframe').src = data;
    });
  }

}
