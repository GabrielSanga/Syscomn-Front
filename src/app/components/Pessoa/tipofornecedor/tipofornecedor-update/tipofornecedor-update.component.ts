import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoFornecedor } from 'src/app/models/tipofornecedor';
import { TipofornecedorService } from 'src/app/services/tipofornecedor.service';

@Component({
  selector: 'app-tipofornecedor-update',
  templateUrl: './tipofornecedor-update.component.html',
  styleUrls: ['./tipofornecedor-update.component.css']
})
export class TipofornecedorUpdateComponent implements OnInit {

  tipofornecedor: TipoFornecedor = {
    idTipoFornecedor: '',
    descricao: ''
  }

  descricao: FormControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);

  constructor(
    private service: TipofornecedorService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.tipofornecedor.idTipoFornecedor = this.route.snapshot.paramMap.get('idTipoFornecedor');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.tipofornecedor.idTipoFornecedor).subscribe(resposta => {
      this.tipofornecedor = resposta;
    })
  }

  update(): void {
    this.service.update(this.tipofornecedor).subscribe(() => {
      this.toast.success('Tipo de Fornecedor atualizado com Sucesso!', 'Update');
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