import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalArmazenamento } from 'src/app/models/localarmazenamento';
import { LocalarmazenamentoService } from 'src/app/services/localarmazenamento.service';

@Component({
  selector: 'app-localarmazenamento-create',
  templateUrl: './localarmazenamento-create.component.html',
  styleUrls: ['./localarmazenamento-create.component.css']
})

export class LocalarmazenamentoCreateComponent implements OnInit {

  localarmazenamento: LocalArmazenamento ={
    idLocalArmazenamento:'',
    descricao:''
  }

  descricao: FormControl = new FormControl(null, Validators.required);

  constructor(
    private service: LocalarmazenamentoService,
    private toast:    ToastrService,
    private router:          Router,
    
    
    
  ) { }

  ngOnInit(): void {
  }


  create(): void {
    this.service.create(this.localarmazenamento).subscribe(() => {
      this.toast.success('Local Armazenamento cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['localarmazenamento'])
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
