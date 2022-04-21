import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurralPiquete } from 'src/app/models/curralpiquete';
import { Lote } from 'src/app/models/lote';
import { CurralpiqueteService } from 'src/app/services/curralpiquete.service';
import { LoteService } from 'src/app/services/lote.service';

@Component({
  selector: 'app-lote-delete',
  templateUrl: './lote-delete.component.html',
  styleUrls: ['./lote-delete.component.css']
})
export class LoteDeleteComponent implements OnInit {

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
    statusLote: '',
    curralPiquete: '',
    descricaoCurralPiquete: '',
    dataInicio: undefined,
    dataFinal: undefined,
  }

  lscurralPiquete: CurralPiquete[] = []

  constructor(
    private curralpiqueteService: CurralpiqueteService,
    private loteService: LoteService,
    private toast:    ToastrService,
    private router:          Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.lote.idLote = this.route.snapshot.paramMap.get('idLote');
    this.findById();
    this.findAllCurralPiquete();
  }

  findById(): void{
    this.loteService.findById(this.lote.idLote).subscribe(resposta => {
    this.lote = resposta;
    } )
  }

  findAllCurralPiquete(): void {
    this.curralpiqueteService.findAll().subscribe(resposta => {
      this.lscurralPiquete = resposta;
   })
   }

  delete(): void {
    this.loteService.delete(this.lote.idLote).subscribe(() => {
      this.toast.success('Lote deletado com sucesso', 'Delete');
      this.router.navigate(['lote'])
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
          
        });
      } else {
        this.toast.error(ex.error.message);
        
      }
    })
    
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

