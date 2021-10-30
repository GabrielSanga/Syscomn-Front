import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormBuilder } from '@angular/forms';


import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalArmazenamento } from 'src/app/models/localarmazenamento';
import { LocalarmazenamentoService } from 'src/app/services/localarmazenamento.service';

@Component({
  selector: 'app-localarmazenamento-delete',
  templateUrl: './localarmazenamento-delete.component.html',
  styleUrls: ['./localarmazenamento-delete.component.css']
})
export class LocalarmazenamentoDeleteComponent implements OnInit {

  localarmazenamento: LocalArmazenamento ={
    idLocalArmazenamento:'',
    descricao:''
  }

  

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

  
  

  delete(): void {
    this.service.delete(this.localarmazenamento.idLocalArmazenamento).subscribe(() => {
      this.toast.success('Local Armazenamento Deletado com sucesso', 'Delete');
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

}
