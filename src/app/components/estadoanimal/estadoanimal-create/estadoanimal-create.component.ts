import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EstadoAnimal } from 'src/app/models/estadoanimal';
import { EstadoanimalService } from 'src/app/services/estadoanimal.service';

@Component({
  selector: 'app-estadoanimal-create',
  templateUrl: './estadoanimal-create.component.html',
  styleUrls: ['./estadoanimal-create.component.css']
})

export class EstadoanimalCreateComponent implements OnInit {

  estadoanimal: EstadoAnimal = {
    idEstadoAnimal: '',
    descricao: ''
  }

  descricao: FormControl = new FormControl(null, Validators.required);

  constructor(
    private service: EstadoanimalService,
    private toast: ToastrService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    
  }

  create(): void {
    this.service.create(this.estadoanimal).subscribe(() => {
      this.toast.success('Estado Animal cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['estadoanimal'])
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
