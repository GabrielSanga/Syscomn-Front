import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SexoAnimal } from 'src/app/models/sexoanimal';
import { SexoanimalService } from 'src/app/services/sexoanimal.service';

@Component({
  selector: 'app-sexoanimal-create',
  templateUrl: './sexoanimal-create.component.html',
  styleUrls: ['./sexoanimal-create.component.css']
})
export class SexoanimalCreateComponent implements OnInit {
  descricao: FormControl = new FormControl(null, Validators.required);

  sexoanimal: SexoAnimal ={
    idSexoAnimal:'',
    descricao:''
  }

  constructor(
    private service: SexoanimalService,
    private toast:    ToastrService,
    private router:          Router,  
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.sexoanimal).subscribe(() => {
      this.toast.success('Sexo Animal cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['sexoanimal'])
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
