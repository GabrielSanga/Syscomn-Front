import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EstadoAnimal } from 'src/app/models/estadoanimal';
import { EstadoanimalService } from 'src/app/services/estadoanimal.service';
 
@Component({
  selector: 'app-estadoanimal-update',
  templateUrl: './estadoanimal-update.component.html',
  styleUrls: ['./estadoanimal-update.component.css']
})
export class EstadoanimalUpdateComponent implements OnInit {

  estadoanimal: EstadoAnimal ={
    idEstadoAnimal:'',
    descricao:''
  }
  descricao: FormControl = new FormControl(null, Validators.required);

  constructor( 
    private service: EstadoanimalService,
    private toast:    ToastrService,
    private router:          Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.estadoanimal.idEstadoAnimal = this.route.snapshot.paramMap.get('idEstadoAnimal');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.estadoanimal.idEstadoAnimal).subscribe(resposta => {
      this.estadoanimal = resposta;
    })
  }
  
  update(): void {
    this.service.update(this.estadoanimal).subscribe(() => {
      this.toast.success('Estado Animal atualizado com sucesso', 'Updade');
      this.router.navigate(['estadoanimal'])
    }, ex => {
      if (ex.error.errors) {
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
