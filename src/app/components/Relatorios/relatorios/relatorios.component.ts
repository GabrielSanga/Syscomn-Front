import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoteService } from 'src/app/services/lote.service';
import { RelatorioService } from 'src/app/services/relatorio.service';
import { movimentacaoReport } from 'src/app/models/movimentacaoReport';
import { animalReport } from 'src/app/models/animalReport';
import { loteReport } from 'src/app/models/loteReport';
import { MatRadioChange } from '@angular/material/radio';
import { Raca } from 'src/app/models/raca';
import { RacaService } from 'src/app/services/raca.service';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  movimentacaoReport: movimentacaoReport = {
    dataInicio: '',
    dataFim: '',
  }
  animalReport: animalReport = {
    RACA: '',
  }
  loteReport: loteReport = {
    NRO_LOTE: '',
  }

  modelo: number = 0
  racas: Raca[] = [];

  constructor(private RelatorioService: RelatorioService,
              public dialog: MatDialog,
              private racaService: RacaService
              ) { }

  ngOnInit(): void {
    this.findAllRaca();
  }

  findAllRaca(): void{
    this.racaService.findAll().subscribe(resposta => {this.racas = resposta;});
  }
  
  imprimiRelatorio(){
    if(this.modelo == 0){
      console.log("Caiu aqui Imrpimi", this.modelo)
      return this.RelatorioService.dowloadRelatorioMovimentacaoParam(this.movimentacaoReport);
    }else if(this.modelo == 1){
      console.log("Caiu aqui Imprimi", this.modelo)
      return this.RelatorioService.dowloadRelatorioAnimal(this.animalReport);
    }else if(this.modelo == 2){
      console.log("Caiu aqui Imprimi Lote", this.modelo)
      return this.RelatorioService.dowloadRelatorioLoteSem();
    }
    
   return null;
  }

    limitaNumeros(e: any) {
      let charCode = e.charCode ? e.charCode : e.keyCode;
      // charCode 8 = backspace   
      // charCode 9 = tab
    
      if (charCode != 8 && charCode != 9) {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
      let max = 4;    
  
        if ((charCode < 48 || charCode > 57)||(e.target.value.length >= max)) return false;
        else return true
      }else return false
    }


    
}
