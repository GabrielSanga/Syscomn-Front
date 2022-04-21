import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoFornecedor } from 'src/app/models/tipofornecedor';
import { TipofornecedorService } from 'src/app/services/tipofornecedor.service';

@Component({
  selector: 'app-tipofornecedor-create',
  templateUrl: './tipofornecedor-create.component.html',
  styleUrls: ['./tipofornecedor-create.component.css']
})
export class TipofornecedorCreateComponent implements OnInit {

  tipofornecedor: TipoFornecedor = {
    idTipoFornecedor: '',
    descricao: ''
  }

  descricao: FormControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);

  constructor(
    private service: TipofornecedorService,
    private toast: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.tipofornecedor).subscribe(() => {
      this.toast.success('Tipo de Fornecedor Cadastrado com Sucesso!', 'Cadastro');
      this.router.navigate(['tipofornecedor'])
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

  validaCampos(): boolean {
    return this.descricao.valid
  }

}
