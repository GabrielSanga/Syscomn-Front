import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SexoAnimal } from 'src/app/models/sexoanimal';
import { SexoanimalService } from 'src/app/services/sexoanimal.service';

@Component({
  selector: 'app-sexoanimal-delete',
  templateUrl: './sexoanimal-delete.component.html',
  styleUrls: ['./sexoanimal-delete.component.css']
})
export class SexoanimalDeleteComponent implements OnInit {

  sexoanimal: SexoAnimal ={
    idSexoAnimal:'',
    descricao:''
  }

  

  constructor(
    private service: SexoanimalService,
    private toast:    ToastrService,
    private router:          Router,
    private route: ActivatedRoute,
    
    
    
  ) { }

  ngOnInit(): void {
    this.sexoanimal.idSexoAnimal = this.route.snapshot.paramMap.get('idSexoAnimal');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.sexoanimal.idSexoAnimal).subscribe(resposta => {
    this.sexoanimal = resposta;
    } )
  }

  
  

  delete(): void {
    this.service.delete(this.sexoanimal.idSexoAnimal).subscribe(() => {
      this.toast.success('Sexo Animal Deletado com sucesso', 'Delete');
      this.router.navigate(['sexoanimal'])
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
