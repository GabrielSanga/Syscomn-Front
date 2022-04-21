import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Propriedade } from 'src/app/models/propriedade';
import { PropriedadeService } from 'src/app/services/propriedade.service';

@Component({
  selector: 'app-propriedade-update',
  templateUrl: './propriedade-update.component.html',
  styleUrls: ['./propriedade-update.component.css']
})
export class PropriedadeUpdateComponent implements OnInit {
 
  propriedade: Propriedade ={
    idPropriedade:'',
    nomePropriedade:'',
    endereco:'',
    cnpj:'',
    status: ''
  }

  nomePropriedade: FormControl = new FormControl(null, Validators.minLength(3));
  endereco: FormControl = new FormControl(null, Validators.required);
  cnpj: FormControl = new FormControl(null, Validators.required);
  status: FormControl = new FormControl(null, Validators.required);
 
  constructor( 
    private service: PropriedadeService,
    private toast:    ToastrService,
    private router:          Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.propriedade.idPropriedade = this.route.snapshot.paramMap.get('idPropriedade');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.propriedade.idPropriedade).subscribe(resposta => {
      this.propriedade = resposta;
    })
  }
  
  update(): void {
    this.service.update(this.propriedade).subscribe(() => {
      this.toast.success('Propriedade atualizada com sucesso', 'Updade');
      this.router.navigate(['propriedade'])
    }, ex => {
      if (ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);

        });
      } else {
        this.toast.error(ex.error.message);

      }
    })
  }

  validaCampos(): boolean{
    return this.nomePropriedade.valid 
    && this.endereco.valid 
    && this.cnpj.valid
    && this.status.valid
  }

}
