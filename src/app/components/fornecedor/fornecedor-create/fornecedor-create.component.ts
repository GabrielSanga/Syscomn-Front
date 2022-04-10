import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/models/fornecedor';
import { TipoFornecedor } from 'src/app/models/tipofornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { TipofornecedorService } from 'src/app/services/tipofornecedor.service';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {

  fornecedor: Fornecedor = {
    idPessoa: '',
    nomePessoa: '',
    cpfCnpjPessoa: '',
    telefonePessoa: '',
    emailPessoa: '',
    dtaNascimentoPessoa: null,
    enderecoPessoa: '',
    statusPessoa: 'A',
    rgPessoa: '',
    observacaoPessoa: '',
    userName: '1234567890',
    senha: '1234567890',
    tipoPessoa: '',
    fotoPessoa: null,
    idTipoFornecedor: '',
    descricaoTipoFornecedor: '',
    razaoSocial: '',
    nomeFantasia: '',
    inscricaoEstadual: '',
    cnae: '',
    status: 'A'
  }

  tipoFornecedor: TipoFornecedor[] = []

  constructor(private service: FornecedorService,
              private tipoFornecedorService: TipofornecedorService,
              private toast: ToastrService, 
              private router: Router) { }

  ngOnInit(): void {
    this.findAllTipoForncedor();
  }

  create(): void {
    this.service.create(this.fornecedor).subscribe(() => {
      this.toast.success('Forncedor cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['fornecedor'])
    }, ex => {
      if(ex.error.lstErrors) {
        ex.error.lstErrors.forEach(element => {
          this.toast.error(element.message);        
        });
      } else {
        this.toast.error(ex.error.message);  
      }
    })  
  }

  findAllTipoForncedor(): void{
    this.tipoFornecedorService.findAll().subscribe(resposta => {this.tipoFornecedor = resposta;})
  }
}
