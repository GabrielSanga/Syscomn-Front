import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/models/fornecedor';
import { TipoFornecedor } from 'src/app/models/tipofornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { TipofornecedorService } from 'src/app/services/tipofornecedor.service';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent implements OnInit {

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
    status: ''
  }
  tipoFornecedor: TipoFornecedor[] = []

  constructor(private service: FornecedorService,
              private tipoFornecedorService: TipofornecedorService,
              private route: ActivatedRoute,
              private toast: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.fornecedor.idPessoa = this.route.snapshot.paramMap.get('idPessoa');
    this.findById();
    this.findAllTipoForncedor();
  }

  update(): void {
    this.service.update(this.fornecedor).subscribe(() => {
        this.toast.success('Fornecedor Atualizado com Sucesso', 'Update');
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

  findById(): void{
    this.service.findById(this.fornecedor.idPessoa).subscribe(resposta => { this.fornecedor = resposta;})
  }

  findAllTipoForncedor(): void{
    this.tipoFornecedorService.findAll().subscribe(resposta => {this.tipoFornecedor = resposta;})
  }

  retornaTipoPessoa(tipoPessoa: any): string {
    if(tipoPessoa == 0) {
      return 'Física'
    } else if(tipoPessoa == 1) {
      return 'Jurídica'
    } else {
      return ''
    }
  }

}
