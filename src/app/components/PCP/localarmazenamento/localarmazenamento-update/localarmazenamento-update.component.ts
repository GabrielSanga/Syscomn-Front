import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalArmazenamento } from 'src/app/models/localarmazenamento';
import { LocalarmazenamentoService } from 'src/app/services/localarmazenamento.service';

@Component({
  selector: 'app-localarmazenamento-update',
  templateUrl: './localarmazenamento-update.component.html',
  styleUrls: ['./localarmazenamento-update.component.css']
})
export class LocalarmazenamentoUpdateComponent implements OnInit {

  localarmazenamento: LocalArmazenamento ={
    idLocalArmazenamento:'',
    descricao:''
  }

  descricao: FormControl = new FormControl(null, Validators.required);
  
  constructor(
    private service: LocalarmazenamentoService,
    private toast:    ToastrService,
    private router:          Router,
    private route: ActivatedRoute,  
  ) { }

  ngOnInit(): void {
    this.localarmazenamento.idLocalArmazenamento = this.route.snapshot.paramMap.get('idLocalArmazenamento');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.localarmazenamento.idLocalArmazenamento).subscribe(resposta => {
    this.localarmazenamento = resposta;
    } )
  }
  
  update(): void {
    this.service.update(this.localarmazenamento).subscribe(() => {
      this.toast.success('Tipo Morte atualizado com sucesso', 'Updade');
      this.router.navigate(['localarmazenamento'])
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
