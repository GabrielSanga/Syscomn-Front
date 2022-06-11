import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AnimalChip } from 'src/app/models/animalChip';
import { Lote } from 'src/app/models/lote';
import { Vacina } from 'src/app/models/vacina';
import { Vacinacao } from 'src/app/models/vacinacao';
import { AnimalChipService } from 'src/app/services/animal-chip.service';
import { LoteService } from 'src/app/services/lote.service';
import { VacinaService } from 'src/app/services/vacina.service';
import { VacinacaoService } from 'src/app/services/vacinacao.service';

@Component({
  selector: 'app-vacinacao-create',
  templateUrl: './vacinacao-create.component.html',
  styleUrls: ['./vacinacao-create.component.css']
})
export class VacinacaoCreateComponent implements OnInit {

  vacinacao: Vacinacao = {
    idVacinacao: 0,
    loteVacina: '',
    quantidadeDose: 0,
    custoDose: 0,
    idAnimalChip: 0,
    idPessoa: null,
    nomePessoa: '',
    idVacina: null,
    idLote: null
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

  lstVacina: Vacina[] = [];

  lstLote: Lote[] = [];

  ELEMENT_DATA: AnimalChip[] = []

  displayedColumns: string[] = ['chip', 'codigo', 'descrSexoAnimal', 'pesoAtual', 'dtaHoraUltimaPesagem', 'acoes'];
  dataSource = new MatTableDataSource<AnimalChip>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private loteService: LoteService,
              private animalService: AnimalChipService,
              private vacinacaoService: VacinacaoService,
              private vacinaService: VacinaService,
              private toast: ToastrService) { }

  ngOnInit(): void {
    this.findAllLote();
    this.findAllVacina();
  }

  findAllLote(): void{
    this.loteService.findAll().subscribe(resposta => {this.lstLote = resposta;});
  }

  findAllVacina(): void{
    this.vacinaService.findAll().subscribe(resposta => {this.lstVacina = resposta;});
  }

  findLote(): void{
    this.loteService.findById(this.vacinacao.idLote).subscribe(resposta =>{
      //this.lote = resposta;

      this.ELEMENT_DATA = resposta.lstAnimais;
      this.dataSource = new MatTableDataSource<AnimalChip>(resposta.lstAnimais);
      this.dataSource.paginator = this.paginator;
    })
  }

  findAnimalChip(idAnimalChip: number): void{
    this.animalService.findById(idAnimalChip).subscribe(resposta =>{ this.animalChip = resposta})

    this.vacinacao.idAnimalChip = idAnimalChip;
    this.vacinacao.quantidadeDose = 0;
  }

  create(): void{
    if(this.vacinacao.quantidadeDose <= 0){
      this.toast.error("Quantidade deve ser maior que 0!");
      return;
    }

    if(this.validaVacinacao() == false){ return; }

    this.vacinacaoService.create(this.vacinacao).subscribe(() => {
      this.toast.success('Vacinação realizada com Sucesso!', 'Vacinação');

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

  validaVacinacao(): boolean{
    if(this.vacinacao.idAnimalChip == 0){
      this.toast.error("Necessário selecionar um animal para vacinação!");
      return false;
    }

    if(this.vacinacao.idVacina == 0){
      this.toast.error("Necessário selecionar uma vacina para vacinação!");
      return false;
    }

    return true;
  }

  atualizaTela(): void{
    //Atualiza a tabela de Animais com as novas informações de vacinação
    this.findLote();

    this.limpaTela();
  }

  limpaTela(): void{
    //Limpando Animal Chip
    this.animalChip.idAnimalChip = 0;
    this.animalChip.chip = '';
    this.animalChip.codigo = '';
    this.animalChip.descrSexoAnimal = '';
    this.animalChip.descrRaca = '';
    this.animalChip.descrEstadoAnimal = '';

    //Limpa Vacinação
    this.vacinacao.idAnimalChip = null;
    this.vacinacao.loteVacina = '';
    this.vacinacao.quantidadeDose = 0;
    this.vacinacao.custoDose = 0;
    this.vacinacao.idVacina = 0;
  }

}