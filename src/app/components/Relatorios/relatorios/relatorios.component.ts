import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoteService } from 'src/app/services/lote.service';
import { RelatorioService } from 'src/app/services/relatorio.service';
import { movimentacaoReport } from 'src/app/models/movimentacaoReport';

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

  constructor(private RelatorioService: RelatorioService,
              public dialog: MatDialog
              ) { }

  ngOnInit(): void {
  }
  



  imprimiRelatorio(){
  
    return this.RelatorioService.dowloadRelatorioParam(this.movimentacaoReport);
  
    }


    
}
