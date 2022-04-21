import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Assinante } from 'src/app/models/assinante';
import { AssinanteService } from 'src/app/services/assinante.service';

@Component({
  selector: 'app-assinante-delete',
  templateUrl: './assinante-delete.component.html',
  styleUrls: ['./assinante-delete.component.css']
})
export class AssinanteDeleteComponent implements OnInit {

  assinante: Assinante = {
    idAssinante:0,
    nomeAssinante:'',
    tipoPessoa:null,
    cpfCnpj:''
  }

  constructor(private service: AssinanteService, private toast: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.assinante.idAssinante = this.route.snapshot.paramMap.get('idAssinante');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.assinante.idAssinante).subscribe(resposta => { this.assinante = resposta;})
  }

  delete(): void {
    this.service.delete(this.assinante.idAssinante).subscribe(() => {
      this.toast.success('Assinante Deletado com sucesso', 'Delete');
      this.router.navigate(['assinante'])
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
