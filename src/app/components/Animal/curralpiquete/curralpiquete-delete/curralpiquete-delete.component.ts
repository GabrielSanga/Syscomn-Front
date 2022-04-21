import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurralPiquete } from 'src/app/models/curralpiquete';
import { Propriedade } from 'src/app/models/propriedade';
import { CurralpiqueteService } from 'src/app/services/curralpiquete.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';

@Component({
  selector: 'app-curralpiquete-delete',
  templateUrl: './curralpiquete-delete.component.html',
  styleUrls: ['./curralpiquete-delete.component.css']
})
export class CurralpiqueteDeleteComponent implements OnInit {

  curralpiquete: CurralPiquete = {
    idCurralPiquete: '',
    descricao: '',
    areaPasto:0,
    curralAltura: 0,
    curralLargura: 0,
    quantidadeCabecas: 0,
    propriedade: '',
    nomePropriedade: '',
    statusCurralPiquete: '',
    tipoCurralPiquete: 0
  }

  propriedades: Propriedade[] = []

  constructor(
    private curralpiqueteService: CurralpiqueteService,
    private propriedadeService: PropriedadeService,
    private toast:    ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
      this.curralpiquete.idCurralPiquete = this.route.snapshot.paramMap.get('idCurralPiquete');
      this.findById();
      this.findAllPropriedades();
    }
    
    findAllPropriedades(): void {
      this.propriedadeService.findAll().subscribe(resposta => {
        this.propriedades = resposta;
     })
     }

    findById(): void{
      this.curralpiqueteService.findById(this.curralpiquete.idCurralPiquete).subscribe(resposta => {
      this.curralpiquete = resposta;
      } )
    }

  delete(): void {
    this.curralpiqueteService.delete(this.curralpiquete.idCurralPiquete).subscribe(() => {
      this.toast.success('Curral-Piquete deetado com sucesso', 'Deletado');
      this.router.navigate(['curralpiquete'])
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

