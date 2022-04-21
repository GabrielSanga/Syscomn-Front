import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/models/fornecedor';
import { Vacina } from 'src/app/models/vacina';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { VacinaService } from 'src/app/services/vacina.service';

@Component({
  selector: 'app-vacina-update',
  templateUrl: './vacina-update.component.html',
  styleUrls: ['./vacina-update.component.css']
})
export class VacinaUpdateComponent implements OnInit {

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

  constructor(private service: VacinaService,
              private toast: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
              private fornecedorService: FornecedorService
              ) { }

  ngOnInit(): void {
    this.vacina.idVacina = this.route.snapshot.paramMap.get('idVacina');
    this.findById();
    this.findAllFornecedores();
  }

  findAllFornecedores(): void {
    this.fornecedorService.findAll().subscribe(resposta => {
      this.fornecedores = resposta;
   })
   }

  findById(): void {
    this.service.findById(this.vacina.idVacina).subscribe(resposta => {
      this.vacina = resposta;
    })
  }

  update(): void {
    this.service.update(this.vacina).subscribe(() => {
      this.toast.success('Vacina atualizado com Sucesso!', 'Update');
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

  validaCampos(): boolean {
    return this.nomeVacina.valid &&
    this.fabricante.valid
  }

}
