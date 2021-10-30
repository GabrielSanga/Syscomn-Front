import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Assinante } from 'src/app/models/assinante';
import { AssinanteService } from 'src/app/services/assinante.service';

@Component({
  selector: 'app-assinante-update',
  templateUrl: './assinante-update.component.html',
  styleUrls: ['./assinante-update.component.css']
})
export class AssinanteUpdateComponent implements OnInit {

  assinante: Assinante = {
    idAssinante:'',
    nomeAssinante:'',
    tipoPessoa:0,
    cpfCnpj:''
  }

  tipoPessoa: FormControl = new FormControl(null, [Validators.required]);

  constructor(private service: AssinanteService, private toast: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.assinante.idAssinante = this.route.snapshot.paramMap.get('idAssinante');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.assinante.idAssinante).subscribe(resposta => { this.assinante = resposta;})
  }

  update(): void {
    this.service.update(this.assinante).subscribe(() => {
        this.toast.success('Assinante Atualizado com Sucesso', 'Update');
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
