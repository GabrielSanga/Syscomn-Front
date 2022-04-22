import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Racao } from 'src/app/models/racao';
import { RacaoService } from 'src/app/services/racao.service';

@Component({
  selector: 'app-racao-create',
  templateUrl: './racao-create.component.html',
  styleUrls: ['./racao-create.component.css']
})
export class RacaoCreateComponent implements OnInit {

  racao: Racao = {
    idRacao: '',
    descricao: '',
    diasValidade: 0,
    unidade: ''
  }

  constructor(
    private service: RacaoService,
    private toast: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.racao).subscribe(() => {
      this.toast.success('Ração Cadastrada com Sucesso!', 'Cadastro');
      this.router.navigate(['racao'])
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
