import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegimeEngorda } from 'src/app/models/regimeengorda';
import { RegimeengordaService } from 'src/app/services/regimeengorda.service';

@Component({
  selector: 'app-regimeengorda-delete',
  templateUrl: './regimeengorda-delete.component.html',
  styleUrls: ['./regimeengorda-delete.component.css']
})
export class RegimeengordaDeleteComponent implements OnInit {

  regimeengorda: RegimeEngorda = {
    idRegimeEngorda: '',
    descricao: ''
  }

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

  delete(): void {
    this.service.delete(this.regimeengorda.idRegimeEngorda).subscribe(() => {
      this.toast.success('Regime Engorda deletado com Sucesso!', 'Delete');
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
}
