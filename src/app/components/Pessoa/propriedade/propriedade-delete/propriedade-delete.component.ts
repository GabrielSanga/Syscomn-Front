import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Propriedade } from 'src/app/models/propriedade';
import { PropriedadeService } from 'src/app/services/propriedade.service';

@Component({
  selector: 'app-propriedade-delete',
  templateUrl: './propriedade-delete.component.html',
  styleUrls: ['./propriedade-delete.component.css']
})
export class PropriedadeDeleteComponent implements OnInit {

  propriedade: Propriedade = {
    idPropriedade: '',
    nomePropriedade: '',
    endereco: '',
    cnpj: '',
    status: ''
  }

  constructor(
    private service: PropriedadeService,
    private toast:    ToastrService,
    private router:          Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.propriedade.idPropriedade = this.route.snapshot.paramMap.get('idPropriedade');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.propriedade.idPropriedade).subscribe(resposta => {
    this.propriedade = resposta;
    } )
  }

  delete(): void {
    this.service.delete(this.propriedade.idPropriedade).subscribe(() => {
      this.toast.success('Propriedade deletada com sucesso', 'Delete');
      this.router.navigate(['propriedade'])
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
