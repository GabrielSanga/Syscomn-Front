import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrdemProducao } from 'src/app/models/ordemProducao';
import { OrdemProducaoService } from 'src/app/services/ordem-producao.service';

@Component({
  selector: 'app-ordem-producao-create',
  templateUrl: './ordem-producao-create.component.html',
  styleUrls: ['./ordem-producao-create.component.css']
})
export class OrdemProducaoCreateComponent implements OnInit {

  ordemProducao: OrdemProducao = {
    idOrdemProducaoRacao: '',
    data: null,
    quantidadeProduzir: 0,
    valorOrdemProducao: 0,
    idFuncionario: 0
  }

  constructor(private service: OrdemProducaoService,
              private toast: ToastrService, 
              private router: Router) { }

  ngOnInit(): void {}

  create(): void {
    this.service.create(this.ordemProducao).subscribe(() => {
      this.toast.success('Ordem de Produção cadastrada com sucesso', 'Cadastro');
      this.router.navigate(['ordemProducao'])
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
