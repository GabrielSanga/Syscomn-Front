import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { OrdemProducao } from 'src/app/models/ordemProducao';
import { OrdemProducaoService } from 'src/app/services/ordem-producao.service';

@Component({
  selector: 'app-ordem-producao-list',
  templateUrl: './ordem-producao-list.component.html',
  styleUrls: ['./ordem-producao-list.component.css']
})
export class OrdemProducaoListComponent implements OnInit {

  ELEMENT_DATA: OrdemProducao[] = []

  displayedColumns: string[] = ['idOrdemProducaoRacao', 'descricao', 'data', 'valorOrdemProducao', 'status', 'acoes'];
  dataSource = new MatTableDataSource<OrdemProducao>(this.ELEMENT_DATA);

  constructor(private service: OrdemProducaoService,
              private toast: ToastrService) { }

  ngOnInit(): void {this.findAll();}

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<OrdemProducao>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  retornaDataFormata(data: Date): String{
    let dta = new Date(data)
  
    dta.setHours(24);
  
    return dta.toLocaleDateString("pt-br");
  }

  retornaStatus(status: number): string{
    switch (status){
      case 0:
        return "Pronto";
      case 1:
        return"Liberado";
      case 2:
        return "Andamento";
      case 3:
        return "Suspenso";
      case 4:
        return "Cancelado";
       default:
        return "Status";
    }   
  }

}

