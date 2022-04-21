import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/models/fornecedor';
import { Vacina } from 'src/app/models/vacina';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { VacinaService } from 'src/app/services/vacina.service';

@Component({
  selector: 'app-vacina-create',
  templateUrl: './vacina-create.component.html',
  styleUrls: ['./vacina-create.component.css']
})
export class VacinaCreateComponent implements OnInit {

  vacina: Vacina = {
    idVacina: '',
    nomeVacina: '',
    fabricante: '',
    fornecedor: '',
    nomeFantasia: ''
  }

  fornecedores: Fornecedor[] = []

  nomeVacina: FormControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  fabricante: FormControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);

  constructor(
    private service: VacinaService,
    private toast: ToastrService,
    private router: Router,
    private fornecedorService: FornecedorService,
  ) { }

  ngOnInit(): void {
    this.findAllFornecedores();
  }

  create(): void {
    this.service.create(this.vacina).subscribe(() => {
      this.toast.success('Vacina Cadastrado com Sucesso!', 'Cadastro');
      this.router.navigate(['vacina'])
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

  findAllFornecedores(): void {
    this.fornecedorService.findAll().subscribe(resposta => {
      this.fornecedores = resposta;
   })
   }

  validaCampos(): boolean {
    return this.nomeVacina.valid &&
    this.fabricante.valid
  }

}
