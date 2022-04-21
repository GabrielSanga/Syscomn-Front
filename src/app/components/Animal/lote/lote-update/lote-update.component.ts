import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurralPiquete } from 'src/app/models/curralpiquete';
import { Lote } from 'src/app/models/lote';
import { CurralpiqueteService } from 'src/app/services/curralpiquete.service';
import { LoteService } from 'src/app/services/lote.service';

@Component({
  selector: 'app-lote-update',
  templateUrl: './lote-update.component.html',
  styleUrls: ['./lote-update.component.css']
})
export class LoteUpdateComponent implements OnInit {

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
    curralPiquete: '',
    descricaoCurralPiquete: '',
    dataInicio: undefined,
    dataFinal: undefined,
  }

  lscurralPiquete: CurralPiquete[] = []

  descricao: FormControl = new FormControl(null, [Validators.required]);
  nroLote: FormControl = new FormControl(null, [Validators.required]);
  qtdeCabecasEntrada: FormControl = new FormControl(null, [Validators.required]);
  statusLote: FormControl = new FormControl(null, [Validators.required]);
  curralPiquete: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private curralpiqueteService: CurralpiqueteService,
    private loteService: LoteService,
    private toastService:    ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
      this.lote.idLote = this.route.snapshot.paramMap.get('idLote');
      this.findById();
      this.findAllCurralPiquete();
    }
  
    findById(): void {
      this.loteService.findById(this.lote.idLote).subscribe(resposta => {
        this.lote = resposta;
      })
    }
  
    update(): void {
      this.loteService.update(this.lote).subscribe(resposta => {
        this.toastService.success('Lote atualizado com sucesso', 'Atualizar Lote');
        this.router.navigate(['lote']);
      }, ex => {
        this.toastService.error(ex.error.error);
      })
    }
  
    findAllCurralPiquete(): void {
      this.curralpiqueteService.findAll().subscribe(resposta => {
        this.lscurralPiquete = resposta;
     })
     }
  
     validaCampos(): boolean {
      return this.descricao.valid 
      && this.nroLote.valid 
      && this.qtdeCabecasEntrada.valid 
     /* && this.statusLote.valid*/
      && this.curralPiquete.valid
      }

      retornaStatusLote(statusLote: any): string {
        if(statusLote == 'ABERTO') {
          return 'Aberto'
        } else if(statusLote == 'FECHADO') {
          return 'Fechado'
        } else if(statusLote == 'ENCERRADO'){
          return 'Encerrado'
        } else {
          return ''
        }
      }

}
