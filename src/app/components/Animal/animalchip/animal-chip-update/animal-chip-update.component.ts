import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnimalChip } from 'src/app/models/animalChip';
import { EstadoAnimal } from 'src/app/models/estadoanimal';
import { Lote } from 'src/app/models/lote';
import { Raca } from 'src/app/models/raca';
import { SexoAnimal } from 'src/app/models/sexoanimal';
import { TipoMorte } from 'src/app/models/tipomorte';
import { AnimalChipService } from 'src/app/services/animal-chip.service';
import { EstadoanimalService } from 'src/app/services/estadoanimal.service';
import { LoteService } from 'src/app/services/lote.service';
import { RacaService } from 'src/app/services/raca.service';
import { SexoanimalService } from 'src/app/services/sexoanimal.service';
import { TipomorteService } from 'src/app/services/tipomorte.service';

@Component({
  selector: 'app-animal-chip-update',
  templateUrl: './animal-chip-update.component.html',
  styleUrls: ['./animal-chip-update.component.css']
})
export class AnimalChipUpdateComponent implements OnInit {

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

  habilitarMotivoSaida: boolean = false;
  animalMorto: boolean = false;

  lotes: Lote[] = [];
  sexos: SexoAnimal[] = [];
  racas: Raca[] = [];
  estadosAnimal: EstadoAnimal[] = [];
  tipoMortes: TipoMorte[] = [];

  constructor(private service: AnimalChipService,
              private loteService: LoteService,
              private sexoService: SexoanimalService,
              private racaService: RacaService,
              private estadoAnimalService: EstadoanimalService,
              private tipoMorteService: TipomorteService,
              private toast: ToastrService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.animalChip.idAnimalChip = this.route.snapshot.paramMap.get('idAnimalChip');
    this.findByIdAnimal();
    this.CarregarCombos();
  }

  findByIdAnimal(){
    this.service.findById(this.animalChip.idAnimalChip).subscribe(resposta => {
      this.animalChip = resposta;
      this.animalMorto = resposta.idTipoMorte > 0;
      this.habilitarMotivoSaida = this.animalChip.status == 1;
    });
  }

  CarregarCombos(): void{
    this.findAllLote();
    this.findAllSexoAnimal();
    this.findAllRaca();
    this.findAllEstadoAnimal();
    this.findAllTipoMorte();
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
  
  findAllTipoMorte(): void{
    this.tipoMorteService.findAll().subscribe(resposta => {this.tipoMortes = resposta});
  }

  create(): void{
    if(this.animalMorto){
      if(this.animalChip.idTipoMorte == null){
        this.toast.error("Necessário selecionar o Tipo da Morte do Animal!");
        return;
      }
    }else{
      this.animalChip.idTipoMorte = null;
    }

    this.service.update(this.animalChip).subscribe(() => {
      this.toast.success('Animal Atualizado com sucesso', 'Cadastro');
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

  HabilitarMotivo(): void{
   this.habilitarMotivoSaida = this.animalChip.status == 1; 
  }

  retornaDescrStatus(pnStatus: number): String {
    if (pnStatus == 0){
      return "Normal";
    }else if(pnStatus == 1){
      return "Saída";
    }else if(pnStatus == 2){
      return "Morto";
    }else{
      return ""
    }
  }

  setAnimalMorto(evento: MatCheckboxChange): void{
    this.animalMorto = evento.checked;
  }

}
