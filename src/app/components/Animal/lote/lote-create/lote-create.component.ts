import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurralPiquete } from 'src/app/models/curralpiquete';
import { Lote } from 'src/app/models/lote';
import { RegimeEngorda } from 'src/app/models/regimeengorda';
import { CurralpiqueteService } from 'src/app/services/curralpiquete.service';
import { LoteService } from 'src/app/services/lote.service';
import { RegimeengordaService } from 'src/app/services/regimeengorda.service';

@Component({
  selector: 'app-lote-create',
  templateUrl: './lote-create.component.html',
  styleUrls: ['./lote-create.component.css']
})
export class LoteCreateComponent implements OnInit {

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
    regimeEngorda: 0,
    descricaoRegimeEngorda: '',
    dataInicio: undefined,
    dataFinal: undefined,
  }

  lscurralPiquete: CurralPiquete[] = []
  lsregimeEngorda: RegimeEngorda[] = []

  descricao: FormControl = new FormControl(null, [Validators.required]);
  nroLote: FormControl = new FormControl(null, [Validators.required]);
  curralPiquete: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private loteService:          LoteService,
    private curralpiqueteService: CurralpiqueteService,
    private regimeemgordaService: RegimeengordaService,
    private toastService:         ToastrService,
    private router:               Router,
    ) { }

  ngOnInit(): void {
    this.findAllCurralPiquete();
    this.findAllRegimeEngorda();
  }

  create(): void {
    this.loteService.create(this.lote).subscribe(resposta => {
      this.toastService.success('Lote criado com sucesso', 'Novo Lote');
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
    this.regimeemgordaService.findAll().subscribe(resposta => {
      this.lsregimeEngorda = resposta;
   })
   }

  validaCampos(): boolean {
  return this.descricao.valid 
  && this.nroLote.valid 
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

