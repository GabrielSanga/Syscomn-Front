import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
    idLoteRacao: 0,
    dataFabricacao: null,
    dataValidade: null,
    quantidade: 0,
    saldo: 0,
    custo: 0,
    idRacaoProduzir: 0,
    idLocalArmazenamento: 0,
    idOrdemProducao: 0
  }

  racaoProduzir: RacaoProduzir = {
    idRacaoProduzir: 0,
    quantidade: 0,
    quantidadeProduzido: 0
  }

  localArmazenamento: LocalArmazenamento = {
    idLocalArmazenamento: 0,
    descricao: '',
    capacidade: 0,
    enderecado: 0,
    status: ''
  }

  ordemProducao: OrdemProducao = {
    idOrdemProducaoRacao: 0,
    data: null,
    valorOrdemProducao: 0,
    status: 0
  }

  lstOrdemProducao: OrdemProducao[] = [];
  lstRacaoProduzir: RacaoProduzir[] = [];
  lstLocalArmazenamento: LocalArmazenamento[] = [];

  closeProducao = true;

  ELEMENT_DATA: LoteProducao[] = []

  displayedColumns: string[] = ['idLoteRacao', 'dataFabricacao', 'dataValidade', 'saldo', 'unidade', 'LocalArmazenamento', 'acoes'];
  dataSource = new MatTableDataSource<LoteProducao>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
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
    this.serviceOrdemProducao.findByData().subscribe(resposta => {this.lstOrdemProducao = resposta;})
  }

  findAllLocalArmazenamento(): void{
    this.serviceLocalArmazenamento.findAll().subscribe(resposta => {this.lstLocalArmazenamento = resposta})
  }

  findRacoesProduzir(): void{
    this.serviceOrdemProducao.findById(this.loteProducao.idOrdemProducao).subscribe(resposta => {
      this.ordemProducao = resposta;

      //VALIDA A ORDEM ANTES DE CARREGAR AS RAÇÕES
      if(this.validaOrdemProducao(this.ordemProducao.status)){
        this.lstRacaoProduzir = resposta.lstRacaoProduzir;
      }else{
        this.ELEMENT_DATA = null;
        this.dataSource = new MatTableDataSource<LoteProducao>(this.ELEMENT_DATA);
        this.lstRacaoProduzir = null;
      }

      this.loteProducao.idRacaoProduzir = 0;
      this.loteProducao.idLocalArmazenamento = 0;

      this.closeProducao = true;

      this.limpaTotaisRacao();
      this.limapTotaisArmazenamento();
    })
  }

  create(): void{
    if(!this.validaProducao()){
      return;
    }

    this.service.create(this.loteProducao).subscribe(() => {
      this.toast.success('Produção realizada com Sucesso!', 'Produção');

      this.atualizaTela();

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

  deletar(idLoteProducao: number): void{
    if(confirm("Deseja Realmente Deletar a Produção?")){
      this.deletarProducao(idLoteProducao);
    }  
  }

  deletarProducao(idLoteProducao: number): void{
    this.service.delete(idLoteProducao).subscribe(() => {
      this.toast.success('Produção deletada com Sucesso!', 'Produção');

      this.atualizaTela();
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

  atualizaTela(): void{
    this.findRacaoProduzir();

    this.findLocalArmazenamento();

    this.clearProducao();
  }

  findLocalArmazenamento(): void{
    this.serviceLocalArmazenamento.findById(this.loteProducao.idLocalArmazenamento).subscribe(resposta => {
      this.localArmazenamento = resposta;
    })
  }

  findRacaoProduzir():void{
    this.serviceRacaoProduzir.findById(this.loteProducao.idRacaoProduzir).subscribe(resposta => {
      //Carrega as informações da Ração a produzir que foi selecionada
      this.racaoProduzir = resposta;

      // Busca toda a produção dessa ração
      this.findAllProducao();

      this.closeProducao = false;
    });
  }

  findAllProducao(): void{
    this.serviceRacaoProduzir.findById(this.loteProducao.idRacaoProduzir).subscribe(resposta =>{
      this.ELEMENT_DATA = resposta.lstLoteRacao;
      this.dataSource = new MatTableDataSource<LoteProducao>(resposta.lstLoteRacao);
      this.dataSource.paginator = this.paginator;
    })
  }

  validaProducao(): boolean{
    //VERIFICA SE AINDA TEM SALDO A PRODUZIR
    if((this.loteProducao.quantidade + this.racaoProduzir.quantidadeProduzido) > this.racaoProduzir.quantidade){
      this.toast.error('Ração não possui mais Saldo a Produzir!', 'Produção');
      return false;
    }

    //VERIFICA CAPACIDADE DO LOCAL DE ARMAZENAMENTO
    if((this.loteProducao.quantidade + this.localArmazenamento.enderecado) > this.localArmazenamento.capacidade){
      this.toast.error('Quantidade Armazenada ficará acima da capacidade máxima!', 'Produção');
      return false;
    }

    return true;
  }

  validaOrdemProducao(pnStatus: number): boolean{
    let sMensagemErro = '';

    if (pnStatus == 0){
      sMensagemErro = "Ordem de Produção ainda não foi Liberada!";
    } else if (pnStatus == 3){
      this.toast.warning("Ordem de Produção já Finalizada!")
    }else if(pnStatus == 4){
      sMensagemErro = "Ordem de Produção Cancelada";
    }

    if (sMensagemErro.length > 0){
      this.toast.error(sMensagemErro);
      return false;
    }

    return true;
  }

  retornaDataFormata(data: Date): String{
    let dta = new Date(data);
  
    dta.setHours(24);
  
    return dta.toLocaleDateString("pt-br");
  }

  clearProducao(): void{
    this.loteProducao.dataFabricacao = null;
    this.loteProducao.dataValidade = null;
    this.loteProducao.quantidade = 0;
    this.loteProducao.custo = 0;
  }

  limpaTotaisRacao(): void{
    this.racaoProduzir.quantidade = 0;
    this.racaoProduzir.quantidadeProduzido = 0;
  }

  limapTotaisArmazenamento(): void{
    this.localArmazenamento.capacidade = 0;
  }

}
