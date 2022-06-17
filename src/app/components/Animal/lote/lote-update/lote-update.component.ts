import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurralPiquete } from 'src/app/models/curralpiquete';
import { Lote } from 'src/app/models/lote';
import { RegimeEngorda } from 'src/app/models/regimeengorda';
import { CurralpiqueteService } from 'src/app/services/curralpiquete.service';
import { LoteService } from 'src/app/services/lote.service';
import { RegimeengordaService } from 'src/app/services/regimeengorda.service';

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
    regimeEngorda: 0,
    descricaoRegimeEngorda: '',
    dataInicio: undefined,
    dataFinal: undefined,
    status: 0,
  }

  lscurralPiquete: CurralPiquete[] = []
  lsregimeEngorda: RegimeEngorda[] = []

  descricao: FormControl = new FormControl(null, [Validators.required]);
  nroLote: FormControl = new FormControl(null, [Validators.required]);
  status: FormControl = new FormControl(null, [Validators.required]);
  curralPiquete: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private curralpiqueteService: CurralpiqueteService,
    private regimeengordaService: RegimeengordaService,
    private loteService: LoteService,
    private toastService:    ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
      this.lote.idLote = this.route.snapshot.paramMap.get('idLote');
      this.findById();
      this.findAllCurralPiquete();
      this.findAllRegimeEngorda();
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

     findAllRegimeEngorda(): void {
      this.regimeengordaService.findAll().subscribe(resposta => {
        this.lsregimeEngorda = resposta;
     })
     }
  
     validaCampos(): boolean {
      return this.descricao.valid 
      && this.nroLote.valid 
      && this.status.valid
      && this.curralPiquete.valid
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
