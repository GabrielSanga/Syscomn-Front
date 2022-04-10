import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TipoMorte } from 'src/app/models/tipomorte';
import { TipomorteService } from 'src/app/services/tipomorte.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tipomorte-create',
  templateUrl: './tipomorte-create.component.html',
  styleUrls: ['./tipomorte-create.component.css']
})
export class TipomorteCreateComponent implements OnInit {

  tipomorte: TipoMorte ={
    idTipoMorte:'',
    descricao:''
  }

  descricao: FormControl = new FormControl(null, Validators.required);

  constructor(
    private service: TipomorteService,
    private toast:    ToastrService,
    private router:          Router,
    
    
    
  ) { }

  ngOnInit(): void {
  }

  
  

  create(): void {
    this.service.create(this.tipomorte).subscribe(() => {
      this.toast.success('Tipo Morte cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['tipomorte'])
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

  validaCampos(): boolean{
    return this.descricao.valid
  }
  
  

}
