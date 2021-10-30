import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EstadoAnimal } from 'src/app/models/estadoanimal';
import { EstadoanimalService } from 'src/app/services/estadoanimal.service';

@Component({
  selector: 'app-estadoanimal-delete',
  templateUrl: './estadoanimal-delete.component.html',
  styleUrls: ['./estadoanimal-delete.component.css']
})
export class EstadoanimalDeleteComponent implements OnInit {

  estadoanimal: EstadoAnimal = {
    idEstadoAnimal: '',
    descricao: ''
  }

  constructor(
    private service: EstadoanimalService,
    private toast:    ToastrService,
    private router:          Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.estadoanimal.idEstadoAnimal = this.route.snapshot.paramMap.get('idEstadoAnimal');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.estadoanimal.idEstadoAnimal).subscribe(resposta => {
    this.estadoanimal = resposta;
    } )
  }

  delete(): void {
    this.service.delete(this.estadoanimal.idEstadoAnimal).subscribe(() => {
      this.toast.success('Estado Animal Deletado com sucesso', 'Delete');
      this.router.navigate(['estadoanimal'])
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
