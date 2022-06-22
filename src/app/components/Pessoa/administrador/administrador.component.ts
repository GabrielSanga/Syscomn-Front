import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';
import { AssinanteService } from 'src/app/services/assinante.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  administrador: Administrador = {
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
    status: 'A'
  }

  isUpdated: boolean = false;

  constructor(private service: AdministradorService,
              private toast: ToastrService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.administrador.idPessoa = this.route.snapshot.paramMap.get('idPessoa');

    if (this.administrador.idPessoa > 0){
      this.findById();
      this.isUpdated = true;
    }
  }

  findById(): void{
    this.service.findById(this.administrador.idPessoa).subscribe(resposta => {
        this.administrador = resposta;
      } )
  }

  create(): void {
    this.service.create(this.administrador).subscribe(() => {
      this.toast.success('Cadastro realizado com sucesso!', 'Cadastro');
      this.router.navigate(['login']);
    }, ex => {
      if(ex.error.lstErrors) {
        ex.error.lstErrors.forEach(element => { this.toast.error(element.message); });
      } else {
        this.toast.error(ex.error.message);  
      }
    })  
  }

  update(): void {
    this.service.update(this.administrador).subscribe(() => {
      this.toast.success('Atualização realizada com sucesso!', 'Alterar');
      this.router.navigate(['administrador/list']);
    }, ex => {
      if(ex.error.lstErrors) {
        ex.error.lstErrors.forEach(element => { this.toast.error(element.message); });
      } else {
        this.toast.error(ex.error.message);  
      }
    })  
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
