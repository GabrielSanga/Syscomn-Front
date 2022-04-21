import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TipoMorte } from 'src/app/models/tipomorte';
import { TipomorteService } from 'src/app/services/tipomorte.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tipomorte-delete',
  templateUrl: './tipomorte-delete.component.html',
  styleUrls: ['./tipomorte-delete.component.css']
})
export class TipomorteDeleteComponent implements OnInit {

  tipomorte: TipoMorte ={
    idTipoMorte:'',
    descricao:''
  }

  

  constructor(
    private service: TipomorteService,
    private toast:    ToastrService,
    private router:          Router,
    private route: ActivatedRoute,
    
    
    
  ) { }

  ngOnInit(): void {
    this.tipomorte.idTipoMorte = this.route.snapshot.paramMap.get('idTipoMorte');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.tipomorte.idTipoMorte).subscribe(resposta => {
    this.tipomorte = resposta;
    } )
  }

  
  

  delete(): void {
    this.service.delete(this.tipomorte.idTipoMorte).subscribe(() => {
      this.toast.success('Tipo Morte Deletado com sucesso', 'Delete');
      this.router.navigate(['tipomortes'])
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
