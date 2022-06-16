import { Component, Directive, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurralPiquete } from 'src/app/models/curralpiquete';
import { Propriedade } from 'src/app/models/propriedade';
import { CurralpiqueteService } from 'src/app/services/curralpiquete.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-curralpiquete-create',
  templateUrl: './curralpiquete-create.component.html',
  styleUrls: ['./curralpiquete-create.component.css']
})

export class CurralpiqueteCreateComponent implements OnInit {

  curralpiquete: CurralPiquete = {
    idCurralPiquete: '',
    descricao: '',
    areaPasto:0,
    curralAltura: 0,
    curralLargura: 0,
    quantidadeCabecas: 0,
    propriedade: '',
    nomePropriedade: '',
    statusCurralPiquete: 0,
    tipoCurralPiquete: 0
  }

  isCurral: boolean = false
  isPiquete: boolean = true
  propriedades: Propriedade[] = []

  descricao: FormControl = new FormControl(null, [Validators.required]);
  propriedade: FormControl = new FormControl(null, [Validators.required]);
  tipoCurralPiquete: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private curralpiqueteService: CurralpiqueteService,
    private propriedadeService: PropriedadeService,
    private toastService:    ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.findAllPropriedades();
  }

  create(): void {
    this.curralpiqueteService.create(this.curralpiquete).subscribe(resposta => {
      this.toastService.success('Curral-Piquete criado com sucesso', 'Novo Curral-Piquete');
      this.router.navigate(['curralpiquete']);
    }, ex => {      
      this.toastService.error(ex.error.error);
    })
  }

  findAllPropriedades(): void {
   this.propriedadeService.findAll().subscribe(resposta => {
     this.propriedades = resposta;
  })
  }

  filterDashBoardActivated(event: MatRadioChange) {
    if(event.value == 0){
       this.isCurral = false;
       this.isPiquete = true;
    }else{
        this.isCurral = true;
        this.isPiquete = false;
    }
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

  validaCampos(): boolean {
    return this.descricao.valid 
    && this.propriedade.valid
   && this.tipoCurralPiquete.valid
  }

}

  
      