import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Raca } from 'src/app/models/raca';
import { RacaService } from 'src/app/services/raca.service';

@Component({
  selector: 'app-raca-update',
  templateUrl: './raca-update.component.html',
  styleUrls: ['./raca-update.component.css']
})
export class RacaUpdateComponent implements OnInit {

  raca: Raca = {
    idRaca: '',
    descricao: ''
  }

  descricao: FormControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);

  constructor(
    private service: RacaService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.raca.idRaca = this.route.snapshot.paramMap.get('idRaca');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.raca.idRaca).subscribe(resposta => {
      this.raca = resposta;
    })
  }

  update(): void {
    this.service.update(this.raca).subscribe(() => {
      this.toast.success('Raca atualizado com Sucesso!', 'Update');
      this.router.navigate(['raca'])
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