import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegimeEngorda } from 'src/app/models/regimeengorda';
import { RegimeengordaService } from 'src/app/services/regimeengorda.service';

@Component({
  selector: 'app-regimeengorda-update',
  templateUrl: './regimeengorda-update.component.html',
  styleUrls: ['./regimeengorda-update.component.css']
})
export class RegimeengordaUpdateComponent implements OnInit {

  regimeengorda: RegimeEngorda = {
    idRegimeEngorda: '',
    descricao: ''
  }

  descricao: FormControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);

  constructor(
    private service: RegimeengordaService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.regimeengorda.idRegimeEngorda = this.route.snapshot.paramMap.get('idRegimeEngorda');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.regimeengorda.idRegimeEngorda).subscribe(resposta => {
      this.regimeengorda = resposta;
    })
  }

  update(): void {
    this.service.update(this.regimeengorda).subscribe(() => {
      this.toast.success('Regime Engorda atualizado com Sucesso!', 'Update');
      this.router.navigate(['regimeengorda'])
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
