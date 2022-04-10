import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Raca } from 'src/app/models/raca';
import { RacaService } from 'src/app/services/raca.service';

@Component({
  selector: 'app-raca-create',
  templateUrl: './raca-create.component.html',
  styleUrls: ['./raca-create.component.css']
})
export class RacaCreateComponent implements OnInit {

  raca: Raca = {
    idRaca: '',
    descricao: ''
  }

  descricao: FormControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);

  constructor(
    private service: RacaService,
    private toast: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.raca).subscribe(() => {
      this.toast.success('Raca Cadastrado com Sucesso!', 'Cadastro');
      this.router.navigate(['racas'])
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

  validaCampos(): boolean {
    return this.descricao.valid
  }

}
