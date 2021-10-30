import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Assinante } from 'src/app/models/assinante';
import { AssinanteService } from 'src/app/services/assinante.service';

@Component({
  selector: 'app-assinante-list',
  templateUrl: './assinante-list.component.html',
  styleUrls: ['./assinante-list.component.css']
})
export class AssinanteListComponent implements OnInit {

  ELEMENT_DATA: Assinante[] = []

  displayedColumns: string[] = ['idAssinante', 'nomeAssinante', 'tipoPessoa', 'cpfCnpj', 'acoes'];
  dataSource = new MatTableDataSource<Assinante>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: AssinanteService) {}

  ngOnInit(): void {this.findAll()}

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Assinante>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retornaTipoPessoa(tipoPessoa: any): string {
    if(tipoPessoa == 0) {
      return 'Física'
    } else if(tipoPessoa == 1) {
      return 'Jurídica'
    } else {
      return ''
    }
  }

}
