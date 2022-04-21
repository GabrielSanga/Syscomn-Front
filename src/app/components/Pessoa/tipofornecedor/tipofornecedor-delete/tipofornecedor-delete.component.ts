import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoFornecedor } from 'src/app/models/tipofornecedor';
import { TipofornecedorService } from 'src/app/services/tipofornecedor.service';

@Component({
  selector: 'app-tipofornecedor-delete',
  templateUrl: './tipofornecedor-delete.component.html',
  styleUrls: ['./tipofornecedor-delete.component.css']
})
export class TipofornecedorDeleteComponent implements OnInit {

  tipofornecedor: TipoFornecedor = {
    idTipoFornecedor: '',
    descricao: ''
  }

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

  delete(): void {
    this.service.delete(this.tipofornecedor.idTipoFornecedor).subscribe(() => {
      this.toast.success('Tipo de Fornecedor deletado com Sucesso!', 'Delete');
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
}