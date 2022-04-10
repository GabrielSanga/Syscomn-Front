import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegimeEngorda } from 'src/app/models/regimeengorda';
import { RegimeengordaService } from 'src/app/services/regimeengorda.service';

@Component({
  selector: 'app-regimeengorda-create',
  templateUrl: './regimeengorda-create.component.html',
  styleUrls: ['./regimeengorda-create.component.css']
})
export class RegimeengordaCreateComponent implements OnInit {

  regimeengorda: RegimeEngorda = {
    idRegimeEngorda: '',
    descricao: ''
  }

  descricao: FormControl = new FormControl(null, Validators.required);

  constructor(
    private service: RegimeengordaService,
    private toast: ToastrService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    
  }

  create(): void {
    this.service.create(this.regimeengorda).subscribe(() => {
      this.toast.success('Regime Engorda cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['regimeengorda'])
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

  validaCampos(): boolean{
    return this.descricao.valid
  }

}
