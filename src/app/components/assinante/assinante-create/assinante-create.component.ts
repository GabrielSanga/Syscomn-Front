import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Assinante } from 'src/app/models/assinante';
import { AssinanteService } from 'src/app/services/assinante.service';

@Component({
  selector: 'app-assinante-create',
  templateUrl: './assinante-create.component.html',
  styleUrls: ['./assinante-create.component.css']
})
export class AssinanteCreateComponent implements OnInit {

  assinante: Assinante = {
    idAssinante:'',
    nomeAssinante:'',
    tipoPessoa:0,
    cpfCnpj:''
  }

  nomeAssinante: FormControl = new FormControl(null, Validators.required);
  tipoPessoa: FormControl = new FormControl(null, Validators.required);
  cpfCnpj: FormControl = new FormControl(null, Validators.required);

  constructor(private service: AssinanteService, private toast: ToastrService, private router: Router) { }

  ngOnInit(): void {}

  create(): void {
    this.service.create(this.assinante).subscribe(() => {
      this.toast.success('Assinante cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['assinante'])
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
    return this.nomeAssinante.valid && this.cpfCnpj.valid
  }

}
