import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SexoAnimal } from 'src/app/models/sexoanimal';
import { SexoanimalService } from 'src/app/services/sexoanimal.service';

@Component({
  selector: 'app-sexoanimal-update',
  templateUrl: './sexoanimal-update.component.html',
  styleUrls: ['./sexoanimal-update.component.css']
})
export class SexoanimalUpdateComponent implements OnInit {

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

  
  

  update(): void {
    this.service.update(this.sexoanimal).subscribe(() => {
      this.toast.success('Sexo Animal atualizado com sucesso', 'Updade');
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
