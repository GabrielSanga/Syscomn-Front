import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MateriaPrima } from 'src/app/models/materiaprima';
import { MateriaprimaService } from 'src/app/services/materiaprima.service';

@Component({
  selector: 'app-materiaprima-update',
  templateUrl: './materiaprima-update.component.html',
  styleUrls: ['./materiaprima-update.component.css']
})
export class MateriaprimaUpdateComponent implements OnInit {

  materiaprima: MateriaPrima = {
    idMateriaPrima:0,
    descricao:'',
    saldoEstoque:0,
    custoMateriaPrima:0,
    unidade:''
  }

  constructor(private service: MateriaprimaService, private toast: ToastrService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.materiaprima.idMateriaPrima = this.route.snapshot.paramMap.get('idMateriaPrima');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.materiaprima.idMateriaPrima).subscribe(resposta => { this.materiaprima = resposta;})
  }

  update(): void {
    this.service.update(this.materiaprima).subscribe(() => {
        this.toast.success('Matéria Prima Atualizada com Sucesso', 'Update');
        this.router.navigate(['materiaprima'])
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
