import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MateriaPrima } from 'src/app/models/materiaprima';
import { MateriaprimaService } from 'src/app/services/materiaprima.service';

@Component({
  selector: 'app-materiaprima-create',
  templateUrl: './materiaprima-create.component.html',
  styleUrls: ['./materiaprima-create.component.css']
})
export class MateriaprimaCreateComponent implements OnInit {

  materiaprima: MateriaPrima ={
    idMateriaPrima:'',
    descricao:'',
    saldoEstoque:0,
    custoMateriaPrima:0.00,
    unidade:'',
  }

  descricao: FormControl = new FormControl(null, Validators.required);
  saldoEstoque: FormControl = new FormControl(null, Validators.required);
  custoMateriaPrima: FormControl = new FormControl(null, Validators.required);
  unidade: FormControl = new FormControl(null, Validators.required);

  constructor(private service: MateriaprimaService, private toast: ToastrService, private router: Router) { }

  ngOnInit(): void {}
  
  create(): void {
    this.service.create(this.materiaprima).subscribe(() => {
      this.toast.success('Matéria Prima cadastrada com sucesso', 'Cadastro');
      this.router.navigate(['materiaprima'])
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
    return this.descricao.valid && this.saldoEstoque.valid && this.unidade.valid
  }

}
