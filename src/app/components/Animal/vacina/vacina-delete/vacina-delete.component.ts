import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/models/fornecedor';
import { Vacina } from 'src/app/models/vacina';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { VacinaService } from 'src/app/services/vacina.service';

@Component({
  selector: 'app-vacina-delete',
  templateUrl: './vacina-delete.component.html',
  styleUrls: ['./vacina-delete.component.css']
})
export class VacinaDeleteComponent implements OnInit {

  vacina: Vacina = {
    idVacina: '',
    nomeVacina: '',
    fabricante: '',
    fornecedor: '',
    nomeFantasia: ''
  }

  fornecedores: Fornecedor[] = []

  constructor(
    private service: VacinaService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private fornecedorService: FornecedorService,
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

  delete(): void {
    this.service.delete(this.vacina.idVacina).subscribe(() => {
      this.toast.success('Vacina deletado com Sucesso!', 'Delete');
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
}
