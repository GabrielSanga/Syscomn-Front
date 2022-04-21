import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Assinante } from 'src/app/models/assinante';
import { Funcionario } from 'src/app/models/funcionario';
import { AssinanteService } from 'src/app/services/assinante.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario: Funcionario = {
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
    userName: '',
    senha: '',
    tipoPessoa: '',
    fotoPessoa: null,
    dtaAdmissao: null,
    dtaDemissao: null,
    NIS: '',
    status: 'A'
  }

  constructor(private service: FuncionarioService,
              private toast: ToastrService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.funcionario).subscribe(() => {
      this.toast.success('Funcionario cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['funcionario'])
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

}
