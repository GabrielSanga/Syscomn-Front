import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurralPiquete } from 'src/app/models/curralpiquete';
import { Propriedade } from 'src/app/models/propriedade';
import { CurralpiqueteService } from 'src/app/services/curralpiquete.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';

@Component({
  selector: 'app-curralpiquete-update',
  templateUrl: './curralpiquete-update.component.html',
  styleUrls: ['./curralpiquete-update.component.css']
})
export class CurralpiqueteUpdateComponent implements OnInit {

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

  isCurral: boolean
  isPiquete: boolean 
  propriedades: Propriedade[] = []

  descricao: FormControl = new FormControl(null, [Validators.required]);
  propriedade: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private curralpiqueteService: CurralpiqueteService,
    private propriedadeService: PropriedadeService,
    private toastService:    ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.curralpiquete.idCurralPiquete = this.route.snapshot.paramMap.get('idCurralPiquete');
    this.findById();
    this.findAllPropriedades();
  }

  findById(): void {
    this.curralpiqueteService.findById(this.curralpiquete.idCurralPiquete).subscribe(resposta => {
      this.curralpiquete = resposta;
      if (this.curralpiquete.tipoCurralPiquete == 0){
        this.isCurral = false
        this.isPiquete = true
      }else{
        this.isCurral = true
        this.isPiquete = false
      }
    })
  }

  update(): void {
    this.curralpiqueteService.update(this.curralpiquete).subscribe(resposta => {
      this.toastService.success('Curral Piquete atualizado com sucesso', 'Atualizar Curral Piquete');
      this.router.navigate(['curralpiquete']);
    }, ex => {
      this.toastService.error(ex.error.error);
      console.log(this.curralpiquete.tipoCurralPiquete);
    })
  }

  findAllPropriedades(): void {
    this.propriedadeService.findAll().subscribe(resposta => {
      this.propriedades = resposta;
   })
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
  }

  retornaStatus(statusCurralPiquete: number): string{
    switch (statusCurralPiquete){
      case 0:
        return "Aberto";
      case 1:
        return"Fechado";
      case 2:
        return "Encerrado";
        default:
        return "statusCurralPiquete";
    }   
    }   
  

}
