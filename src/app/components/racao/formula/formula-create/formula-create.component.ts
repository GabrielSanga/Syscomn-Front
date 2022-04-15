import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Formula } from 'src/app/models/formula';
import { MateriaPrima } from 'src/app/models/materiaprima';
import { Racao } from 'src/app/models/racao';
import { FormulaService } from 'src/app/services/formula.service';
import { MateriaprimaService } from 'src/app/services/materiaprima.service';
import { RacaoService } from 'src/app/services/racao.service';

@Component({
  selector: 'app-formula-create',
  templateUrl: './formula-create.component.html',
  styleUrls: ['./formula-create.component.css']
})
export class FormulaCreateComponent implements OnInit {

  formula: Formula = {
    idFormula: 0,
    idRacao: 0,
    descricaoRacao: '',
    idMateriaPrima: 0,
    descricaoMateriaPrima: '',
    quantidade: 0,
  }

  racoes: Racao[] = []
  materiasPrimas: MateriaPrima[] = []
  ELEMENT_DATA: Formula[] = []

  displayedColumns: string[] = ['idFormulaRacao', 'descricaoMateriaPrima', 'quantidade', 'acoes'];
  dataSource = new MatTableDataSource<Formula>(this.ELEMENT_DATA);

  constructor(private service: FormulaService,
              private serviceRacao: RacaoService,
              private serviceMateriaPrima: MateriaprimaService,
              private toast: ToastrService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formula.idRacao = this.route.snapshot.paramMap.get('idRacao');

    this.findAll();
    this.findByIdRacao();
    this.findAllMateriaPrima();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  create(): void {
    this.service.create(this.formula).subscribe(() => {
      this.toast.success('Máteria Prima Adicionada', 'Fórmula', {timeOut: 900});
      this.findAll();
      this.limpaFormula();
    }, ex => {
      if(ex.error.lstErrors) {
        ex.error.lstErrors.forEach(element => {
          this.toast.error(element.message);        
        });
      } else {
        this.toast.error(ex.error.message);  
      }
    })  
  }

  limpaFormula(){
    this.formula.quantidade = 0;
    this.formula.idMateriaPrima = 0;
  }

  findAll(){
    this.serviceRacao.findById(this.formula.idRacao).subscribe(resposta => {
      this.ELEMENT_DATA = resposta.lstMateriaPrima
      this.dataSource = new MatTableDataSource<Formula>(resposta.lstMateriaPrima);
      this.dataSource.paginator = this.paginator;
    })
  }

  findByIdRacao(): void{
    this.serviceRacao.findById(this.formula.idRacao).subscribe(resposta => {this.racoes = [resposta];})
  }
  
  findAllMateriaPrima(): void{
    this.serviceMateriaPrima.findAll().subscribe(resposta => {this.materiasPrimas = resposta;})
  }

  delete(idFormula: any): void{
    if(confirm("Deseja Realmente Deletar a Matéria Prima?")){
      this.deletarFormula(idFormula);
    }  
  }

  deletarFormula(idFormula) {
    this.service.delete(idFormula).subscribe(() => {
      this.toast.success('Matéria Prima Deletada', 'Fórmula', {timeOut: 900});
      this.findAll();
    }, ex => {
      if(ex.error.lstErrors) {
        ex.error.lstErrors.forEach(element => {
          this.toast.error(element.message);       
        });
      } else {
        this.toast.error(ex.error.message);      
      }
    })   
  }

}
