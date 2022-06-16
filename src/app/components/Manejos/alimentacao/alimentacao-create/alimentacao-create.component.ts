import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Alimentacao } from 'src/app/models/alimentacao';
import { AnimalChip } from 'src/app/models/animalChip';
import { Lote } from 'src/app/models/lote';
import { LoteProducao } from 'src/app/models/loteProducao';
import { AlimentacaoService } from 'src/app/services/alimentacao.service';
import { AnimalChipService } from 'src/app/services/animal-chip.service';
import { LoteProducaoService } from 'src/app/services/lote-producao.service';
import { LoteService } from 'src/app/services/lote.service';

@Component({
  selector: 'app-alimentacao-create',
  templateUrl: './alimentacao-create.component.html',
  styleUrls: ['./alimentacao-create.component.css']
})
export class AlimentacaoCreateComponent implements OnInit {

  alimentacao: Alimentacao = {
    idAlimentacao: 0,
    quantidade: 0,
    custo: 0,
    idAnimalChip: 0,
    idPessoa: null,
    nomePessoa: '',
    idLote: 0,
    tipoAlimentacao: 'A',
    idLoteRacao: null
  }

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

  lote: Lote = {
    idLote: '',
    descricao: '',
    nroLote: 0,
    pesoEntrada: 0,
    pesoAtual: 0,
    custoLote: 0,
    qtdeCabecasEntrada: 0,
    qtdeCabecasMorte: 0,
    qtdeCabecasAtual: 0,
    status: 0,
    curralPiquete: '',
    descricaoCurralPiquete: '',
    dataInicio: null,
    dataFinal: null,
    regimeEngorda: 0,
    descricaoRegimeEngorda: ''
  }

  animalChip: AnimalChip = {
    idAnimalChip: 0,
    chip: '',
    codigo: '',
    nome: '',
    dtaNascimento: null,
    dtaEntrada: null,
    pai: '',
    mae: '',
    custoAquisicao: 0,
    custoFinal: 0,
    pesoEntrada: 0,
    pesoAtual: 0,
    status: 0,
    ganhoMedioDiario: 0,
    idLote: 0,
    nroLote:0,
    descrLote: '',
    idSexoAnimal: 0,
    descrSexoAnimal: '',
    idRaca: 0,
    descrRaca: '',
    idEstadoAnimal: 0,
    descrEstadoAnimal: '',
    idTipoMorte: 0,
    descrTipoMorte: ''
  }

  lstLote: Lote[] = [];

  lstLoteProducao: LoteProducao[] = [];

  ELEMENT_DATA: AnimalChip[] = []

  displayedColumns: string[] = ['chip', 'nome', 'descrSexoAnimal', 'pesoAtual', 'dtaHoraUltimaPesagem', 'acoes'];
  dataSource = new MatTableDataSource<AnimalChip>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private loteService: LoteService,
              private animalService: AnimalChipService,
              private alimentacaoService: AlimentacaoService,
              private loteProducaoService: LoteProducaoService,
              private toast: ToastrService) { }

  ngOnInit(): void {
    this.findAllLote();
    this.findAllLoteProducao();
  }

  findAllLote(): void{
    this.loteService.findAll().subscribe(resposta => {this.lstLote = resposta;});
  }

  findAllLoteProducao(): void{
    this.loteProducaoService.findAllEstoque().subscribe(resposta => {this.lstLoteProducao = resposta;});
  }

  findLote(): void{
    this.loteService.findById(this.alimentacao.idLote).subscribe(resposta =>{
      this.lote = resposta;

      this.ELEMENT_DATA = resposta.lstAnimais;
      this.dataSource = new MatTableDataSource<AnimalChip>(resposta.lstAnimais);
      this.dataSource.paginator = this.paginator;
    })
  }

  findAnimalChip(idAnimalChip: number): void{
    this.animalService.findById(idAnimalChip).subscribe(resposta =>{ this.animalChip = resposta})

    this.alimentacao.idAnimalChip = idAnimalChip;
    this.alimentacao.quantidade = 0;
  }

  create(): void{
    if(this.alimentacao.quantidade <= 0){
      this.toast.error("Quantidade deve ser maior que 0!");
      return;
    }

    if(this.alimentacao.quantidade > this.loteProducao.saldo){
      this.toast.error("Ração não possui saldo suficiente!");
      return;
    }

    if(this.alimentacao.tipoAlimentacao == "A"){
      if(this.validaAlimentacaoAnimalUnico() == false){
        return;
      }
    }else if(this.alimentacao.tipoAlimentacao == "L"){
      if(this.validaAlimentacaoLote() == false){
        return;
      }
    }

    this.alimentacaoService.create(this.alimentacao).subscribe(() => {
      this.toast.success('Alimentação realizada com Sucesso!', 'Alimentação');

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

  validaAlimentacaoAnimalUnico(): boolean{
    if(this.alimentacao.idLote == 0){
      this.toast.error("Necessário selecionar um Lote para alimentação!");
      return false;
    }

    if(this.alimentacao.idAnimalChip == 0){
      this.toast.error("Necessário selecionar um animal para alimentação!");
      return false;
    }

    return true
  }

  validaAlimentacaoLote(): boolean{
    if(this.alimentacao.idLote == 0){
      this.toast.error("Necessário selecionar um Lote para alimentação!");
      return false;
    }

    return true;
  }

  atualizaTela(): void{
    //Atualiza a tabela de Animais com as novas informações de alimentação
    if(this.alimentacao.tipoAlimentacao == 'A'){
      this.findLote();
    }

    this.findLoteProducao();
    this.findAllLoteProducao();

    this.limpaTela(false);
  }

  limpaTela(pbLimpaLote: boolean): void{
    //Apenas limpa o lote pelo evento de troca de tipo pesagem
    if(pbLimpaLote){
      this.alimentacao.idLote = 0;

      this.ELEMENT_DATA = null;
      this.dataSource = new MatTableDataSource<AnimalChip>(this.ELEMENT_DATA);
    }

    if(this.alimentacao.tipoAlimentacao == 'A'){
      //Limpando Animal Chip
      this.animalChip.idAnimalChip = 0;
      this.animalChip.chip = '';
      this.animalChip.codigo = '';
      this.animalChip.descrSexoAnimal = '';
      this.animalChip.descrRaca = '';
      this.animalChip.descrEstadoAnimal = '';

    }else{
      //Limpando Lote
      this.lote.nroLote = 0;
      this.lote.descricao = '';
      this.lote.pesoEntrada = 0;
      this.lote.pesoAtual = 0;
      this.lote.qtdeCabecasAtual = 0;
      this.lote.descricaoCurralPiquete = '';
    }

    //Limpa Alimentação
    this.alimentacao.idAnimalChip = 0;
    this.alimentacao.quantidade = 0;
    this.alimentacao.custo = 0;

    if(this.alimentacao.tipoAlimentacao == "L"){
      this.alimentacao.idLote = 0;
    }
  }

  retornaDataFormata(data: Date): String{
    let dta = new Date(data)
  
    dta.setHours(24);
  
    return dta.toLocaleDateString("pt-br");
  }

  findLoteProducao(): void{
    this.loteProducaoService.findById(this.alimentacao.idLoteRacao).subscribe(resposta => {
      this.loteProducao = resposta;
    })
  }

}
