import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnimalChip } from 'src/app/models/animalChip';
import { EstadoAnimal } from 'src/app/models/estadoanimal';
import { Lote } from 'src/app/models/lote';
import { Raca } from 'src/app/models/raca';
import { SexoAnimal } from 'src/app/models/sexoanimal';
import { AnimalChipService } from 'src/app/services/animal-chip.service';
import { EstadoanimalService } from 'src/app/services/estadoanimal.service';
import { LoteService } from 'src/app/services/lote.service';
import { RacaService } from 'src/app/services/raca.service';
import { SexoanimalService } from 'src/app/services/sexoanimal.service';

@Component({
  selector: 'app-animalchip-create',
  templateUrl: './animalchip-create.component.html',
  styleUrls: ['./animalchip-create.component.css']
})
export class AnimalchipCreateComponent implements OnInit {

  animalChip: AnimalChip = {
    idAnimalChip: 0,
    chip: '',
    codigo: '',
    nome: '',
    dtaNascimento: null,
    dtaEntrada: null,
    dtaSaida: null,
    pai: '',
    mae: '',
    custoAquisicao: 0,
    custoFinal: 0,
    pesoEntrada: 0,
    pesoAtual: 0,
    status: 0,
    ganhoMedioDiario: 0,
    idLote: 0,
    idSexoAnimal: 0,
    idRaca: 0,
    idEstadoAnimal: 0,
  }

  lotes: Lote[] = [];
  sexos: SexoAnimal[] = [];
  racas: Raca[] = [];
  estadosAnimal: EstadoAnimal[] = [];

  constructor(private service: AnimalChipService,
              private loteService: LoteService,
              private sexoService: SexoanimalService,
              private racaService: RacaService,
              private estadoAnimalService: EstadoanimalService,
              private toast: ToastrService, 
              private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.findAllLote();
    this.findAllSexoAnimal();
    this.findAllRaca();
    this.findAllEstadoAnimal();
  }

  findAllLote(): void{
    this.loteService.findAll().subscribe(resposta => {this.lotes = resposta;});
  }

  findAllSexoAnimal(): void{
    this.sexoService.findAll().subscribe(resposta => {this.sexos = resposta;});
  }

  findAllRaca(): void{
    this.racaService.findAll().subscribe(resposta => {this.racas = resposta;});
  }

  findAllEstadoAnimal(): void{
    this.estadoAnimalService.findAll().subscribe(resposta => {this.estadosAnimal = resposta;});
  }

  create(): void{
    this.service.create(this.animalChip).subscribe(() => {
      this.toast.success('Animal cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['animalchip'])
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
