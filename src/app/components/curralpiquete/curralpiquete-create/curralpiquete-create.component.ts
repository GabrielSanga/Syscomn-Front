import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurralPiquete } from 'src/app/models/curralpiquete';
import { Propriedade } from 'src/app/models/propriedade';
import { CurralpiqueteService } from 'src/app/services/curralpiquete.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';

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

  propriedades: Propriedade[] = []

  descricao: FormControl = new FormControl(null, [Validators.required]);
  propriedade: FormControl = new FormControl(null, [Validators.required]);
  tipoCurralPiquete: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private curralpiqueteService: CurralpiqueteService,
    private propriedadeService: PropriedadeService,
    private toastService:    ToastrService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.findAllPropriedades();
  }

  create(): void {
    this.curralpiqueteService.create(this.curralpiquete).subscribe(resposta => {
      this.toastService.success('Curral-Piquete criado com sucesso', 'Novo Curral-Piquete');
      this.router.navigate(['curralpiquete']);
    }, ex => {
      console.log(ex);
      
      this.toastService.error(ex.error.error);
    })
  }

  findAllPropriedades(): void {
   this.propriedadeService.findAll().subscribe(resposta => {
     this.propriedades = resposta;
  })
  }

  validaCampos(): boolean {
    return this.descricao.valid 
    && this.propriedade.valid
   && this.tipoCurralPiquete.valid
  }

}

  