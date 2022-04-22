import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Racao } from 'src/app/models/racao';
import { RacaoService } from 'src/app/services/racao.service';

@Component({
  selector: 'app-racao-update',
  templateUrl: './racao-update.component.html',
  styleUrls: ['./racao-update.component.css']
})
export class RacaoUpdateComponent implements OnInit {

  racao: Racao ={
    idRacao:'',
    descricao:'',
    diasValidade: 0,
    unidade: ''
  } 

  constructor(private service: RacaoService,
              private toast: ToastrService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.racao.idRacao = this.route.snapshot.paramMap.get('idRacao');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.racao.idRacao).subscribe(resposta => {
    this.racao = resposta;
    } )
  }

  update(): void {
    this.service.update(this.racao).subscribe(() => {
      this.toast.success('Ração atualizada com sucesso', 'Updade');
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
