import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalArmazenamento } from 'src/app/models/localarmazenamento';
import { LoteProducao } from 'src/app/models/loteProducao';
import { OrdemProducao } from 'src/app/models/ordemProducao';
import { RacaoProduzir } from 'src/app/models/racaoProduzir';
import { LocalarmazenamentoService } from 'src/app/services/localarmazenamento.service';
import { LoteProducaoService } from 'src/app/services/lote-producao.service';
import { OrdemProducaoService } from 'src/app/services/ordem-producao.service';
import { RacaoProduzirService } from 'src/app/services/racao-produzir.service';

@Component({
  selector: 'app-lote-producao-create',
  templateUrl: './lote-producao-create.component.html',
  styleUrls: ['./lote-producao-create.component.css']
})
export class LoteProducaoCreateComponent implements OnInit {

  loteProducao: LoteProducao = {
    idLoteProducao: 0,
    dataFabricacao: null,
    dataValidade: null,
    saldo: 0,
    unidade: '',
    custo: 0,
    idRacaoProduzir: 0,
    idLocalArmazenamento: 0,
    idOrdemProducao: 0
  }

  ordemProducao: OrdemProducao[] = [];
  racaoProduzir: RacaoProduzir[] = [];
  localArmazenamento: LocalArmazenamento[] = [];
 
  constructor(private service: LoteProducaoService,
              private serviceRacaoProduzir: RacaoProduzirService,
              private serviceOrdemProducao: OrdemProducaoService,
              private serviceLocalArmazenamento: LocalarmazenamentoService,
              private toast: ToastrService,
              private router: Router) { }

  ngOnInit(): void { 
    this.findByDataOrdemProducao();
    this.findAllLocalArmazenamento();
  }
    
  findByDataOrdemProducao(): void{
    this.serviceOrdemProducao.findByData().subscribe(resposta => {this.ordemProducao = resposta;})
  }

  findRacaoProduzir(): void{
    this.serviceOrdemProducao.findById(this.loteProducao.idOrdemProducao).subscribe(resposta => {
      this.racaoProduzir = resposta.lstRacaoProduzir
    })
  }

  findAllLocalArmazenamento(): void{
    this.serviceLocalArmazenamento.findAll().subscribe(resposta => {this.localArmazenamento = resposta})
  }

  create(): void{
    this.service.create(this.loteProducao).subscribe(() => {
      this.toast.success('Produção realizada com Sucesso!', 'Cadastro');
      this.router.navigate(['loteProducao'])
    }, ex => {
      if(ex.error.lstErrors) {
        ex.error.lstErrors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }


}
